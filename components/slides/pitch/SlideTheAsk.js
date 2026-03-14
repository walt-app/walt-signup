export default function SlideTheAsk() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Ask</h2>
        <p className="ps-lead">
          Expand the investor network for Q3/Q4 2026
        </p>
        <div className="ps-content">
          <div style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "clamp(16px, 2.8vw, 44px)",
            alignItems: "center",
            flex: 1,
          }}>

            {/* ── Left: The Ask ── */}
            <div className="ps-stack" style={{ gap: "clamp(10px, 1.3vw, 22px)" }}>
              <div>
                <p className="ps-label" style={{
                  color: "#ff4800",
                  letterSpacing: "0.1em",
                  fontSize: "clamp(7px, 0.8vw, 13px)",
                  marginBottom: "clamp(4px, 0.4vw, 8px)",
                }}>
                  TIMELINE
                </p>
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>Q3/Q4 2026</p>
                <p className="ps-body" style={{ color: "#7f7f7f", marginTop: "clamp(2px, 0.2vw, 4px)" }}>
                  From beta to scaled distribution
                </p>
              </div>
              <div>
                <p className="ps-label" style={{
                  color: "#999",
                  letterSpacing: "0.08em",
                  marginBottom: "clamp(6px, 0.6vw, 10px)",
                }}>
                  WHAT WE NEED
                </p>
                <p className="ps-body">
                  Investor introductions in <strong style={{ color: "#151515" }}>privacy</strong>, <strong style={{ color: "#151515" }}>open platforms</strong>, and <strong style={{ color: "#151515" }}>European digital sovereignty</strong>.
                </p>
              </div>
            </div>

            {/* ── Right: Use of resources ── */}
            <div>
              <p className="ps-label" style={{
                color: "#ff4800",
                letterSpacing: "0.1em",
                fontSize: "clamp(7px, 0.8vw, 13px)",
                marginBottom: "clamp(8px, 1vw, 16px)",
              }}>
                USE OF RESOURCES
              </p>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(10px, 1.2vw, 20px)",
              }}>
                <div className="ps-card" style={{
                  padding: "clamp(10px, 1.4vw, 24px) clamp(12px, 1.6vw, 28px)",
                }}>
                  <p className="ps-label" style={{ marginBottom: "clamp(3px, 0.3vw, 6px)" }}>TOKEN REQUESTOR</p>
                  <p className="ps-card-title" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>Tokenization provider</p>
                  <p className="ps-body">
                    Activate Visa and Mastercard tokenization. The missing link to live tap-to-pay.
                  </p>
                </div>
                <div className="ps-card" style={{
                  padding: "clamp(10px, 1.4vw, 24px) clamp(12px, 1.6vw, 28px)",
                }}>
                  <p className="ps-label" style={{ marginBottom: "clamp(3px, 0.3vw, 6px)" }}>DISTRIBUTION</p>
                  <p className="ps-card-title" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>Proton &amp; Brave advertising</p>
                  <p className="ps-body">
                    Campaigns on privacy-aligned platforms. 200M+ privacy-conscious users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
