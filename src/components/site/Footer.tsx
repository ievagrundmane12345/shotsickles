import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/15 bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl">SHOTSICKLES</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Frozen cocktails in a stick. 10% ABV. Made in Riga, melted everywhere.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Shop</p>
          <Link to="/shop" className="block hover:text-primary">
            All products
          </Link>
          <Link to="/product/$slug" params={{ slug: "mystery-box" }} className="block hover:text-primary">
            Mystery Box
          </Link>
          <Link to="/cart" className="block hover:text-primary">
            Cart
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</p>
          <Link to="/story" className="block hover:text-primary">
            Brand story
          </Link>
          <Link to="/partners" className="block hover:text-primary">
            Partners
          </Link>
          <Link to="/events" className="block hover:text-primary">
            Upcoming events
          </Link>
          <Link to="/contact" className="block hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Legal</p>
          <Link to="/cookies" className="block hover:text-primary">
            Cookie policy
          </Link>
          <p className="text-muted-foreground">Alcohol licence LV-2026-0417</p>
          <p className="text-muted-foreground">© {new Date().getFullYear()} Shotsickles SIA</p>
        </div>
      </div>
    </footer>
  );
}

export function AlcoholWarningBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-70 border-t border-black bg-white px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-black sm:text-xs">
      Contains alcohol · 10% ABV · Sale prohibited to persons under 18 · Alcohol consumption harms your health
    </div>
  );
}
