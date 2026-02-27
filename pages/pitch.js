import { useState, useEffect, useCallback, useRef } from "react";
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

/* ─── Slide 2: The Problem (combined with No Alternatives) ─────────────────── */

function SlideProblem() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <div className="ps-content">
          <div className="ps-cols-2" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
            <div className="ps-card ps-card--left">
              <p className="ps-label">APPLE PAY</p>
              <p className="ps-stat" style={{ margin: "clamp(2px, 0.3vw, 6px) 0" }}>~650M</p>
              <p className="ps-body ps-muted" style={{ marginBottom: "clamp(6px, 0.8vw, 14px)" }}>users worldwide</p>
              <p className="ps-body" style={{ fontWeight: 600, color: "#151515" }}>
                Charges banks 0.15% on tap-to-pay transaction
              </p>
              <p className="ps-body ps-muted">
                ~$2.7B/year extracted from banks. Costs passed to consumers through higher fees.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-label">GOOGLE WALLET</p>
              <p className="ps-stat" style={{ margin: "clamp(2px, 0.3vw, 6px) 0" }}>~520M</p>
              <p className="ps-body ps-muted" style={{ marginBottom: "clamp(6px, 0.8vw, 14px)" }}>users worldwide</p>
              <p className="ps-body" style={{ fontWeight: 600, color: "#151515" }}>
                Harvests transaction data to deepen user profiles and train models
              </p>
              <p className="ps-body ps-muted">
                $0 fees. You&rsquo;re the product. Every purchase is used to learn about you.
              </p>
            </div>
          </div>
          <div className="ps-banner">
            <p className="ps-banner-h">Every tap routes through American Big Tech</p>
            <p className="ps-banner-body">
              Apple extracts fees from your bank. Google extracts data from your life.
              1.2B users. $14T processed annually. 99.6% of smartphones. No alternative.
            </p>
          </div>
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
          <div className="ps-split ps-split--center">
            <div>
              <p className="ps-lead">
                Walt is the private alternative to Apple Pay and Google Wallet.
              </p>
              <p className="ps-body" style={{ marginBottom: "clamp(8px, 1.2vw, 18px)" }}>
                A tap-to-pay wallet for Android and iOS that treats transaction data as sacred.
                No collection. No storage. No selling.
              </p>
              <div className="ps-num-row">
                <span className="ps-num">1</span>
                <span className="ps-body">Transaction data stays encrypted on your device. No server-side storage</span>
              </div>
              <div className="ps-num-row">
                <span className="ps-num">2</span>
                <span className="ps-body">Funded by users, not data monetization</span>
              </div>
              <div className="ps-num-row">
                <span className="ps-num">3</span>
                <span className="ps-body">No AI. No premium features. Load a card, set Walt as default wallet, start tapping to pay.</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "clamp(6px, 1vw, 16px)", justifyContent: "center" }}>
              {[
                { src: "/promo-screen.jpg", alt: "Walt home screen" },
                { src: "/add-card.jpg", alt: "Add card screen" },
                { src: "/intro-screen.jpg", alt: "Tap to pay screen" },
              ].map((img) => (
                <div key={img.src} style={{
                  width: "clamp(70px, 10vw, 160px)",
                  borderRadius: "clamp(4px, 0.6vw, 10px)",
                  overflow: "hidden"
                }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={160}
                    height={347}
                    sizes="(max-width: 768px) 80px, 160px"
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
        <div className="ps-content">
          <div className="ps-cols-3" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
            <div className="ps-card">
              <p className="ps-card-h">PRIVACY AWARENESS SURGING</p>
              <p className="ps-stat" style={{ margin: "clamp(2px, 0.3vw, 6px) 0" }}>500K+</p>
              <p className="ps-body ps-muted">
                r/degoogle members. Wero reached 48.5M users in 18 months as
                Europe builds its own payment rails. Digital euro incoming.
              </p>
            </div>
            <div className="ps-card">
              <p className="ps-card-h">TAP-TO-PAY EXPLODING</p>
              <p className="ps-stat" style={{ margin: "clamp(2px, 0.3vw, 6px) 0" }}>91%</p>
              <p className="ps-body ps-muted">
                of UK 25-34 year olds use contactless payments.
                23.2B contactless payments in euro area, H2 2023.
              </p>
            </div>
            <div className="ps-card">
              <p className="ps-card-h">LEGISLATION</p>
              <p className="ps-stat" style={{ margin: "clamp(2px, 0.3vw, 6px) 0", fontSize: "clamp(14px, 2vw, 32px)" }}>
                July 2025
              </p>
              <p className="ps-body ps-muted">
                EU mandated NFC access (decided 2024). Apple and Google published wallet APIs
                and allowed default-wallet switching in July 2025.
              </p>
            </div>
          </div>
          <div className="ps-cols-2">
            <div className="ps-card">
              <p className="ps-card-h">Privacy Alternatives Winning</p>
              <p className="ps-body">Google Search &rarr; DuckDuckGo, ChatGPT</p>
              <p className="ps-body">Gmail &rarr; ProtonMail, Hey.com</p>
              <p className="ps-body">Chrome &rarr; Firefox, Brave</p>
              <p className="ps-body">WhatsApp &rarr; Signal</p>
            </div>
            <div className="ps-banner">
              <p className="ps-banner-h">The Gap</p>
              <p className="ps-banner-body">
                Every major Big Tech product has a privacy-focused competitor.
                However, competition for both Google Wallet and Apple Pay was
                only unlocked in July 2025.
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

/* ─── Slide 5: Market Size ─────────────────────────────────────────────────── */

function SlideMarketSize() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Market Size</h2>
        <div className="ps-content" style={{ gap: "clamp(8px, 1.2vw, 20px)" }}>
          <div className="ps-split" style={{ alignItems: "start" }}>
            <div className="ps-stack" style={{ gap: "clamp(6px, 0.8vw, 14px)" }}>
              <div className="ps-card ps-card--left" style={{ padding: "clamp(8px, 1.2vw, 20px) clamp(10px, 1.5vw, 26px)" }}>
                <p className="ps-label">TAM</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 14px)" }}>
                  <p className="ps-stat">$18.7B</p>
                  <p className="ps-body ps-muted">Global mobile wallet market (2024)</p>
                </div>
              </div>
              <div className="ps-card ps-card--left" style={{ padding: "clamp(8px, 1.2vw, 20px) clamp(10px, 1.5vw, 26px)" }}>
                <p className="ps-label">SAM</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 14px)" }}>
                  <p className="ps-stat">$6.9B</p>
                  <p className="ps-body ps-muted">European Android + iOS tap-to-pay users</p>
                </div>
              </div>
              <div className="ps-card ps-card--left" style={{ padding: "clamp(8px, 1.2vw, 20px) clamp(10px, 1.5vw, 26px)" }}>
                <p className="ps-label">SOM</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(6px, 0.8vw, 14px)" }}>
                  <p className="ps-stat">$34.5M</p>
                  <p className="ps-body ps-muted">0.5% of European mobile wallet users willing to pay for privacy</p>
                </div>
              </div>
            </div>
            <div className="ps-card">
              <p className="ps-card-h">Market Tailwinds</p>
              <ul className="ps-bullets" style={{ gap: "clamp(6px, 0.8vw, 14px)" }}>
                <li className="ps-bullet">Euro area contactless payments growing 15.5% YoY to 29.5B transactions (ECB, H2 2024)</li>
                <li className="ps-bullet">Pro-European, anti-American sentiment accelerating and likely for at least the next 3 years</li>
                <li className="ps-bullet">European introduction of digital euro (potential product fit)</li>
                <li className="ps-bullet">Wero as penetration model for European-based payment solutions</li>
              </ul>
            </div>
          </div>
          <div className="ps-banner">
            <p className="ps-banner-h">1.2B Apple Pay + Google Wallet users</p>
            <p className="ps-banner-body">All potential Walt converts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 6: Team ────────────────────────────────────────────────────────── */

function SlideTeam() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Team</h2>
        <div className="ps-content">
          <div className="ps-split ps-split--center">
            <div className="ps-card" style={{ padding: "clamp(12px, 1.8vw, 30px) clamp(14px, 2vw, 34px)" }}>
              <div style={{ display: "flex", gap: "clamp(8px, 1.2vw, 20px)", alignItems: "center", marginBottom: "clamp(8px, 1.2vw, 18px)" }}>
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
                  <p className="ps-body" style={{ fontWeight: 500, color: "var(--orange-primary)" }}>Founder</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(6px, 0.8vw, 14px) clamp(12px, 2vw, 32px)" }}>
                <div>
                  <p className="ps-label" style={{ marginBottom: "clamp(2px, 0.2vw, 4px)" }}>EXPERIENCE</p>
                  <p className="ps-body ps-muted">Early engineer at Legora, Pleo, and Funding Circle</p>
                </div>
                <div>
                  <p className="ps-label" style={{ marginBottom: "clamp(2px, 0.2vw, 4px)" }}>LOCATION</p>
                  <p className="ps-body ps-muted">Copenhagen, Denmark. 7 years</p>
                </div>
                <div>
                  <p className="ps-label" style={{ marginBottom: "clamp(2px, 0.2vw, 4px)" }}>RESIDENCY</p>
                  <p className="ps-body ps-muted">American citizen, Danish permanent resident (citizen in ~2 years)</p>
                </div>
                <div>
                  <p className="ps-label" style={{ marginBottom: "clamp(2px, 0.2vw, 4px)" }}>ENTITY</p>
                  <p className="ps-body ps-muted">Embedded Engineering ApS</p>
                </div>
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

/* ─── Slide 7: Business Model ─────────────────────────────────────────────── */

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
                  <strong>Apple Pay:</strong> charges banks 0.15% per tap-to-pay transaction (~$2.7B/yr)
                </p>
                <p className="ps-body" style={{ marginBottom: "clamp(3px, 0.4vw, 6px)" }}>
                  <strong>Google Wallet:</strong> $0 fees. Monetizes your data through ads
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
                <li className="ps-bullet ps-bullet--bold" style={{ color: "#151515", textDecoration: "underline" }}>First bank partnerships</li>
                <li className="ps-bullet ps-bullet--bold" style={{ color: "#151515" }}>Nordic marketing and customer awareness</li>
                <li className="ps-bullet ps-bullet--bold" style={{ color: "#151515" }}>Germany, France, Belgium penetration</li>
              </ul>
            </div>
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
        <p className="ps-body" style={{ color: "#151515", fontSize: "clamp(12px, 1.5vw, 24px)", marginBottom: "clamp(4px, 0.6vw, 10px)" }}>
          Your daily spending reveals who you are.
        </p>
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
  { title: "Business Model", render: SlideBusinessModel },
  { title: "Why Now?", render: SlideWhyNow },
  { title: "Market Size", render: SlideMarketSize },
  { title: "Team", render: SlideTeam },
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
