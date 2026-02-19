import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const uspFeatures = [
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
      title: "Download and install",
      description:
        "Once Walt reaches general availability, download Walt to your smartphone.",
      image: "/promo-screen.jpg",
      alt: "Walt app download screen"
    },
    {
      title: "Add your cards",
      description:
        "Scan or enter details manually. Everything stays encrypted locally. Your card details never leave your device.",
      image: "/add-card.jpg",
      alt: "Walt app add card screen"
    },
    {
      title: "Tap to pay",
      description:
        "Hold your phone near any NFC-enabled terminal just like you're used to.",
      image: "/intro-screen.jpg",
      alt: "Walt app home screen with cards"
    },
  ];

  const roadmapItems = [
    {
      period: "H2 2025",
      title: "Foundation and development",
      business: [
        { text: "Create public waitlist", completed: true },
        { text: "Establish shortlist of aggregator candidates", completed: true },
        { text: "Assess geographic market viability", completed: true }
      ],
      application: [
        { text: "Complete Android app with mocks and fakes for aggregator SDKs", completed: true }
      ],
    },
    {
      period: "Q1 2026",
      title: "Team and partnerships",
      business: [
        { text: "Find a cofounder", completed: false },
        { text: "Decide on aggregator", completed: true },
        { text: "Create first contract with supporting bank in chosen geographic focus", completed: false }
      ],
      application: [
        { text: "Integrate with aggregator SDKs", completed: true },
        { text: "Establish e2e PCI compliance", completed: true },
        { text: "Integrate card load mechanism based on chosen bank's preferences", completed: false }
      ],
    },
    {
      period: "Q2 2026",
      title: "First transactions",
      business: [
        { text: "First bank onboarded", completed: false },
        { text: "Targeted geographic marketing", completed: false },
        { text: "Geographic outbound marketing", completed: false },
        { text: "Expand geographies", completed: false }
      ],
      application: [
        { text: "First cards loaded", completed: false },
        { text: "First transactions made", completed: false }
      ],
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
        <title>Walt - Private tap-to-pay</title>
        <meta
          name="description"
          content="Walt is the wallet app that never shares your data"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://walt.is" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.is" />
        <meta property="og:title" content="Walt - Private tap-to-pay" />
        <meta property="og:description" content="Private tap-to-pay. No purchase tracking, no data harvesting, no AI. Just a predictable, respectful wallet app." />
        <meta property="og:image" content="https://walt.is/intro-screen.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is" />
        <meta property="twitter:title" content="Walt - Private tap-to-pay" />
        <meta property="twitter:description" content="Private tap-to-pay. No purchase tracking, no data harvesting, no AI. Just a predictable, respectful wallet app." />
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
              "description": "Walt is the wallet app that never shares your data. Private tap-to-pay.",
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
              "description": "Private tap-to-pay. No purchase tracking, no data harvesting, no AI."
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
              "operatingSystem": "Android, iOS",
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
              "description": "Private tap-to-pay wallet that never shares your transaction data"
            })
          }}
        />
      </Head>

      <div className="scroll-container" id="top">
        {/* Hero Section */}
        <section className="hero-section">
          <header className="site-header">
            <Link href="/" className="site-logo">Walt</Link>
          </header>

          <div className="hero-card">
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="hero-text">
                  <h1 className="hero-title">Tap-to-pay that doesn't track you</h1>
                  <Link href="/motivation" className="hero-subhead">
                    Why we created Walt →
                  </Link>
                  <Link href="/pitch" className="hero-subhead">
                    View pitch deck →
                  </Link>
                </div>
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
              </div>
              <div className="hero-visual">
                <div className="phone-mockup">
                  <Image
                    src="/intro-screen.jpg"
                    alt="Walt app home screen"
                    fill
                    className="hero-image"
                    priority
                    sizes="(min-width: 960px) 305px, 221px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Walt Section */}
        <section className="section">
          <div className="section-shell">
            <div className="section-card-header">
              <h2 className="section-heading">
                The private alternative to Google Wallet
              </h2>
              <p className="section-subheading">
                Know that your transaction data is never collected, stored, or sold.
              </p>
            </div>
            <div className="usp-grid">
              {uspFeatures.map((item) => (
                <article key={item.title} className="usp-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* App / Steps Section */}
        <section className="section">
          <div className="section-card">
            <div className="section-card-content">
              <div className="section-card-header">
                <h2 className="section-heading">Simple and straightforward</h2>
                <p className="section-subheading">
                  A predictable, familiar wallet app.
                </p>
              </div>
              <div className="steps-container">
                {useSteps.map((step) => (
                  <article key={step.title} className="step-card">
                    <div className="step-image-container">
                      <div className="phone-mockup-small">
                        <Image
                          src={step.image}
                          alt={step.alt}
                          fill
                          sizes="240px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="section">
          <div className="section-card">
            <div className="roadmap">
              <div className="roadmap-header">
                <h2 className="roadmap-title">Roadmap</h2>
                <p className="roadmap-subtitle">Here's what you can expect from us.</p>
              </div>
              <div className="roadmap-items">
                {roadmapItems.map((item) => (
                  <div key={item.period} className="roadmap-item">
                    <div className="roadmap-bar"></div>
                    <div className="roadmap-content">
                      <span className="roadmap-period">{item.period}</span>
                      <div className="roadmap-phase">
                        <h3 className="roadmap-phase-title">{item.title}</h3>
                        <div className="roadmap-details">
                          <div className="roadmap-detail-section">
                            <strong>Business</strong>
                            <ul className="roadmap-checklist">
                              {item.business.map((businessItem, idx) => (
                                <li key={idx} className="roadmap-checklist-item">
                                  {businessItem.completed && (
                                    <svg className="roadmap-check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.6667 5L7.50002 14.1667L3.33335 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )}
                                  <span className={businessItem.completed ? "" : "roadmap-item-no-check"}>{businessItem.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="roadmap-detail-section">
                            <strong>Application</strong>
                            <ul className="roadmap-checklist">
                              {item.application.map((appItem, idx) => (
                                <li key={idx} className="roadmap-checklist-item">
                                  {appItem.completed && (
                                    <svg className="roadmap-check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.6667 5L7.50002 14.1667L3.33335 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )}
                                  <span className={appItem.completed ? "" : "roadmap-item-no-check"}>{appItem.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
