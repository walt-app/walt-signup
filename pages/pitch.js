import { useState, useEffect, useCallback } from "react";
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
        <p className="ps-small" style={{ marginTop: "clamp(8px, 1.5vw, 24px)" }}>
          Pre-Seed Investment Opportunity
        </p>
      </div>
      <span className="ps-watermark">walt.is</span>
    </div>
  );
}

/* ─── Slide 2: The Problem ─────────────────────────────────────────────────── */

function SlideProblem() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <div className="ps-content">
          <div className="ps-split ps-split--center">
            <div>
              <p className="ps-lead">Your daily spending reveals who you are.</p>
              <p className="ps-body" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
                Every tap-to-pay transaction routes through Apple Pay or Google Wallet.
                Apple charges banks 0.15% on every credit card tap and controls which wallets
                can access NFC on iPhone. Google harvests this data along with Google Search,
                Gmail, Calendar, Google Maps data to build intimate profiles of your life,
                values, and future behavior.
              </p>
              <p className="ps-body ps-italic">
                &ldquo;To know what you spend your money on each day is also to know what you
                will spend your money on each day.&rdquo;
              </p>
            </div>
            <div className="ps-card">
              <p className="ps-card-h">Mobile wallets by the numbers:</p>
              <div className="ps-stat-inline">
                <span className="ps-stat">~650M</span>
                <span className="ps-stat-desc">Apple Pay users (est.)</span>
              </div>
              <div className="ps-stat-inline">
                <span className="ps-stat">~520M</span>
                <span className="ps-stat-desc">Google Pay users (est.)</span>
              </div>
              <div className="ps-stat-inline">
                <span className="ps-stat">~$14T</span>
                <span className="ps-stat-desc">combined processed annually (est.)</span>
              </div>
              <div className="ps-stat-inline">
                <span className="ps-stat">23.2B</span>
                <span className="ps-stat-desc">contactless payments, euro area H2 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-src">
          Sources: <a href="#">CoinLaw (est.)</a>, <a href="#">European Central Bank</a>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: No Alternatives Exist ───────────────────────────────────────── */

function SlideNoAlternatives() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">No Alternatives Exist</h2>
        <div className="ps-content">
          <p className="ps-body ps-muted" style={{ margin: "clamp(6px, 1vw, 16px) 0 clamp(10px, 1.5vw, 24px)" }}>
            For anyone who wants tap-to-pay without surveillance, current options are:
          </p>
          <div className="ps-cols-3" style={{ marginBottom: "clamp(10px, 1.5vw, 24px)" }}>
            <div className="ps-card ps-card--left">
              <p className="ps-card-title">Switch to Cash</p>
              <p className="ps-body ps-muted">
                Go backwards. Use physical cards or cash. Lose convenience,
                risk loss/theft, carry more items.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-card-title">Use a Big Tech Wallet</p>
              <p className="ps-body ps-muted">
                Apple charges banks per tap. Google harvests your data.
                Neither offers privacy by default.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-card-title">Accept It</p>
              <p className="ps-body ps-muted">
                73% of US consumers feel they have no control over how companies
                use their data.
              </p>
            </div>
          </div>
          <div className="ps-banner">
            <p className="ps-banner-h">
              Android + iOS = 99.6% of the global smartphone market.
            </p>
            <p className="ps-banner-body">
              There is no privacy-preserving tap-to-pay option on either platform.
            </p>
          </div>
        </div>
        <div className="ps-src">
          Sources: <a href="#">Pew Research</a>, <a href="#">StatCounter</a>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 4: The Solution ────────────────────────────────────────────────── */

function SlideSolution() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Solution</h2>
        <div className="ps-content">
          <div className="ps-split ps-split--center">
            <div>
              <p className="ps-lead">
                Walt is the private alternative to Apple Pay and Google Wallet.
              </p>
              <p className="ps-body" style={{ marginBottom: "clamp(10px, 1.5vw, 24px)" }}>
                A tap-to-pay wallet for Android and iOS that treats transaction data as sacred.
                No collection. No storage. No selling.
              </p>
              <div className="ps-num-row">
                <span className="ps-num">1</span>
                <span className="ps-body">Transaction data stays encrypted on your device</span>
              </div>
              <div className="ps-num-row">
                <span className="ps-num">2</span>
                <span className="ps-body">No server-side transaction storage</span>
              </div>
              <div className="ps-num-row">
                <span className="ps-num">3</span>
                <span className="ps-body">Funded by users, not data monetization</span>
              </div>
            </div>
            <div className="ps-card">
              <p className="ps-label">PHILOSOPHY</p>
              <p className="ps-body ps-italic" style={{
                fontSize: "clamp(11px, 1.4vw, 22px)",
                lineHeight: 1.4,
                color: "#333",
                margin: "clamp(6px, 0.8vw, 14px) 0"
              }}>
                No AI. No premium features. There&rsquo;s only one user flow that matters.
                Load a card, set Walt as default wallet, start tapping to pay.
              </p>
              <p style={{
                fontSize: "clamp(9px, 1vw, 16px)",
                fontWeight: 500,
                color: "var(--orange-primary)",
                margin: 0
              }}>
                Deliberately simple. Intentionally focused.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 5: Product ─────────────────────────────────────────────────────── */

function SlideProduct() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Product</h2>
        <p className="ps-body ps-muted" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
          Simple and straightforward. A predictable, familiar wallet app.
        </p>
        <div className="ps-content">
          <div className="ps-cols-3" style={{ alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(6px, 0.8vw, 14px)" }}>
              <p className="ps-card-title" style={{ textAlign: "center" }}>Download</p>
              <p className="ps-body ps-muted" style={{ textAlign: "center" }}>Available on Android and iOS.</p>
              <div style={{
                width: "clamp(60px, 9vw, 140px)",
                borderRadius: "clamp(6px, 0.8vw, 14px)",
                overflow: "hidden"
              }}>
                <Image
                  src="/promo-screen.jpg"
                  alt="Walt app home screen"
                  width={140}
                  height={304}
                  sizes="(max-width: 768px) 80px, 140px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(6px, 0.8vw, 14px)" }}>
              <p className="ps-card-title" style={{ textAlign: "center" }}>Add Cards</p>
              <p className="ps-body ps-muted" style={{ textAlign: "center" }}>
                Enter card details. Everything stays encrypted locally.
              </p>
              <div style={{
                width: "clamp(60px, 9vw, 140px)",
                borderRadius: "clamp(6px, 0.8vw, 14px)",
                overflow: "hidden"
              }}>
                <Image
                  src="/add-card.jpg"
                  alt="Add card screen"
                  width={140}
                  height={304}
                  sizes="(max-width: 768px) 80px, 140px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(6px, 0.8vw, 14px)" }}>
              <p className="ps-card-title" style={{ textAlign: "center" }}>Tap to Pay</p>
              <p className="ps-body ps-muted" style={{ textAlign: "center" }}>
                Same experience you&rsquo;re used to with Google Wallet or Apple Pay.
              </p>
              <div style={{
                width: "clamp(60px, 9vw, 140px)",
                borderRadius: "clamp(6px, 0.8vw, 14px)",
                overflow: "hidden"
              }}>
                <Image
                  src="/intro-screen.jpg"
                  alt="Tap to pay screen"
                  width={140}
                  height={304}
                  sizes="(max-width: 768px) 80px, 140px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 6: Why Now? ────────────────────────────────────────────────────── */

function SlideWhyNow() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Why Now?</h2>
        <div className="ps-content">
          <div className="ps-cols-3" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
            <div className="ps-card">
              <p className="ps-card-h">PRIVACY AWARENESS SURGING</p>
              <p className="ps-stat" style={{ margin: "clamp(2px, 0.3vw, 6px) 0" }}>300K+</p>
              <p className="ps-body ps-muted">
                r/degoogle members. Apple fined &euro;1.8B + &euro;500M by EU
                for anti-competitive practices (2024&ndash;2025).
              </p>
            </div>
            <div className="ps-card">
              <p className="ps-card-h">TAP-TO-PAY EXPLODING</p>
              <p className="ps-stat" style={{ margin: "clamp(2px, 0.3vw, 6px) 0" }}>23.2B</p>
              <p className="ps-body ps-muted">
                contactless payments in euro area, H2 2023 (+16% YoY).
                &gt;97% of new smartphones ship with NFC.
              </p>
            </div>
            <div className="ps-card">
              <p className="ps-card-h">LEGISLATION</p>
              <p className="ps-stat" style={{ margin: "clamp(2px, 0.3vw, 6px) 0", fontSize: "clamp(14px, 2vw, 32px)" }}>
                EU NFC Opening
              </p>
              <p className="ps-body ps-muted">
                EU opened iPhone NFC to rivals (July 2024). US DOJ antitrust suit
                vs Apple Pay (filed March 2024). eIDAS 2.0 mandates digital wallets by Dec 2026.
              </p>
            </div>
          </div>
          <div className="ps-cols-2">
            <div className="ps-card">
              <p className="ps-card-h">Privacy Alternatives Winning</p>
              <p className="ps-body">Google Search competes with DuckDuckGo, ChatGPT</p>
              <p className="ps-body">Gmail competes with ProtonMail, Hey.com</p>
              <p className="ps-body">Chrome competes with Firefox, Brave</p>
              <p className="ps-body">iMessage competes with Signal</p>
            </div>
            <div className="ps-banner">
              <p className="ps-banner-h">The Gap</p>
              <p className="ps-banner-body">
                Every major Big Tech product has a privacy-focused competitor.
                However, competition for both Google Wallet and Apple Pay was
                only unlocked in 2024.
              </p>
            </div>
          </div>
        </div>
        <div className="ps-src">
          Sources: <a href="#">European Central Bank</a>, <a href="#">European Commission</a>, <a href="#">US DOJ</a>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 7: Market Size ─────────────────────────────────────────────────── */

function SlideMarketSize() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Market Size</h2>
        <div className="ps-content">
          <div className="ps-split" style={{ alignItems: "stretch" }}>
            <div className="ps-stack">
              <div className="ps-card ps-card--left">
                <p className="ps-label">TAM - TOTAL ADDRESSABLE MARKET</p>
                <p className="ps-stat">$18.7B</p>
                <p className="ps-body ps-muted">Global mobile wallet market (2024)</p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-label">SAM - SERVICEABLE ADDRESSABLE MARKET</p>
                <p className="ps-stat">$6.9B</p>
                <p className="ps-body ps-muted">European Android + iOS tap-to-pay users</p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-label">SOM - SERVICEABLE OBTAINABLE MARKET</p>
                <p className="ps-stat">$34.5M</p>
                <p className="ps-body ps-muted">0.5% of European mobile wallet users willing to pay for privacy</p>
              </div>
            </div>
            <div className="ps-stack" style={{ justifyContent: "center" }}>
              <div className="ps-card">
                <p className="ps-card-h">Market Tailwinds</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">Android + iOS = 99.6% of smartphones globally</li>
                  <li className="ps-bullet">EU digital payments growing 15% annually</li>
                  <li className="ps-bullet">Pro-privacy sentiment accelerating across EU and US</li>
                </ul>
              </div>
              <div className="ps-banner">
                <p className="ps-banner-h">1.2B Apple Pay + Google Wallet users (est.)</p>
                <p className="ps-banner-body">All potential Walt converts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 8: Team ────────────────────────────────────────────────────────── */

function SlideTeam() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Team</h2>
        <div className="ps-content">
          <div className="ps-split ps-split--center">
            <div className="ps-card" style={{ display: "flex", gap: "clamp(8px, 1.2vw, 20px)", alignItems: "center" }}>
              <div style={{
                width: "clamp(36px, 4vw, 64px)",
                height: "clamp(36px, 4vw, 64px)",
                borderRadius: "50%",
                background: "var(--orange-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: "clamp(14px, 1.6vw, 26px)",
                flexShrink: 0
              }}>CB</div>
              <div>
                <p className="ps-card-title">Cole Bittel</p>
                <p className="ps-body" style={{ fontWeight: 500 }}>Founder</p>
                <p className="ps-body ps-muted" style={{ marginTop: "clamp(2px, 0.2vw, 4px)" }}>
                  DevOps and Infrastructure Engineer.
                  Former: Pleo, Funding Circle. Current: Legora.
                </p>
                <p className="ps-body ps-muted">Embedded Engineering ApS | Copenhagen, Denmark</p>
              </div>
            </div>
            <div className="ps-stack">
              <p className="ps-card-h" style={{ marginBottom: 0 }}>Key Hires</p>
              <div className="ps-card">
                <p className="ps-card-title">BDR / Partnerships</p>
                <p className="ps-body ps-muted">
                  Unlocking relationships with banks, enabling bank cards across
                  Europe to be loaded into Walt.
                </p>
              </div>
              <div className="ps-card">
                <p className="ps-card-title">Marketing</p>
                <p className="ps-body ps-muted">
                  Building brand awareness in privacy-conscious communities:
                  Proton, Signal, Brave, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 9: Business Model ──────────────────────────────────────────────── */

function SlideBusinessModel() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Business Model</h2>
        <p className="ps-body ps-muted" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
          Simple pricing that replaces the hidden costs of Big Tech wallets.
        </p>
        <div className="ps-content">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1.5fr", gap: "clamp(8px, 1.2vw, 20px)", alignItems: "start" }}>
            <div className="ps-price-card" style={{ height: "100%" }}>
              <p className="ps-stat" style={{ fontSize: "clamp(32px, 5vw, 80px)" }}>&euro;10</p>
              <p style={{
                fontSize: "clamp(12px, 1.5vw, 24px)",
                fontWeight: 400,
                color: "#151515",
                margin: "0 0 clamp(4px, 0.5vw, 8px)"
              }}>/year</p>
              <div className="ps-divider" />
              <p className="ps-banner-body">
                Privacy you can trust, funded by users who value it.
              </p>
            </div>
            <div className="ps-stack">
              <div className="ps-card">
                <p className="ps-card-h">How Incumbents Make Money</p>
                <p className="ps-body" style={{ marginBottom: "clamp(3px, 0.4vw, 6px)" }}>
                  <strong>Apple Pay:</strong> charges banks 0.15% per credit tap (~$2.7B/yr)
                </p>
                <p className="ps-body" style={{ marginBottom: "clamp(3px, 0.4vw, 6px)" }}>
                  <strong>Google Wallet:</strong> $0 fees &mdash; monetizes your data through ads
                </p>
                <p className="ps-body">
                  <strong>Walt:</strong> &euro;10/year from you. No bank fees. No data. Ever.
                </p>
              </div>
              <div className="ps-card">
                <p className="ps-card-h">Where It Goes</p>
                <p className="ps-body ps-muted">Salary - Founder and BDR / partnerships hire</p>
                <p className="ps-body ps-muted">Aggregator fees - Paymentology fees based on active users</p>
              </div>
            </div>
            <div className="ps-card" style={{ height: "fit-content" }}>
              <p className="ps-card-h">No Premium Model</p>
              <p className="ps-body ps-muted">
                Expanding the product to include more features and a premium model
                bloats the target of the product and reduces the trust relationship
                the product is founded on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 10: Traction & Roadmap ─────────────────────────────────────────── */

function SlideTraction() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Traction &amp; Roadmap</h2>
        <div className="ps-content">
          <div className="ps-cols-3" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
            <div className="ps-card ps-card--top">
              <p className="ps-label">H2 2025</p>
              <p className="ps-card-title">Foundation</p>
              <p className="ps-body ps-muted">
                Public waitlist live. Aggregator partnership with Paymentology in place.
                Android application ready for card loading once banks are unlocked.
              </p>
            </div>
            <div className="ps-card ps-card--top">
              <p className="ps-label">Q1 2026</p>
              <p className="ps-card-title">Partnerships</p>
              <p className="ps-body ps-muted">
                Find co-founder. First bank contract to unblock card loads.
                Begin iOS development leveraging EU NFC access mandate.
              </p>
            </div>
            <div className="ps-card ps-card--top">
              <p className="ps-label">Q2 2026</p>
              <p className="ps-card-title">Launch</p>
              <p className="ps-body ps-muted">
                First cards loaded. First transactions processed.
                Geographic expansion begins.
              </p>
            </div>
          </div>
          <div className="ps-cols-2">
            <div className="ps-card">
              <p className="ps-card-h">Current Progress</p>
              <ul className="ps-bullets">
                <li className="ps-bullet ps-bullet--bold">Paymentology partnership for aggregator</li>
                <li className="ps-bullet ps-bullet--bold">Android application ready for beta group testing</li>
                <li className="ps-bullet ps-bullet--bold">Public website and signup list created</li>
              </ul>
            </div>
            <div className="ps-banner" style={{ textAlign: "left" }}>
              <p className="ps-banner-h" style={{ textAlign: "left" }}>Key Challenges Ahead</p>
              <ul className="ps-bullets" style={{ marginTop: "clamp(4px, 0.5vw, 8px)" }}>
                <li className="ps-bullet ps-bullet--bold" style={{ color: "#151515" }}>First bank partnership</li>
                <li className="ps-bullet ps-bullet--bold" style={{ color: "#151515" }}>Legal signoff from Visa and Mastercard</li>
                <li className="ps-bullet ps-bullet--bold" style={{ color: "#151515" }}>First card load onto Walt</li>
                <li className="ps-bullet ps-bullet--bold" style={{ color: "#151515" }}>iOS NFC integration (EU markets first)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 11: The Ask ────────────────────────────────────────────────────── */

function SlideTheAsk() {
  const funds = [
    { label: "Business Development Hire", pct: 50 },
    { label: "Aggregator Fees", pct: 25 },
    { label: "Founder Salary", pct: 15 },
    { label: "Marketing", pct: 10 },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Ask</h2>
        <div className="ps-content">
          <div className="ps-split ps-split--center">
            <div className="ps-price-card">
              <p className="ps-label" style={{ color: "#151515", letterSpacing: "0.12em" }}>PRE-SEED ROUND</p>
              <p className="ps-stat" style={{ fontSize: "clamp(36px, 5.5vw, 88px)", margin: "clamp(4px, 0.5vw, 10px) 0" }}>$500K</p>
              <div className="ps-divider" />
              <p className="ps-banner-body">18 months runway</p>
            </div>
            <div className="ps-card" style={{ padding: "clamp(14px, 2.2vw, 38px) clamp(16px, 2.5vw, 42px)" }}>
              <p className="ps-card-h">Use of Funds</p>
              {funds.map((item) => (
                <div key={item.label}>
                  <div className="ps-bar-row">
                    <span className="ps-bar-label">{item.label}</span>
                    <span className="ps-bar-pct">{item.pct}%</span>
                  </div>
                  <div className="ps-bar">
                    <div className="ps-bar-fill" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
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

/* ─── Slide Array ──────────────────────────────────────────────────────────── */

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "No Alternatives Exist", render: SlideNoAlternatives },
  { title: "The Solution", render: SlideSolution },
  { title: "Product", render: SlideProduct },
  { title: "Why Now?", render: SlideWhyNow },
  { title: "Market Size", render: SlideMarketSize },
  { title: "Team", render: SlideTeam },
  { title: "Business Model", render: SlideBusinessModel },
  { title: "Traction & Roadmap", render: SlideTraction },
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
              <a
                href="/pitch/walt-pitch.key"
                className="pitch-download-button outline"
                download="Walt-Pitch.key"
              >
                Download Keynote
              </a>
              <Link href="/pitch-deck" className="pitch-download-button orange">
                5-Minute Version
              </Link>
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
                <slide.render />
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
