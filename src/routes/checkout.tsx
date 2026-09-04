import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { eur } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Shotsickles" },
      { name: "description", content: "Shipping and payment for your frozen cocktail order. 18+ only, ID on delivery." },
      { property: "og:title", content: "Checkout — Shotsickles" },
      { property: "og:description", content: "Shipping and payment for your frozen cocktail order." },
    ],
  }),
  component: Checkout,
});

const input =
  "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary";
const label = "block text-xs font-semibold uppercase tracking-widest mb-1.5";

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [confirmAge, setConfirmAge] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const shipping = subtotal >= 40 || subtotal === 0 ? 0 : 4.9;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!confirmAge) {
        setError("Please confirm you are 18 or older before paying.");
        return;
      }
      setError(null);
      clear();
      setStep(3);
    }
  };

  if (step === 3) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="display-xl text-[clamp(2.4rem,6vw,4.5rem)]">Order frozen.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Thanks — your Shotsickles are packed in an insulated liner and leave the freezer within 24 hours. You'll get a
          confirmation email with tracking. Bring ID to the door.
        </p>
        <Link to="/shop" className="mt-10 inline-block rounded-sm bg-ink px-8 py-4 font-display text-lg text-background">
          Back to the shop
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-4xl">Your cart is empty</h1>
        <Link to="/shop" className="mt-8 inline-block rounded-sm bg-ink px-8 py-4 font-display text-lg text-background">
          Shop Shotsickles
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="display-xl text-[clamp(2.4rem,6vw,4.5rem)]">Checkout</h1>
      <ol className="mt-6 flex gap-6 text-xs font-semibold uppercase tracking-widest">
        {["Shipping", "Payment", "Done"].map((s, i) => (
          <li key={s} className={i + 1 === step ? "text-primary" : "text-muted-foreground"}>
            {i + 1}. {s}
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <form onSubmit={submit} className="space-y-5">
          {step === 1 ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="fn">
                    First name
                  </label>
                  <input id="fn" required className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="ln">
                    Last name
                  </label>
                  <input id="ln" required className={input} />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="email">
                  Email
                </label>
                <input id="email" type="email" required className={input} />
              </div>
              <div>
                <label className={label} htmlFor="addr">
                  Address
                </label>
                <input id="addr" required className={input} />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className={label} htmlFor="city">
                    City
                  </label>
                  <input id="city" required className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="zip">
                    Postal code
                  </label>
                  <input id="zip" required className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="country">
                    Country
                  </label>
                  <select id="country" className={input}>
                    <option>Latvia</option>
                    <option>Estonia</option>
                    <option>Lithuania</option>
                  </select>
                </div>
              </div>
              <fieldset className="rounded-sm border border-ink/15 bg-sand p-5">
                <legend className="px-2 text-xs font-semibold uppercase tracking-widest">Delivery method</legend>
                <label className="flex items-center gap-3 py-2 text-sm">
                  <input type="radio" name="ship" defaultChecked /> Frozen courier, 1–3 days{" "}
                  {shipping === 0 ? "(free)" : `(${eur(4.9)})`}
                </label>
                <label className="flex items-center gap-3 py-2 text-sm">
                  <input type="radio" name="ship" /> Riga same-day freezer run (€7.90)
                </label>
              </fieldset>
              <button type="submit" className="rounded-sm bg-ink px-8 py-4 font-display text-lg text-background">
                Continue to payment
              </button>
            </>
          ) : (
            <>
              <div>
                <label className={label} htmlFor="card">
                  Card number
                </label>
                <input id="card" required placeholder="4242 4242 4242 4242" className={input} />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className={label} htmlFor="exp">
                    Expiry
                  </label>
                  <input id="exp" required placeholder="09/29" className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="cvc">
                    CVC
                  </label>
                  <input id="cvc" required placeholder="123" className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="name">
                    Name on card
                  </label>
                  <input id="name" required className={input} />
                </div>
              </div>
              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={confirmAge}
                  onChange={(e) => setConfirmAge(e.target.checked)}
                  className="mt-1"
                />
                I confirm I am 18 or older and understand ID will be checked on delivery.
              </label>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-sm border border-ink px-6 py-4 text-xs font-semibold uppercase tracking-widest"
                >
                  Back
                </button>
                <button type="submit" className="rounded-sm bg-primary px-8 py-4 font-display text-lg text-primary-foreground">
                  Pay {eur(subtotal + shipping)}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Demo checkout — no real payment is processed and no card data is stored.
              </p>
            </>
          )}
        </form>

        <aside className="h-max rounded-sm border border-ink/15 bg-card p-6">
          <h2 className="text-2xl">Order</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map(({ product, qty }) => (
              <li key={product.slug} className="flex justify-between gap-3">
                <span>
                  {product.name} × {qty}
                </span>
                <span>{eur(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : eur(shipping)}</span>
            </div>
            <div className="flex justify-between font-display text-2xl">
              <span>Total</span>
              <span>{eur(subtotal + shipping)}</span>
            </div>
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
            Contains alcohol · 10% ABV · 18+
          </p>
        </aside>
      </div>
    </div>
  );
}
