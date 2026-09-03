import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { bySlug, eur, products } from "@/lib/products";
import { Stars } from "@/components/site/Stars";
import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = bySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — Shotsickles" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Shotsickles Frozen Cocktail` },
        { name: "description", content: `${p.short} ${p.units} pop(s) at 10% ABV for ${eur(p.price)}.` },
        { property: "og:title", content: `${p.name} — Shotsickles` },
        { property: "og:description", content: p.short },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <Link to="/shop" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        ← Back to shop
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          className="w-full rounded-sm border border-ink/15 object-cover"
        />

        <div>
          <h1 className="text-[clamp(2.4rem,5vw,4rem)]">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <Stars size={16} />
            <span className="text-sm text-muted-foreground">
              5.0 · {product.reviews} reviews
            </span>
          </div>
          <p className="mt-6 font-display text-4xl">
            {eur(product.price)}
            {product.compareAt ? (
              <span className="ml-3 font-sans text-lg font-medium text-muted-foreground line-through">
                {eur(product.compareAt)}
              </span>
            ) : null}
          </p>
          <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
            {product.units} {product.units === 1 ? "pop" : "pops"} · 100 ml each · 10% ABV
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-sm border border-ink">
              <button className="px-4 py-3" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">
                −
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button className="px-4 py-3" onClick={() => setQty((q) => q + 1)} aria-label="Increase">
                +
              </button>
            </div>
            <button
              onClick={() => {
                add(product.slug, qty);
                setAdded(true);
              }}
              className="rounded-sm bg-ink px-8 py-4 font-display text-lg tracking-wide text-background transition-transform hover:-translate-y-0.5"
            >
              Add to cart — {eur(product.price * qty)}
            </button>
            {added ? (
              <Link to="/cart" className="text-xs font-semibold uppercase tracking-widest underline underline-offset-4">
                Added ✓ Go to cart
              </Link>
            ) : null}
          </div>

          <ul className="mt-10 space-y-3 text-lg leading-relaxed">
            {product.copy.map((c) => (
              <li key={c.bold}>
                <strong>{c.bold}</strong>
                {c.rest}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-sm border border-ink/15 bg-sand p-6">
            <h2 className="text-xl">Nutrition, ingredients &amp; ABV</h2>
            <dl className="mt-4 space-y-2 text-sm">
              {[
                ["Alcohol", product.nutrition.abv],
                ["Serving size", product.nutrition.volume],
                ["Alcohol units", product.nutrition.servings],
                ["Energy", product.nutrition.energy],
                ["Of which sugars", product.nutrition.sugar],
                ["Ingredients", product.nutrition.ingredients],
                ["Allergens", product.nutrition.allergens],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-border pb-2 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
              Adults only. Not for sale to persons under 18. Do not drive after consuming.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl">Goes well with</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
