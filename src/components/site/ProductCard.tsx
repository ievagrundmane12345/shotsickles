import { Link } from "@tanstack/react-router";
import { eur, type Product } from "@/lib/products";
import { Stars } from "./Stars";
import { useCart } from "@/lib/cart";

const tintBg: Record<Product["tint"], string> = {
  lime: "bg-lime/20",
  pineapple: "bg-pineapple/25",
  berry: "bg-berry/15",
  gold: "bg-gold/25",
};

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const save = product.compareAt ? Math.round((1 - product.price / product.compareAt) * 100) : 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-ink/15 bg-card">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className={`relative block overflow-hidden ${tintBg[product.tint]}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {save > 0 ? (
          <span className="absolute left-3 top-3 rounded-sm bg-ink px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-background">
            Save {save}%
          </span>
        ) : null}
        {product.kind === "mystery" ? (
          <span className="absolute right-3 top-3 rounded-sm bg-berry px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-background">
            Limited
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <Stars />
          <span className="text-xs text-muted-foreground">{product.reviews} reviews</span>
        </div>
        <h3 className="mt-2 text-xl">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.short}</p>
        <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
          {product.units} {product.units === 1 ? "pop" : "pops"} · 10% ABV
        </p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <p className="font-display text-2xl">
            {eur(product.price)}
            {product.compareAt ? (
              <span className="ml-2 font-sans text-sm font-medium text-muted-foreground line-through">
                {eur(product.compareAt)}
              </span>
            ) : null}
          </p>
          <button
            onClick={() => add(product.slug)}
            className="rounded-sm bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
