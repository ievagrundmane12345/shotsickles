import { createFileRoute } from "@tanstack/react-router";
import board2026 from "@/assets/up-16-06-46.jpeg.asset.json";
import board2025 from "@/assets/up-16-08-17.jpeg.asset.json";
import talis from "@/assets/up-16-04-13.jpeg.asset.json";
import summerSound from "@/assets/up-15-56-15.jpeg.asset.json";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — SSE Riga SA, Tālis & Summer Sound | Shotsickles" },
      {
        name: "description",
        content:
          "Shotsickles is backed by the SSE Riga Student Association, promoted by lecturer Tālis, and pops up yearly at Summer Sound.",
      },
      { property: "og:title", content: "Partners — Shotsickles" },
      { property: "og:description", content: "SSE Riga SA, our promoter Tālis, and Summer Sound." },
      { property: "og:image", content: board2026.url },
      { name: "twitter:image", content: board2026.url },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Who's behind the freezer</p>
      <h1 className="display-xl mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">Partners</h1>

      <section className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-berry">Main sponsor</p>
          <h2 className="mt-3 text-4xl">SSE Riga Student Association</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            The SA Board backs us with funding, event access and an alarming amount of freezer space. They put
            Shotsickles in the hands of the whole school — and put us on stage at every SA event of the year.
          </p>
        </div>
        <img
          src={board2026.url}
          alt="Meet the SA Board 2026 holding Shotsickles"
          loading="lazy"
          width={1024}
          height={790}
          className="w-full rounded-sm border border-ink/15 object-cover"
        />
      </section>

      <section className="mt-20 grid items-center gap-10 lg:grid-cols-2">
        <img
          src={board2025.url}
          alt="SA Board 2025 around an ice table with Shotsickles"
          loading="lazy"
          width={874}
          height={1024}
          className="order-2 w-full rounded-sm border border-ink/15 object-cover lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-berry">Since day one</p>
          <h2 className="mt-3 text-4xl">SA Board 2025</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            The board that took the first pitch seriously, ordered the first ice table, and started the tradition of
            serving Shotsickles at every board handover.
          </p>
        </div>
      </section>

      <section className="mt-20 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-berry">Promoter</p>
          <h2 className="mt-3 text-4xl">Tālis — SSE Riga lecturer</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Our most credible endorsement. Tālis lectures by day and raises a Shotsickle by night — and if it passes the
            case-method standard, it passes ours. Talis approved.
          </p>
        </div>
        <img
          src={talis.url}
          alt="Tālis raising a Shotsickle on stage"
          loading="lazy"
          width={1003}
          height={1024}
          className="w-full rounded-sm border border-ink/15 object-cover"
        />
      </section>

      <section className="mt-20 grid items-center gap-10 lg:grid-cols-2">
        <img
          src={summerSound.url}
          alt="Shotsickles campaign posters on a beach table"
          loading="lazy"
          width={1044}
          height={1024}
          className="order-2 w-full rounded-sm border border-ink/15 object-cover lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-berry">Yearly partner event</p>
          <h2 className="mt-3 text-4xl">Summer Sound</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Every year, on the Liepāja beach, our freezers show up next to the main stage. Summer Sound is where
            Shotsickles stopped being a classroom idea and became a queue.
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
            Sponsorship &amp; marketing: trade@summersound.lv
          </p>
        </div>
      </section>
    </div>
  );
}
