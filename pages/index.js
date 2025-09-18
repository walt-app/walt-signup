import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const whyFeatures = [
    {
      title: 'Transaction data is sacred',
      description: 'What you spend signals who you are. Walt keeps that signal between you and your wallet; no data harvesting, no shadow profiles.'
    },
    {
      title: "Google can't be trusted",
      description: 'Closed-source wallets turn tap-to-pay into behavioral targeting. Walt is open source, so you can audit the code that touches your payments.'
    },
    {
      title: 'Belief in privacy',
      description: "We believe your receipts should never fund someone else's ad business. Walt pairs transparency with strong defaults so privacy is automatic."
    }
  ];

  const howFeatures = [
    {
      title: 'Open source by design',
      description: 'Review every line, fork the repo, or build on top of Walt. A community wallet that earns trust instead of demanding it.'
    },
    {
      title: 'No transaction storage',
      description: "Tokens stay on-device inside a lightweight, encrypted SQLite database. What you tap never leaves the phone you tapped with."
    },
    {
      title: 'Compliant and secure',
      description: 'PCI and SOC 3 controls from the start, so privacy never means cutting corners on audit trails or payment network rules.'
    },
    {
      title: 'Funded by members',
      description: '$3 a month sustains infrastructure and annual audits. Simple pricing that replaces the hidden cost of ad-based wallets.'
    }
  ];

  const useSteps = [
    {
      title: 'Download & install',
      description: 'Grab Walt from Google Play or F-Droid. Works on any Android device running 7.0 or higher.'
    },
    {
      title: 'Add your cards',
      description: 'Scan or enter details manually. Everything stays encrypted locally, ready for tap-to-pay.'
    },
    {
      title: 'Tap to pay',
      description: "Hold your phone near any NFC-enabled terminal. Walt uses the same secure tokenization you're used to."
    },
    {
      title: 'Stay private',
      description: 'No transaction logs, no tracking, no data resale. Just the wallet experience without the surveillance.'
    }
  ];

  const roadmap = [
    {
      period: 'H2 2025',
      title: 'Find the fit',
      description: 'Public waitlist, community marketing, and interviews to align Walt with privacy-first adopters.'
    },
    {
      period: 'H1 2026',
      title: 'Issue the first tokens',
      description: 'Relationships with payment providers, first DPAN issued, and heavy R&D against HCE APIs.'
    },
    {
      period: 'H2 2026',
      title: 'Prototype in the wild',
      description: 'Pilot Android builds with partner banks exploring "load card to Walt" push provisioning.'
    },
    {
      period: '2027',
      title: 'Open beta',
      description: "Walt rolls out to early supporters with the privacy guarantees and polish we'd demand for ourselves."
    }
  ];

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showMessage = (message, type) => {
    setMessage(message);
    setMessageType(type);
    
    if (type === 'success') {
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailValue = email.trim();
    
    if (!emailValue) {
      showMessage('Please enter your email address', 'error');
      return;
    }

    if (!isValidEmail(emailValue)) {
      showMessage('Please enter a valid email address', 'error');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue })
      });

      const data = await response.json();

      if (data.success) {
        showMessage(data.message || 'Successfully joined the waitlist!', 'success');
        setEmail('');
      } else {
        showMessage(data.error || 'Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showMessage('Network error. Please check your connection and try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Walt - The open source alternative to Google Wallet</title>
        <meta name="description" content="Walt is the open source alternative to Google Wallet and Google Pay. Join our waitlist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="scroll-container">
        <div className="section hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="hero-badge">Open source wallet</span>
              <h1 className="hero-title">Own your wallet, not the data it collects.</h1>
              <p className="hero-subtitle">
                Walt mirrors the tap-to-pay experience you expect, keeps every token on your
                device, and leaves big-tech tracking out of every transaction.
              </p>
              <form onSubmit={handleSubmit} className="hero-form">
                <div className="hero-input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="hero-input"
                    required
                  />
                  <button
                    type="submit"
                    className="hero-button"
                    disabled={isLoading}
                  >
                    <span>{isLoading ? 'Joining...' : 'Join the waitlist'}</span>
                  </button>
                </div>
                {message && (
                  <div className={`form-message ${messageType}`}>
                    {message}
                  </div>
                )}
              </form>
              <div className="hero-footnote">
                <div className="hero-avatars" aria-hidden="true">
                  <span className="hero-avatar" />
                  <span className="hero-avatar" />
                  <span className="hero-avatar" />
                </div>
                <p>Maintained by builders who think payments should stay private.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-light">
          <div className="section-shell">
            <div className="section-header">
              <span className="section-eyebrow">Why Walt</span>
              <h2 className="section-heading">Privacy-first rails for everyday spending</h2>
              <p className="section-lead">
                Walt exists for people who refuse to trade convenience for surveillance. Here's what makes that possible.
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
              <h2 className="section-heading">Transparent architecture, proven controls</h2>
              <p className="section-lead">
                Every technical decision favors clarity and restraint, so you know exactly how your wallet behaves.
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
              <h2 className="section-heading">Tap-to-pay without the data trail</h2>
              <p className="section-lead">
                From install to checkout, Walt mirrors the wallet you already know, minus the compromises.
              </p>
            </div>
            <div className="card-grid card-grid-steps">
              {useSteps.map((step, index) => (
                <article key={step.title} className="info-card step-card">
                  <span className="step-counter">{String(index + 1).padStart(2, '0')}</span>
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
                We're shipping Walt in the open. Here's how the next milestones stack up.
              </p>
            </div>
            <ol className="timeline">
              {roadmap.map((item) => (
                <li key={item.period} className="timeline-item">
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
