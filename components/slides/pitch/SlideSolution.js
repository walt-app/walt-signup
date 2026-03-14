import Image from "next/image";

export default function SlideSolution() {
  const screens = [
    { src: "/promo-screen.jpg", alt: "Walt privacy promise screen", label: "Download" },
    { src: "/add-card.jpg", alt: "Add a card to Walt", label: "Add card" },
    { src: "/intro-screen.jpg", alt: "Walt wallet ready to tap", label: "Tap to pay" },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Solution</h2>
        <p className="ps-lead">
          A European, privacy-first alternative to Apple Pay and Google Wallet
        </p>
        <div className="ps-content">
          <div style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "clamp(24px, 4vw, 64px)",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "90%",
            margin: "0 auto",
          }}>
            {/* Left: 3 phone screens */}
            <div style={{
              display: "flex",
              gap: "clamp(6px, 0.8vw, 14px)",
              alignItems: "flex-start",
            }}>
              {screens.map((screen) => (
                <div
                  key={screen.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "clamp(6px, 0.7vw, 12px)",
                  }}
                >
                  <div
                    className="ps-solution-phone"
                    style={{ width: "clamp(100px, 13vw, 220px)" }}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={720}
                      height={1688}
                      sizes="180px"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  <p className="ps-solution-tagline">{screen.label}</p>
                </div>
              ))}
            </div>

            {/* Right: differentiators */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(20px, 2.8vw, 44px)",
            }}>
              {[
                { heading: "Privacy by design", detail: "No data collection, no ad profiling, no third-party sharing" },
                { heading: "Built for Europe", detail: "Founded in Copenhagen. No dependency on US infrastructure" },
                { heading: "Simple", detail: "One workflow, one price. Just tap-to-pay" },
              ].map((item) => (
                <div key={item.heading}>
                  <div style={{
                    width: "clamp(20px, 2.2vw, 36px)",
                    height: "clamp(2px, 0.2vw, 3px)",
                    background: "#ff4800",
                    marginBottom: "clamp(6px, 0.7vw, 12px)",
                  }} />
                  <p style={{
                    fontSize: "clamp(12px, 1.5vw, 24px)",
                    fontWeight: 700,
                    color: "#151515",
                    letterSpacing: "-0.02em",
                    margin: "0 0 clamp(2px, 0.25vw, 4px)",
                  }}>{item.heading}</p>
                  <p style={{
                    fontSize: "clamp(8px, 0.9vw, 15px)",
                    fontWeight: 400,
                    color: "#7f7f7f",
                    margin: 0,
                    lineHeight: 1.45,
                  }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
