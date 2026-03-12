import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import DeckLayout from "../components/DeckLayout";

/* ─── Slide 1: Title ───────────────────────────────────────────────────────── */

function SlideTitle() {
  return (
    <div className="ps ps--accent">
      <div className="ps-pad ps-pad--center">
        <h1 className="ps-logo">Walt</h1>
        <div className="ps-divider" />
        <p className="ps-subtitle">Europe reclaims tap-to-pay</p>
      </div>
    </div>
  );
}

/* ─── Slide 2: The Problem ────────────────────────────────────────────────── */

function Ref({ n }) {
  return <sup style={{ fontSize: "0.55em", fontWeight: 600, color: "var(--orange-primary)", marginLeft: "1px" }}>{n}</sup>;
}

function SlideProblem() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>
          Tap-to-pay in Europe lives with Google and Apple
        </p>
        <div className="ps-content">
          <div className="ps-split">
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--left">
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>200&ndash;250M</p>
                <p className="ps-body">Europeans use Apple Pay or Google Wallet for in-store purchases<Ref n={1} /></p>
                <p className="ps-stat" style={{ fontSize: "clamp(14px, 2vw, 32px)", marginTop: "clamp(4px, 0.5vw, 8px)" }}>&euro;1T+</p>
                <p className="ps-body">in digital wallet transactions across Europe (2024)<Ref n={2} /></p>
              </div>
              <div className="ps-card">
                <p className="ps-card-h">Everyone else</p>
                <p className="ps-body">&lt;0.4% combined market share.<Ref n={3} /> No legitimate tap-to-pay alternative exists for either iPhone or Android.</p>
              </div>
            </div>
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">Apple Pay</p>
                <p className="ps-body">Charges European banks ~0.05% per transaction<Ref n={4} /> &mdash; generating &euro;300&ndash;500M annually across Europe.<Ref n={5} /> Merchants pay nothing extra; costs are passed to consumers indirectly.</p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">Google Wallet</p>
                <p className="ps-body">Charges banks nothing. Instead harvests every transaction for ad profiles, extracting &euro;15&ndash;30 per active user per year in advertising value.<Ref n={6} /></p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">The only alternative</p>
                <p className="ps-body">Go back to using physical cards or cash. For Europeans who care about privacy, there is no tap-to-pay option at all.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: Solution ───────────────────────────────────────────────────── */

function SlideSolution() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Solution</h2>
      </div>
    </div>
  );
}

/* ─── Slide 4: Why Now? ───────────────────────────────────────────────────── */

function SlideWhyNow() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Why Now?</h2>
      </div>
    </div>
  );
}

/* ─── Slide 5: Product Deep-Dive ──────────────────────────────────────────── */

function SlideProduct() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Product Deep-Dive</h2>
      </div>
    </div>
  );
}

/* ─── Slide 6: Challenges ─────────────────────────────────────────────────── */

function SlideChallenges() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Challenges</h2>
      </div>
    </div>
  );
}

/* ─── Slide 7: The Market ─────────────────────────────────────────────────── */

function SlideMarket() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Market</h2>
      </div>
    </div>
  );
}

/* ─── Slide 8: Competitors ────────────────────────────────────────────────── */

function SlideCompetitors() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Competitors</h2>
      </div>
    </div>
  );
}

/* ─── Slide 9: Traction & Roadmap ─────────────────────────────────────────── */

function SlideTraction() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Traction &amp; Roadmap</h2>
      </div>
    </div>
  );
}

/* ─── Slide 10: The Ask ───────────────────────────────────────────────────── */

function SlideTheAsk() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Ask</h2>
      </div>
    </div>
  );
}

/* ─── Slide 11: Closing ───────────────────────────────────────────────────── */

function SlideClosing() {
  return (
    <div className="ps ps--accent">
      <div className="ps-pad ps-pad--center">
        <h1 className="ps-logo">Walt</h1>
      </div>
    </div>
  );
}

/* ─── Slide 12: References ────────────────────────────────────────────────── */

function SlideReferences() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">References</h2>
        <div className="ps-content">
          <div className="ps-stack ps-gap-sm" style={{ maxWidth: "85%" }}>
            <ol style={{ margin: 0, paddingLeft: "clamp(14px, 1.5vw, 24px)", display: "flex", flexDirection: "column", gap: "clamp(4px, 0.5vw, 8px)" }}>
              <li className="ps-body">Flagship Advisory Partners, &ldquo;6 Years After the EU Launch of Apple Pay: Over 44% of Europeans Use Mobile Wallets&rdquo; (2023); Mordor Intelligence, &ldquo;Europe Mobile Payments Market&rdquo; (2025)</li>
              <li className="ps-body">Worldpay Global Payments Report 2025 (14% of European POS, 33% of European e-commerce via digital wallets); ECB Payment Statistics H2 2024; Datos Insights, &ldquo;The Digital Wallet Revolution&rdquo; (2025)</li>
              <li className="ps-body">CoinLaw, &ldquo;Apple Pay vs Google Pay Statistics&rdquo; (2026); StatCounter mobile payment share data</li>
              <li className="ps-body">Swiss antitrust investigation via Finews (~0.05&ndash;0.12% issuer fee); EU Interchange Fee Regulation 2015/751 constraints; Walt market research estimates</li>
              <li className="ps-body">Oliver Wyman, European Apple Pay fee revenue estimate (February 2025)</li>
              <li className="ps-body">DOJ v. Apple antitrust complaint (March 2024); WSJ reporting on Google ad-profile monetization of payment data</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide Array ──────────────────────────────────────────────────────────── */

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "Solution", render: SlideSolution },
  { title: "Why Now?", render: SlideWhyNow },
  { title: "Product Deep-Dive", render: SlideProduct },
  { title: "Challenges", render: SlideChallenges },
  { title: "The Market", render: SlideMarket },
  { title: "Competitors", render: SlideCompetitors },
  { title: "Traction & Roadmap", render: SlideTraction },
  { title: "The Ask", render: SlideTheAsk },
  { title: "Walt", render: SlideClosing },
  { title: "References", render: SlideReferences },
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function ReadingDeck() {
  return (
    <DeckLayout
      slides={SLIDES}
      head={
        <Head>
          <title>Walt Reading Deck - Detailed Business Overview</title>
          <meta
            name="description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, competitive landscape, and roadmap."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://walt.is/reading-deck" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://walt.is/reading-deck" />
          <meta property="og:title" content="Walt Reading Deck" />
          <meta
            property="og:description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, and roadmap."
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://walt.is/reading-deck" />
          <meta property="twitter:title" content="Walt Reading Deck" />
          <meta
            property="twitter:description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, and roadmap."
          />

          <link rel="icon" href="/favicon.ico" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Walt Reading Deck",
                "description": "Walt's detailed reading deck for investors and partners",
                "url": "https://walt.is/reading-deck",
                "publisher": {
                  "@type": "Organization",
                  "name": "Walt",
                  "url": "https://walt.is"
                }
              })
            }}
          />
        </Head>
      }
      activeDeck="reading-deck"
      downloads={
        <>
          <a
            href="/reading-deck/reading-deck.pdf"
            className="pitch-download-button outline"
            download="Walt-Reading-Deck.pdf"
          >
            Download PDF
          </a>
          <a
            href="/reading-deck/walt-reading-deck.pptx"
            className="pitch-download-button outline"
            download="Walt-Reading-Deck.pptx"
          >
            Download PowerPoint
          </a>
        </>
      }
      footerVariant="reading-deck"
    />
  );
}
