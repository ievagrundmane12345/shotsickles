import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — Shotsickles Pop-Ups" },
      {
        name: "description",
        content:
          "Find Shotsickles in person: 12–13 September at Backyards in Mežrozes, Priekuļu novads, Liepa, LV-4128.",
      },
      { property: "og:title", content: "Upcoming Events — Shotsickles Pop-Ups" },
      { property: "og:description", content: "Backyards pop-up, 12–13 September, Mežrozes." },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Where to find us</p>
      <h1 className="display-xl mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">Upcoming events</h1>

      <article className="mt-14 grid gap-8 rounded-sm border border-ink bg-sand p-8 lg:grid-cols-[0.35fr_0.65fr] lg:p-12">
        <div>
          <p className="font-display text-6xl leading-none text-berry">12–13</p>
          <p className="mt-2 font-display text-2xl">September</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Two days · 14:00 – late</p>
        </div>
        <div>
          <h2 className="text-4xl">"Backyards" — Shotsickles pop-up</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our freezers move into the Backyards festival grounds for two days. All three flavours on ice, limited
            Mystery Box drops each afternoon, and the first hundred pops of Saturday come with a Shotsickles tote.
          </p>
          <address className="mt-6 not-italic text-lg">
            Mežrozes, Priekuļu novads,
            <br />
            Liepa, LV-4128, Latvia
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Me%C5%BErozes%2C+Liepa%2C+LV-4128"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-background"
            >
              Open in maps
            </a>
            <Link
              to="/shop"
              className="rounded-sm border border-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-widest"
            >
              Can't make it? Order online
            </Link>
          </div>
          <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
            ID checked at the freezer. 18+ only.
          </p>
        </div>
      </article>

      <section className="mt-16">
        <h2 className="text-3xl">On the calendar</h2>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {[
            ["Summer Sound", "Liepāja beach · every summer", "Yearly partner event — main stage freezers."],
            ["SA Board handover", "SSE Riga · autumn", "Private pop-up for the Student Association."],
            ["Backyards winter round", "Mežrozes · to be confirmed", "Because alcoholic ice cream survives winter x2."],
          ].map(([name, when, note]) => (
            <li key={name} className="grid gap-1 py-5 sm:grid-cols-[1fr_1fr_1.4fr]">
              <p className="font-display text-xl">{name}</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">{when}</p>
              <p className="text-sm text-muted-foreground">{note}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
