import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Shotsickles" },
      { name: "description", content: "How Shotsickles uses cookies: essentials, preferences and analytics." },
      { property: "og:title", content: "Cookie Policy — Shotsickles" },
      { property: "og:description", content: "How Shotsickles uses cookies." },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="display-xl text-[clamp(2.4rem,6vw,4.5rem)]">Cookie policy</h1>
      <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">Last updated: September 2026</p>

      <div className="mt-10 space-y-8 text-lg leading-relaxed">
        <p>
          This is a demonstration cookie policy for a student project. It reads like the real thing and behaves like the
          real thing, but no data leaves your browser.
        </p>

        <section>
          <h2 className="text-2xl">Strictly necessary</h2>
          <p className="mt-3 text-muted-foreground">
            We store your age confirmation and your shopping cart in your browser's local storage. Without these, the
            site can't legally show you products or remember what you picked.
          </p>
        </section>

        <section>
          <h2 className="text-2xl">Preferences</h2>
          <p className="mt-3 text-muted-foreground">
            We remember your cookie choice so the banner stops asking. That's it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl">Analytics</h2>
          <p className="mt-3 text-muted-foreground">
            In a live version we'd count page views and which flavour gets clicked most. In this demo, nothing is
            measured and nothing is shared with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl">Marketing</h2>
          <p className="mt-3 text-muted-foreground">
            No advertising cookies are set. If that ever changes, this page changes first and the banner asks again.
          </p>
        </section>

        <section>
          <h2 className="text-2xl">Managing cookies</h2>
          <p className="mt-3 text-muted-foreground">
            Clear your browser's site data for shotsickles.lv to reset everything, including your age confirmation.
            Questions: hello@shotsickles.lv
          </p>
        </section>
      </div>
    </div>
  );
}
