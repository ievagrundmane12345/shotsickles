import { useEffect, useState, type FormEvent } from "react";

const KEY = "shotsickles-age-ok";

export function AgeGate() {
  const [status, setStatus] = useState<"loading" | "gate" | "pass" | "deny">("loading");
  const [dob, setDob] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus(localStorage.getItem(KEY) === "yes" ? "pass" : "gate");
  }, []);

  const allow = () => {
    localStorage.setItem(KEY, "yes");
    setStatus("pass");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!dob) {
      setError("Please enter your date of birth.");
      return;
    }
    const birth = new Date(dob);
    const cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 18);
    if (birth <= cutoff) allow();
    else setStatus("deny");
  };

  if (status === "loading" || status === "pass") return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 px-4 py-8 overflow-y-auto">
      <div className="w-full max-w-lg rounded-sm bg-background p-8 text-center shadow-2xl sm:p-12">
        <p className="font-display text-xs tracking-[0.35em] text-primary">SHOTSICKLES</p>
        {status === "deny" ? (
          <>
            <h1 className="mt-6 text-4xl">Sorry — come back later.</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              You must be at least 18 years old to enter this site. Alcohol is not sold to minors.
            </p>
            <button
              onClick={() => {
                setStatus("gate");
                setError(null);
              }}
              className="mt-8 text-xs font-semibold uppercase tracking-widest underline underline-offset-4"
            >
              Re-enter my date of birth
            </button>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-5xl">Are you 18 or older?</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Shotsickles are alcoholic frozen cocktails (10% ABV). Latvian law requires us to verify your age before
              you enter.
            </p>
            <form onSubmit={onSubmit} className="mt-8 space-y-3 text-left">
              <label htmlFor="dob" className="block text-xs font-semibold uppercase tracking-widest">
                Date of birth
              </label>
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  setError(null);
                }}
                className="w-full rounded-sm border border-input bg-card px-4 py-3 text-base outline-none focus:border-primary"
              />
              {error ? <p className="text-xs text-destructive">{error}</p> : null}
              <button
                type="submit"
                className="w-full rounded-sm bg-primary px-6 py-4 font-display text-lg tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Verify &amp; enter
              </button>
            </form>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button
                onClick={allow}
                className="flex-1 rounded-sm border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-accent"
              >
                I confirm I'm 18+
              </button>
              <button
                onClick={() => setStatus("deny")}
                className="flex-1 rounded-sm border border-border px-5 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              >
                I'm under 18
              </button>
            </div>
          </>
        )}
        <p className="mt-8 text-[11px] uppercase tracking-widest text-muted-foreground">
          Adults only. Consume responsibly.
        </p>
      </div>
    </div>
  );
}
