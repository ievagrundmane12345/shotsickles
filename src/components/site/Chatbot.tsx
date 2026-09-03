import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { from: "bot" | "you"; text: string };

const answer = (q: string): string => {
  const t = q.toLowerCase();
  if (/(price|cost|eur|€|how much)/.test(t))
    return "A single Shotsickle is €2.99. Bundles get cheaper fast: 3-pack €7.99, 6-pack €14.99, 12-pack €27.99, 24-pack €51.99, and the Mystery Box is €16.99 for 8 pops.";
  if (/(flavour|flavor|taste|mojito|colada|strawberry)/.test(t))
    return "Three flavours: Mojito, Piña Colada and Strawberry Daiquiri. Can't decide? The Mystery Box hides limited-edition test-kitchen batches.";
  if (/(alcohol|abv|strong|percent|%)/.test(t))
    return "Every pop is 10% ABV in 100 ml — roughly 0.8 standard units. Adults only, consume responsibly.";
  if (/(ship|deliver|post|when)/.test(t))
    return "We ship frozen across Latvia in insulated liners, 1–3 working days. Free shipping over €40.";
  if (/(event|pop-?up|backyard|mežrozes|mezrozes)/.test(t))
    return "Next up: 12–13 September, Backyards in Mežrozes, Priekuļu novads, Liepa, LV-4128. Come find the freezer.";
  if (/(mystery|box|limited)/.test(t))
    return "The Mystery Box is 8 pops for €16.99. You find out the mix when you open it — some batches never reach the shop.";
  if (/(partner|sponsor|talis|summer sound|sse)/.test(t))
    return "We're backed by the SSE Riga Student Association, promoted by lecturer Tālis, and we pop up every year at Summer Sound.";
  if (/(hi|hello|hey|sveiki|labdien)/.test(t))
    return "Hey! I'm Sickle, the freezer assistant. Ask me about flavours, prices, ABV, shipping or events.";
  return "Good question. Short version: frozen cocktails, 10% ABV, €2.99 each, shipped frozen in Latvia. Ask me about flavours, bundles, shipping or our next pop-up.";
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi, I'm Sickle 🧊 Ask me anything about Shotsickles — flavours, bundles, ABV or where to find us." },
  ]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { from: "you", text }, { from: "bot", text: answer(text) }]);
    setInput("");
  };

  return (
    <>
      {open ? (
        <div className="fixed bottom-24 right-4 z-60 flex h-[26rem] w-[min(22rem,calc(100vw-2rem))] flex-col rounded-sm border border-ink bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <span className="font-display text-lg tracking-wide">Ask Sickle</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "bot"
                    ? "max-w-[85%] rounded-sm bg-secondary px-3 py-2 text-sm"
                    : "ml-auto max-w-[85%] rounded-sm bg-ink px-3 py-2 text-sm text-background"
                }
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a question…"
              className="flex-1 rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button onClick={send} aria-label="Send" className="rounded-sm bg-primary p-2 text-primary-foreground">
              <Send size={16} />
            </button>
          </div>
        </div>
      ) : null}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-24 right-4 z-60 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
