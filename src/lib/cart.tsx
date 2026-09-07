import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { products, type Product } from "./products";

type Line = { slug: string; qty: number };

type CartCtx = {
  lines: Line[];
  items: { product: Product; qty: number }[];
  count: number;
  subtotal: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const KEY = "shotsickles-cart";

let lines: Line[] = [];
let hydrated = false;
const listeners = new Set<() => void>();

function isLine(value: unknown): value is Line {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<Line>;
  return typeof candidate.slug === "string" && typeof candidate.qty === "number" && candidate.qty > 0;
}

function updateLines(next: Line[] | ((current: Line[]) => Line[])) {
  lines = typeof next === "function" ? next(lines) : next;
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    // Storage can be unavailable during server rendering or in private browsing.
  }
  snapshot = createSnapshot();
  listeners.forEach((listener) => listener());
}

function createSnapshot(): CartCtx {
  const items = lines.flatMap((line) => {
    const product = products.find((candidate) => candidate.slug === line.slug);
    return product ? [{ product, qty: line.qty }] : [];
  });

  return {
    lines,
    items,
    count: items.reduce((sum, item) => sum + item.qty, 0),
    subtotal: items.reduce((sum, item) => sum + item.qty * item.product.price, 0),
    add: (slug, qty = 1) =>
      updateLines((current) => {
        const found = current.find((line) => line.slug === slug);
        return found
          ? current.map((line) => (line.slug === slug ? { ...line, qty: line.qty + qty } : line))
          : [...current, { slug, qty }];
      }),
    setQty: (slug, qty) =>
      updateLines((current) =>
        qty <= 0
          ? current.filter((line) => line.slug !== slug)
          : current.map((line) => (line.slug === slug ? { ...line, qty } : line)),
      ),
    remove: (slug) => updateLines((current) => current.filter((line) => line.slug !== slug)),
    clear: () => updateLines([]),
  };
}

let snapshot = createSnapshot();
const serverSnapshot = createSnapshot();

function hydrateCart() {
  if (hydrated) return;
  hydrated = true;
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    updateLines(Array.isArray(parsed) ? parsed.filter(isLine) : []);
  } catch {
    updateLines([]);
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    hydrateCart();
  }, []);
  return children;
}

export function useCart(): CartCtx {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => snapshot,
    () => serverSnapshot,
  );
}
