import Head from "next/head";
import Footer from "../components/Footer";

export default function Updates() {
  return (
    <>
      <Head>
        <title>Updates - Walt</title>
        <meta
          name="description"
          content="Status updates from the Walt team on building private tap-to-pay for Android."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://walt.is/updates" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.is/updates" />
        <meta property="og:title" content="Updates - Walt" />
        <meta
          property="og:description"
          content="Status updates from the Walt team on building private tap-to-pay for Android."
        />
        <meta property="og:image" content="https://walt.is/intro-screen.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is/updates" />
        <meta property="twitter:title" content="Updates - Walt" />
        <meta
          property="twitter:description"
          content="Status updates from the Walt team on building private tap-to-pay for Android."
        />
        <meta
          property="twitter:image"
          content="https://walt.is/intro-screen.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="motivation-page">
        <div className="motivation-hero">
          <div className="section-shell">
            <div className="section-header">
              <h1 className="section-heading">Updates</h1>
            </div>
          </div>
        </div>

        <div className="motivation-main">
          <div className="section-shell">
            <div className="motivation-content">
              {/* Update #4 — February 2026 */}
              <article className="update-entry">
                <time className="update-date">February 2026</time>
                <h2>Copenhagen Fintech and Full-Time Focus</h2>

                <p>Things keep on keeping on!</p>

                <p>
                  January and February were HUGE months for Walt on an
                  engineering side. Some of the biggest hurdles that Walt's
                  vision aimed for were within the engineering, and these
                  challenges were successfully overcome. Now, Walt is moving into
                  a different phase. Here are a couple updates on where we're at!
                </p>

                <h3>Copenhagen Fintech</h3>
                <p>
                  Walt and I have accepted an invitation from{" "}
                  <a
                    href="https://www.copenhagenfintech.dk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Copenhagen Fintech's
                  </a>{" "}
                  incubation program. This is an absolutely huge step for Walt!
                  Copenhagen Fintech is the premier fintech accelerator in the
                  Nordics and the most well-connected to banks and issuers, whom
                  are the keys to accomplishing Walt's vision. Getting warm
                  introductions to issuers is the biggest need (even beyond
                  funding) that Walt has right now.
                </p>
                <p>
                  Additionally, accelerator programs like Copenhagen Fintech
                  focus on companies with hopes to become extremely profitable
                  and make big investment requests. Walt does not fit this
                  profile. Walt deliberately focuses on modesty and limited
                  features. Additionally, and in contrast to the other companies
                  in the cohort, Walt has no AI focus. Lastly, the founding team
                  intends to ask for as little investment as possible if that
                  need someday arises.
                </p>
                <p>
                  The fact that Copenhagen Fintech has accepted us into their
                  incubation program despite these big differences from their
                  standard acceptees is an extremely good sign.
                </p>

                <h3>Full-Time Focus</h3>
                <p>
                  Accepting the invitation also comes with the need to devote
                  more time and intention to overcoming the current hurdles Walt
                  must overcome. That means that I (Cole) am moving to work
                  full-time on Walt. This change is something that has been
                  planned for months, and it's very exciting!
                </p>
                <p>
                  Working on Walt has been incredibly exciting and fun so far.
                  Most of the focus has been on something I was already
                  well-versed in&mdash;the engineering build. But now that the
                  proof-of-concept for building a completely private, compliant,
                  tap-to-pay alternative to Google Wallet is complete, the
                  challenges require me to develop new skills. The full-time move
                  is a welcome change.
                </p>

                <p>
                  Hope y'all are doing well out there!
                  <br />
                  Cole &amp; the Walt team
                </p>
              </article>

              <hr className="section-divider" />

              {/* Update #1 — January 2026 */}
              <article className="update-entry">
                <time className="update-date">January 2026</time>
                <h2>Status Update</h2>

                <p>Hello Walt supporters!</p>

                <p>
                  What a 6 months it has been! The team hasn't really left our
                  computers since the company was formed! We've been (very) hard
                  at work building. We've focused primarily on the engineering
                  side so far, building out the secure, completely private
                  Android wallet application.
                </p>
                <p>
                  And it's gone SO GREAT!!! Besides the tremendous success of the
                  engineering build, it's also been the joy of a lifetime to
                  build something that we really believe in, and that we truly
                  believe benefits real humans. And that joy and passion has
                  really come through in the way the application looks and feels.
                </p>

                <h3>Request for Intros!</h3>
                <p>
                  But now that the engineering is largely completed, now begins
                  the hard part&mdash;the partnerships phase.
                </p>
                <p>
                  Before Walt can be used by actual humans, "issuers" like banks
                  and neo-banks have to approve Walt to be an acceptable app for
                  their bank card to be loaded into. This sounds like a small
                  task! They just need to click "OK" on their acceptance screen!
                </p>
                <p>
                  But it was well known before starting that this is the most
                  difficult task for Walt and the team. Right now, most issuers
                  across the globe have a list of just 2 accepted apps for their
                  cards to be loaded into&mdash;Apple Pay and Google Wallet (and
                  sometimes Samsung Pay, and very rarely Garmin Pay).
                </p>
                <p>
                  We're making tremendous progress. We have very strong starts
                  with two small issuers with relationships to the team. But
                  we'll need many, many more issuers to accept Walt if we're ever
                  going to allow the general population to begin using Walt.
                </p>
                <p>
                  So this is where we need your help, friendly supporters. If you
                  have any personal connections with any issuers (e.g. a bank or
                  fintech neo-bank),{" "}
                  <strong>
                    the team at Walt would love any warm intros.
                  </strong>
                </p>

                <h3>Coming Up Next</h3>
                <p>
                  We continue to update our roadmap on the walt.is website. The
                  immediate next steps are to focus on onboarding our first
                  issuer and then to test the end-to-end flow of add card →
                  insert card details → start using tap-to-pay with Walt.
                </p>
                <p>
                  But beyond that, we have an exciting engineering update as
                  well, that we'll share soon!
                </p>

                <p>
                  Good luck out there, everyone!
                  <br />
                  Cole &amp; the Walt team
                </p>
              </article>
            </div>
          </div>
        </div>

        <Footer variant="updates" />
      </div>
    </>
  );
}
