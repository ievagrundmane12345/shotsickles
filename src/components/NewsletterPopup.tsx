import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const seen = localStorage.getItem("newsletter_seen");
      if (!seen) setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("newsletter_seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem("newsletter_seen", "true");
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
      zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#f5f0e8", color: "#1a3a2a", padding: "2.5rem",
        maxWidth: "420px", width: "90%", borderRadius: "4px", position: "relative"
      }}>
        <button onClick={handleClose} style={{
          position: "absolute", top: "1rem", right: "1rem",
          background: "none", border: "none", fontSize: "1.2rem",
          cursor: "pointer", color: "#1a3a2a"
        }}>✕</button>

        {!submitted ? (
          <>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
              MELT RESPONSIBLY
            </p>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.5rem", lineHeight: 1 }}>
              GET 10% OFF YOUR FIRST ORDER
            </h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Join the freezer club. Be first to know about drops, events and limited flavours.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%", padding: "0.75rem 1rem", marginBottom: "0.75rem",
                  border: "2px solid #1a3a2a", background: "transparent",
                  color: "#1a3a2a", fontSize: "1rem", boxSizing: "border-box",
                  borderRadius: "2px"
                }}
              />
              <button type="submit" style={{
                width: "100%", padding: "0.85rem", background: "#1a3a2a",
                color: "#f5f0e8", fontWeight: 900, fontSize: "1rem",
                border: "none", cursor: "pointer", letterSpacing: "0.05em"
              }}>
                CLAIM MY DISCOUNT
              </button>
            </form>
            <p style={{ fontSize: "0.75rem", marginTop: "1rem", opacity: 0.6 }}>
              No spam. Unsubscribe anytime. Adults only.
            </p>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.5rem" }}>
              YOU'RE IN THE FREEZER. 🧊
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Check your inbox for your 10% discount code. See you at the next drop.
            </p>
            <button onClick={handleClose} style={{
              width: "100%", padding: "0.85rem", background: "#1a3a2a",
              color: "#f5f0e8", fontWeight: 900, fontSize: "1rem",
              border: "none", cursor: "pointer"
            }}>
              CLOSE
            </button>
          </>
        )}
      </div>
    </div>
  );
}
