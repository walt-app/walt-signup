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
      period: "H2 2025",
      title: "Foundation and development",
      description:
        "Business: Create public waitlist, establish shortlist of aggregator candidates, assess geographic market viability.<br />Application: Complete Android app with mocks and fakes for aggregator SDKs.",
    },
    {
      period: "Q1 2026",
      title: "Team and partnerships",
      description:
        "Business: Find a cofounder, decide on aggregator, create first contract with supporting bank in chosen geographic focus.<br />Application: Integrate with aggregator SDKs, establish e2e PCI compliance, integrate card load mechanism based on chosen bank's preferences.",
    },
    {
      period: "Q2 2026",
      title: "First transactions",
      description:
        "Business: First bank onboarded, targeted geographic marketing, geographic outbound marketing, expand geographies.<br />Application: First cards loaded, first transactions made.",
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
        <meta property="og:image" content="https://walt.is/intro-screen.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is" />
        <meta property="twitter:title" content="Walt - Private Wallet for Android" />
        <meta property="twitter:description" content="Private tap-to-pay for Android. No purchase tracking, no data harvesting, no AI. Just a predictable, respectful wallet app." />
        <meta property="twitter:image" content="https://walt.is/intro-screen.jpg" />

        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Walt",
              "url": "https://walt.is",
              "logo": "https://walt.is/intro-screen.jpg",
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
              <div className="phone-mockup">
                <Image
                  src="/intro-screen.jpg"
                  alt="Walt app intro screen"
                  fill
                  className="hero-image"
                  priority
                  sizes="(min-width: 960px) 360px, 320px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section section-white">
          <div className="section-shell">
            <div className="section-header">
              <h2 className="section-heading">Tap-to-pay, as you know it</h2>
              <p className="section-lead">
                A predictable, familiar wallet experience that keeps your data private.
              </p>
            </div>
            <div className="hero-visual" style={{ width: '100%', maxWidth: '360px', margin: '0 auto' }}>
              <div className="phone-mockup">
                <Image
                  src="/home-screen.jpg"
                  alt="Walt app home screen showing cards"
                  fill
                  className="hero-image"
                  sizes="(min-width: 960px) 360px, 320px"
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
                The private alternative to Google Wallet.
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

        <div className="section section-white">
          <div className="section-shell">
            <div className="section-header">
              <span className="section-eyebrow">Using Walt</span>
              <h2 className="section-heading">Simple and straightforward</h2>
              <p className="section-lead">
                A predictable, familiar wallet app.
              </p>
            </div>
            {/* TODO: Implement enhanced step cards with Figma images */}
            {/* Desktop: 3-column grid with images */}
            {/* Mobile: Horizontal scrollable cards */}
            <div className="card-grid">
              {useSteps.map((step, index) => (
                <article key={step.title} className="info-card">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="section section-light">
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
