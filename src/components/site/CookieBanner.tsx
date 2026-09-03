import { useEffect, useState } from "react";

const KEY = "shotsickles-cookies";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(!localStorage.getItem(KEY)), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  const close = (choice: string) => {
    localStorage.setItem(KEY, choice);
    setShow(false);
  };

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-3xl rounded-sm border border-ink bg-card p-5 shadow-xl sm:left-6 sm:right-auto sm:bottom-24">
      <p className="font-display text-lg">Cookies. Obviously.</p>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        We use cookies to remember your cart, your age confirmation, and which flavour you keep hovering over. No
        cookie melts here — this is a demo policy for a student project.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => close("all")}
          className="rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground"
        >
          Accept all
        </button>
        <button
          onClick={() => close("essential")}
          className="rounded-sm border border-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest"
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
