import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const whatIsFeatures = [
    {
      title: "Spend like you're used to",
      description:
        "Load your card and start tapping your phone at your coffeeshop like you're used to.",
    },
    {
      title: "Your data, your privacy",
      description:
        "Your transaction data stays on your phone. Never shared or sold or tracked.",
    },
    {
      title: "Funded by members",
      description:
        "$3 a month sustains infrastructure and annual audits. Simple pricing that replaces the hidden cost of ad-based wallets.",
    },
  ];

  const useSteps = [
    {
      title: "Download & install",
      description:
        "Once Walt reaches general availability, download Walt from our website to your Android device.",
    },
    {
      title: "Add your cards",
      description:
        "Scan or enter details manually. Everything stays encrypted locally. Your card details never leave your device.",
    },
    {
      title: "Tap to pay",
      description:
        "Hold your phone near any NFC-enabled terminal just like you're used to.",
    },
  ];

  const roadmap = [
    {
      period: "H1 2026",
      title: "Business and product feasibility",
      description:
        "Business: Initial agreement with chosen aggregators. Create public waitlist.<br />Product: Wire Android HCE + Wallet role + CDCVM",
    },
    {
      period: "H2 2026",
      title: "Issue the first tokens",
      description:
        "Business: Relationships with DPAN issuer signed and first DPAN issued. Kickoff with Visa for token approval process.<br>Product: Stand up Attestation Verifier (server) and collect Play Integrity + Key Attestation",
    },
    {
      period: "H1 2027",
      title: "Audits, regulation, compliance",
      description:
        "Business: PCI DSS audit and certification.<br>Product: Integration of tokenization authorization and DPAN APIs into app. E2E TSP complete flow.",
    },
    {
      period: "2027",
      title: "Open beta",
      description:
        "Walt rolls out to early supporters with the privacy guarantees and polish we'd demand for ourselves.",
    },
  ];

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showMessage = (message, type) => {
    setMessage(message);
    setMessageType(type);

    if (type === "success") {
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = email.trim();

    if (!emailValue) {
      showMessage("Please enter your email address", "error");
      return;
    }

    if (!isValidEmail(emailValue)) {
      showMessage("Please enter a valid email address", "error");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue }),
      });

      const data = await response.json();

      if (data.success) {
        showMessage(
          data.message || "Successfully joined the waitlist!",
          "success",
        );
        setEmail("");
      } else {
        showMessage(
          data.error || "Something went wrong. Please try again.",
          "error",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showMessage(
        "Network error. Please check your connection and try again.",
        "error",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Walt - Private Wallet for Android</title>
        <meta
          name="description"
          content="Walt is the Android wallet app that never shares your data"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://walt.is" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.is" />
        <meta property="og:title" content="Walt - Private Wallet for Android" />
        <meta property="og:description" content="Private tap-to-pay for Android. No purchase tracking, no data harvesting, no AI. Just a predictable, respectful wallet app." />
        <meta property="og:image" content="https://walt.is/hero-wallet.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is" />
        <meta property="twitter:title" content="Walt - Private Wallet for Android" />
        <meta property="twitter:description" content="Private tap-to-pay for Android. No purchase tracking, no data harvesting, no AI. Just a predictable, respectful wallet app." />
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
              "@type": "Organization",
              "name": "Walt",
              "url": "https://walt.is",
              "logo": "https://walt.is/hero-wallet.png",
              "description": "Walt is the Android wallet app that never shares your data. Private tap-to-pay for Android.",
              "sameAs": [
                "https://github.com/walt-app/walt-architecture",
                "https://www.linkedin.com/in/bittelc/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Walt",
              "url": "https://walt.is",
              "description": "Private tap-to-pay for Android. No purchase tracking, no data harvesting, no AI."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Walt",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Android",
              "offers": {
                "@type": "Offer",
                "price": "3.00",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "3.00",
                  "priceCurrency": "USD",
                  "billingDuration": "P1M"
                }
              },
              "description": "Private tap-to-pay wallet for Android that never shares your transaction data"
            })
          }}
        />
      </Head>

      <div className="scroll-container" id="top">
        <div className="section hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title">Private tap-to-pay for Android.</h1>
              <p className="hero-subhead">
                No purchase tracking, no data harvesting, no AI. Just a
                predictable, respectful wallet app.
              </p>
              <form onSubmit={handleSubmit} className="hero-form">
                <div className="hero-input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="hero-input"
                    required
                  />
                  <button
                    type="submit"
                    className="hero-button"
                    disabled={isLoading}
                  >
                    <span>
                      {isLoading ? "Joining..." : "Join the waitlist"}
                    </span>
                  </button>
                </div>
                {message && (
                  <div className={`form-message ${messageType}`}>{message}</div>
                )}
              </form>
              <div className="hero-secondary-action">
                <a className="hero-secondary-button" href="/motivation">
                  Why we created Walt
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <Image
                  src="/hero-wallet.png"
                  alt="Digital wallet tap-to-pay illustration"
                  fill
                  className="hero-image"
                  priority
                  sizes="(min-width: 960px) 520px, 80vw"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section section-light">
          <div className="section-shell">
            <div className="section-header">
              <span className="section-eyebrow">What Is Walt</span>
              <h2 className="section-heading">
                An Android wallet app that respects your privacy.
              </h2>
              <p className="section-lead">
                Know that your transaction data is never collected, stored, or
                sold.
              </p>
            </div>
            <div className="card-grid">
              {whatIsFeatures.map((item) => (
                <article key={item.title} className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="section section-light">
          <div className="section-shell">
            <div className="section-header">
              <span className="section-eyebrow">Using Walt</span>
              <h2 className="section-heading">Tap-to-pay, as you know it</h2>
              <p className="section-lead">
                A predictable, familiar wallet app.
              </p>
            </div>
            <div className="card-grid card-grid-steps">
              {useSteps.map((step, index) => (
                <article key={step.title} className="info-card step-card">
                  <span className="step-counter">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="section section-dark">
          <div className="section-shell">
            <div className="section-header">
              <span className="section-eyebrow">Roadmap</span>
              <h2 className="section-heading">How we'll deliver Walt</h2>
              <p className="section-lead">
                Here's what you can expect from us.
              </p>
            </div>
            <ol className="timeline">
              {roadmap.map((item) => (
                <li key={item.period} className="timeline-item">
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
