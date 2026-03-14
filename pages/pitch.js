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

function SlideProblem() {
  const maxR = 150;
  const maxUsers = 150;
  const scaleR = (users) => Math.round(maxR * Math.sqrt(users / maxUsers));

  const bubbles = [
    { name: "Apple Pay", users: "150M", desc: "Charges banks ~0.05% per transaction", cx: 280, cy: 200, r: scaleR(150), stroke: "#151515", strokeWidth: 2.5 },
    { name: "Google Wallet", users: "80M", desc: "Harvests every transaction", cx: 620, cy: 210, r: scaleR(80), stroke: "#151515", strokeWidth: 2.5 },
    { name: "Everyone else", users: "<0.4%", desc: "combined market share", cx: 870, cy: 200, r: scaleR(1), stroke: "#d0d0d0", strokeWidth: 1.5 },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(6px, 0.8vw, 14px)" }}>
          Tap-to-pay in Europe lives with Google and Apple
        </p>
        <div className="ps-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 1060 400" width="100%" style={{ display: "block" }}>
            <g fontFamily="'Geist', -apple-system, BlinkMacSystemFont, sans-serif">
              {bubbles.slice(0, 2).map((b) => (
                <g key={b.name}>
                  <circle cx={b.cx} cy={b.cy} r={b.r} fill="#f0f0f0" stroke={b.stroke} strokeWidth={b.strokeWidth} />
                  <text x={b.cx} y={b.cy - 28} textAnchor="middle" fontSize="14" fontWeight="700" fill="#151515">{b.name}</text>
                  <text x={b.cx} y={b.cy + 2} textAnchor="middle" fontSize="28" fontWeight="900" fill="#151515">{b.users}</text>
                  <text x={b.cx} y={b.cy + 24} textAnchor="middle" fontSize="10" fill="#7f7f7f">{b.desc}</text>
                </g>
              ))}

              {/* Everyone else — tiny bubble with arrow and label below */}
              {(() => {
                const b = bubbles[2];
                return (
                  <g>
                    <circle cx={b.cx} cy={b.cy} r={b.r} fill="#f0f0f0" stroke={b.stroke} strokeWidth={b.strokeWidth} />
                    <line x1={b.cx} y1={b.cy + b.r + 30} x2={b.cx} y2={b.cy + b.r + 6} stroke="#aaa" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                    <text x={b.cx} y={b.cy + b.r + 46} textAnchor="middle" fontSize="14" fontWeight="700" fill="#151515">{b.name}</text>
                    <text x={b.cx} y={b.cy + b.r + 66} textAnchor="middle" fontSize="20" fontWeight="900" fill="#151515">{b.users}</text>
                    <text x={b.cx} y={b.cy + b.r + 82} textAnchor="middle" fontSize="10" fill="#7f7f7f">{b.desc}</text>
                  </g>
                );
              })()}

              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#aaa" />
                </marker>
              </defs>
            </g>
          </svg>
        </div>
        <div className="ps-src">
          Sources: <a href="#">Flagship Advisory Partners</a>, <a href="#">Worldpay</a>, <a href="#">CoinLaw</a>, <a href="#">StatCounter</a>
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

/* ─── Slide 4: Why Now? ────────────────────────────────────────────────────── */

function SlideWhyNow() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Why Now?</h2>
        <div className="ps-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <p className="ps-stat" style={{ fontSize: "clamp(28px, 4.5vw, 72px)", marginBottom: "clamp(6px, 0.8vw, 14px)" }}>
            July 2024
          </p>
          <p className="ps-lead" style={{ maxWidth: "780px" }}>
            EU&rsquo;s EUDI wallet mandate forced Apple and Google to open their NFC APIs to third-party wallets.
          </p>
          <p style={{ maxWidth: "780px", textAlign: "center", fontSize: "clamp(11px, 1.3vw, 22px)", fontWeight: 400, color: "#555", margin: 0 }}>
            January 2025: Apple and Google comply with mandate and expose APIs
          </p>
        </div>
        <div className="ps-src">
          Sources: <a href="#">European Commission, Case AT.40452</a>, <a href="#">Regulation (EU) 2024/1183</a>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 5: Competitors ────────────────────────────────────────────────── */

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

/* ─── Slide 9: The Ask ─────────────────────────────────────────────────────── */

function SlideTheAsk() {
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

/* ─── Slide 12: Closing ────────────────────────────────────────────────────── */

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

/* ─── Slide: The Market ───────────────────────────────────────────────────── */

function SlideMarket() {
  const maxR = 110;
  const maxUsers = 101;
  const scaleR = (users) => Math.round(maxR * Math.sqrt(users / maxUsers));

  const bubbles = [
    { name: "Proton", users: "100M+", userDesc: "accounts", category: "EMAIL / CLOUD", cx: 135, cy: 180, r: scaleR(100) },
    { name: "Brave", users: "101M", userDesc: "MAU", category: "BROWSER", cx: 355, cy: 198, r: scaleR(101) },
    { name: "DuckDuckGo", users: "100M", userDesc: "daily searches", category: "SEARCH", cx: 555, cy: 170, r: scaleR(100) },
    { name: "Signal", users: "70M+", userDesc: "MAU", category: "MESSAGING", cx: 735, cy: 212, r: scaleR(70) },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Market</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(6px, 0.8vw, 14px)" }}>
          Already established pay-for-privacy market
        </p>
        <div className="ps-content" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 1060 400" width="100%" style={{ display: "block" }}>
            <g fontFamily="'Geist', -apple-system, BlinkMacSystemFont, sans-serif">
              {bubbles.map((b) => (
                <g key={b.name}>
                  <circle cx={b.cx} cy={b.cy} r={b.r} fill="#f0f0f0" stroke="#ff4800" strokeWidth="2.5" />
                  <text x={b.cx} y={b.cy - 22} textAnchor="middle" fontSize="8" fontWeight="600" fill="#7f7f7f" letterSpacing="0.08em">{b.category}</text>
                  <text x={b.cx} y={b.cy - 4} textAnchor="middle" fontSize="14" fontWeight="700" fill="#151515">{b.name}</text>
                  <text x={b.cx} y={b.cy + 22} textAnchor="middle" fontSize="24" fontWeight="900" fill="#151515">{b.users}</text>
                  <text x={b.cx} y={b.cy + 37} textAnchor="middle" fontSize="10" fill="#7f7f7f">{b.userDesc}</text>
                </g>
              ))}

              <line x1="840" y1="25" x2="840" y2="395" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4 3" />

              {/* Subscription box */}
              <rect x="858" y="30" width="180" height="110" rx="10" fill="#ff4800" />
              <text x="948" y="58" textAnchor="middle" fontSize="8" fontWeight="600" fill="#151515" letterSpacing="0.1em">WALT SUBSCRIPTION</text>
              <text x="948" y="100" textAnchor="middle" fontSize="42" fontWeight="900" fill="#151515">&#x20AC;10</text>
              <text x="948" y="123" textAnchor="middle" fontSize="14" fill="#151515">/year</text>

              {/* Walt Year 1-2 */}
              <circle cx="875" cy="185" r={scaleR(0.5)} fill="#ff4800" opacity="0.5" />
              <text x="892" y="173" fontSize="8" fontWeight="600" fill="#7f7f7f" letterSpacing="0.06em">YEAR 1&#x2013;2 &#xB7; NORDIC FOCUS</text>
              <text x="892" y="189" fontSize="15" fontWeight="900" fill="#151515">100K&#x2013;500K users</text>
              <text x="892" y="203" fontSize="11" fontWeight="700" fill="#ff4800">&#x20AC;1&#x2013;5M ARR</text>

              {/* Walt Year 2-4 */}
              <circle cx="875" cy="255" r={scaleR(3)} fill="#ff4800" opacity="0.6" />
              <text x="898" y="243" fontSize="8" fontWeight="600" fill="#7f7f7f" letterSpacing="0.06em">YEAR 2&#x2013;4 &#xB7; EUROPE FOCUS</text>
              <text x="898" y="259" fontSize="15" fontWeight="900" fill="#151515">3M users</text>
              <text x="898" y="273" fontSize="11" fontWeight="700" fill="#ff4800">&#x20AC;30M ARR</text>

              {/* Walt Year 4-8 */}
              <circle cx="875" cy="330" r={scaleR(6)} fill="#ff4800" opacity="0.7" />
              <text x="910" y="318" fontSize="8" fontWeight="600" fill="#7f7f7f" letterSpacing="0.06em">YEAR 4&#x2013;8 &#xB7; US &#x26; ASIA FOCUS</text>
              <text x="910" y="334" fontSize="15" fontWeight="900" fill="#151515">6M users</text>
              <text x="910" y="348" fontSize="11" fontWeight="700" fill="#ff4800">&#x20AC;60M ARR</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide: Challenges ───────────────────────────────────────────────────── */

function SlideChallenges() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Challenges</h2>
        <p className="ps-lead">One missing piece between Walt and revenue</p>
        <div className="ps-content" style={{ gap: 0 }}>

          {/* ── Flow line ── */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(6px, 0.8vw, 14px)",
            fontSize: "clamp(9px, 1.05vw, 17px)",
            fontWeight: 600,
          }}>
            <span style={{
              padding: "clamp(5px, 0.5vw, 9px) clamp(10px, 1.2vw, 20px)",
              background: "var(--orange-primary)",
              color: "#fff",
              borderRadius: "clamp(4px, 0.4vw, 7px)",
              fontWeight: 700,
            }}>Walt</span>
            <span style={{ color: "#d4d4d4" }}>&rarr;</span>
            <span style={{
              position: "relative",
              padding: "clamp(5px, 0.5vw, 9px) clamp(10px, 1.2vw, 20px)",
              border: "1.5px dashed #ccc",
              borderRadius: "clamp(4px, 0.4vw, 7px)",
              color: "#bbb",
            }}>
              Tokenization provider
              {/* Dashed connector to expanded box below */}
              <span style={{
                position: "absolute",
                left: "50%",
                top: "100%",
                width: "1.5px",
                height: "clamp(16px, 2vw, 32px)",
                backgroundImage: "repeating-linear-gradient(to bottom, #ccc 0, #ccc 4px, transparent 4px, transparent 8px)",
              }} />
            </span>
            <span style={{ color: "#d4d4d4" }}>&rarr;</span>
            <span style={{
              padding: "clamp(5px, 0.5vw, 9px) clamp(10px, 1.2vw, 20px)",
              background: "#151515",
              color: "#fff",
              borderRadius: "clamp(4px, 0.4vw, 7px)",
            }}>Visa / Mastercard &nbsp;&#x2713;</span>
            <span style={{ color: "#d4d4d4" }}>&rarr;</span>
            <span style={{
              padding: "clamp(5px, 0.5vw, 9px) clamp(10px, 1.2vw, 20px)",
              background: "#151515",
              color: "#fff",
              borderRadius: "clamp(4px, 0.4vw, 7px)",
            }}>Issuing banks &nbsp;&#x2713;</span>
            <span style={{ color: "#d4d4d4" }}>&rarr;</span>
            <span style={{ color: "#bbb" }}>Revenue</span>
          </div>

          {/* spacer for connector line */}
          <div style={{ height: "clamp(16px, 2vw, 32px)" }} />

          {/* ── Expanded: tokenization providers ── */}
          <div style={{
            border: "1.5px dashed #ccc",
            borderRadius: "clamp(8px, 0.8vw, 14px)",
            padding: "clamp(16px, 2vw, 32px) clamp(24px, 3vw, 48px)",
            maxWidth: "clamp(400px, 52vw, 840px)",
            margin: "0 auto",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "clamp(12px, 1.6vw, 28px)",
            }}>
              {[
                { name: "IDEMIA", status: "Rarely works with startups" },
                { name: "Fidesmo", status: "SDK not yet ready" },
                { name: "Paymentology", status: "SDK not yet ready" },
              ].map(({ name, status }) => (
                <div key={name}>
                  <p style={{
                    fontSize: "clamp(10px, 1.15vw, 19px)",
                    fontWeight: 700,
                    color: "#151515",
                    margin: "0 0 clamp(2px, 0.3vw, 5px)",
                  }}>{name}</p>
                  <p style={{
                    fontSize: "clamp(8px, 0.8vw, 13px)",
                    fontWeight: 400,
                    color: "#999",
                    margin: 0,
                  }}>{status}</p>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: "clamp(9px, 1vw, 16px)",
              fontWeight: 600,
              color: "var(--orange-primary)",
              margin: "clamp(14px, 1.8vw, 28px) 0 0",
            }}>All three in active conversation.</p>
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
  { title: "Challenges", render: SlideChallenges },
  { title: "The Market", render: SlideMarket },
  { title: "Competitors", render: SlideCompetitors },
  { title: "The Ask", render: SlideTheAsk },
  { title: "Walt", render: SlideClosing },
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function Pitch() {
  return (
    <DeckLayout
      slides={SLIDES}
      head={
        <Head>
          <title>Walt Pitch Deck - Investment & Business Overview</title>
          <meta
            name="description"
            content="European tap-to-pay — Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet technology, roadmap, and business model."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://walt.is/pitch" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://walt.is/pitch" />
          <meta property="og:title" content="Walt Pitch Deck" />
          <meta
            property="og:description"
            content="European tap-to-pay — Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
          />
          <meta property="og:image" content="https://walt.is/pitch/slide-01.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://walt.is/pitch" />
          <meta property="twitter:title" content="Walt Pitch Deck" />
          <meta
            property="twitter:description"
            content="European tap-to-pay — Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
          />
          <meta property="twitter:image" content="https://walt.is/pitch/slide-01.jpg" />

          <link rel="icon" href="/favicon.ico" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Walt Pitch Deck",
                "description": "Walt's comprehensive pitch deck for investors",
                "url": "https://walt.is/pitch",
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
      activeDeck="pitch"
      downloads={
        <>
          <a
            href="/pitch/pitch-deck.pdf"
            className="pitch-download-button outline"
            download="Walt-Pitch-Deck.pdf"
          >
            Download PDF
          </a>
          <a
            href="/pitch/walt-pitch.pptx"
            className="pitch-download-button outline"
            download="Walt-Pitch.pptx"
          >
            Download PowerPoint
          </a>
        </>
      }
      footerVariant="pitch"
    />
  );
}
