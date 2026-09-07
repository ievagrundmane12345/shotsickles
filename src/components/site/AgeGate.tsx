import { useEffect, useState } from "react";

const KEY = "shotsickles-age-ok";

export function AgeGate() {
  const [status, setStatus] = useState<"loading" | "gate" | "pass" | "deny">("loading");

  useEffect(() => {
    setStatus(localStorage.getItem(KEY) === "yes" ? "pass" : "gate");
  }, []);

  const allow = () => {
    localStorage.setItem(KEY, "yes");
    setStatus("pass");
  };

  if (status === "loading" || status === "pass") return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 px-4 backdrop-blur">
      <div className="w-full max-w-md rounded-sm border border-border bg-card p-8 text-center shadow-xl">
        {status === "deny" ? (
          <>
            <h2 className="font-display text-3xl uppercase tracking-wide">Sorry, not yet</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              You must be at least 18 years old to enter this site. Alcohol is not sold to minors.
            </p>
            <button
              onClick={() => setStatus("gate")}
              className="mt-8 text-xs font-semibold uppercase tracking-widest underline underline-offset-4"
            >
              Go back
            </button>
          </>
        ) : (
          <>
            <h2 className="font-display text-3xl uppercase tracking-wide">Are you 18 or older?</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Shotsickles are alcoholic frozen cocktails (10% ABV). Latvian law requires us to verify your age before
              you enter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={allow}
                className="flex-1 rounded-sm bg-primary px-6 py-4 font-display text-lg tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                I'm 18 or older
              </button>
              <button
                onClick={() => setStatus("deny")}
                className="flex-1 rounded-sm border border-border px-6 py-4 font-display text-lg tracking-wide text-muted-foreground transition-colors hover:bg-accent"
              >
                I'm under 18
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
