import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shotsickles" },
      {
        name: "description",
        content: "Talk to Shotsickles about orders, stockists, pop-ups and sponsorships. Based in Riga, Latvia.",
      },
      { property: "og:title", content: "Contact — Shotsickles" },
      { property: "og:description", content: "Orders, stockists, pop-ups and sponsorships." },
    ],
  }),
  component: Contact,
});

const input = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary";
const label = "block text-xs font-semibold uppercase tracking-widest mb-1.5";

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Say hello</p>
      <h1 className="display-xl mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">Contact</h1>

      <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">General &amp; orders</p>
            <a href="mailto:hello@shotsickles.lv" className="font-display text-2xl hover:text-primary">
              hello@shotsickles.lv
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Sponsorships &amp; marketing
            </p>
            <a href="mailto:trade@summersound.lv" className="font-display text-2xl hover:text-primary">
              trade@summersound.lv
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Wholesale &amp; bars</p>
            <a href="mailto:trade@shotsickles.lv" className="font-display text-2xl hover:text-primary">
              trade@shotsickles.lv
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Studio &amp; freezer</p>
            <address className="mt-1 not-italic text-lg">
              Strēlnieku iela 4a
              <br />
              Riga, LV-1010, Latvia
            </address>
          </div>
          <p className="text-sm text-muted-foreground">
            We answer within one working day — unless there's a pop-up, in which case give us two.
          </p>
        </div>

        <div className="rounded-sm border border-ink/15 bg-sand p-8">
          {sent ? (
            <div>
              <h2 className="text-3xl">Message sent.</h2>
              <p className="mt-4 text-muted-foreground">
                Thanks for writing — we'll reply to your inbox shortly. This is a demo form, so nothing is stored.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <h2 className="text-3xl">Write to us</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="cname">
                    Name
                  </label>
                  <input id="cname" required maxLength={100} className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="cemail">
                    Email
                  </label>
                  <input id="cemail" type="email" required maxLength={255} className={input} />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="ctopic">
                  Topic
                </label>
                <select id="ctopic" className={input}>
                  <option>An order</option>
                  <option>Stocking Shotsickles</option>
                  <option>Booking a pop-up</option>
                  <option>Press</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="cmsg">
                  Message
                </label>
                <textarea id="cmsg" required maxLength={1000} rows={6} className={input} />
              </div>
              <button type="submit" className="rounded-sm bg-ink px-8 py-4 font-display text-lg text-background">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
