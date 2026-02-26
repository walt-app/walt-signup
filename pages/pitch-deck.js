import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

/* ─── Inline SVG Icons ─────────────────────────────────────────────────────── */

const IconEye = (
  <svg className="deck-slide-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 20C2.5 20 8.33 8.33 20 8.33C31.67 8.33 37.5 20 37.5 20C37.5 20 31.67 31.67 20 31.67C8.33 31.67 2.5 20 2.5 20Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconLock = (
  <svg className="deck-step-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18.33" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.33 18.33V13.33C13.33 9.65 16.32 6.67 20 6.67C23.68 6.67 26.67 9.65 26.67 13.33V18.33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconServerOff = (
  <svg className="deck-step-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6.67" y="6.67" width="26.67" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6.67" y="23.33" width="26.67" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.67 11.67H11.68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.67 28.33H11.68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 5L35 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconUsers = (
  <svg className="deck-step-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.33 35V31.67C28.33 29.9 27.63 28.2 26.38 26.95C25.13 25.7 23.43 25 21.67 25H8.33C6.57 25 4.87 25.7 3.62 26.95C2.37 28.2 1.67 29.9 1.67 31.67V35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 18.33C18.68 18.33 21.67 15.35 21.67 11.67C21.67 7.98 18.68 5 15 5C11.32 5 8.33 7.98 8.33 11.67C8.33 15.35 11.32 18.33 15 18.33Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38.33 35V31.67C38.33 30.19 37.84 28.75 36.94 27.59C36.03 26.42 34.77 25.58 33.33 25.22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.67 5.22C28.11 5.58 29.37 6.42 30.28 7.59C31.19 8.76 31.68 10.19 31.68 11.67C31.68 13.16 31.19 14.59 30.28 15.76C29.37 16.93 28.11 17.77 26.67 18.13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCheckCircle = (
  <svg className="deck-traction-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17" fill="var(--orange-primary)"/>
    <path d="M13 20L18 25L27 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBriefcase = (
  <svg className="deck-hire-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.33" y="13.33" width="33.33" height="21.67" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.67 35V8.33C26.67 7.45 26.31 6.6 25.69 5.98C25.07 5.35 24.22 5 23.33 5H16.67C15.78 5 14.93 5.35 14.31 5.98C13.69 6.6 13.33 7.45 13.33 8.33V35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMegaphone = (
  <svg className="deck-hire-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 6.67V26.67C30 26.67 25.83 24.17 22.5 21.67" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 13.33H10C10 13.33 22.5 13.33 22.5 6.67V26.67C22.5 20 10 20 10 20H5V13.33Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 20V30C10 31.38 10.53 32.71 11.46 33.68C12.4 34.64 13.67 35 15 35C16.33 35 17.6 34.64 18.54 33.68C19.47 32.71 20 31.38 20 30V22.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
      </div>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        {IconEye}
        <h2 className="deck-slide-heading">The Problem</h2>
        <p className="deck-slide-lead">
          Your daily spending reveals who you are.
        </p>
        <p className="deck-slide-body">
          Every tap-to-pay transaction on Android and iPhone routes through Google Wallet or Apple Pay.
          Both harvest this data to build profiles of your life, values, and behavior.
        </p>
        <div className="deck-stat-card">
          <div className="deck-stat-row">
            <div className="deck-stat-item">
              <span className="deck-stat-num">520M</span>
              <span className="deck-stat-desc">Google Wallet users</span>
            </div>
            <div className="deck-stat-item">
              <span className="deck-stat-num">$5.2T</span>
              <span className="deck-stat-desc">processed annually</span>
            </div>
          </div>
          <p className="deck-stat-footer">Zero private alternatives exist.</p>
        </div>
      </div>
    </div>
  );
}

function SlideWhyNow() {
  return (
    <div className="deck-slide deck-slide--warm">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Why Now</h2>
        <p className="deck-slide-lead">
          The EU Digital Markets Act
        </p>
        <p className="deck-slide-body">
          Since mid-2024, third-party wallets are legally entitled to NFC access on Android and iOS in the EU.
          The regulatory window is open &mdash; and no privacy-first wallet has moved to fill it.
        </p>
        <div className="deck-highlight-stat">
          <span className="deck-stat-num">91%</span>
          <span className="deck-stat-desc">
            of 25&ndash;34 year olds in key EU markets<br />
            already use tap-to-pay daily
          </span>
        </div>
      </div>
    </div>
  );
}

function SlideSolution() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner deck-slide-split">
        <div>
          <h2 className="deck-slide-heading">The Solution</h2>
          <p className="deck-slide-lead">
            Walt is the private alternative to Google Wallet and Apple Pay.
          </p>
          <p className="deck-slide-body" style={{ marginBottom: "clamp(12px, 2vw, 24px)" }}>
            A tap-to-pay wallet that treats transaction data as sacred.
            No collection. No storage. No selling.
          </p>
          <div className="deck-steps">
            <div className="deck-step">
              {IconLock}
              <span>On-device encryption</span>
            </div>
            <div className="deck-step">
              {IconServerOff}
              <span>No server-side storage</span>
            </div>
            <div className="deck-step">
              {IconUsers}
              <span>Funded by users, not data</span>
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
    <div className="deck-slide deck-slide--warm">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Market Opportunity</h2>
        <p className="deck-slide-lead">
          Privacy-conscious consumers in the EU
        </p>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(12px, 2vw, 32px)" }}>
          EU mobile wallet revenue, assuming &euro;10/year membership model
          across privacy-aware segments.
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
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner deck-slide-center">
        <h2 className="deck-slide-heading">Business Model</h2>
        <div className="deck-price-hero">
          <div className="deck-price-row">
            <span className="deck-slide-stat">&euro;10</span>
            <span className="deck-price-period">/year</span>
          </div>
          <p className="deck-slide-body">
            Membership funds infrastructure and annual third-party security audits.
          </p>
        </div>
        <p className="deck-slide-body">
          No ads. No data monetization. Ever.
        </p>
      </div>
    </div>
  );
}

function SlideTraction() {
  return (
    <div className="deck-slide deck-slide--warm">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Traction</h2>
        <p className="deck-slide-lead" style={{ marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
          Early milestones achieved
        </p>
        <div className="deck-traction-list">
          <div className="deck-traction-item">
            {IconCheckCircle}
            <span>Paymentology partnership secured</span>
          </div>
          <div className="deck-traction-item">
            {IconCheckCircle}
            <span>App in beta</span>
          </div>
          <div className="deck-traction-item">
            {IconCheckCircle}
            <span>Public waitlist live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTeam() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner deck-slide-center">
        <h2 className="deck-slide-heading">Team</h2>
        <h3 className="deck-slide-lead" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>
          Cole Bittel
        </h3>
        <p className="deck-slide-body" style={{ color: "var(--orange-primary)", marginBottom: "clamp(4px, 0.5vw, 8px)" }}>
          Founder
        </p>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(12px, 2vw, 32px)" }}>
          Previously at Pleo and Funding Circle.
          <br />
          Fintech product and engineering background.
        </p>
        <div className="deck-hires">
          <div className="deck-hire">
            {IconBriefcase}
            <span className="deck-hire-role">Key Hire #1</span>
            <span className="deck-hire-title">BDR / Partnerships</span>
          </div>
          <div className="deck-hire">
            {IconMegaphone}
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
    <div className="deck-slide deck-slide--accent">
      <div className="deck-slide-inner deck-slide-center">
        <h2 className="deck-slide-heading">The Ask</h2>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(24px, 4vw, 64px)" }}>
          Work in progress &mdash; still formulating the ask.
        </p>
        <blockquote className="deck-closing-quote">
          &ldquo;Transaction data is sacred.&rdquo;
        </blockquote>
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
