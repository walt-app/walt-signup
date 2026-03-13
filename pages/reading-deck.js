import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import DeckLayout from "../components/DeckLayout";

/* ─── Slide 1: Title ───────────────────────────────────────────────────────── */

function SlideTitle() {
  return (
    <div className="ps ps--accent">
      <div className="ps-pad ps-pad--center">
        <h1 className="ps-logo">Walt</h1>
        <div className="ps-divider" />
        <p className="ps-subtitle">Europe reclaims tap-to-pay</p>
      </div>
    </div>
  );
}

/* ─── Slide 2: The Problem ────────────────────────────────────────────────── */

function Ref({ n }) {
  return <sup style={{ fontSize: "0.55em", fontWeight: 600, color: "var(--orange-primary)", marginLeft: "1px" }}>{n}</sup>;
}

function SlideProblem() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <p className="ps-lead">
          Tap-to-pay in Europe lives with Google and Apple
        </p>
        <div className="ps-content">
          <div className="ps-split" style={{ flex: "none" }}>
            <div className="ps-stack">
              <div>
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>200&ndash;250M</p>
                <p className="ps-body">Europeans use Apple Pay or Google Wallet for in-store purchases<Ref n={1} /></p>
              </div>
              <div>
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>&euro;700B+</p>
                <p className="ps-body">in mobile wallet payments at European point-of-sale terminals (2024)<Ref n={2} /></p>
              </div>
              <p className="ps-body" style={{ color: "#7f7f7f", marginTop: "clamp(4px, 0.5vw, 8px)" }}>
                &lt;0.4% combined market share for everyone else.<Ref n={3} /> No legitimate tap-to-pay alternative exists for either iPhone or Android.
              </p>
            </div>
            <div className="ps-stack">
              <div className="ps-card">
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Apple Pay</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">Charges European banks ~0.05% per transaction<Ref n={4} /></li>
                  <li className="ps-bullet">Extracts &euro;300&ndash;500M annually from European transactions<Ref n={5} /></li>
                </ul>
              </div>
              <div className="ps-card">
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Google Wallet</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">Harvests every transaction for ad profiles and selling to 3rd parties<Ref n={6} /></li>
                  <li className="ps-bullet">Estimated &euro;1B+ annually in ad value from European payment data<Ref n={7} /><Ref n={8} /></li>
                </ul>
              </div>
              <p className="ps-body" style={{ fontWeight: 600, color: "#151515", marginTop: "clamp(4px, 0.5vw, 8px)" }}>
                The only alternative is to go back to physical cards or cash. For Europeans who care about privacy, there is no tap-to-pay option at all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: Solution ───────────────────────────────────────────────────── */

function SlideSolution() {
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

/* ─── Slide 4: Why Now? ───────────────────────────────────────────────────── */

function SlideWhyNow() {
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

/* ─── Slide 5: Product Deep-Dive ──────────────────────────────────────────── */

function SlideProduct() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Product Deep-Dive</h2>
      </div>
    </div>
  );
}

/* ─── Slide 6: Challenges ─────────────────────────────────────────────────── */

function SlideChallenges() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Challenges</h2>
        <p className="ps-lead">
          The infrastructure for third-party phone wallets is still being built
        </p>
        <div className="ps-content" style={{ gap: "clamp(16px, 2.2vw, 36px)" }}>
          {/* ── Concept: chain diagram + explanation ── */}
          <div>
            {/* Chain diagram — centered with connecting lines */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              marginBottom: "clamp(10px, 1.4vw, 22px)",
            }}>
              {/* Walt — ready */}
              <span style={{
                padding: "clamp(8px, 0.9vw, 16px) clamp(16px, 2vw, 36px)",
                background: "var(--orange-primary)",
                color: "#fff",
                borderRadius: "clamp(5px, 0.5vw, 10px)",
                fontSize: "clamp(9px, 1.1vw, 18px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>Walt</span>

              {/* Line connector */}
              <div style={{ width: "clamp(24px, 3.5vw, 56px)", height: "clamp(1.5px, 0.15vw, 2.5px)", background: "#d4d4d4", flexShrink: 0 }} />

              {/* Vertical stack — tokenization provider (gap), Visa/MC and Banks (in place) */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(4px, 0.5vw, 8px)",
                flexShrink: 0,
              }}>
                <span style={{
                  padding: "clamp(7px, 0.8vw, 14px) clamp(12px, 1.4vw, 24px)",
                  background: "transparent",
                  border: "clamp(1.5px, 0.15vw, 2.5px) dashed #bbb",
                  borderRadius: "clamp(5px, 0.5vw, 10px)",
                  color: "#999",
                  fontSize: "clamp(9px, 1.1vw, 18px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textAlign: "center",
                }}>Tokenization provider</span>
                <span style={{
                  padding: "clamp(8px, 0.9vw, 16px) clamp(12px, 1.4vw, 24px)",
                  background: "#151515",
                  color: "#fff",
                  borderRadius: "clamp(5px, 0.5vw, 10px)",
                  fontSize: "clamp(9px, 1.1vw, 18px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textAlign: "center",
                }}>Visa / Mastercard</span>
                <span style={{
                  padding: "clamp(8px, 0.9vw, 16px) clamp(12px, 1.4vw, 24px)",
                  background: "#151515",
                  color: "#fff",
                  borderRadius: "clamp(5px, 0.5vw, 10px)",
                  fontSize: "clamp(9px, 1.1vw, 18px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textAlign: "center",
                }}>Issuing banks</span>
              </div>

              {/* Line connector */}
              <div style={{ width: "clamp(24px, 3.5vw, 56px)", height: "clamp(1.5px, 0.15vw, 2.5px)", background: "#d4d4d4", flexShrink: 0 }} />

              {/* Revenue / Users — blocked destination */}
              <span style={{
                padding: "clamp(8px, 0.9vw, 16px) clamp(16px, 2vw, 36px)",
                background: "var(--orange-primary)",
                color: "#fff",
                borderRadius: "clamp(5px, 0.5vw, 10px)",
                fontSize: "clamp(9px, 1.1vw, 18px)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                opacity: 0.45,
                flexShrink: 0,
              }}>Revenue / Users</span>
            </div>
            <p className="ps-body" style={{ maxWidth: "88%" }}>
              To enable tap-to-pay, Walt needs a <strong style={{ color: "#151515" }}>tokenization provider</strong>: a company certified by Visa and Mastercard that converts card numbers into secure payment tokens, connecting a wallet to the banking system. The EU opened iPhone NFC to third parties in 2024, but no provider yet offers a production-ready SDK for independent phone wallets.
            </p>
          </div>

          {/* ── Three providers ── */}
          <div className="ps-cols-3">
            {/* IDEMIA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 0.7vw, 12px)" }}>
              <div>
                <p className="ps-card-title">IDEMIA</p>
                <p className="ps-label">Full SDK, enterprise only</p>
              </div>
              <p className="ps-body">
                World&rsquo;s largest independent token service provider. Launched Tap&nbsp;&amp;&nbsp;Pay SDKs for both iOS and Android.
              </p>
              <p className="ps-body" style={{ color: "var(--orange-primary)", fontWeight: 600 }}>
                Will not engage with early-stage startups.
              </p>
            </div>

            {/* Fidesmo */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(6px, 0.7vw, 12px)",
              borderLeft: "1.5px solid #e5e5e5",
              paddingLeft: "clamp(10px, 1.2vw, 20px)",
            }}>
              <div>
                <p className="ps-card-title">Fidesmo</p>
                <p className="ps-label">860+ banks, no phone SDK</p>
              </div>
              <p className="ps-body">
                Certified Token Requestor for Visa and Mastercard with pre-approved issuers across Europe, including key Nordic banks.
              </p>
              <p className="ps-body" style={{ color: "var(--orange-primary)", fontWeight: 600 }}>
                Wearables only.
              </p>
            </div>

            {/* Paymentology */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(6px, 0.7vw, 12px)",
              borderLeft: "1.5px solid #e5e5e5",
              paddingLeft: "clamp(10px, 1.2vw, 20px)",
            }}>
              <div>
                <p className="ps-card-title">Paymentology</p>
                <p className="ps-label">HCE SDK, not production-ready</p>
              </div>
              <p className="ps-body">
                Global card issuing processor. Subsidiary MeaWallet provides an HCE SDK and tokenization infrastructure.
              </p>
              <p className="ps-body" style={{ color: "var(--orange-primary)", fontWeight: 600 }}>
                Phone wallet SDK not yet production-ready for third-party tap-to-pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 7: The Market ─────────────────────────────────────────────────── */

function SlideMarket() {
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

/* ─── Slide 8: Competitors ────────────────────────────────────────────────── */

function SlideCompetitors() {
  const rows = [
    { label: "NFC tap-to-pay is core product", walt: "check", wero: "", vipps: "" },
    { label: "NFC tap-to-pay live today", walt: "", wero: "", vipps: "check-limited" },
    { label: "Private, no data collection", walt: "check", wero: "", vipps: "" },
    { label: "User base", walt: "0", wero: "50M", vipps: "12.5M" },
    { label: "Revenue model", walt: "\u20AC10/yr subscription", wero: "Merchant pays fee", vipps: "Merchant pays fee" },
    { label: "Geographic focus", walt: "Europe", wero: "DE, FR, BE", vipps: "Nordics" },
  ];

  const Check = ({ orange }) => (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "clamp(22px, 2.4vw, 38px)",
      height: "clamp(22px, 2.4vw, 38px)",
      borderRadius: "50%",
      background: orange ? "var(--orange-primary)" : "#151515",
      flexShrink: 0,
    }}>
      <svg width="55%" height="55%" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5L6.5 12L13 4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const Dash = () => (
    <span style={{
      display: "inline-block",
      width: "clamp(14px, 1.4vw, 22px)",
      height: "2px",
      background: "#ccc",
      borderRadius: "1px",
    }} />
  );

  const renderCell = (value, isWalt) => {
    if (value === "check") return <Check orange={isWalt} />;
    if (value === "check-limited") {
      return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "clamp(4px, 0.4vw, 8px)" }}>
          <Check orange={false} />
          <span style={{
            fontSize: "clamp(7px, 0.75vw, 12px)",
            fontWeight: 500,
            color: "#999",
            letterSpacing: "0.02em",
          }}>Limited</span>
        </span>
      );
    }
    if (value === "") return <Dash />;
    return (
      <span style={{
        fontSize: "clamp(9px, 1vw, 16px)",
        fontWeight: isWalt ? 600 : 400,
        color: isWalt ? "#151515" : "#555",
      }}>{value}</span>
    );
  };

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Competitors</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
          Competitors offering tap-to-pay as a secondary feature
        </p>
        <div className="ps-content" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2.4fr 1fr 1fr 1fr",
            width: "100%",
          }}>
            {/* Header row */}
            <div style={{ padding: "clamp(10px, 1.4vw, 24px) clamp(12px, 1.6vw, 28px)" }} />
            {["Walt", "Wero", "Vipps"].map((name) => (
              <div key={name} style={{
                padding: "clamp(10px, 1.4vw, 24px) clamp(8px, 1vw, 18px)",
                textAlign: "center",
                fontSize: "clamp(12px, 1.4vw, 24px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: name === "Walt" ? "var(--orange-primary)" : "#151515",
                borderBottom: name === "Walt" ? "3px solid var(--orange-primary)" : "1px solid #ddd",
                background: name === "Walt" ? "rgba(255, 72, 0, 0.04)" : "transparent",
              }}>{name}</div>
            ))}

            {/* Data rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const border = isLast ? "none" : "1px solid #eee";
              return (
                <Fragment key={row.label}>
                  <div style={{
                    padding: "clamp(10px, 1.2vw, 20px) clamp(12px, 1.6vw, 28px)",
                    fontSize: "clamp(9px, 1.05vw, 17px)",
                    fontWeight: 500,
                    color: "#333",
                    borderBottom: border,
                    display: "flex",
                    alignItems: "center",
                  }}>{row.label}</div>
                  {[row.walt, row.wero, row.vipps].map((val, j) => (
                    <div key={j} style={{
                      padding: "clamp(10px, 1.2vw, 20px) clamp(8px, 1vw, 18px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: border,
                      background: j === 0 ? "rgba(255, 72, 0, 0.04)" : "transparent",
                    }}>
                      {renderCell(val, j === 0)}
                    </div>
                  ))}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 9: Traction & Roadmap ─────────────────────────────────────────── */

function SlideTraction() {
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

/* ─── Slide 10: The Ask ───────────────────────────────────────────────────── */

function SlideTheAsk() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Ask</h2>
      </div>
    </div>
  );
}

/* ─── Slide 11: Closing ───────────────────────────────────────────────────── */

function SlideClosing() {
  return (
    <div className="ps ps--accent">
      <div className="ps-pad ps-pad--center">
        <h1 className="ps-logo">Walt</h1>
        <div className="ps-divider" />
        <p className="ps-subtitle">Europe reclaims tap-to-pay</p>
        <div style={{ marginTop: "clamp(16px, 2.5vw, 40px)" }}>
          <p className="ps-body" style={{ color: "#151515" }}>Cole Bittel, Founder</p>
          <p className="ps-body" style={{ color: "#151515" }}>cole@walt.is</p>
          <p className="ps-body" style={{ color: "#151515" }}>walt.is</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 12: References ────────────────────────────────────────────────── */

function SlideReferences() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">References</h2>
        <div className="ps-content">
          <div className="ps-stack ps-gap-sm" style={{ maxWidth: "85%" }}>
            <ol style={{ margin: 0, paddingLeft: "clamp(14px, 1.5vw, 24px)", display: "flex", flexDirection: "column", gap: "clamp(4px, 0.5vw, 8px)" }}>
              <li className="ps-body">Flagship Advisory Partners, &ldquo;6 Years After the EU Launch of Apple Pay: Over 44% of Europeans Use Mobile Wallets&rdquo; (2023); Mordor Intelligence, &ldquo;Europe Mobile Payments Market&rdquo; (2025)</li>
              <li className="ps-body">Worldpay Global Payments Report 2025 (digital wallets = 14% of European POS value across 14 markets incl. UK); ECB SPACE 2024 (7% of POS value in euro area via mobile devices); ECB Payment Statistics H2 2024</li>
              <li className="ps-body">CoinLaw, &ldquo;Apple Pay vs Google Pay Statistics&rdquo; (2026); StatCounter mobile payment share data</li>
              <li className="ps-body">Swiss antitrust investigation via Finews (~0.05&ndash;0.12% issuer fee); EU Interchange Fee Regulation 2015/751 constraints; Walt market research estimates</li>
              <li className="ps-body">Oliver Wyman, &ldquo;Third-Party Access To Apple Pay Could Alter Mobile Payments&rdquo; (February 2025). Covers all Apple Pay channels: NFC tap-to-pay, in-app, and web commerce. POS-only share is ~&euro;50&ndash;90M.</li>
              <li className="ps-body">DOJ v. Apple antitrust complaint (March 2024); WSJ reporting on Google ad-profile monetization of payment data</li>
              <li className="ps-body">Alphabet 10-K (2024): EMEA revenue $102B; Proton data valuation methodology estimates &euro;15&ndash;30 ad value per European wallet user per year</li>
              <li className="ps-body">European Google Wallet adoption estimates (40&ndash;80M active users) derived from Statista country adoption surveys and PYMNTS tap-to-pay usage data</li>
              <li className="ps-body">European Commission, Case AT.40452, Apple mobile payments (2020&ndash;2024); Apple restricted iPhone NFC to Apple Pay from 2014 until iOS 17.4 (March 2024)</li>
              <li className="ps-body">Regulation (EU) 2024/1183 amending Regulation (EU) No 910/2014 (eIDAS 2.0), establishing the European Digital Identity Wallet framework (entered into force May 20, 2024)</li>
              <li className="ps-body">Vipps MobilePay press release (December 9, 2024); Thales and Vipps, &ldquo;NFC Payments on iOS reaching one million users&rdquo; (May 2025)</li>
              <li className="ps-body">Vipps MobilePay first contactless NFC transaction via Apple HCE APIs (January 2025)</li>
              <li className="ps-body">Proton, Tuta, Brave, and Mullvad adoption data; Walt European &ldquo;Privacy Active&rdquo; market sizing research (2025)</li>
              <li className="ps-body">Proton AG annual report (2024), Brave Software financial disclosures (2024), DuckDuckGo revenue estimates (2024), Signal Foundation Form 990 (2024)</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide Array ──────────────────────────────────────────────────────────── */

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "Solution", render: SlideSolution },
  { title: "Why Now?", render: SlideWhyNow },
  { title: "Product Deep-Dive", render: SlideProduct },
  { title: "Challenges", render: SlideChallenges },
  { title: "The Market", render: SlideMarket },
  { title: "Competitors", render: SlideCompetitors },
  { title: "Traction & Roadmap", render: SlideTraction },
  { title: "The Ask", render: SlideTheAsk },
  { title: "Walt", render: SlideClosing },
  { title: "References", render: SlideReferences },
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function ReadingDeck() {
  return (
    <DeckLayout
      slides={SLIDES}
      head={
        <Head>
          <title>Walt Reading Deck - Detailed Business Overview</title>
          <meta
            name="description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, competitive landscape, and roadmap."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://walt.is/reading-deck" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://walt.is/reading-deck" />
          <meta property="og:title" content="Walt Reading Deck" />
          <meta
            property="og:description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, and roadmap."
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://walt.is/reading-deck" />
          <meta property="twitter:title" content="Walt Reading Deck" />
          <meta
            property="twitter:description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, and roadmap."
          />

          <link rel="icon" href="/favicon.ico" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Walt Reading Deck",
                "description": "Walt's detailed reading deck for investors and partners",
                "url": "https://walt.is/reading-deck",
                "publisher": {
                  "@type": "Organization",
                  "name": "Walt",
                  "url": "https://walt.is"
                }
              })
            }}
          />
        </Head>
      }
      activeDeck="reading-deck"
      downloads={
        <>
          <a
            href="/reading-deck/reading-deck.pdf"
            className="pitch-download-button outline"
            download="Walt-Reading-Deck.pdf"
          >
            Download PDF
          </a>
          <a
            href="/reading-deck/walt-reading-deck.pptx"
            className="pitch-download-button outline"
            download="Walt-Reading-Deck.pptx"
          >
            Download PowerPoint
          </a>
        </>
      }
      footerVariant="reading-deck"
    />
  );
}
