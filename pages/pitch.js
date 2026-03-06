import { useState, useEffect, useCallback, useRef, Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

/* ─── Slide 1: Title ───────────────────────────────────────────────────────── */

function SlideTitle() {
  return (
    <div className="ps ps--accent">
      <div className="ps-pad ps-pad--center">
        <h1 className="ps-logo">WALT</h1>
        <div className="ps-divider" />
        <p className="ps-subtitle">Private tap-to-pay</p>
        <div style={{ marginTop: "clamp(16px, 2.5vw, 40px)" }}>
          <p className="ps-small">Cole Bittel</p>
          <p className="ps-small">cole@walt.is</p>
        </div>
      </div>
      <span className="ps-watermark">walt.is</span>
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
          Tap-to-pay has no private or European alternative
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

/* ─── Slide 3: The Solution (combined with Product) ────────────────────────── */

function SlideSolution() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Solution</h2>
        <div className="ps-content">
          <div className="ps-split ps-split--center" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
            <div>
              <p className="ps-lead" style={{ marginBottom: "clamp(12px, 1.8vw, 28px)" }}>
                Walt is the private alternative to Apple Pay and Google Wallet.
              </p>
              <div className="ps-banner">
                <p className="ps-banner-body">
                  Transaction data encrypted on-device. Never stored on servers.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "clamp(8px, 1.4vw, 22px)", justifyContent: "center", alignItems: "center" }}>
              {[
                { src: "/promo-screen.jpg", alt: "Walt home screen" },
                { src: "/add-card.jpg", alt: "Add card screen" },
                { src: "/intro-screen.jpg", alt: "Tap to pay screen" },
              ].map((img) => (
                <div key={img.src} style={{
                  width: "clamp(90px, 14vw, 220px)",
                  borderRadius: "clamp(6px, 0.8vw, 14px)",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={220}
                    height={477}
                    sizes="(max-width: 768px) 100px, 220px"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
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
    { label: "User base", walt: "0", wero: "50M+", vipps: "12.5M" },
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
              <p className="ps-card-h">Immediate Needs</p>
              <p className="ps-body" style={{ marginBottom: "clamp(6px, 0.8vw, 14px)" }}>
                Networking and partnerships with bank representatives to unblock
                card loading and processing in Europe.
              </p>
              <p className="ps-card-h">What We&rsquo;re Looking For</p>
              <ul className="ps-bullets">
                <li className="ps-bullet">Introductions to European bank partnership teams</li>
                <li className="ps-bullet">Guidance on EMI licensing and Visa/Mastercard signoff</li>
                <li className="ps-bullet">Strategic advisors with fintech and payments experience</li>
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
        <h1 className="ps-logo">WALT</h1>
        <div className="ps-divider" />
        <p className="ps-quote">&ldquo;Transaction data is sacred.&rdquo;</p>
        <div style={{ marginTop: "clamp(16px, 2.5vw, 40px)" }}>
          <p className="ps-body" style={{ color: "#151515" }}>Cole Bittel, Founder</p>
          <p className="ps-body" style={{ color: "#151515" }}>cole@walt.is</p>
          <p className="ps-body" style={{ color: "#151515" }}>walt.is</p>
        </div>
        <p className="ps-body" style={{ color: "#151515", opacity: 0.6, marginTop: "clamp(8px, 1.2vw, 20px)" }}>
          Embedded Engineering ApS | Copenhagen, Denmark
        </p>
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
  const layers = [
    {
      id: "walt",
      label: "Walt",
      desc: "Fully built. NFC tap-to-pay, card provisioning, on-device encryption. No backend. Never touches card data.",
      color: "#16a34a",
      bg: "#dcfce7",
      border: "#16a34a",
      statusLabel: "READY",
      statusColor: "#16a34a",
    },
    {
      id: "schemes",
      label: "Card Schemes",
      sublabel: "Visa / Mastercard",
      desc: "Walt must be a recognized Token Requestor. Likely covered via MeaWallet (unconfirmed).",
      color: "#a16207",
      bg: "#fef9c3",
      border: "#eab308",
      statusLabel: "PROBABLE",
      statusColor: "#a16207",
    },
    {
      id: "processors",
      label: "Payment Processors",
      sublabel: "Nets/Nexi, Tietoevry",
      desc: "Their systems must recognize Walt as a valid wallet destination. Nets/Nexi alone serves 250+ Nordic banks \u2014 one integration unlocks the majority of the market.",
      color: "#dc2626",
      bg: "#fee2e2",
      border: "#dc2626",
      statusLabel: "BLOCKED",
      statusColor: "#dc2626",
    },
    {
      id: "banks",
      label: "Issuing Banks",
      sublabel: "Bank-by-bank approval",
      desc: "Each bank individually whitelists Walt as a card destination. Some route credit cards through subsidiaries (e.g., Swedbank \u2192 EnterCard), requiring separate sign-off.",
      color: "#dc2626",
      bg: "#fee2e2",
      border: "#dc2626",
      statusLabel: "BLOCKED",
      statusColor: "#dc2626",
    },
  ];

  const layerH = 68;
  const gateH = 28;
  const startY = 380;
  const colX = 530;
  const boxW = 480;
  const descX = colX + boxW / 2;

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Built But Locked</h2>
        <p className="ps-lead">Walt is fully built — the challenge is permission, not engineering.</p>
        <div className="ps-content" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 1060 440" width="100%" style={{ display: "block" }}>
            <defs>
              <filter id="gateShadow" x="-4%" y="-10%" width="108%" height="130%">
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.12" />
              </filter>
            </defs>
            <g fontFamily="'Geist', -apple-system, BlinkMacSystemFont, sans-serif">

              {/* ── User at top ── */}
              <g>
                <circle cx={descX} cy="30" r="16" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1={descX} y1="46" x2={descX} y2="66" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1={descX - 12} y1="56" x2={descX + 12} y2="56" stroke="#9ca3af" strokeWidth="1.5" />
                <text x={descX} y="22" textAnchor="middle" fontSize="13" fill="#9ca3af">?</text>
                <text x={descX + 28} y="28" fontSize="11" fontWeight="600" fill="#9ca3af" textAnchor="start">USER</text>
                <text x={descX + 28} y="42" fontSize="9" fill="#9ca3af" textAnchor="start">Wants to add bank card &amp; tap to pay</text>
                <text x={descX - 28} y="36" fontSize="10" fontWeight="700" fill="#9ca3af" textAnchor="end">WAITING</text>
              </g>

              {/* ── Vertical connector from user to top gate ── */}
              <line x1={descX} y1="66" x2={descX} y2="82" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* ── Layers (bottom-to-top visually, so reverse the array) ── */}
              {layers.slice().reverse().map((layer, i) => {
                const y = startY - i * (layerH + gateH);
                const boxY = y - layerH / 2;

                return (
                  <g key={layer.id}>
                    {/* Gate bar above (except for bottom layer = Walt) */}
                    {layer.id !== "walt" && (() => {
                      const gateY = boxY - gateH;
                      return (
                        <g filter="url(#gateShadow)">
                          <rect x={colX} y={gateY} width={boxW} height={gateH - 4} rx="4" fill="#374151" />
                          {/* Lock icons */}
                          {[colX + 20, colX + boxW / 2, colX + boxW - 20].map((lx, li) => (
                            <g key={li}>
                              <rect x={lx - 5} y={gateY + 8} width="10" height="10" rx="2" fill="#6b7280" />
                              <path d={`M${lx - 3} ${gateY + 8} V${gateY + 5} a3 3 0 0 1 6 0 V${gateY + 8}`} fill="none" stroke="#6b7280" strokeWidth="1.5" />
                            </g>
                          ))}
                          {/* Dashed line pattern across gate */}
                          <line x1={colX + 36} y1={gateY + 12} x2={colX + boxW / 2 - 14} y2={gateY + 12} stroke="#4b5563" strokeWidth="1" strokeDasharray="6 4" />
                          <line x1={colX + boxW / 2 + 14} y1={gateY + 12} x2={colX + boxW - 36} y2={gateY + 12} stroke="#4b5563" strokeWidth="1" strokeDasharray="6 4" />
                        </g>
                      );
                    })()}

                    {/* Connector line above the gate */}
                    {layer.id !== "walt" && (
                      <line
                        x1={descX} y1={boxY - gateH - 4}
                        x2={descX} y2={boxY - gateH}
                        stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3"
                      />
                    )}

                    {/* Layer box */}
                    <rect
                      x={colX} y={boxY} width={boxW} height={layerH}
                      rx="8" fill={layer.bg} stroke={layer.border} strokeWidth="2"
                    />

                    {/* Status badge */}
                    <rect
                      x={colX + boxW - 80} y={boxY + 6} width="70" height="18"
                      rx="9" fill={layer.statusColor} opacity="0.15"
                    />
                    <text
                      x={colX + boxW - 45} y={boxY + 19}
                      textAnchor="middle" fontSize="8" fontWeight="700"
                      fill={layer.statusColor} letterSpacing="0.06em"
                    >
                      {layer.statusLabel}
                    </text>

                    {/* Layer label */}
                    <text x={colX + 16} y={boxY + 20} fontSize="14" fontWeight="800" fill={layer.color}>
                      {layer.label}
                    </text>
                    {layer.sublabel && (
                      <text x={colX + 16} y={boxY + 33} fontSize="10" fontWeight="600" fill={layer.color} opacity="0.8">
                        {layer.sublabel}
                      </text>
                    )}

                    {/* Description */}
                    {(() => {
                      const descY = layer.sublabel ? boxY + 48 : boxY + 38;
                      const words = layer.desc.split(" ");
                      const lines = [];
                      let current = "";
                      words.forEach((w) => {
                        const test = current ? current + " " + w : w;
                        if (test.length > 72 && current) {
                          lines.push(current);
                          current = w;
                        } else {
                          current = test;
                        }
                      });
                      if (current) lines.push(current);
                      return lines.slice(0, 2).map((line, li) => (
                        <text
                          key={li} x={colX + 16} y={descY + li * 13}
                          fontSize="9" fill={layer.color} opacity="0.85"
                        >
                          {line}
                        </text>
                      ));
                    })()}

                    {/* Connector below the box to next gate (except top = banks) */}
                    {layer.id !== "banks" && (
                      <line
                        x1={descX} y1={boxY + layerH}
                        x2={descX} y2={boxY + layerH + 4}
                        stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3"
                      />
                    )}
                  </g>
                );
              })}

              {/* ── Connector from top layer (banks) to user ── */}
              <line
                x1={descX}
                y1={startY - 3 * (layerH + gateH) - layerH / 2 - gateH - 4}
                x2={descX}
                y2="82"
                stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3"
              />

              {/* ── Side labels ── */}
              <text x={colX - 20} y={startY} textAnchor="end" fontSize="9" fontWeight="600" fill="#16a34a" letterSpacing="0.06em">PRODUCT</text>
              <text x={colX - 20} y={startY - (layerH + gateH) * 1.5} textAnchor="end" fontSize="9" fontWeight="600" fill="#dc2626" letterSpacing="0.06em">GATEKEEPERS</text>

              {/* ── Bracket line on left ── */}
              <line x1={colX - 14} y1={startY - layerH / 2 - gateH + 10} x2={colX - 14} y2={startY - 3 * (layerH + gateH) + layerH / 2 - 10} stroke="#dc2626" strokeWidth="1.5" />
              <line x1={colX - 14} y1={startY - layerH / 2 - gateH + 10} x2={colX - 8} y2={startY - layerH / 2 - gateH + 10} stroke="#dc2626" strokeWidth="1.5" />
              <line x1={colX - 14} y1={startY - 3 * (layerH + gateH) + layerH / 2 - 10} x2={colX - 8} y2={startY - 3 * (layerH + gateH) + layerH / 2 - 10} stroke="#dc2626" strokeWidth="1.5" />

              {/* ── Callout box ── */}
              <rect x="40" y="340" width="420" height="80" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
              <rect x="40" y="340" width="4" height="80" rx="2" fill="var(--orange-primary)" />
              <text x="58" y="362" fontSize="10" fontWeight="700" fill="#151515" letterSpacing="0.04em">PRECEDENT</text>
              <text x="58" y="382" fontSize="9.5" fill="#333">Klarna, Vipps MobilePay, and BBVA all launched through</text>
              <text x="58" y="396" fontSize="9.5" fill="#333">this same pathway in 2025.</text>
              <text x="58" y="414" fontSize="10" fontWeight="700" fill="var(--orange-primary)">The door is open.</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Scaled thumbnail wrapper ─────────────────────────────────────────────── */

const SLIDE_REF_WIDTH = 1200;

function SlideThumb({ render: Render }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setScale(w / SLIDE_REF_WIDTH);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: SLIDE_REF_WIDTH,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <Render />
      </div>
    </div>
  );
}

/* ─── Slide Array ──────────────────────────────────────────────────────────── */

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "The Solution", render: SlideSolution },
  { title: "Why Now?", render: SlideWhyNow },
  { title: "Built But Locked", render: SlideBuiltButLocked },
  { title: "The Market", render: SlideMarket },
  { title: "Competitors", render: SlideCompetitors },
  { title: "The Ask", render: SlideTheAsk },
  { title: "Walt", render: SlideClosing },
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function Pitch() {
  const [mode, setMode] = useState("grid");
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(
    () => setCurrentSlide((i) => Math.min(i + 1, SLIDES.length - 1)),
    []
  );
  const goPrev = useCallback(
    () => setCurrentSlide((i) => Math.max(i - 1, 0)),
    []
  );
  const exitPresentation = useCallback(() => setMode("grid"), []);

  const enterPresentation = useCallback((index) => {
    setCurrentSlide(index);
    setMode("present");
  }, []);

  useEffect(() => {
    if (mode !== "present") return;
    const handleKey = (e) => {
      if (e.key === "Escape") exitPresentation();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [mode, exitPresentation, goNext, goPrev]);

  const SlideComponent = SLIDES[currentSlide]?.render;

  return (
    <>
      <Head>
        <title>Walt Pitch Deck - Investment & Business Overview</title>
        <meta
          name="description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet technology, roadmap, and business model for Android and iOS tap-to-pay."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://walt.is/pitch" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.is/pitch" />
        <meta property="og:title" content="Walt Pitch Deck" />
        <meta
          property="og:description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
        />
        <meta property="og:image" content="https://walt.is/pitch/slide-01.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is/pitch" />
        <meta property="twitter:title" content="Walt Pitch Deck" />
        <meta
          property="twitter:description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
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

      <div className="deck-page">
        <section className="hero-section">
          <header className="site-header">
            <Link href="/" className="site-logo">
              Walt
            </Link>
          </header>

          <div className="deck-hero-card">
            <h1>Pitch Deck</h1>
            <p>
              A comprehensive overview of Walt&rsquo;s mission to bring privacy-first
              mobile payments to Android and iOS.
            </p>
            <div className="pitch-downloads">
              <button
                className="deck-present-button"
                onClick={() => enterPresentation(0)}
              >
                Start Presentation
              </button>
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
            </div>
          </div>
        </section>

        <section className="deck-slides-section">
          <div className="deck-grid">
            {SLIDES.map((slide, index) => (
              <button
                key={index}
                className="deck-grid-item"
                onClick={() => enterPresentation(index)}
                aria-label={`View slide ${index + 1}: ${slide.title}`}
              >
                <div className="deck-slide-number">{index + 1}</div>
                <SlideThumb render={slide.render} />
              </button>
            ))}
          </div>
        </section>

        {mode === "present" && (
          <div className="deck-presentation" onClick={exitPresentation}>
            <button
              className="deck-pres-close"
              onClick={exitPresentation}
              aria-label="Exit presentation"
            >
              &times;
            </button>
            {currentSlide > 0 && (
              <button
                className="deck-pres-arrow deck-pres-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
            )}
            <div
              className="deck-pres-content"
              onClick={(e) => e.stopPropagation()}
            >
              <SlideComponent />
              <div className="deck-pres-counter">
                {currentSlide + 1} / {SLIDES.length}
              </div>
            </div>
            {currentSlide < SLIDES.length - 1 && (
              <button
                className="deck-pres-arrow deck-pres-next"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next slide"
              >
                &#8250;
              </button>
            )}
            <div className="deck-pres-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`deck-pres-dot${i === currentSlide ? " active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <Footer variant="pitch" />
      </div>
    </>
  );
}
