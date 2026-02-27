import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

/* ─── Slide Components ─────────────────────────────────────────────────────── */

function SlideTitle() {
  return (
    <div className="dk dk--title">
      <div className="dk-inner dk-center">
        <h1 className="dk-logo">WALT</h1>
        <div className="dk-divider" />
        <p className="dk-tagline">Private tap-to-pay</p>
        <p className="dk-sub">Pre-Seed Investment Opportunity</p>
      </div>
      <span className="dk-watermark">walt.is</span>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="dk dk--dark">
      <div className="dk-inner">
        <div className="dk-topbar">
          <span className="dk-label">The Problem</span>
        </div>
        <div className="dk-split">
          <div className="dk-split-left">
            <h2 className="dk-headline">Your daily spending reveals who you are.</h2>
            <p className="dk-text">
              Every tap-to-pay transaction on Android and iPhone routes through Google Wallet or Apple Pay.
              Both harvest this data to build profiles of your life, values, and behavior.
            </p>
            <p className="dk-callout">
              Zero private alternatives exist for the billions of daily tap-to-pay users worldwide.
            </p>
          </div>
          <div className="dk-split-right">
            <span className="dk-label dk-label--muted">Google Wallet by the numbers</span>
            <div className="dk-stat-stack">
              <div className="dk-stat-item">
                <span className="dk-stat-num">520M</span>
                <span className="dk-stat-desc">users worldwide</span>
              </div>
              <div className="dk-stat-item">
                <span className="dk-stat-num">$5.2T</span>
                <span className="dk-stat-desc">processed annually</span>
              </div>
              <div className="dk-stat-item">
                <span className="dk-stat-num">55B</span>
                <span className="dk-stat-desc">contactless payments in EU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideWhyNow() {
  return (
    <div className="dk dk--light">
      <div className="dk-inner">
        <div className="dk-topbar">
          <span className="dk-label">Why Now</span>
        </div>
        <div className="dk-whynow-grid">
          <div className="dk-tile">
            <span className="dk-tile-label">Privacy Awareness</span>
            <span className="dk-tile-stat">300K+</span>
            <span className="dk-tile-desc">users deleted Google Pay accounts in 2024</span>
          </div>
          <div className="dk-tile">
            <span className="dk-tile-label">Tap-to-Pay Growth</span>
            <span className="dk-tile-stat">91%</span>
            <span className="dk-tile-desc">of 25&ndash;34 year olds in key EU markets use tap-to-pay daily</span>
          </div>
          <div className="dk-tile">
            <span className="dk-tile-label">EU Legislation</span>
            <span className="dk-tile-stat">DMA</span>
            <span className="dk-tile-desc">Digital Markets Act mandates NFC access for third-party wallets</span>
          </div>
          <div className="dk-tile">
            <span className="dk-tile-label">Proven Demand</span>
            <span className="dk-tile-desc">Signal, ProtonMail, DuckDuckGo prove users will switch for privacy</span>
          </div>
          <div className="dk-tile dk-tile--accent" style={{ gridColumn: "2 / 4" }}>
            <span className="dk-tile-stat dk-tile-stat--white">The Gap</span>
            <span className="dk-tile-desc dk-tile-desc--white">No privacy-first wallet has moved to fill the opportunity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideSolution() {
  return (
    <div className="dk dk--dark">
      <div className="dk-inner">
        <div className="dk-topbar">
          <span className="dk-label">The Solution</span>
        </div>
        <div className="dk-split">
          <div className="dk-split-left">
            <h2 className="dk-headline dk-headline--accent">
              Walt is the private alternative to Google Wallet and Apple Pay.
            </h2>
            <p className="dk-text">
              A tap-to-pay wallet that treats transaction data as sacred.
              No collection. No storage. No selling.
            </p>
            <div className="dk-steps">
              <div className="dk-step"><span className="dk-step-n">1</span><span>On-device encryption</span></div>
              <div className="dk-step"><span className="dk-step-n">2</span><span>No server-side storage</span></div>
              <div className="dk-step"><span className="dk-step-n">3</span><span>Funded by users, not data</span></div>
            </div>
          </div>
          <div className="dk-split-right dk-split-right--card">
            <span className="dk-label dk-label--muted">Philosophy</span>
            <blockquote className="dk-quote">
              &ldquo;Add your card, tap to pay. That&rsquo;s it. Your transaction data never leaves your device.&rdquo;
            </blockquote>
            <p className="dk-text" style={{ opacity: 0.6 }}>
              Simple by design. Private by default.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideMarket() {
  return (
    <div className="dk dk--light">
      <div className="dk-inner">
        <div className="dk-topbar">
          <span className="dk-label">Market Opportunity</span>
        </div>
        <div className="dk-split">
          <div className="dk-split-left dk-market-stack">
            <div className="dk-market-item">
              <span className="dk-tile-label">TAM</span>
              <span className="dk-market-num">&euro;4.4B</span>
              <span className="dk-market-desc">All EU mobile wallet users at &euro;10/year</span>
            </div>
            <div className="dk-market-item">
              <span className="dk-tile-label">SAM</span>
              <span className="dk-market-num">&euro;440M</span>
              <span className="dk-market-desc">Privacy-conscious segment (10%)</span>
            </div>
            <div className="dk-market-item">
              <span className="dk-tile-label">SOM</span>
              <span className="dk-market-num">&euro;44M</span>
              <span className="dk-market-desc">Realistic 5-year capture (1%)</span>
            </div>
          </div>
          <div className="dk-split-right">
            <div className="dk-tile" style={{ flex: 1 }}>
              <span className="dk-tile-label">Market Tailwinds</span>
              <ul className="dk-list">
                <li>DMA opens NFC to third-party wallets</li>
                <li>EU privacy regulation trending stronger</li>
                <li>Privacy-tech adoption accelerating</li>
              </ul>
            </div>
            <div className="dk-tile dk-tile--accent">
              <span className="dk-tile-desc dk-tile-desc--white">First mover advantage in privacy-first payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideBusiness() {
  return (
    <div className="dk dk--dark">
      <div className="dk-inner">
        <div className="dk-topbar">
          <span className="dk-label">Business Model</span>
        </div>
        <div className="dk-split">
          <div className="dk-split-left dk-center-v">
            <div className="dk-price-hero">
              <span className="dk-price-amt">&euro;10</span>
              <span className="dk-price-per">/year</span>
            </div>
            <p className="dk-text" style={{ textAlign: "center" }}>
              No ads. No data monetization. Ever.
            </p>
          </div>
          <div className="dk-split-right">
            <div className="dk-tile" style={{ flex: 1 }}>
              <span className="dk-tile-label">Why Subscription?</span>
              <ul className="dk-list">
                <li>Aligns incentives with users, not advertisers</li>
                <li>Predictable recurring revenue</li>
                <li>Funds annual third-party security audits</li>
              </ul>
            </div>
            <div className="dk-tile" style={{ flex: 1 }}>
              <span className="dk-tile-label">Where It Goes</span>
              <ul className="dk-list">
                <li>Card network &amp; processing fees</li>
                <li>Infrastructure &amp; security</li>
                <li>Annual independent audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTraction() {
  return (
    <div className="dk dk--light">
      <div className="dk-inner">
        <div className="dk-topbar">
          <span className="dk-label">Traction</span>
        </div>
        <div className="dk-split">
          <div className="dk-split-left">
            <div className="dk-tile" style={{ flex: 1 }}>
              <span className="dk-tile-label">Current Progress</span>
              <ul className="dk-list">
                <li>Paymentology partnership secured</li>
                <li>App in beta (Android)</li>
                <li>Public waitlist live at walt.is</li>
                <li>Embedded Engineering ApS registered in Copenhagen</li>
              </ul>
            </div>
          </div>
          <div className="dk-split-right">
            <div className="dk-tile dk-tile--accent" style={{ flex: 1 }}>
              <span className="dk-tile-label dk-tile-label--white">Challenges Ahead</span>
              <ul className="dk-list dk-list--white">
                <li>EMI license application (EU)</li>
                <li>iOS NFC integration post-DMA</li>
                <li>Building initial user base</li>
                <li>Security certification process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTeam() {
  return (
    <div className="dk dk--dark">
      <div className="dk-inner">
        <div className="dk-topbar">
          <span className="dk-label">Team</span>
        </div>
        <div className="dk-split">
          <div className="dk-split-left">
            <div className="dk-tile" style={{ flex: 1 }}>
              <div className="dk-avatar">CB</div>
              <h3 className="dk-name">Cole Bittel</h3>
              <p className="dk-role">Founder</p>
              <p className="dk-text">
                Previously at Pleo and Funding Circle.
                Fintech product and engineering background.
              </p>
              <p className="dk-meta">Embedded Engineering ApS &middot; Copenhagen</p>
            </div>
          </div>
          <div className="dk-split-right">
            <span className="dk-label dk-label--muted">Key Hires</span>
            <div className="dk-tile" style={{ flex: 1 }}>
              <span className="dk-tile-label">Hire #1 &mdash; BDR / Partnerships</span>
              <span className="dk-tile-desc">Drive bank and processor partnerships across EU markets</span>
            </div>
            <div className="dk-tile" style={{ flex: 1 }}>
              <span className="dk-tile-label">Hire #2 &mdash; Marketing</span>
              <span className="dk-tile-desc">Build brand awareness in privacy-conscious communities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideAsk() {
  return (
    <div className="dk dk--title">
      <div className="dk-inner dk-center">
        <p className="dk-sub" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>The Ask</p>
        <h2 className="dk-headline" style={{ color: "#151515", textAlign: "center" }}>
          Work in progress &mdash; still formulating the ask.
        </h2>
        <blockquote className="dk-pullquote">
          &ldquo;Transaction data is sacred.&rdquo;
        </blockquote>
        <div className="dk-contact">
          <p>Cole Bittel, Founder</p>
          <p>cole@walt.is &middot; walt.is</p>
        </div>
      </div>
      <span className="dk-watermark">walt.is</span>
    </div>
  );
}

/* ─── Slide Array ──────────────────────────────────────────────────────────── */

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "Why Now", render: SlideWhyNow },
  { title: "The Solution", render: SlideSolution },
  { title: "Market Opportunity", render: SlideMarket },
  { title: "Business Model", render: SlideBusiness },
  { title: "Traction", render: SlideTraction },
  { title: "Team", render: SlideTeam },
  { title: "The Ask", render: SlideAsk },
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function PitchDeck() {
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
        <title>Walt - 5-Minute Pitch Deck</title>
        <meta
          name="description"
          content="Walt's condensed pitch deck: privacy-first tap-to-pay. Market opportunity, product, business model, and team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://walt.is/pitch-deck" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.is/pitch-deck" />
        <meta property="og:title" content="Walt - 5-Minute Pitch Deck" />
        <meta
          property="og:description"
          content="Privacy-first tap-to-pay. 9-slide condensed pitch."
        />
        <meta property="og:image" content="https://walt.is/pitch/slide-01.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is/pitch-deck" />
        <meta property="twitter:title" content="Walt - 5-Minute Pitch Deck" />
        <meta
          property="twitter:description"
          content="Privacy-first tap-to-pay. 9-slide condensed pitch."
        />
        <meta property="twitter:image" content="https://walt.is/pitch/slide-01.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Walt - 5-Minute Pitch Deck",
              description: "Condensed pitch deck for Walt, the privacy-first mobile wallet",
              url: "https://walt.is/pitch-deck",
              publisher: {
                "@type": "Organization",
                name: "Walt",
                url: "https://walt.is",
              },
            }),
          }}
        />
      </Head>

      <div className="deck-page">
        {/* Hero */}
        <section className="hero-section">
          <header className="site-header">
            <Link href="/" className="site-logo">
              Walt
            </Link>
          </header>

          <div className="deck-hero-card">
            <h1>Pitch Deck</h1>
            <p>
              A condensed 9-slide overview of Walt &mdash; designed for a 5-minute presentation.
            </p>
            <div className="pitch-downloads">
              <button
                className="deck-present-button"
                onClick={() => enterPresentation(0)}
              >
                Start Presentation
              </button>
              <Link href="/pitch" className="pitch-download-button outline">
                View Full Pitch Deck
              </Link>
              <a href="/pitch/pitch-deck.pdf" className="pitch-download-button outline" download>
                Full Deck PDF
              </a>
              <a href="/pitch/walt-pitch.pptx" className="pitch-download-button outline" download>
                Full Deck PowerPoint
              </a>
              <a href="/pitch/walt-pitch.key" className="pitch-download-button outline" download>
                Full Deck Keynote
              </a>
            </div>
          </div>
        </section>

        {/* Grid View */}
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

        {/* Presentation Mode */}
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

        <Footer variant="pitch-deck" />
      </div>
    </>
  );
}
