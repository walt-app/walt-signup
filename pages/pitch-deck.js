import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

/* ─── Slide Components ─────────────────────────────────────────────────────── */

function SlideTitle() {
  return (
    <div className="deck-slide deck-slide--accent">
      <div className="deck-slide-inner deck-slide-center">
        <h1 className="deck-slide-logo">WALT</h1>
        <div className="deck-slide-divider" />
        <p className="deck-slide-subtitle">
          Private tap-to-pay
        </p>
        <p className="deck-slide-sub2">Pre-Seed Investment Opportunity</p>
      </div>
      <span className="deck-slide-watermark">walt.is</span>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">The Problem</h2>
        <div className="deck-two-col">
          <div>
            <p className="deck-slide-lead">
              Your daily spending reveals who you are.
            </p>
            <p className="deck-slide-body">
              Every tap-to-pay transaction on Android and iPhone routes through Google Wallet or Apple Pay.
              Both harvest this data to build profiles of your life, values, and behavior.
            </p>
            <blockquote className="deck-quote">
              &ldquo;Zero private alternatives exist for the billions of daily tap-to-pay users worldwide.&rdquo;
            </blockquote>
          </div>
          <div className="deck-card">
            <span className="deck-eyebrow">Google Wallet by the numbers</span>
            <div className="deck-stat-rows">
              <div className="deck-stat-row-item">
                <span className="deck-stat-big">520M</span>
                <span className="deck-stat-label">users worldwide</span>
              </div>
              <div className="deck-stat-row-item">
                <span className="deck-stat-big">$5.2T</span>
                <span className="deck-stat-label">processed annually</span>
              </div>
              <div className="deck-stat-row-item">
                <span className="deck-stat-big">55B</span>
                <span className="deck-stat-label">contactless payments in EU</span>
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
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Why Now</h2>
        <div className="deck-card-grid deck-card-grid--3">
          <div className="deck-card">
            <span className="deck-eyebrow">Privacy Awareness Surging</span>
            <span className="deck-card-stat">300K+</span>
            <span className="deck-card-desc">users deleted Google Pay accounts in 2024</span>
          </div>
          <div className="deck-card">
            <span className="deck-eyebrow">Tap-to-Pay Exploding</span>
            <span className="deck-card-stat">91%</span>
            <span className="deck-card-desc">of 25&ndash;34 year olds in key EU markets use tap-to-pay daily</span>
          </div>
          <div className="deck-card">
            <span className="deck-eyebrow">Legislation</span>
            <span className="deck-card-stat" style={{ fontSize: "clamp(12px, 1.4vw, 24px)" }}>DMA</span>
            <span className="deck-card-desc">Digital Markets Act mandates NFC access for third-party wallets</span>
          </div>
        </div>
        <div className="deck-card-grid deck-card-grid--2" style={{ marginTop: "clamp(4px, 0.6vw, 12px)" }}>
          <div className="deck-card">
            <span className="deck-eyebrow">Privacy Alternatives Winning</span>
            <span className="deck-card-desc">Signal, ProtonMail, and DuckDuckGo prove users will switch for privacy</span>
          </div>
          <div className="deck-card deck-card--orange">
            <span className="deck-card-stat" style={{ color: "white" }}>The Gap</span>
            <span className="deck-card-desc" style={{ color: "rgba(255,255,255,0.9)" }}>No privacy-first wallet has moved to fill the opportunity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideSolution() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">The Solution</h2>
        <div className="deck-two-col">
          <div>
            <p className="deck-slide-lead">
              Walt is the private alternative to Google Wallet and Apple Pay.
            </p>
            <p className="deck-slide-body" style={{ marginBottom: "clamp(6px, 1vw, 16px)" }}>
              A tap-to-pay wallet that treats transaction data as sacred.
              No collection. No storage. No selling.
            </p>
            <div className="deck-steps">
              <div className="deck-step">
                <span className="deck-step-num">1</span>
                <span>On-device encryption</span>
              </div>
              <div className="deck-step">
                <span className="deck-step-num">2</span>
                <span>No server-side storage</span>
              </div>
              <div className="deck-step">
                <span className="deck-step-num">3</span>
                <span>Funded by users, not data</span>
              </div>
            </div>
          </div>
          <div className="deck-card">
            <span className="deck-eyebrow">Philosophy</span>
            <blockquote className="deck-quote">
              &ldquo;Add your card, tap to pay. That&rsquo;s it. Your transaction data never leaves your device.&rdquo;
            </blockquote>
            <p className="deck-card-desc">
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
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Market Opportunity</h2>
        <div className="deck-two-col">
          <div className="deck-market-cards">
            <div className="deck-card deck-card--bordered">
              <span className="deck-eyebrow">Total Addressable Market</span>
              <span className="deck-card-stat">&euro;4.4B</span>
              <span className="deck-card-desc">All EU mobile wallet users at &euro;10/year</span>
            </div>
            <div className="deck-card deck-card--bordered">
              <span className="deck-eyebrow">Serviceable Addressable Market</span>
              <span className="deck-card-stat">&euro;440M</span>
              <span className="deck-card-desc">Privacy-conscious segment (10%)</span>
            </div>
            <div className="deck-card deck-card--bordered">
              <span className="deck-eyebrow">Serviceable Obtainable Market</span>
              <span className="deck-card-stat">&euro;44M</span>
              <span className="deck-card-desc">Realistic 5-year capture (1%)</span>
            </div>
          </div>
          <div>
            <div className="deck-card" style={{ marginBottom: "clamp(4px, 0.6vw, 12px)" }}>
              <span className="deck-eyebrow">Market Tailwinds</span>
              <ul className="deck-bullets">
                <li>DMA opens NFC to third-party wallets</li>
                <li>EU privacy regulation trending stronger</li>
                <li>Privacy-tech adoption accelerating</li>
              </ul>
            </div>
            <div className="deck-card deck-card--orange">
              <span className="deck-card-desc" style={{ color: "rgba(255,255,255,0.9)" }}>First mover advantage in privacy-first payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideBusiness() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Business Model</h2>
        <div className="deck-two-col">
          <div>
            <div className="deck-card deck-card--orange deck-price-card">
              <span className="deck-price-amount">&euro;10</span>
              <span className="deck-price-label">/year</span>
            </div>
            <p className="deck-slide-body">
              No ads. No data monetization. Ever.
            </p>
          </div>
          <div>
            <div className="deck-card" style={{ marginBottom: "clamp(4px, 0.6vw, 12px)" }}>
              <span className="deck-eyebrow">Why Subscription?</span>
              <ul className="deck-bullets">
                <li>Aligns incentives with users, not advertisers</li>
                <li>Predictable recurring revenue</li>
                <li>Funds annual third-party security audits</li>
              </ul>
            </div>
            <div className="deck-card">
              <span className="deck-eyebrow">Where It Goes</span>
              <ul className="deck-bullets">
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
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Traction</h2>
        <div className="deck-two-col">
          <div className="deck-card">
            <span className="deck-eyebrow">Current Progress</span>
            <ul className="deck-bullets">
              <li>Paymentology partnership secured</li>
              <li>App in beta (Android)</li>
              <li>Public waitlist live at walt.is</li>
              <li>Embedded Engineering ApS registered in Copenhagen</li>
            </ul>
          </div>
          <div className="deck-card deck-card--orange">
            <span className="deck-eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>Key Challenges Ahead</span>
            <ul className="deck-bullets deck-bullets--light">
              <li>EMI license application (EU)</li>
              <li>iOS NFC integration post-DMA</li>
              <li>Building initial user base</li>
              <li>Security certification process</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTeam() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Team</h2>
        <div className="deck-two-col">
          <div className="deck-card">
            <div className="deck-avatar">CB</div>
            <h3 className="deck-team-name">Cole Bittel</h3>
            <p className="deck-team-title">Founder</p>
            <p className="deck-card-desc">
              Previously at Pleo and Funding Circle.
              Fintech product and engineering background.
            </p>
            <p className="deck-team-org">Embedded Engineering ApS</p>
            <p className="deck-team-loc">Copenhagen, Denmark</p>
          </div>
          <div>
            <span className="deck-eyebrow" style={{ marginBottom: "clamp(4px, 0.6vw, 12px)", display: "block" }}>Key Hires</span>
            <div className="deck-hire-stack">
              <div className="deck-card">
                <span className="deck-hire-role">Key Hire #1</span>
                <span className="deck-hire-title">BDR / Partnerships</span>
                <span className="deck-card-desc">
                  Drive bank and processor partnerships across EU markets
                </span>
              </div>
              <div className="deck-card">
                <span className="deck-hire-role">Key Hire #2</span>
                <span className="deck-hire-title">Marketing</span>
                <span className="deck-card-desc">
                  Build brand awareness in privacy-conscious communities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideAsk() {
  return (
    <div className="deck-slide deck-slide--accent">
      <div className="deck-slide-inner deck-slide-center">
        <h2 className="deck-slide-heading">The Ask</h2>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(12px, 2vw, 32px)" }}>
          Work in progress &mdash; still formulating the ask.
        </p>
        <blockquote className="deck-quote deck-quote--dark">
          &ldquo;Transaction data is sacred.&rdquo;
        </blockquote>
        <div className="deck-contact">
          <p>Cole Bittel, Founder</p>
          <p>cole@walt.is &middot; walt.is</p>
        </div>
      </div>
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
