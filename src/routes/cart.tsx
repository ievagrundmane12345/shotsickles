import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { eur, products } from "@/lib/products";
import { Stars } from "@/components/site/Stars";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Shotsickles" },
      { name: "description", content: "Review your frozen cocktail order, add a few more pops and check out." },
      { property: "og:title", content: "Your Cart — Shotsickles" },
      { property: "og:description", content: "Review your frozen cocktail order and check out." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, setQty, remove, add } = useCart();
  const shipping = subtotal >= 40 || subtotal === 0 ? 0 : 4.9;
  const inCart = new Set(items.map((i) => i.product.slug));
  const crossSell = products.filter((p) => !inCart.has(p.slug)).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="display-xl text-[clamp(2.4rem,6vw,4.5rem)]">Your cart</h1>

      {items.length === 0 ? (
        <div className="mt-10">
          <p className="text-lg text-muted-foreground">Nothing frozen yet.</p>
          <Link
            to="/shop"
            className="mt-6 inline-block rounded-sm bg-ink px-8 py-4 font-display text-lg text-background"
          >
            Fill the freezer
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <ul className="divide-y divide-border border-y border-border">
              {items.map(({ product, qty }) => (
                <li key={product.slug} className="flex gap-4 py-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-24 w-24 rounded-sm object-cover"
                  />
                  <div className="flex-1">
                    <Link to="/product/$slug" params={{ slug: product.slug }} className="text-lg font-semibold">
                      {product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {product.units} {product.units === 1 ? "pop" : "pops"} · 10% ABV
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex items-center rounded-sm border border-ink/30">
                        <button className="px-3 py-1.5" onClick={() => setQty(product.slug, qty - 1)}>
                          −
                        </button>
                        <span className="w-8 text-center text-sm">{qty}</span>
                        <button className="px-3 py-1.5" onClick={() => setQty(product.slug, qty + 1)}>
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(product.slug)}
                        className="text-xs uppercase tracking-widest text-muted-foreground underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="font-display text-xl">{eur(product.price * qty)}</p>
                </li>
              ))}
            </ul>

            {crossSell.length > 0 ? (
              <section className="mt-12 rounded-sm border border-ink/15 bg-sand p-6">
                <h2 className="text-2xl">Add one more before it ships</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Shipping frozen costs the same whether the box is half full or packed.
                </p>
                <ul className="mt-6 space-y-4">
                  {crossSell.map((p) => (
                    <li key={p.slug} className="flex items-center gap-4 rounded-sm bg-card p-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="h-16 w-16 rounded-sm object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{p.name}</p>
                        <div className="flex items-center gap-2">
                          <Stars size={12} />
                          <span className="text-xs text-muted-foreground">{p.reviews}</span>
                        </div>
                      </div>
                      <p className="font-display text-lg">{eur(p.price)}</p>
                      <button
                        onClick={() => add(p.slug)}
                        className="rounded-sm border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-widest"
                      >
                        Add
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="h-max rounded-sm border border-ink/15 bg-card p-6">
            <h2 className="text-2xl">Summary</h2>
            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>{eur(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Frozen shipping</dt>
                <dd>{shipping === 0 ? "Free" : eur(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 font-display text-2xl">
                <dt>Total</dt>
                <dd>{eur(subtotal + shipping)}</dd>
              </div>
            </dl>
            {subtotal < 40 ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Add {eur(40 - subtotal)} more for free frozen shipping.
              </p>
            ) : null}
            <Link
              to="/checkout"
              className="mt-6 block rounded-sm bg-primary px-6 py-4 text-center font-display text-lg text-primary-foreground"
            >
              Checkout
            </Link>
            <p className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
              ID checked on delivery. 18+ only.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
