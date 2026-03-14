import Ref from "../shared/Ref";

export default function SlideMarket() {
  const companies = [
    { name: "Proton", eu: "40M", euDesc: "European accounts", rev: "$97M", revNote: "(2024)" },
    { name: "Brave", eu: "25M", euDesc: "European MAU", rev: "$100M", revNote: "(annualized)" },
    { name: "DuckDuckGo", eu: "20M", euDesc: "European daily searches", rev: "$150M", revNote: "" },
    { name: "Signal", eu: "15M", euDesc: "European MAU", rev: "$26M", revNote: "(donations)" },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Market</h2>
        <p className="ps-lead">Privacy is a proven, paying market</p>
        <div className="ps-content">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(24px, 3.5vw, 56px)",
            alignItems: "center",
          }}>

            {/* ── Left: Target Market + Pricing ── */}
            <div className="ps-stack" style={{ gap: "clamp(12px, 1.5vw, 24px)", alignItems: "center", textAlign: "center" }}>
              <p className="ps-label" style={{
                color: "#ff4800",
                letterSpacing: "0.1em",
                fontSize: "clamp(7px, 0.8vw, 13px)",
              }}>
                TARGET MARKET
              </p>

              <div>
                <span style={{
                  fontSize: "clamp(36px, 5.5vw, 88px)",
                  fontWeight: 900,
                  color: "#151515",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  display: "block",
                }}>25M</span>
                <p className="ps-body" style={{ color: "#7f7f7f", marginTop: "clamp(2px, 0.3vw, 6px)" }}>
                  privacy-conscious Europeans
                </p>
              </div>

              {/* €10/year pricing badge */}
              <div style={{
                background: "#ff4800",
                borderRadius: "clamp(8px, 0.9vw, 14px)",
                padding: "clamp(10px, 1.2vw, 20px) clamp(16px, 2vw, 32px)",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <span style={{
                  fontSize: "clamp(7px, 0.7vw, 11px)",
                  fontWeight: 700,
                  color: "#151515",
                  letterSpacing: "0.1em",
                  marginBottom: "clamp(2px, 0.2vw, 4px)",
                }}>WALT MEMBERSHIP</span>
                <span style={{
                  fontSize: "clamp(24px, 3.2vw, 52px)",
                  fontWeight: 900,
                  color: "#151515",
                  lineHeight: 1,
                }}>&euro;10</span>
                <span style={{
                  fontSize: "clamp(10px, 1.1vw, 18px)",
                  fontWeight: 500,
                  color: "#151515",
                }}>/year</span>
              </div>

              <p style={{
                fontSize: "clamp(14px, 1.8vw, 28px)",
                fontWeight: 700,
                color: "#151515",
                lineHeight: 1.2,
              }}>&euro;250M ARR</p>
            </div>

            {/* ── Right: European privacy market proof ── */}
            <div className="ps-stack" style={{ gap: "clamp(10px, 1.2vw, 20px)" }}>
              <div>
                <p className="ps-label" style={{
                  color: "#ff4800",
                  letterSpacing: "0.1em",
                  fontSize: "clamp(7px, 0.8vw, 13px)",
                }}>
                  PROVEN DEMAND IN EUROPE
                </p>
                <p className="ps-body" style={{ fontWeight: 600, color: "#151515", marginTop: "clamp(4px, 0.4vw, 8px)" }}>
                  Privacy companies already serve tens of millions of Europeans<Ref n={14} />
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Table header */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.6fr 1.1fr",
                  padding: "clamp(4px, 0.5vw, 8px) 0",
                  borderBottom: "1.5px solid #d4d4d4",
                }}>
                  {["Company", "European Users", "Revenue"].map((h, i) => (
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
                    gridTemplateColumns: "1fr 1.6fr 1.1fr",
                    padding: "clamp(6px, 0.7vw, 12px) 0",
                    borderBottom: i < companies.length - 1 ? "1px solid #eee" : "none",
                    alignItems: "baseline",
                  }}>
                    <span className="ps-body" style={{ fontWeight: 600 }}>{c.name}</span>
                    <span className="ps-body">
                      <span style={{ fontWeight: 700 }}>{c.eu}</span>{" "}
                      <span style={{ color: "#7f7f7f", fontSize: "clamp(7px, 0.75vw, 12px)" }}>{c.euDesc}</span>
                    </span>
                    <span className="ps-body" style={{ fontWeight: 700, color: "#ff4800", textAlign: "right" }}>
                      {c.rev}{" "}
                      {c.revNote && <span style={{ fontWeight: 400, color: "#999", fontSize: "clamp(6px, 0.6vw, 10px)" }}>{c.revNote}</span>}
                    </span>
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
