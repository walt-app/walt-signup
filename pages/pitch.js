import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Pitch() {
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
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet technology, roadmap, and business model for Android tap-to-pay."
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
        {/* Hero Section */}
        <section className="pitch-hero">
          <div className="section-shell">
            <h1>Pitch Deck</h1>
            <p>
              A comprehensive overview of Walt's mission to bring privacy-first mobile payments to Android.
              Review our market opportunity, technology approach, roadmap, and business model.
            </p>

            {/* Download Section */}
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
              <div key={slide.number} className="slide-card">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer variant="pitch" />
      </div>
    </>
  );
}
