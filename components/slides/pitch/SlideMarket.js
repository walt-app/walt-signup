export default function SlideMarket() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Market</h2>
        <p className="ps-lead">Privacy is a proven, paying market</p>
        <div className="ps-content">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(16px, 2.8vw, 44px)",
            alignItems: "center",
          }}>

            {/* ── Left: Market Sizing Funnel ── */}
            <div>
              <p className="ps-label" style={{
                color: "#ff4800",
                letterSpacing: "0.1em",
                fontSize: "clamp(7px, 0.8vw, 13px)",
                marginBottom: "clamp(6px, 0.7vw, 12px)",
              }}>
                MARKET SIZING AT &euro;10/YEAR
              </p>
              <svg viewBox="0 0 400 220" width="100%" style={{ display: "block" }}>
                <g fontFamily="'Geist', -apple-system, BlinkMacSystemFont, sans-serif">
                  {/* TAM */}
                  <polygon points="5,0 395,0 340,65 60,65" fill="rgba(255,72,0,0.08)" stroke="rgba(255,72,0,0.18)" strokeWidth="1.5" />
                  <text x="200" y="17" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#999" letterSpacing="0.1em">TOTAL ADDRESSABLE MARKET</text>
                  <text x="200" y="40" textAnchor="middle" fontSize="22" fontWeight="900" fill="#151515" letterSpacing="-0.02em">100&ndash;150M</text>
                  <text x="200" y="56" textAnchor="middle" fontSize="9" fill="#7f7f7f">&euro;1.0&ndash;1.5B</text>

                  {/* SAM */}
                  <polygon points="60,75 340,75 285,140 115,140" fill="rgba(255,72,0,0.20)" stroke="rgba(255,72,0,0.32)" strokeWidth="1.5" />
                  <text x="200" y="92" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#999" letterSpacing="0.1em">SERVICEABLE MARKET</text>
                  <text x="200" y="115" textAnchor="middle" fontSize="20" fontWeight="900" fill="#151515" letterSpacing="-0.02em">50M</text>
                  <text x="200" y="131" textAnchor="middle" fontSize="9" fill="#7f7f7f">&euro;500M</text>

                  {/* SOM */}
                  <polygon points="115,150 285,150 260,215 140,215" fill="#ff4800" />
                  <text x="200" y="167" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#151515" letterSpacing="0.1em">TARGET MARKET</text>
                  <text x="200" y="190" textAnchor="middle" fontSize="18" fontWeight="900" fill="#151515" letterSpacing="-0.02em">25M</text>
                  <text x="200" y="206" textAnchor="middle" fontSize="9" fill="#151515" opacity="0.65">&euro;250M ARR</text>
                </g>
              </svg>
            </div>

            {/* ── Right: Proof the market pays ── */}
            <div className="ps-stack" style={{
              gap: "clamp(12px, 1.5vw, 24px)",
              justifyContent: "center",
            }}>
              <div>
                <p className="ps-label" style={{
                  color: "#ff4800",
                  letterSpacing: "0.1em",
                  fontSize: "clamp(7px, 0.8vw, 13px)",
                }}>
                  PROVEN DEMAND
                </p>
              </div>

              <div>
                <span className="ps-stat" style={{ color: "#151515" }}>$300M+</span>
                <p className="ps-body" style={{ color: "#7f7f7f", marginTop: "clamp(2px, 0.3vw, 6px)" }}>
                  combined annual revenue across 4 privacy-first companies
                </p>
              </div>

              <div style={{
                display: "flex",
                gap: "clamp(8px, 1vw, 18px)",
                flexWrap: "wrap",
                alignItems: "baseline",
              }}>
                {["Proton", "Brave", "DuckDuckGo", "Signal"].map((name, i) => (
                  <span key={name} style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "clamp(8px, 1vw, 18px)",
                  }}>
                    <span className="ps-body" style={{ fontWeight: 700 }}>{name}</span>
                    {i < 3 && (
                      <span style={{ color: "#d4d4d4", fontSize: "clamp(8px, 0.9vw, 14px)" }}>&middot;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
