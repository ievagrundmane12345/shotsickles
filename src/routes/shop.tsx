import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Frozen Cocktail Pops — Shotsickles" },
      {
        name: "description",
        content:
          "Buy Shotsickles frozen cocktails: Mojito, Piña Colada and Strawberry Daiquiri from €2.99, bundles up to 28% off, plus the limited edition Mystery Box.",
      },
      { property: "og:title", content: "Shop Frozen Cocktail Pops — Shotsickles" },
      { property: "og:description", content: "Singles, bundles and the limited edition Mystery Box. 10% ABV." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const singles = products.filter((p) => p.kind === "single");
  const bundles = products.filter((p) => p.kind === "bundle");
  const mystery = products.filter((p) => p.kind === "mystery");

  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="display-xl text-[clamp(2.6rem,7vw,5.5rem)]">The freezer</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Every pop is 100 ml at 10% ABV. Shipped frozen in insulated liners across Latvia. Free shipping over €40.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl">Single flavours — €2.99</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {singles.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl">Bundles — the more you freeze, the less you pay</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bundles.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-sm border border-ink/15 bg-sand p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-berry">Limited edition</p>
        <h2 className="mt-3 text-3xl">The Mystery Box</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Eight pops, mix unknown until you open it — including test-kitchen batches that never make the shop.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mystery.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
