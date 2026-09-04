import { createFileRoute } from "@tanstack/react-router";
import adGrid from "@/assets/up-15-58-50.jpeg.asset.json";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Shotsickles" },
      {
        name: "description",
        content:
          "Five women, one AI course, one random Tuesday: how Shotsickles brought frozen 10% ABV cocktails to the Baltics.",
      },
      { property: "og:title", content: "Our Story — Shotsickles" },
      { property: "og:description", content: "Study hard, party harder. No regrets. Think of something original." },
      { property: "og:image", content: adGrid.url },
      { name: "twitter:image", content: adGrid.url },
    ],
  }),
  component: Story,
});

const values = [
  {
    n: "01",
    title: "Study hard, party harder",
    body: "We built this between a statistics deadline and a case competition. The work comes first — and then the freezer opens.",
  },
  {
    n: "02",
    title: "No regrets",
    body: "One pop, one honest serving, no mystery pours. Know exactly what you drank, remember the whole evening, wake up fine.",
  },
  {
    n: "03",
    title: "Think of something original",
    body: "The Baltics didn't need another canned seltzer. If the idea doesn't make someone say 'wait, what?', it isn't ours.",
  },
];

function Story() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Brand story</p>
      <h1 className="display-xl mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">
        Five women.
        <br />
        One random Tuesday.
      </h1>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            It started in an AI course at SSE Riga. Five of us, a lecture we'd already understood, and a slide asking
            what product the Baltics were missing. Someone typed "alcoholic ice cream" as a joke. Nobody laughed —
            everyone leaned in.
          </p>
          <p>
            By the end of the session we had a name, three flavours and a spreadsheet nobody asked for. By the weekend
            we'd frozen the first prototype in a shared dorm freezer, using a rum bottle, a blender and far too much
            lime. It half-worked. The second batch worked properly.
          </p>
          <p>
            Frozen cocktails had already conquered London in 2017 and the US beach circuit by 2021 — and somehow never
            crossed the Baltic Sea. That gap was the entire business plan.
          </p>
          <p>
            We pitched it to the SSE Riga Student Association, got a yes, got a lecturer to raise one on stage, and took
            a cooler to Summer Sound. The queue told us everything. Now we ship frozen across Latvia and set up pop-ups
            wherever there's a power socket and a reason to celebrate.
          </p>
          <p className="font-display text-2xl">
            If ice cream survives winter and alcohol survives winter, then alcoholic ice cream survives twice as long.
          </p>
        </div>
        <img
          src={adGrid.url}
          alt="Shotsickles brand campaign collage"
          loading="lazy"
          width={1044}
          height={1035}
          className="h-max w-full rounded-sm border border-ink/15 object-cover"
        />
      </div>

      <section className="mt-24">
        <h2 className="text-[clamp(2rem,4vw,3.4rem)]">Three core values</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {values.map((v) => (
            <article key={v.n} className="rounded-sm border border-ink/15 bg-sand p-8">
              <p className="font-display text-5xl text-lime">{v.n}</p>
              <h3 className="mt-4 text-2xl">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
