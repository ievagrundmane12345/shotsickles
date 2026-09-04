diff --git a/src/components/site/AgeGate.tsx b/src/components/site/AgeGate.tsx
index 7215122..56e26da 100644
--- a/src/components/site/AgeGate.tsx
+++ b/src/components/site/AgeGate.tsx
@@ -1,11 +1,9 @@
-import { useEffect, useState, type FormEvent } from "react";
+import { useEffect, useState } from "react";
 
 const KEY = "shotsickles-age-ok";
 
 export function AgeGate() {
   const [status, setStatus] = useState<"loading" | "gate" | "pass" | "deny">("loading");
-  const [dob, setDob] = useState("");
-  const [error, setError] = useState<string | null>(null);
 
   useEffect(() => {
     setStatus(localStorage.getItem(KEY) === "yes" ? "pass" : "gate");
@@ -16,19 +14,6 @@ export function AgeGate() {
     setStatus("pass");
   };
 
-  const onSubmit = (e: FormEvent) => {
-    e.preventDefault();
-    if (!dob) {
-      setError("Please enter your date of birth.");
-      return;
-    }
-    const birth = new Date(dob);
-    const cutoff = new Date();
-    cutoff.setFullYear(cutoff.getFullYear() - 18);
-    if (birth <= cutoff) allow();
-    else setStatus("deny");
-  };
-
   if (status === "loading" || status === "pass") return null;
 
   return (
@@ -42,13 +27,10 @@ export function AgeGate() {
               You must be at least 18 years old to enter this site. Alcohol is not sold to minors.
             </p>
             <button
-              onClick={() => {
-                setStatus("gate");
-                setError(null);
-              }}
+              onClick={() => setStatus("gate")}
               className="mt-8 text-xs font-semibold uppercase tracking-widest underline underline-offset-4"
             >
-              Re-enter my date of birth
+              Go back
             </button>
           </>
         ) : (
@@ -58,38 +40,16 @@ export function AgeGate() {
               Shotsickles are alcoholic frozen cocktails (10% ABV). Latvian law requires us to verify your age before
               you enter.
             </p>
-            <form onSubmit={onSubmit} className="mt-8 space-y-3 text-left">
-              <label htmlFor="dob" className="block text-xs font-semibold uppercase tracking-widest">
-                Date of birth
-              </label>
-              <input
-                id="dob"
-                type="date"
-                value={dob}
-                onChange={(e) => {
-                  setDob(e.target.value);
-                  setError(null);
-                }}
-                className="w-full rounded-sm border border-input bg-card px-4 py-3 text-base outline-none focus:border-primary"
-              />
-              {error ? <p className="text-xs text-destructive">{error}</p> : null}
-              <button
-                type="submit"
-                className="w-full rounded-sm bg-primary px-6 py-4 font-display text-lg tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
-              >
-                Verify &amp; enter
-              </button>
-            </form>
-            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
+            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
               <button
                 onClick={allow}
-                className="flex-1 rounded-sm border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-accent"
+                className="flex-1 rounded-sm bg-primary px-6 py-4 font-display text-lg tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
               >
-                I confirm I'm 18+
+                I'm 18 or older
               </button>
               <button
                 onClick={() => setStatus("deny")}
-                className="flex-1 rounded-sm border border-border px-5 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
+                className="flex-1 rounded-sm border border-border px-6 py-4 font-display text-lg tracking-wide text-muted-foreground transition-colors hover:bg-accent"
               >
                 I'm under 18
               </button>
