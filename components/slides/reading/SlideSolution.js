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
            gridTemplateColumns: "0.8fr 1fr",
            gap: "clamp(16px, 2.5vw, 40px)",
            alignItems: "start",
            height: "100%",
          }}>
            {/* Key differentiators */}
            <div className="ps-stack" style={{ gap: "clamp(6px, 0.8vw, 14px)" }}>
              <div className="ps-card" style={{ padding: "clamp(8px, 1.1vw, 18px) clamp(10px, 1.4vw, 24px)" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>
                  Privacy by design
                </p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">
                    Transaction data stays on the device. No centralized database, no server-side logs
                  </li>
                  <li className="ps-bullet">
                    No ad profiling, no data harvesting, no third-party sharing
                  </li>
                </ul>
              </div>
              <div className="ps-card" style={{ padding: "clamp(8px, 1.1vw, 18px) clamp(10px, 1.4vw, 24px)" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>
                  Built for Europe
                </p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">
                    Founded in Copenhagen to establish European sovereignty
                  </li>
                  <li className="ps-bullet">
                    No dependency on US cloud providers for core infrastructure
                  </li>
                </ul>
              </div>
              <div className="ps-card" style={{ padding: "clamp(8px, 1.1vw, 18px) clamp(10px, 1.4vw, 24px)" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>
                  Simplicity
                </p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">
                    Entire app is tap-to-pay. One workflow, nothing else
                  </li>
                  <li className="ps-bullet">
                    One pricing model, no tiers, no extra features to upsell
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 screens: user journey */}
            <div style={{
              display: "flex",
              justifyContent: "center",
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
                    gap: "clamp(4px, 0.5vw, 8px)",
                  }}
                >
                  <div
                    className="ps-solution-phone"
                    style={{ width: "clamp(85px, 11vw, 185px)" }}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={720}
                      height={1688}
                      sizes="145px"
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
          </div>
        </div>
      </div>
    </div>
  );
}
