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
  const maxUsers = 650;
  const scaleR = (users) => Math.round(maxR * Math.sqrt(users / maxUsers));

  const bubbles = [
    { name: "Apple Pay", users: "~650M", desc: "Charges banks 0.15% per transaction", cx: 280, cy: 200, r: scaleR(650), stroke: "#151515", strokeWidth: 2.5 },
    { name: "Google Wallet", users: "~520M", desc: "Harvests every transaction for ad profiles", cx: 620, cy: 210, r: scaleR(520), stroke: "#151515", strokeWidth: 2.5 },
    { name: "Everyone else", users: "<0.4%", desc: "combined market share", cx: 870, cy: 200, r: scaleR(5), stroke: "#d0d0d0", strokeWidth: 1.5 },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(6px, 0.8vw, 14px)" }}>
          Tap-to-pay lives with US monopolies
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
          Sources: <a href="#">CoinLaw</a>, <a href="#">WSJ / DOJ</a>, <a href="#">StatCounter</a>
        </div>
      </div>
    </div>
  );
}

/* ─── Fake bank screen for whitelabel demo ────────────────────────────────── */

function FjordBankScreen() {
  const s = {
    wrap: {
      width: "100%",
      height: "100%",
      background: "linear-gradient(165deg, #0b2a3d 0%, #134e6f 50%, #1a6d94 100%)",
      display: "flex",
      flexDirection: "column",
      padding: "8%",
      boxSizing: "border-box",
      fontFamily: "'Geist', -apple-system, sans-serif",
      color: "#fff",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "6%",
    },
    logo: {
      fontSize: "clamp(8px, 1.1vw, 16px)",
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    authSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "6% 0",
    },
    fingerprintWrap: {
      width: "36%",
      aspectRatio: "1",
    },
    prompt: {
      fontSize: "clamp(6px, 0.7vw, 11px)",
      fontWeight: 600,
      letterSpacing: "0.02em",
      margin: "6% 0 0 0",
      textAlign: "center",
    },
    hint: {
      fontSize: "clamp(4.5px, 0.5vw, 7px)",
      opacity: 0.5,
      margin: "2% 0 0 0",
      textAlign: "center",
      letterSpacing: "0.02em",
    },
    readyPill: {
      display: "inline-block",
      background: "rgba(46,204,155,0.2)",
      color: "#2ecc9b",
      fontSize: "clamp(4px, 0.45vw, 7px)",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "2% 6%",
      borderRadius: "clamp(2px, 0.3vw, 6px)",
      marginTop: "4%",
    },
    sectionTitle: {
      fontSize: "clamp(5.5px, 0.65vw, 10px)",
      fontWeight: 700,
      margin: "6% 0 4% 0",
      opacity: 0.9,
    },
    txRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "3% 0",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    txName: {
      fontSize: "clamp(5px, 0.58vw, 9px)",
      fontWeight: 600,
      margin: 0,
    },
    txDate: {
      fontSize: "clamp(4px, 0.45vw, 7px)",
      opacity: 0.5,
      margin: "1px 0 0 0",
    },
    txAmount: {
      fontSize: "clamp(5px, 0.58vw, 9px)",
      fontWeight: 600,
    },
  };

  return (
    <div style={s.wrap}>
      <div style={s.header}>
        <span style={s.logo}>ABC Bank</span>
      </div>

      <div style={s.authSection}>
        <div style={s.fingerprintWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fingerprint.svg"
            alt="Fingerprint authentication"
            style={{ width: "100%", height: "100%", filter: "invert(1)", opacity: 0.85 }}
          />
        </div>
        <p style={s.prompt}>Authenticate to pay</p>
        <p style={s.hint}>Hold near reader</p>
        <span style={s.readyPill}>NFC ready</span>
      </div>

      <p style={s.sectionTitle}>Latest transactions</p>

      {[
        { name: "Café Bryggen", date: "10 Mar 14:22", amount: "48,00 kr." },
        { name: "Irma Østerbro", date: "9 Mar 18:05", amount: "127,50 kr." },
        { name: "DSB Rejsekort", date: "9 Mar 08:31", amount: "36,00 kr." },
      ].map((tx) => (
        <div key={tx.name} style={s.txRow}>
          <div>
            <p style={s.txName}>{tx.name}</p>
            <p style={s.txDate}>{tx.date}</p>
          </div>
          <span style={s.txAmount}>{tx.amount}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Slide 3: The Solution — One Platform, Two Markets ───────────────────── */

function SlideSolution() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Solution</h2>
        <p className="ps-lead">European tap-to-pay</p>
        <div className="ps-content">
          <div className="ps-solution-layout">
            {/* B2C — Walt App */}
            <div className="ps-solution-col">
              <span className="ps-solution-segment">B2C</span>
              <p className="ps-solution-label">Walt App</p>
              <div className="ps-solution-phone">
                <Image
                  src="/promo-screen.jpg"
                  alt="Walt app home screen"
                  width={720}
                  height={1688}
                  sizes="220px"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <p className="ps-solution-tagline">Walt, the native app</p>
            </div>

            {/* B2B — Walt for Banks */}
            <div className="ps-solution-col">
              <span className="ps-solution-segment">B2B2C</span>
              <p className="ps-solution-label">Walt for Banks</p>
              <div className="ps-solution-phone ps-solution-phone--bank">
                <FjordBankScreen />
              </div>
              <p className="ps-solution-tagline">Walt, whitelabeled</p>
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
          <p className="ps-stat" style={{ fontSize: "clamp(28px, 4.5vw, 72px)", marginBottom: "clamp(4px, 0.6vw, 10px)" }}>
            July 2025
          </p>
          <p className="ps-lead" style={{ maxWidth: "680px" }}>
            EU forced Apple and Google to open NFC access.
            <br />
            For the first time, a privacy alternative to tap-to-pay can exist.
          </p>
        </div>
        <div className="ps-src">
          Sources: <a href="#">European Commission</a>, <a href="#">US DOJ</a>
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
    { label: "Geographic focus", walt: "Nordics \u2192 Europe", wero: "DE, FR, BE", vipps: "Nordics" },
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
        <div className="ps-content">
          <div className="ps-split ps-split--center">
            <div className="ps-price-card">
              <p className="ps-label" style={{ color: "#151515", letterSpacing: "0.12em" }}>STATUS</p>
              <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)", margin: "clamp(4px, 0.5vw, 10px) 0" }}>
                Work in Progress
              </p>
              <div className="ps-divider" />
              <p className="ps-banner-body">
                Still formulating the ask.
              </p>
            </div>
            <div className="ps-card" style={{ padding: "clamp(14px, 2.2vw, 38px) clamp(16px, 2.5vw, 42px)" }}>
              <p className="ps-card-h">Networking Needs</p>
              <ul className="ps-bullets" style={{ gap: "clamp(6px, 0.8vw, 14px)" }}>
                <li className="ps-bullet ps-bullet--bold">
                  <span>
                    Nordic payment infrastructure
                    <br />
                    <span className="ps-muted" style={{ fontWeight: 400, fontSize: "clamp(8px, 0.85vw, 14px)" }}>
                      Fidesmo, Nets/Nexi, Tietoevry
                    </span>
                  </span>
                </li>
                <li className="ps-bullet ps-bullet--bold">
                  <span>
                    Nordic bank cards &amp; payments leads
                    <br />
                    <span className="ps-muted" style={{ fontWeight: 400, fontSize: "clamp(8px, 0.85vw, 14px)" }}>
                      Nordea, Swedbank, DNB, Lunar, SpareBank 1
                    </span>
                  </span>
                </li>
                <li className="ps-bullet ps-bullet--bold">
                  <span>
                    Visa &amp; Mastercard Nordic fintech leads
                    <br />
                    <span className="ps-muted" style={{ fontWeight: 400, fontSize: "clamp(8px, 0.85vw, 14px)" }}>
                      Wallet certification contacts
                    </span>
                  </span>
                </li>
              </ul>
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

/* ─── Slide: Built But Locked ─────────────────────────────────────────────── */

function SlideBuiltButLocked() {
  const r = 72;

  const waltX = 130;
  const topY = 120;
  const botY = 280;
  const midX = 530;
  const userX = 930;

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Challenges</h2>
        <p className="ps-lead">Two partnerships before revenue</p>
        <div className="ps-content" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 1060 400" width="100%" style={{ display: "block" }}>
            <g fontFamily="'Geist', -apple-system, BlinkMacSystemFont, sans-serif">

              {/* ── Walt → Payment Infrastructure (top) ── */}
              <line x1={waltX + r} y1={200} x2={midX - r} y2={topY} stroke="#151515" strokeWidth="2.5" />
              <polygon points={`${midX - r - 4},${topY - 4} ${midX - r + 8},${topY} ${midX - r - 2},${topY + 7}`} fill="#151515" />

              {/* ── Walt → Issuing Banks (bottom) ── */}
              <line x1={waltX + r} y1={200} x2={midX - r} y2={botY} stroke="#151515" strokeWidth="2.5" />
              <polygon points={`${midX - r - 2},${botY - 7} ${midX - r + 8},${botY} ${midX - r - 4},${botY + 4}`} fill="#151515" />

              {/* ── Payment Infrastructure → Users (top) ── */}
              <line x1={midX + r} y1={topY} x2={userX - r} y2={200} stroke="#ff4800" strokeWidth="2.5" strokeDasharray="10 8" opacity="0.4" />
              <polygon points={`${userX - r - 4},${200 - 6} ${userX - r + 8},${200} ${userX - r - 2},${200 + 7}`} fill="#ff4800" opacity="0.4" />

              {/* ── Issuing Banks → Users (bottom) ── */}
              <line x1={midX + r} y1={botY} x2={userX - r} y2={200} stroke="#ff4800" strokeWidth="2.5" strokeDasharray="10 8" opacity="0.4" />
              <polygon points={`${userX - r - 2},${200 - 7} ${userX - r + 8},${200} ${userX - r - 4},${200 + 6}`} fill="#ff4800" opacity="0.4" />

              {/* ── Walt (solid orange, complete) ── */}
              <circle cx={waltX} cy={200} r={r} fill="#ff4800" />
              <text x={waltX} y={200 - 8} textAnchor="middle" fontSize="24" fontWeight="900" fill="#151515">WALT</text>
              <path d={`M${waltX - 10} ${200 + 16} l7 7 l13 -13`} fill="none" stroke="#151515" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

              {/* ── Payment Infrastructure (top, locked) ── */}
              <circle cx={midX} cy={topY} r={r} fill="#f0f0f0" stroke="#151515" strokeWidth="2.5" strokeDasharray="12 8" />
              <rect x={midX - 10} y={topY - 3} width="20" height="16" rx="3" fill="none" stroke="#151515" strokeWidth="2.5" />
              <path d={`M${midX - 5} ${topY - 3} V${topY - 10} a5 5 0 0 1 10 0 V${topY - 3}`} fill="none" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
              <text x={midX} y={topY - r - 22} textAnchor="middle" fontSize="13" fontWeight="700" fill="#151515">Payment Infrastructure</text>
              <text x={midX} y={topY - r - 8} textAnchor="middle" fontSize="10" fill="#7f7f7f">Nets/Nexi · Tietoevry</text>

              {/* ── Issuing Banks (bottom, locked) ── */}
              <circle cx={midX} cy={botY} r={r} fill="#f0f0f0" stroke="#151515" strokeWidth="2.5" strokeDasharray="12 8" />
              <rect x={midX - 10} y={botY - 3} width="20" height="16" rx="3" fill="none" stroke="#151515" strokeWidth="2.5" />
              <path d={`M${midX - 5} ${botY - 3} V${botY - 10} a5 5 0 0 1 10 0 V${botY - 3}`} fill="none" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
              <text x={midX} y={botY + r + 26} textAnchor="middle" fontSize="13" fontWeight="700" fill="#151515">Issuing Banks</text>
              <text x={midX} y={botY + r + 42} textAnchor="middle" fontSize="10" fill="#7f7f7f">Per-bank approval</text>

              {/* ── Users node (orange ring, the goal) ── */}
              <circle cx={userX} cy={200} r={r} fill="#ffffff" stroke="#ff4800" strokeWidth="3" />
              <text x={userX} y={200 - 4} textAnchor="middle" fontSize="36" fontWeight="900" fill="#ff4800">&#x20AC;</text>
              <text x={userX} y={200 + 22} textAnchor="middle" fontSize="10" fontWeight="600" fill="#ff4800">10/year</text>
              <text x={userX} y={200 + r + 26} textAnchor="middle" fontSize="13" fontWeight="700" fill="#ff4800">Users</text>
              <text x={userX} y={200 + r + 42} textAnchor="middle" fontSize="10" fill="#7f7f7f">Subscription revenue</text>

            </g>
          </svg>
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
  { title: "Challenges", render: SlideBuiltButLocked },
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
