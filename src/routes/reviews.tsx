import { createFileRoute } from "@tanstack/react-router";
import { Stars } from "@/components/site/Stars";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Shotsickles" },
      { name: "description", content: "762 five-star reviews from Shotsickles drinkers across the Baltics." },
      { property: "og:title", content: "Customer Reviews — Shotsickles" },
      { property: "og:description", content: "What people say after their first frozen cocktail." },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Elīna B.", place: "Riga", flavour: "Strawberry Daiquiri", text: "Brought a box to a rooftop birthday and nobody touched the wine. The strawberry one tastes like actual fruit, not syrup." },
  { name: "Kārlis M.", place: "Liepāja", flavour: "Mojito", text: "Summer Sound in 30 degrees and this was the only drink that stayed cold from first sip to last. The mint is real mint." },
  { name: "Anna V.", place: "Cēsis", flavour: "Piña Colada", text: "I hate mixing drinks at parties. Now I don't. Open the freezer, hand them out, done." },
  { name: "Toms Ģ.", place: "Riga", flavour: "Mystery Box", text: "Got two flavours in my mystery box I've never seen on the site. Feels like a small gamble that always pays off." },
  { name: "Laura K.", place: "Jūrmala", flavour: "Mojito", text: "Beach day essential. 10% and you actually know how much you've had, unlike a punch bowl." },
  { name: "Rihards O.", place: "Valmiera", flavour: "Backyard Twelve", text: "Ordered the 12-pack for a garden wedding. Arrived rock solid frozen. Guests still talk about it." },
  { name: "Sanita P.", place: "Riga", flavour: "Strawberry Daiquiri", text: "It's the presentation for me. Everyone asks what it is before they even taste it." },
  { name: "Mārtiņš D.", place: "Sigulda", flavour: "Piña Colada", text: "Coconut and pineapple balance is spot on. Not sickly sweet like most ready-made cocktails." },
  { name: "Jana L.", place: "Daugavpils", flavour: "Poolside Six", text: "Six pops fit in the door of my freezer. That alone earns the five stars." },
];

function Reviews() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Verified buyers</p>
      <h1 className="display-xl mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">762 five-star reviews</h1>
      <div className="mt-6 flex items-center gap-3">
        <Stars size={20} />
        <span className="text-lg">5.0 average · every single one</span>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="flex flex-col rounded-sm border border-ink/15 bg-card p-6">
            <Stars />
            <blockquote className="mt-4 flex-1 text-lg leading-relaxed">"{r.text}"</blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-semibold">{r.name}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {r.place} · {r.flavour}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
