export default function SlideTraction() {
  const milestones = [
    { key: "apps", text: "Android and iPhone apps built", done: true },
    { key: "pci", text: "End-to-end PCI compliance", done: true },
    { key: "reddit", text: <>Organic customer validation (<a href="https://www.reddit.com/r/BuyFromEU/comments/1rkh4cu/eu_based_privacy_focused_tap_to_pay_coming/" target="_blank" rel="noopener noreferrer" style={{ color: "#ff4800", textDecoration: "none" }}>r/BuyFromEU</a>)</>, done: true },
    { key: "tokenization", text: "Tokenization provider partnership", done: false },
    { key: "cards", text: "First cards loaded", done: false },
    { key: "transaction", text: "First tap-to-pay transaction", done: false },
  ];

  const phases = [
    {
      label: "PHASE 1",
      market: "Privacy communities",
      target: "Early adopters & beta",
      detail: "Organic word-of-mouth in privacy-focused communities. Early adopters sign up for the beta program.",
      active: true,
    },
    {
      label: "PHASE 2",
      market: "Organic European growth",
      target: "Niche communities",
      detail: "Expand across Europe through organic discovery in communities like Reddit, Mastodon, and privacy forums.",
      active: false,
    },
    {
      label: "PHASE 3",
      market: "High-visibility channels",
      target: "Scaled distribution",
      detail: "Targeted reach across privacy-aligned platforms: Proton, Brave, DuckDuckGo, and similar channels.",
      active: false,
    },
  ];

  const projections = [
    { label: "TARGET MARKET", users: "25M", value: "\u20AC250M ARR" },
    { label: "SERVICEABLE MARKET", users: "50M", value: "\u20AC500M" },
    { label: "TOTAL ADDRESSABLE", users: "100\u2013150M", value: "\u20AC1.0\u20131.5B" },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Traction &amp; Roadmap</h2>
        <p className="ps-lead">
          Pre-launch with core infrastructure in place
        </p>
        <div className="ps-content" style={{ gap: "clamp(12px, 1.6vw, 26px)" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "clamp(16px, 2.8vw, 44px)",
            alignItems: "start",
            flex: 1,
          }}>

            {/* ── Left: Traction ── */}
            <div className="ps-stack" style={{ gap: "clamp(10px, 1.3vw, 22px)" }}>
              <div>
                <p className="ps-label" style={{
                  color: "#ff4800",
                  letterSpacing: "0.1em",
                  fontSize: "clamp(7px, 0.8vw, 13px)",
                  marginBottom: "clamp(4px, 0.4vw, 8px)",
                }}>
                  CURRENT STATUS
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.7vw, 12px)" }}>
                  <p className="ps-stat" style={{ fontSize: "clamp(28px, 4vw, 64px)" }}>3k</p>
                  <p className="ps-body" style={{ color: "#7f7f7f" }}>signups</p>
                </div>
                <p className="ps-body" style={{ color: "#7f7f7f", marginTop: "clamp(2px, 0.2vw, 4px)" }}>
                  Pre-launch &middot; 3+ months from first transaction
                </p>
              </div>

              {/* Milestone checklist */}
              <div>
                <p className="ps-label" style={{
                  color: "#999",
                  letterSpacing: "0.08em",
                  marginBottom: "clamp(6px, 0.6vw, 10px)",
                }}>
                  MILESTONES
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3px, 0.35vw, 6px)" }}>
                  {milestones.map((m) => (
                    <div key={m.key} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(4px, 0.5vw, 8px)",
                    }}>
                      {/* Check / pending indicator */}
                      <svg
                        width="clamp(10px, 1vw, 16px)"
                        height="clamp(10px, 1vw, 16px)"
                        viewBox="0 0 16 16"
                        style={{
                          flexShrink: 0,
                          width: "clamp(10px, 1vw, 16px)",
                          height: "clamp(10px, 1vw, 16px)",
                        }}
                      >
                        {m.done ? (
                          <>
                            <circle cx="8" cy="8" r="7" fill="#ff4800" />
                            <path d="M5 8.2 L7 10.2 L11 6.2" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </>
                        ) : (
                          <circle cx="8" cy="8" r="7" fill="none" stroke="#d4d4d4" strokeWidth="1.5" />
                        )}
                      </svg>
                      <span style={{
                        fontSize: "clamp(7.5px, 0.85vw, 14px)",
                        fontWeight: m.done ? 500 : 400,
                        color: m.done ? "#151515" : "#999",
                        lineHeight: 1.4,
                      }}>{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Geographic Expansion Roadmap ── */}
            <div>
              <p className="ps-label" style={{
                color: "#ff4800",
                letterSpacing: "0.1em",
                fontSize: "clamp(7px, 0.8vw, 13px)",
                marginBottom: "clamp(8px, 1vw, 16px)",
              }}>
                GO-TO-MARKET
              </p>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}>
                {phases.map((phase, i) => (
                  <div key={phase.label} style={{
                    display: "grid",
                    gridTemplateColumns: "clamp(14px, 1.6vw, 26px) 1fr",
                    gap: "clamp(8px, 1vw, 16px)",
                    paddingBottom: i < phases.length - 1 ? "clamp(10px, 1.2vw, 20px)" : 0,
                  }}>
                    {/* Vertical track with dot */}
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>
                      <div style={{
                        width: "clamp(10px, 1vw, 16px)",
                        height: "clamp(10px, 1vw, 16px)",
                        borderRadius: "50%",
                        background: phase.active ? "#ff4800" : "transparent",
                        border: phase.active ? "none" : "clamp(1.5px, 0.15vw, 2.5px) solid #d4d4d4",
                        flexShrink: 0,
                        marginTop: "clamp(1px, 0.1vw, 2px)",
                      }} />
                      {i < phases.length - 1 && (
                        <div style={{
                          width: "clamp(1.5px, 0.15vw, 2.5px)",
                          flex: 1,
                          background: phase.active
                            ? "linear-gradient(to bottom, #ff4800, #d4d4d4)"
                            : "#e5e5e5",
                          marginTop: "clamp(3px, 0.3vw, 5px)",
                        }} />
                      )}
                    </div>
                    {/* Phase content */}
                    <div>
                      <div style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "clamp(6px, 0.7vw, 12px)",
                        marginBottom: "clamp(2px, 0.2vw, 4px)",
                      }}>
                        <span style={{
                          fontSize: "clamp(6px, 0.6vw, 9px)",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: phase.active ? "#ff4800" : "#999",
                        }}>{phase.label}</span>
                        <span style={{
                          fontSize: "clamp(10px, 1.2vw, 20px)",
                          fontWeight: 700,
                          color: "#151515",
                          letterSpacing: "-0.01em",
                        }}>{phase.market}</span>
                      </div>
                      <p style={{
                        fontSize: "clamp(8px, 0.9vw, 14px)",
                        fontWeight: 700,
                        color: phase.active ? "#ff4800" : "#7f7f7f",
                        margin: "0 0 clamp(2px, 0.2vw, 4px)",
                      }}>
                        Target: {phase.target}
                      </p>
                      <p style={{
                        fontSize: "clamp(6.5px, 0.72vw, 11.5px)",
                        fontWeight: 400,
                        color: "#7f7f7f",
                        margin: 0,
                        lineHeight: 1.45,
                      }}>{phase.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom: Growth Projections ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(8px, 1vw, 16px)",
          }}>
            {projections.map((p, i) => (
              <div key={p.label} style={{
                background: i === 0 ? "#ff4800" : "#f0f0f0",
                borderRadius: "clamp(6px, 0.7vw, 12px)",
                padding: "clamp(8px, 1vw, 16px) clamp(10px, 1.2vw, 20px)",
              }}>
                <p style={{
                  fontSize: "clamp(6px, 0.6vw, 9px)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: i === 0 ? "#151515" : "#999",
                  margin: "0 0 clamp(3px, 0.3vw, 6px)",
                }}>{p.label}</p>
                <p style={{
                  fontSize: "clamp(12px, 1.5vw, 24px)",
                  fontWeight: 900,
                  color: "#151515",
                  margin: "0 0 clamp(1px, 0.1vw, 2px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}>{p.users}</p>
                <p style={{
                  fontSize: "clamp(8px, 0.9vw, 14px)",
                  fontWeight: 700,
                  color: i === 0 ? "#151515" : "#ff4800",
                  margin: 0,
                }}>{p.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
