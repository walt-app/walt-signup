import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const whyFeatures = [
    {
      title: "Big Tech can't be trusted",
      description:
        "Closed-source wallets turn tap-to-pay into behavioral targeting. Walt is open source and we have no databases storing transaction history.",
    },
    {
      title: "Transaction data is sacred",
      description:
        "What you spend your money on is private. Companies should not be able to take advantage of your spending habits.",
    },
    {
      title: "Now is the time",
      description:
        "With the rise of capable LLMs, Big Tech is benefitting from more intimate understandings of our habits and needs.",
    },
  ];

  const howFeatures = [
    {
      title: "Open source by design",
      description:
        "A community wallet is one where we own the code. Walt runs on a simple, open-source codebase.",
    },
    {
      title: "Simple and focused",
      description:
        "No AI. Limited features. No premium subscription. Just a simple, straightforward mission of taking back our data.",
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

  const footerLinks = [
    { label: "GitHub", href: "https://github.com/embedded-engineering-aps" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/embedded-engineering-aps/",
    },
    { label: "Whitepaper", href: "https://embedded.engineering/walt-whitepaper" },
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
        <title>Walt - The open source alternative to Google Wallet</title>
        <meta
          name="description"
          content="Walt is the open source alternative to Google Wallet and Google Pay. Join our waitlist."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="scroll-container" id="top">
        <div className="section hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title">Private tap-to-pay for Android.</h1>
              <p className="hero-subhead">
                Private tap-to-pay for Android. No purchase tracking. Ever.
              </p>
              <p className="hero-subtitle">
                The open-source wallet that keeps every payment on-device. No
                tracking, no algorithms.
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
              <span className="section-eyebrow">Why Walt</span>
              <h2 className="section-heading">
                We deserve to spend without being targeted.
              </h2>
              <p className="section-lead">
                It is your right to spend as you please without being tracked.
              </p>
            </div>
            <div className="card-grid">
              {whyFeatures.map((item) => (
                <article key={item.title} className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="section section-muted">
          <div className="section-shell">
            <div className="section-header">
              <span className="section-eyebrow">How it works</span>
              <h2 className="section-heading">
                Transparent architecture, proven controls
              </h2>
              <p className="section-lead">
                Every technical decision favors clarity and restraint, so you
                know exactly how your wallet behaves.
              </p>
            </div>
            <div className="card-grid">
              {howFeatures.map((item) => (
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
              <h2 className="section-heading">
                Tap-to-pay without the data trail
              </h2>
              <p className="section-lead">
                From install to checkout, Walt mirrors the wallet you already
                know, minus the compromises.
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
              <h2 className="section-heading">A transparent path to launch</h2>
              <p className="section-lead">
                We're shipping Walt in the open. Here's how the next milestones
                stack up.
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

        <footer className="site-footer">
          <div className="footer-shell">
            <div className="footer-meta">
              <span className="footer-mark">© 2025 Walt</span>
              <span className="footer-credit">
                Developed by Embedded Engineering ApS
              </span>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
