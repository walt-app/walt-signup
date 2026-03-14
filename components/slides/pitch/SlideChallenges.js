export default function SlideChallenges() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Challenges</h2>
        <p className="ps-lead">One missing piece between Walt and revenue</p>
        <div className="ps-content" style={{ gap: 0 }}>

          {/* ── Flow line ── */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(6px, 0.8vw, 14px)",
            fontSize: "clamp(9px, 1.05vw, 17px)",
            fontWeight: 600,
          }}>
            <span style={{
              padding: "clamp(5px, 0.5vw, 9px) clamp(10px, 1.2vw, 20px)",
              background: "var(--orange-primary)",
              color: "#fff",
              borderRadius: "clamp(4px, 0.4vw, 7px)",
              fontWeight: 700,
            }}>Walt</span>
            <span style={{ color: "#d4d4d4" }}>&rarr;</span>
            <span style={{
              position: "relative",
              padding: "clamp(5px, 0.5vw, 9px) clamp(10px, 1.2vw, 20px)",
              border: "1.5px dashed #ccc",
              borderRadius: "clamp(4px, 0.4vw, 7px)",
              color: "#bbb",
            }}>
              Tokenization provider
              {/* Dashed connector to expanded box below */}
              <span style={{
                position: "absolute",
                left: "50%",
                top: "100%",
                width: "1.5px",
                height: "clamp(16px, 2vw, 32px)",
                backgroundImage: "repeating-linear-gradient(to bottom, #ccc 0, #ccc 4px, transparent 4px, transparent 8px)",
              }} />
            </span>
            <span style={{ color: "#d4d4d4" }}>&rarr;</span>
            <span style={{
              padding: "clamp(5px, 0.5vw, 9px) clamp(10px, 1.2vw, 20px)",
              background: "#151515",
              color: "#fff",
              borderRadius: "clamp(4px, 0.4vw, 7px)",
            }}>Visa / Mastercard &nbsp;&#x2713;</span>
            <span style={{ color: "#d4d4d4" }}>&rarr;</span>
            <span style={{
              padding: "clamp(5px, 0.5vw, 9px) clamp(10px, 1.2vw, 20px)",
              background: "#151515",
              color: "#fff",
              borderRadius: "clamp(4px, 0.4vw, 7px)",
            }}>Issuing banks &nbsp;&#x2713;</span>
            <span style={{ color: "#d4d4d4" }}>&rarr;</span>
            <span style={{ color: "#bbb" }}>Revenue</span>
          </div>

          {/* spacer for connector line */}
          <div style={{ height: "clamp(16px, 2vw, 32px)" }} />

          {/* ── Expanded: tokenization providers ── */}
          <div style={{
            border: "1.5px dashed #ccc",
            borderRadius: "clamp(8px, 0.8vw, 14px)",
            padding: "clamp(16px, 2vw, 32px) clamp(24px, 3vw, 48px)",
            maxWidth: "clamp(400px, 52vw, 840px)",
            margin: "0 auto",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "clamp(12px, 1.6vw, 28px)",
            }}>
              {[
                { name: "IDEMIA", status: "Rarely works with startups" },
                { name: "Fidesmo", status: "SDK not yet ready" },
                { name: "Paymentology", status: "SDK not yet ready" },
              ].map(({ name, status }) => (
                <div key={name}>
                  <p style={{
                    fontSize: "clamp(10px, 1.15vw, 19px)",
                    fontWeight: 700,
                    color: "#151515",
                    margin: "0 0 clamp(2px, 0.3vw, 5px)",
                  }}>{name}</p>
                  <p style={{
                    fontSize: "clamp(8px, 0.8vw, 13px)",
                    fontWeight: 400,
                    color: "#999",
                    margin: 0,
                  }}>{status}</p>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: "clamp(9px, 1vw, 16px)",
              fontWeight: 600,
              color: "var(--orange-primary)",
              margin: "clamp(14px, 1.8vw, 28px) 0 0",
            }}>All three in active conversation.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
