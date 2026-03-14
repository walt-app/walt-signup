import Head from "next/head";
import DeckLayout from "../components/DeckLayout";

import SlideTitle from "../components/slides/shared/SlideTitle";
import SlideProblem from "../components/slides/pitch/SlideProblem";
import SlideSolution from "../components/slides/pitch/SlideSolution";
import SlideWhyNow from "../components/slides/pitch/SlideWhyNow";
import SlideChallenges from "../components/slides/pitch/SlideChallenges";
import SlideMarket from "../components/slides/pitch/SlideMarket";
import SlideCompetitors from "../components/slides/shared/SlideCompetitors";
import SlideTheAsk from "../components/slides/pitch/SlideTheAsk";
import SlideClosing from "../components/slides/shared/SlideClosing";

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "Solution", render: SlideSolution },
  { title: "Why Now?", render: SlideWhyNow },
  { title: "Challenges", render: SlideChallenges },
  { title: "The Market", render: SlideMarket },
  { title: "Competitors", render: SlideCompetitors },
  { title: "The Ask", render: SlideTheAsk },
  { title: "Walt", render: SlideClosing },
];

export default function Pitch() {
  return (
    <DeckLayout
      slides={SLIDES}
      head={
        <Head>
          <title>Walt Pitch Deck - Investment & Business Overview</title>
          <meta
            name="description"
            content="European tap-to-pay — Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet technology, roadmap, and business model."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://walt.is/pitch" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://walt.is/pitch" />
          <meta property="og:title" content="Walt Pitch Deck" />
          <meta
            property="og:description"
            content="European tap-to-pay — Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
          />
          <meta property="og:image" content="https://walt.is/pitch/slide-01.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://walt.is/pitch" />
          <meta property="twitter:title" content="Walt Pitch Deck" />
          <meta
            property="twitter:description"
            content="European tap-to-pay — Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
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
      }
      activeDeck="pitch"
      downloads={
        <>
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
        </>
      }
      footerVariant="pitch"
    />
  );
}
