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
          <div className="ps-split">
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
              <div className="ps-card" style={{ background: "#151515", color: "#fff" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Apple Pay</p>
                <ul className="ps-bullets" style={{ color: "#ccc" }}>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Charges European banks ~0.05% per transaction<Ref n={4} /></li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Extracts &euro;300&ndash;500M annually from European transactions<Ref n={5} /></li>
                </ul>
              </div>
              <div className="ps-card" style={{ background: "#151515", color: "#fff" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Google Wallet</p>
                <ul className="ps-bullets" style={{ color: "#ccc" }}>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Harvests every transaction for ad profiles and selling to 3rd parties<Ref n={6} /></li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Estimated &euro;1B+ annually in ad value from European payment data<Ref n={7} /><Ref n={8} /></li>
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
            alignItems: "center",
            height: "100%",
          }}>
            {/* Key differentiators */}
            <div className="ps-stack">
              <div className="ps-card">
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
                  <li className="ps-bullet">
                    Funded by members at &euro;10 a year
                  </li>
                </ul>
              </div>
              <div className="ps-card">
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>
                  Built for Europe
                </p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">
                    Founded in Copenhagen, launching across the Nordics
                  </li>
                  <li className="ps-bullet">
                    No dependency on US cloud providers for core infrastructure
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
            {/* Chain diagram — full-width, the visual anchor of this slide */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(3px, 0.4vw, 8px)",
              marginBottom: "clamp(10px, 1.4vw, 22px)",
            }}>
              {[
                { label: "Walt", accent: true },
                { label: "Tokenization provider", highlight: true },
                { label: "Visa / Mastercard" },
                { label: "Issuing banks" },
              ].map((node, i, arr) => (
                <Fragment key={i}>
                  <span style={{
                    padding: "clamp(6px, 0.7vw, 12px) clamp(10px, 1.2vw, 20px)",
                    background: node.accent ? "var(--orange-primary)" : node.highlight ? "#151515" : "#f0f0f0",
                    color: node.accent ? "#fff" : node.highlight ? "#fff" : "#333",
                    borderRadius: "clamp(5px, 0.5vw, 10px)",
                    fontSize: "clamp(8px, 0.95vw, 15px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                  }}>{node.label}</span>
                  {i < arr.length - 1 && (
                    <span style={{
                      color: "#ccc",
                      fontSize: "clamp(12px, 1.4vw, 22px)",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}>&rarr;</span>
                  )}
                </Fragment>
              ))}
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
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Competitors</h2>
      </div>
    </div>
  );
}

/* ─── Slide 9: Traction & Roadmap ─────────────────────────────────────────── */

function SlideTraction() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Traction &amp; Roadmap</h2>
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
              <li className="ps-body">European Commission, Case AT.40452 &mdash; Apple mobile payments (2020&ndash;2024); Apple restricted iPhone NFC to Apple Pay from 2014 until iOS 17.4 (March 2024)</li>
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
