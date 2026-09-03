import { createFileRoute, Link } from "@tanstack/react-router";
import { products, eur } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Stars } from "@/components/site/Stars";
import heroAd from "@/assets/up-15-56-50.jpeg.asset.json";
import gridAd from "@/assets/up-16-00-49.jpeg.asset.json";
import strawberryGuy from "@/assets/up-16-10-44.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shotsickles — Freeze the Shot, Skip the Chaser" },
      {
        name: "description",
        content:
          "Alcoholic frozen cocktail pops at 10% ABV. Mojito, Piña Colada and Strawberry Daiquiri from €2.99, shipped frozen across Latvia.",
      },
      { property: "og:title", content: "Shotsickles — Freeze the Shot, Skip the Chaser" },
      {
        property: "og:description",
        content: "Alcoholic frozen cocktail pops at 10% ABV. The curated frozen cocktail experience.",
      },
      { property: "og:image", content: heroAd.url },
      { name: "twitter:image", content: heroAd.url },
    ],
  }),
  component: Home,
});

const marquee = [
  "10% ABV",
  "MOJITO",
  "SKIP THE CHASER",
  "PIÑA COLADA",
  "MELT RESPONSIBLY",
  "STRAWBERRY DAIQUIRI",
  "ADULTS ONLY",
];

function Home() {
  const singles = products.filter((p) => p.kind === "single");

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/15">
        <div className="pointer-events-none absolute -right-32 top-10 h-[32rem] w-[32rem] rounded-full bg-lime/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-berry/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="rise-in">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              The curated frozen cocktail experience
            </p>
            <h1 className="display-xl mt-6 text-[clamp(3rem,9vw,7.5rem)]">
              Freeze the shot,
              <br />
              skip the <span className="text-berry">chaser.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              Real spirits, real fruit, frozen into a stick. One pop, one cocktail, 10% ABV.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="rounded-sm bg-ink px-8 py-4 font-display text-lg tracking-wide text-background transition-transform hover:-translate-y-1"
              >
                Shop the freezer
              </Link>
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm text-muted-foreground">762 five-star reviews</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroAd.url}
              alt="Shotsickles beachside campaign billboard"
              width={1044}
              height={1044}
              className="w-full rounded-sm border border-ink/15 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-ink/15 bg-ink py-3">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-display text-xl tracking-wide text-background">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-8">
              {m} <span className="text-lime">◆</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)]">
              Alcoholic popsicles.
              <br />
              That's the whole idea.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Shotsickles are <strong>frozen cocktails on a stick at 10% ABV</strong> — a full drink, poured, mixed and
              frozen, so all you do is tear the top and start.
            </p>
            <p>
              Born in London in 2017, scaled by US beverage giants by 2021, and now a festival and beach staple
              everywhere except here. We're bringing them to the Baltics.
            </p>
            <p>
              Three classics: <strong>Mojito</strong>, <strong>Piña Colada</strong> and{" "}
              <strong>Strawberry Daiquiri</strong>. Each pop is 100 ml, one honest serving, no chaser required.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                ["10%", "ABV per pop"],
                ["100 ml", "One cocktail"],
                ["€2.99", "Per pop"],
              ].map(([big, small]) => (
                <div key={big} className="rounded-sm border border-ink/15 bg-sand p-5">
                  <p className="font-display text-3xl">{big}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{small}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)]">Pick your flavour</h2>
            <Link to="/shop" className="text-xs font-semibold uppercase tracking-widest underline underline-offset-4">
              See bundles &amp; mystery box
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {singles.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Singles from {eur(2.99)} · Bundles save up to 29% · Free shipping over €40
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={gridAd.url}
            alt="Shotsickles campaign visuals: poolside, yachts and cocktails"
            loading="lazy"
            width={1044}
            height={1044}
            className="w-full rounded-sm border border-ink/15 object-cover"
          />
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)]">
              If ice cream survives winter
              <br />
              and alcohol survives winter…
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              …then alcoholic ice cream survives twice as long. That's not science, that's confidence. Pool parties,
              boat trips, backyard weddings, the last week of exams — the freezer is always the right venue.
            </p>
            <img
              src={strawberryGuy.url}
              alt="A customer holding a Strawberry Daiquiri Shotsickle"
              loading="lazy"
              width={967}
              height={1024}
              className="mt-8 w-40 rounded-sm border border-ink/15 object-cover sm:w-56"
            />
          </div>
        </div>
      </section>
    </>
  );
}
