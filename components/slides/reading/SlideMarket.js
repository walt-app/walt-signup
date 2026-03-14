import Ref from "../shared/Ref";

export default function SlideMarket() {
  const companies = [
    { name: "Proton", metric: "100M+", desc: "accounts", rev: "~$97.5M" },
    { name: "Brave", metric: "101M", desc: "MAU", rev: "$100M+" },
    { name: "DuckDuckGo", metric: "100M", desc: "daily searches", rev: "$100M+" },
    { name: "Signal", metric: "70M+", desc: "MAU", rev: "~$25.8M" },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Market</h2>
        <p className="ps-lead">Privacy is a proven, paying market</p>
        <div className="ps-content">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "clamp(16px, 2.8vw, 44px)",
            alignItems: "start",
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
                  <text x="200" y="56" textAnchor="middle" fontSize="9" fill="#7f7f7f">privacy-active Europeans &middot; &euro;1.0&ndash;1.5B</text>

                  {/* SAM */}
                  <polygon points="60,75 340,75 285,140 115,140" fill="rgba(255,72,0,0.20)" stroke="rgba(255,72,0,0.32)" strokeWidth="1.5" />
                  <text x="200" y="92" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#999" letterSpacing="0.1em">SERVICEABLE MARKET</text>
                  <text x="200" y="115" textAnchor="middle" fontSize="20" fontWeight="900" fill="#151515" letterSpacing="-0.02em">50M</text>
                  <text x="200" y="131" textAnchor="middle" fontSize="9" fill="#7f7f7f">privacy-conscious Europeans &middot; &euro;500M</text>

                  {/* SOM */}
                  <polygon points="115,150 285,150 260,215 140,215" fill="#ff4800" />
                  <text x="200" y="167" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#151515" letterSpacing="0.1em">TARGET MARKET</text>
                  <text x="200" y="190" textAnchor="middle" fontSize="18" fontWeight="900" fill="#151515" letterSpacing="-0.02em">25M</text>
                  <text x="200" y="206" textAnchor="middle" fontSize="9" fill="#151515" opacity="0.65">European focus &middot; &euro;250M ARR</text>
                </g>
              </svg>
            </div>

            {/* ── Right: Proof the market pays ── */}
            <div className="ps-stack" style={{ gap: "clamp(8px, 1vw, 16px)" }}>
              <div>
                <p className="ps-label" style={{
                  color: "#ff4800",
                  letterSpacing: "0.1em",
                  fontSize: "clamp(7px, 0.8vw, 13px)",
                }}>
                  PROVEN DEMAND
                </p>
                <p className="ps-body" style={{ fontWeight: 600, color: "#151515", marginTop: "clamp(4px, 0.4vw, 8px)" }}>
                  3 privacy companies have crossed $100M in annual revenue<Ref n={14} />
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Table header */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1.3fr 1.5fr 1fr",
                  padding: "clamp(4px, 0.5vw, 8px) 0",
                  borderBottom: "1.5px solid #d4d4d4",
                }}>
                  {["Company", "Scale", "Revenue"].map((h, i) => (
                    <span key={h} style={{
                      fontSize: "clamp(6px, 0.65vw, 10px)",
                      fontWeight: 700,
                      color: "#999",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textAlign: i === 2 ? "right" : "left",
                    }}>{h}</span>
                  ))}
                </div>
                {/* Table rows */}
                {companies.map((c, i) => (
                  <div key={c.name} style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1.5fr 1fr",
                    padding: "clamp(5px, 0.65vw, 11px) 0",
                    borderBottom: i < companies.length - 1 ? "1px solid #eee" : "none",
                    alignItems: "baseline",
                  }}>
                    <span className="ps-body" style={{ fontWeight: 600 }}>{c.name}</span>
                    <span className="ps-body">
                      <span style={{ fontWeight: 700 }}>{c.metric}</span>{" "}
                      <span style={{ color: "#7f7f7f", fontSize: "clamp(7px, 0.75vw, 12px)" }}>{c.desc}</span>
                    </span>
                    <span className="ps-body" style={{ fontWeight: 700, color: "#ff4800", textAlign: "right" }}>{c.rev}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
