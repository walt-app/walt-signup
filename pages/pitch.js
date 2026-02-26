import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Pitch() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex((i) => (i + 1) % 12), []);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + 12) % 12), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const slides = Array.from({ length: 12 }, (_, i) => ({
    number: i + 1,
    src: `/pitch/slide-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Pitch deck slide ${i + 1} of 12`
  }));

  return (
    <>
      <Head>
        <title>Walt Pitch Deck - Investment & Business Overview</title>
        <meta
          name="description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet technology, roadmap, and business model for Android and iOS tap-to-pay."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://walt.is/pitch" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.is/pitch" />
        <meta property="og:title" content="Walt Pitch Deck" />
        <meta
          property="og:description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
        />
        <meta property="og:image" content="https://walt.is/pitch/slide-01.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is/pitch" />
        <meta property="twitter:title" content="Walt Pitch Deck" />
        <meta
          property="twitter:description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
        />
        <meta property="twitter:image" content="https://walt.is/pitch/slide-01.jpg" />

        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Walt Pitch Deck",
              "description": "Walt's comprehensive pitch deck for investors",
              "url": "https://walt.is/pitch",
              "image": "https://walt.is/pitch/slide-01.jpg",
              "publisher": {
                "@type": "Organization",
                "name": "Walt",
                "url": "https://walt.is"
              }
            })
          }}
        />
      </Head>

      <div className="pitch-page">
        {/* Hero Section - matches primary page layout */}
        <section className="hero-section">
          <header className="site-header">
            <Link href="/" className="site-logo">
              Walt
            </Link>
          </header>

          <div className="pitch-card">
            <h1>Pitch Deck</h1>
            <p>
              A comprehensive overview of Walt's mission to bring privacy-first mobile payments to Android and iOS.
              Review our market opportunity, technology approach, roadmap, and business model.
            </p>
            <p style={{ marginBottom: "24px" }}>
              <Link href="/pitch-deck" style={{ color: "var(--orange-primary)", fontWeight: 500 }}>
                View condensed 5-minute version &rarr;
              </Link>
            </p>
            <div className="pitch-downloads">
              <a
                href="/pitch/pitch-deck.pdf"
                className="pitch-download-button"
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

        {/* Slides Section */}
        <section className="pitch-slides">
          <div className="slides-container">
            {slides.map((slide, index) => (
              <button
                key={slide.number}
                className="slide-card"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View slide ${slide.number} of 12`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </button>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              &times;
            </button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous slide"
            >
              &#8249;
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slides[lightboxIndex].src}
                alt={slides[lightboxIndex].alt}
              />
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {slides.length}
              </div>
            </div>
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next slide"
            >
              &#8250;
            </button>
          </div>
        )}

        {/* Footer */}
        <Footer variant="pitch" />
      </div>
    </>
  );
}
