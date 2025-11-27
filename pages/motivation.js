import Head from "next/head";
import Footer from "../components/Footer";

export default function Motivation() {
  return (
    <>
      <Head>
        <title>Why Walt Exists - Motivation</title>
        <meta
          name="description"
          content="The complete motivation explaining why Walt exists and the need for a privacy-first wallet."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://walt.is/motivation" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://walt.is/motivation" />
        <meta property="og:title" content="Why Walt Exists - Motivation" />
        <meta property="og:description" content="The complete motivation explaining why Walt exists and the need for a privacy-first wallet. Learn about data privacy, Google's dominance, and the future of tap-to-pay on Android." />
        <meta property="og:image" content="https://walt.is/hero-wallet.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is/motivation" />
        <meta property="twitter:title" content="Why Walt Exists - Motivation" />
        <meta property="twitter:description" content="The complete motivation explaining why Walt exists and the need for a privacy-first wallet. Learn about data privacy, Google's dominance, and the future of tap-to-pay on Android." />
        <meta property="twitter:image" content="https://walt.is/hero-wallet.png" />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700;900&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Why Walt Exists - Motivation",
              "description": "The complete motivation explaining why Walt exists and the need for a privacy-first wallet. Learn about data privacy, Google's dominance, and the future of tap-to-pay on Android.",
              "author": {
                "@type": "Person",
                "name": "Cole Bittel",
                "url": "https://www.linkedin.com/in/bittelc/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Walt",
                "url": "https://walt.is"
              },
              "datePublished": "2025-10-22",
              "dateModified": "2025-10-22",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://walt.is/motivation"
              },
              "image": "https://walt.is/hero-wallet.png"
            })
          }}
        />
      </Head>

      <div className="motivation-page">
        <div className="motivation-hero">
          <div className="section-shell">
            <div className="section-header">
              <h1 className="section-heading">Why Walt Exists</h1>
            </div>
          </div>
        </div>

        <div className="motivation-main">
          <div className="section-shell">
            <div className="motivation-content">
              <p>
                <em>(no generative AI was used to produce the following)</em>
              </p>
              <p>
                In the late 90's, the internet was largely one-directional; large tech companies like AOL, Yahoo, and some large newspapers were able to publish content onto it. The customer base, those with internet connections, would consume that content. Some technical hobbyists were able to produce simple content through things like listservs, but these hobbyists were not attempting to reach larger audiences because of the complexity of distribution. The idea an individual distributing to the masses was unthinkable.
              </p>

              <p>
                Then came Google Search and this quickly changed. With some simple indexing, those hobbyist groups and professional networks could now be found by people anywhere in the planet with an internet connection. That access to information was unprecedented, and defined a step change in the rate at which human knowledge spread and compounded. The examples of how this could change lives needs no extrapolation. Google Search was a single product with groundbreaking impact for humanity.
              </p>

              <p>Today, the Google product suite looks much different.</p>

              <p>
                The Reddit group called "Degoogle" has 300k members with 8k weekly conversations. The group, as its name aptly describes, is focused on ways people can remove Google from their lives. Specifically, it provides advice and guides on how to remove the dozens of different ways Google products are embedded in internet connected software and hardware. In the early 2000s, "degoogling" would be simple. But in 2025, that is of course much more difficult.
              </p>

              <p>
                Today, Google has entrenched itself in nearly every major software product facet. This spans across huge consumer-facing product categories like Google Maps and Gmail, niche categories like Google Fitness and Google Notes, and even more fundamental, unseen aspects of the internet like Google Cloud Platform and Kubernetes. And of course, Google Search has remained the market dominating force in the search category, affecting what people discover, and are able to discover, on the internet.
              </p>

              <p>Looking at the internet from any one of a hundred frames, there is an argument to be made that the internet is powered and owned by Google.</p>

              <p>
                This alone does not sound like reason for alarm. The internet as a product is extremely robust. To fear the future of the internet because a single company has a tremendous footprint within it is not an entirely worthy use of energy. The founding technologies of the internet like TCP and DNS do not require in any way for Google to survive.
              </p>

              <p>
                But the problem that the Degoogle Reddit group is focused on providing solutions for is one that we've been hearing more and more about in the 2020's- that of data privacy and data ownership.
              </p>

              <p>
                Because of Google's incredibly effective infiltration into the internet, their understanding of how we as consumers use the internet is itself a product, and one that no other company can rival. And because the internet has come to play an ever increasingly important role in our lives, so too has the richness of Google's dataset. Returning to the Reddit group, their founding principles<sup><a href="#ref1">1</a></sup> state the challenge clearly- "every interaction with Google services is recorded, logged, and used to tailor ads for you, saved for future usage, sold to third party companies, or even sold to government agencies."
              </p>

              <p>
                For many, data ownership is a fight that is not worth taking on. In the US, 73% of people<sup><a href="#ref2">2</a></sup> believe they have little to no control over how companies use their data. In the EU, only 36% internet users<sup><a href="#ref3">3</a></sup> read privacy policy statements before providing personal data. The effect of data harvesting has a compound effect with a company like Google. With their dozens of different products and vertical integration into the internet, the extraction of valuable data in one product leads to valuable data across <em>all</em> of their products.
              </p>

              <p>
                When we give so much data away to a single company, and that company's moral obligations are driven by profit rather than our own needs, we, as consumers, lose. We always lose.
              </p>

              <p>How much better does Google know us than our families? How much better does Google understand our health than our doctor?</p>

              <p>
                There is, however, progress being made. Today, nearly every Google product has an increasingly impressive competitor. Google Search is losing market dominance to ChatGPT and Duck Duck Go. Google Chrome is losing ground to Firefox. Gmail is losing ground to ProtonMail and Hey.com. And while fundamental pieces of the internet like Google Cloud Platform currently only experience competition from other massive hyperscalers like Amazon, internet-based product companies are making taking steps<sup><a href="#ref4">4</a></sup> in removing dependencies on these hyperscalers.
              </p>

              <p>But there remain some product offerings where Google is unchallenged; where Google's foothold is all-encompassing.</p>

              <hr className="section-divider" />

              <p>
                Within Nordic countries, the process of bringing around your physical debit or credit card is a habit of yesterday. Similar to the way paying with cash was replaced by paying with a card, now paying with a card is also going through its own deprecation phase. Many young adults today have never used a physical card. To them, the idea of a PIN is an outdated concept.
              </p>

              <p>
                Instead, the trend is clear- the next wave for everyday purchases is using your phone to tap on a terminal. This "tap-to-pay" experience has already become the norm for much of Europe, the US, and India. In the UK, 91% people between 25-34 of people regularly made contactless payments. Across the EU, contactless card payments increased considerably from 41% of all card payments in 2019 to 62% in 2022<sup><a href="#ref5">5</a></sup>.
              </p>

              <p>
                Tap-to-pay as a technology relies on some impressively robust security measures. During a tap-to-pay transaction, the merchant never receives the full PAN of the debit card, so merchant-based chargeback fraud becomes nearly impossible. Additionally, each transaction is signed with a dynamic, one-time use cryptogram that can't be predicted. And obviously the fundamental advertisement for tap-to-pay is in the consumer's favor- you never have to remember your card when leaving home. Having your phone stolen means the thief would have to also be able to unlock your phone at the time of tap-to-pay in order to use it.
              </p>

              <p>But unfortunately for us as consumers, this technological advancement comes neatly packaged in a free, natively installed, Google-owned app on our smartphones.</p>

              <p>
                If you own an Android, then you most likely use Google Wallet as your app provider for your tap-to-pay experience. Nearly 520 million people worldwide rely on Google Wallet<sup><a href="#ref6">6</a></sup>.
              </p>

              <p>
                When you use your Android to pay at your coffee shop, you use Google Wallet to pay. When you tap-to-pay at the grocery store, Google Wallet is there. When you tap-to-pay for flowers for your partner, when you tap-to-pay for soda at the hospital, when you tap to pay at the pharmacy, all of this data is routed through Google.
              </p>

              <p>
                Why would Google offer this wonderful experience to us for free? Why would such a successfully profitable company not feel the need to profit off of this terrifically convenient technological advancement? Surely, processing $5.2 trillion in transactions<sup><a href="#ref6">6</a></sup> each year is a costly product to support.
              </p>

              <p>Why is it free?</p>

              <p>Because transactions, and the data that they produce, are sacred.</p>

              <p>What you do in your daily life is who you are.</p>

              <p>What you spend your daily money on reflects your values.</p>

              <p>
                To know what you spend your money on each day is also to know <em>what you will spend</em> your money on each day. And knowing this, for a company like Google, is stock price gold.
              </p>

              <hr className="section-divider" />

              <p>If you attempt to search now for a replacement to Google Wallet on Android, you will find three options:</p>

              <ul>
                <li>Buy an iPhone</li>
                <li>Buying a Samsung.</li>
                <li>Use cash or a physical card.</li>
              </ul>

              <p>
                Buying an iPhone or Samsung are the most effective choices for switching away from Google Wallet. These phones have their own native, free wallet application that works the same as Google Wallet. However switching from one massive monolith to another introduces its own eyebrow-raising questions. And while Apple and Samsung do not rely on the same chokehold of the internet that Google does for company profit, it is still not a solution that every human with a smartphone must rely on. Additionally, changing phones entirely is only a solution the most privacy-focused people are willing to consider, especially considering Android has a dominating 71% share in the smartphone market<sup><a href="#ref7">7</a></sup>.
              </p>

              <p>
                Of course, you can always use cash or a physical card. And this is a perfectly viable option. No tracking, no data harvesting. However, cash and physical cards can be lost or stolen and it's just more to remember when you leave the house. Is this really what we must do to maintain our data privacy?
              </p>

              <p>We deserve better.</p>

              <hr className="section-divider" />

              <p>The product of Walt is simple. Tap-to-pay for Android.</p>

              <p>We don't store your data in our servers. We don't store your card details on our servers. Everything that we believe to be sacred data lives encrypted on your own phone.</p>

              <p>
                There's no AI. We won't add features. There's only one user flow that matters- Load a card into Walt, set Walt as your default wallet provider, tap to pay at your next coffee shop.
              </p>

              <p>That's it. Nothing more.</p>

              <p>
                If you'd like to support us on this mission, please join the waitlist at{" "}
                <a href="https://walt.is/" target="_blank" rel="noopener noreferrer">
                  walt.is
                </a>
                .
              </p>

              <p>
                With hope,<br />
                Cole Bittel<br />
                Creator of Walt.
              </p>

              <hr className="section-divider" />

              <div className="references">
                <h3>References</h3>
                <ol>
                  <li id="ref1">
                    degoogle wiki:{" "}
                    <a
                      href="https://www.reddit.com/r/degoogle/wiki/index/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.reddit.com/r/degoogle/wiki/index/
                    </a>
                  </li>
                  <li id="ref2">
                    Pew research:{" "}
                    <a
                      href="https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/
                    </a>
                  </li>
                  <li id="ref3">
                    Eurostat reseearch:{" "}
                    <a
                      href="https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20240126-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20240126-1
                    </a>
                  </li>
                  <li id="ref4">
                    Basecamp cloud exit:{" "}
                    <a
                      href="https://basecamp.com/cloud-exit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://basecamp.com/cloud-exit
                    </a>
                  </li>
                  <li id="ref5">
                    European central bank:{" "}
                    <a
                      href="https://www.ecb.europa.eu/stats/ecb_surveys/space/html/ecb.spacereport202212~783ffdf46e.en.html?utm_source=chatgpt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.ecb.europa.eu/stats/ecb_surveys/space/html/ecb.spacereport202212~783ffdf46e.en.html?utm_source=chatgpt.com
                    </a>
                  </li>
                  <li id="ref6">
                    Coinlaw:{" "}
                    <a
                      href="https://coinlaw.io/apple-pay-vs-google-pay-statistics/#:~:text=Key%20Takeaways"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://coinlaw.io/apple-pay-vs-google-pay-statistics/#:~:text=Key%20Takeaways
                    </a>
                  </li>
                  <li id="ref7">
                    Exploding topics:{" "}
                    <a
                      href="https://explodingtopics.com/blog/smartphone-stats"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://explodingtopics.com/blog/smartphone-stats
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <Footer variant="motivation" />
      </div>
    </>
  );
}