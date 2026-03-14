import { Fragment } from "react";
import Ref from "../shared/Ref";

export default function SlideWhyNow() {
  const events = [
    {
      year: "2014\u20132024",
      title: "iPhone NFC locked",
      desc: <>Apple restricts iPhone NFC exclusively to Apple Pay. No third-party wallet can offer tap-to-pay on iPhone for a decade<Ref n={9} /></>,
      era: "before",
    },
    {
      year: "2024",
      title: "EUDI wallet mandate",
      desc: <>EU regulation mandates privacy-by-design digital wallets across all 27 member states<Ref n={10} /></>,
      era: "after",
    },
    {
      year: "Dec 2024",
      title: "First alternative launches",
      desc: <>Vipps MobilePay goes live as the first Apple Pay alternative on iPhone. 200K cards activated in 24 hours<Ref n={11} /></>,
      era: "after",
    },
    {
      year: "Jan 2025",
      title: "First NFC transaction",
      desc: <>First third-party contactless payment completed on iPhone via the new NFC APIs<Ref n={12} /></>,
      era: "after",
    },
    {
      year: "Mar 2025",
      title: "Walt",
      desc: <>The first entirely private tap-to-pay wallet enters the market</>,
      era: "launch",
    },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Why Now?</h2>
        <p className="ps-lead">
          EU regulation opens tap-to-pay to third-party wallets
        </p>
        <div className="ps-content">
          {/* Timeline: 3-row grid (above labels, track, below labels) × 5 columns */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "1fr auto 1fr",
            flex: 1,
            position: "relative",
          }}>
            {/* Horizontal track — short gray lead-in → orange from first milestone onward */}
            <div style={{
              gridColumn: "1 / -1",
              gridRow: "2",
              height: "clamp(2px, 0.18vw, 3px)",
              background: "linear-gradient(to right, #d5d5d5 0%, #d5d5d5 18%, var(--orange-primary) 28%, var(--orange-primary) 100%)",
              borderRadius: "2px",
            }} />

            {events.map((event, i) => {
              const above = i % 2 === 0;
              const col = i + 1;
              const isBefore = event.era === "before";
              const isLaunch = event.era === "launch";
              const dotSize = isLaunch
                  ? "clamp(10px, 0.9vw, 15px)"
                  : "clamp(7px, 0.65vw, 11px)";

              return (
                <Fragment key={i}>
                  {/* Dot on track — skip for era-length events */}
                  {!isBefore && (
                    <div style={{
                      gridColumn: col,
                      gridRow: 2,
                      width: dotSize,
                      height: dotSize,
                      borderRadius: "50%",
                      background: "var(--orange-primary)",
                      justifySelf: "center",
                      alignSelf: "center",
                      zIndex: 1,
                      border: "clamp(2px, 0.18vw, 3px) solid #fff",
                    }} />
                  )}

                  {/* Event label — alternates above and below the track */}
                  <div style={{
                    gridColumn: col,
                    gridRow: above ? 1 : 3,
                    alignSelf: above ? "end" : "start",
                    textAlign: "center",
                    padding: above
                      ? "0 clamp(2px, 0.3vw, 6px) clamp(10px, 1.2vw, 20px)"
                      : "clamp(10px, 1.2vw, 20px) clamp(2px, 0.3vw, 6px) 0",
                  }}>
                    <p style={{
                      fontSize: "clamp(7px, 0.75vw, 12px)",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: isBefore ? "#aaa" : "#151515",
                      margin: "0 0 clamp(2px, 0.25vw, 4px)",
                    }}>{event.year}</p>
                    <p style={{
                      fontSize: "clamp(8px, 0.9vw, 14px)",
                      fontWeight: 700,
                      color: "#151515",
                      margin: "0 0 clamp(1px, 0.15vw, 3px)",
                      lineHeight: 1.3,
                    }}>{event.title}</p>
                    <p style={{
                      fontSize: "clamp(6.5px, 0.7vw, 11px)",
                      fontWeight: 400,
                      color: "#7f7f7f",
                      margin: 0,
                      lineHeight: 1.45,
                    }}>{event.desc}</p>
                  </div>
                </Fragment>
              );
            })}
          </div>

          {/* Conclusion */}
          <p className="ps-body" style={{
            fontWeight: 600,
            textAlign: "center",
            maxWidth: "85%",
            alignSelf: "center",
          }}>
            For the first time, a completely private tap-to-pay wallet is possible on every
            smartphone in Europe.
          </p>
        </div>
      </div>
    </div>
  );
}
