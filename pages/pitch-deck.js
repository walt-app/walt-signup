import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

function SlideTitle() {
  return (
    <div className="deck-slide deck-slide--dark">
      <div className="deck-slide-inner deck-slide-center">
        <span className="deck-slide-label">Private tap-to-pay for Android</span>
        <h1 className="deck-slide-logo">Walt</h1>
        <p className="deck-slide-subtitle">
          Tap-to-pay that doesn&apos;t track you.
        </p>
      </div>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="deck-slide deck-slide--dark">
      <div className="deck-slide-inner">
        <span className="deck-slide-label">The Problem</span>
        <div className="deck-slide-stat">520M</div>
        <p className="deck-slide-subtitle" style={{ marginBottom: "clamp(12px, 2vw, 32px)" }}>
          Google Wallet users whose every transaction is tracked, profiled, and monetized.
        </p>
        <p className="deck-slide-body" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "clamp(12px, 2vw, 24px)" }}>
          Android is 71% of the global smartphone market. For these users, there are three options:
        </p>
        <div className="deck-dead-ends">
          <div className="deck-dead-end">
            <span className="deck-dead-end-x">&times;</span>
            <span>Switch to iPhone</span>
          </div>
          <div className="deck-dead-end">
            <span className="deck-dead-end-x">&times;</span>
            <span>Go back to cash</span>
          </div>
          <div className="deck-dead-end">
            <span className="deck-dead-end-x">&times;</span>
            <span>Accept surveillance</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideSolution() {
  return (
    <div className="deck-slide deck-slide--dark">
      <div className="deck-slide-inner deck-slide-split">
        <div>
          <span className="deck-slide-label">The Solution</span>
          <h2 className="deck-slide-title" style={{ marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
            The private alternative to Google Wallet.
          </h2>
          <ul className="deck-feature-list">
            <li>On-device encryption</li>
            <li>No server-side data storage</li>
            <li>Funded by members, not data</li>
          </ul>
          <div className="deck-steps">
            <div className="deck-step">
              <span className="deck-step-num">1</span>
              <span>Download</span>
            </div>
            <div className="deck-step">
              <span className="deck-step-num">2</span>
              <span>Add card</span>
            </div>
            <div className="deck-step">
              <span className="deck-step-num">3</span>
              <span>Tap to pay</span>
            </div>
          </div>
        </div>
        <div className="deck-phone-row">
          <div className="deck-phone-mini">
            <Image
              src="/promo-screen.jpg"
              alt="Walt app home screen"
              width={140}
              height={304}
              sizes="(max-width: 768px) 80px, 140px"
            />
          </div>
          <div className="deck-phone-mini">
            <Image
              src="/add-card.jpg"
              alt="Add card screen"
              width={140}
              height={304}
              sizes="(max-width: 768px) 80px, 140px"
            />
          </div>
          <div className="deck-phone-mini">
            <Image
              src="/intro-screen.jpg"
              alt="Tap to pay screen"
              width={140}
              height={304}
              sizes="(max-width: 768px) 80px, 140px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideMarket() {
  return (
    <div className="deck-slide deck-slide--dark">
      <div className="deck-slide-inner">
        <span className="deck-slide-label">Why Now + Market</span>
        <h2 className="deck-slide-title" style={{ marginBottom: "clamp(4px, 1vw, 12px)" }}>
          The EU Digital Markets Act
        </h2>
        <p className="deck-slide-body" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "clamp(12px, 2vw, 32px)" }}>
          Since mid-2024, third-party wallets are legally entitled to NFC access on Android and iOS in the EU.
          Tap-to-pay adoption is at 91% among 25-34 year olds in key markets.
        </p>
        <div className="deck-tam-bars">
          <div className="deck-tam-bar">
            <div className="deck-tam-bar-fill deck-tam-bar--tam" />
            <div className="deck-tam-bar-label">TAM</div>
            <div className="deck-tam-bar-value">&euro;4.4B</div>
          </div>
          <div className="deck-tam-bar">
            <div className="deck-tam-bar-fill deck-tam-bar--sam" />
            <div className="deck-tam-bar-label">SAM</div>
            <div className="deck-tam-bar-value">&euro;440M</div>
          </div>
          <div className="deck-tam-bar">
            <div className="deck-tam-bar-fill deck-tam-bar--som" />
            <div className="deck-tam-bar-label">SOM</div>
            <div className="deck-tam-bar-value">&euro;44M</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideBusiness() {
  return (
    <div className="deck-slide deck-slide--dark">
      <div className="deck-slide-inner">
        <span className="deck-slide-label">Business Model + Traction</span>
        <div className="deck-price-row">
          <span className="deck-slide-stat">&euro;10</span>
          <span className="deck-price-period">/year</span>
        </div>
        <p className="deck-slide-body" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "clamp(12px, 2vw, 32px)" }}>
          Membership funds infrastructure and annual third-party security audits.
          No ads. No data monetization. Ever.
        </p>
        <div className="deck-traction-list">
          <div className="deck-traction-item">
            <span className="deck-traction-check">&#x2713;</span>
            <span>Paymentology partnership secured</span>
          </div>
          <div className="deck-traction-item">
            <span className="deck-traction-check">&#x2713;</span>
            <span>App in beta</span>
          </div>
          <div className="deck-traction-item">
            <span className="deck-traction-check">&#x2713;</span>
            <span>Public waitlist live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTeam() {
  return (
    <div className="deck-slide deck-slide--dark">
      <div className="deck-slide-inner deck-slide-center">
        <span className="deck-slide-label">Team</span>
        <h2 className="deck-slide-title" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>
          Cole Bittel
        </h2>
        <p className="deck-slide-body" style={{ color: "var(--orange-primary)", marginBottom: "clamp(4px, 0.5vw, 8px)" }}>
          Founder
        </p>
        <p className="deck-slide-body" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "clamp(12px, 2vw, 32px)" }}>
          Previously at Pleo and Funding Circle.
          <br />
          Fintech product and engineering background.
        </p>
        <div className="deck-hires">
          <div className="deck-hire">
            <span className="deck-hire-role">Key Hire #1</span>
            <span className="deck-hire-title">BDR / Partnerships</span>
          </div>
          <div className="deck-hire">
            <span className="deck-hire-role">Key Hire #2</span>
            <span className="deck-hire-title">Marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideAsk() {
  return (
    <div className="deck-slide deck-slide--dark">
      <div className="deck-slide-inner deck-slide-center">
        <span className="deck-slide-label">The Ask</span>
        <p className="deck-slide-subtitle" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "clamp(24px, 4vw, 64px)" }}>
          Work in progress &mdash; still formulating the ask.
        </p>
        <blockquote className="deck-closing-quote">
          &ldquo;Transaction data is sacred.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "Solution + Product", render: SlideSolution },
  { title: "Why Now + Market", render: SlideMarket },
  { title: "Business + Traction", render: SlideBusiness },
  { title: "Team", render: SlideTeam },
  { title: "The Ask", render: SlideAsk },
];

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
          content="Walt's condensed pitch deck: privacy-first tap-to-pay for Android. Market opportunity, product, business model, and team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://walt.is/pitch-deck" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.is/pitch-deck" />
        <meta property="og:title" content="Walt - 5-Minute Pitch Deck" />
        <meta
          property="og:description"
          content="Privacy-first tap-to-pay for Android. 7-slide condensed pitch."
        />
        <meta property="og:image" content="https://walt.is/pitch/slide-01.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is/pitch-deck" />
        <meta property="twitter:title" content="Walt - 5-Minute Pitch Deck" />
        <meta
          property="twitter:description"
          content="Privacy-first tap-to-pay for Android. 7-slide condensed pitch."
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
              A condensed 7-slide overview of Walt &mdash; designed for a 5-minute presentation.
            </p>
            <button
              className="deck-present-button"
              onClick={() => enterPresentation(0)}
            >
              Start Presentation
            </button>
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
