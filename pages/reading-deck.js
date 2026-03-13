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
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>&euro;500B+</p>
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
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Extracts &euro;300&ndash;500M from European transactions<Ref n={5} /></li>
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
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Why Now?</h2>
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
                  3 privacy companies have crossed $100M in annual revenue<Ref n={10} />
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

              {/* Pricing validation */}
              <div style={{
                background: "#151515",
                padding: "clamp(10px, 1.2vw, 20px) clamp(12px, 1.5vw, 26px)",
                borderRadius: "clamp(4px, 0.5vw, 8px)",
              }}>
                <p style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "clamp(9px, 1.05vw, 17px)",
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}>
                  Walt at{" "}
                  <span style={{ color: "#ff4800", fontWeight: 800 }}>&euro;10/year</span>{" "}
                  costs less than the data it protects
                </p>
                <p style={{
                  color: "#999",
                  fontSize: "clamp(7px, 0.8vw, 13px)",
                  margin: 0,
                  marginTop: "clamp(3px, 0.3vw, 6px)",
                }}>
                  Google extracts est. &euro;15&ndash;30/yr per active European wallet user in ad value<Ref n={7} />
                </p>
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
              <li className="ps-body">ECB SPACE 2024 (7% of POS value via mobile devices); ECB Payment Statistics H2 2024; Mordor Intelligence, &ldquo;Europe Mobile Payments Market&rdquo; (2025)</li>
              <li className="ps-body">CoinLaw, &ldquo;Apple Pay vs Google Pay Statistics&rdquo; (2026); StatCounter mobile payment share data</li>
              <li className="ps-body">Swiss antitrust investigation via Finews (~0.05&ndash;0.12% issuer fee); EU Interchange Fee Regulation 2015/751 constraints; Walt market research estimates</li>
              <li className="ps-body">Oliver Wyman, European Apple Pay fee revenue estimate (February 2025)</li>
              <li className="ps-body">DOJ v. Apple antitrust complaint (March 2024); WSJ reporting on Google ad-profile monetization of payment data</li>
              <li className="ps-body">Alphabet 10-K (2024): EMEA revenue $102B; Proton data valuation methodology estimates &euro;15&ndash;30 ad value per European wallet user per year</li>
              <li className="ps-body">European Google Wallet adoption estimates (40&ndash;80M active users) derived from Statista country adoption surveys and PYMNTS tap-to-pay usage data</li>
              <li className="ps-body">Eurobarometer 2025 (81% digital privacy concern); Cisco Consumer Privacy Survey 2023 (&ldquo;Privacy Actives&rdquo; segmentation); Eurostat digital privacy measures (2024)</li>
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
