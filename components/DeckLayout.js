import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Footer from "./Footer";

/* ─── Deck type definitions ────────────────────────────────────────────────── */

const DECK_TYPES = [
  { id: "pitch", label: "Presentation Deck", href: "/pitch" },
  { id: "reading-deck", label: "Reading Deck", href: "/reading-deck" },
];

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

/* ─── Shared Deck Layout ──────────────────────────────────────────────────── */

export default function DeckLayout({
  slides,
  head,
  activeDeck = "pitch",
  downloads,
  footerVariant = "pitch",
}) {
  const [mode, setMode] = useState("grid");
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(
    () => setCurrentSlide((i) => Math.min(i + 1, slides.length - 1)),
    [slides.length]
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

  const SlideComponent = slides[currentSlide]?.render;

  return (
    <>
      {head}

      <div className="deck-page">
        <section className="hero-section">
          <header className="site-header">
            <Link href="/" className="site-logo">
              Walt
            </Link>
          </header>

          <div className="deck-hero-card">
            <h1>Slide Decks</h1>
            <div className="deck-actions">
              <nav className="deck-type-nav" aria-label="Deck type">
                {DECK_TYPES.map((deck) => (
                  <Link
                    key={deck.id}
                    href={deck.href}
                    className={`deck-type-option${deck.id === activeDeck ? " active" : ""}`}
                    aria-current={deck.id === activeDeck ? "page" : undefined}
                  >
                    {deck.label}
                  </Link>
                ))}
              </nav>
              {downloads}
            </div>
          </div>
        </section>

        <section className="deck-slides-section">
          <div className="deck-grid">
            {slides.map((slide, index) => (
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
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
            {currentSlide < slides.length - 1 && (
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
              {slides.map((_, i) => (
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

        <Footer variant={footerVariant} />
      </div>
    </>
  );
}
