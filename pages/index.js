import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

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
        <div className="section signup-container">
          <div className="signup-content">
            <h1 className="primary-headline">WALT</h1>
            <h2 className="secondary-headline">
              The open source alternative to Google Wallet and Google Pay.
            </h2>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="email-input"
                  required
                />
                <button 
                  type="submit" 
                  className="signup-button"
                  disabled={isLoading}
                  style={{ opacity: isLoading ? '0.7' : '1' }}
                >
                  <span>{isLoading ? 'Joining...' : 'Join Waitlist'}</span>
                </button>
              </div>
              {message && (
                <div className={`form-message ${messageType}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="section second-section">
          <div className="second-content">
            <h2 className="section-title">Why</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Transaction data is sacred</h3>
                <p>
                  What you spend your money on is one of the most
                  important personal and private choices you make.
                </p>
              </div>
              <div className="feature">
                <h3>Google can&apos;t be trusted</h3>
                <p>
                  Google takes advantage of your spending in Google Wallet
                  and Google Pay to understand how to influence you to buy
                  what they want to sell you.
                </p>
              </div>
            </div>
            <p className="belief-statement">
              We believe that what you spend your money on is private
            </p>
          </div>
        </div>

        <div className="section third-section">
          <div className="second-content">
            <h2 className="section-title">How</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Open Source</h3>
                <p>
                  Walt is an open-source, drop-in replacement to Google
                  Wallet. Download the app, create your cards within the
                  app, and start using it at stores
                </p>
              </div>
              <div className="feature">
                <h3>No Data Storage</h3>
                <p>
                  We don&apos;t store any transaction data. All data is stored
                  locally on your Android device in a small SQLite db.
                </p>
              </div>
              <div className="feature">
                <h3>Compliant and Secure</h3>
                <p>
                  PCI and SOC3 compliant. Your cards comply with the
                  highest security and compliance standards.
                </p>
              </div>
              <div className="feature">
                <h3>$3 / Month</h3>
                <p>
                  To run the servers and pay for the annual audits, you
                  will fund the project with a $3 a month fee. This is the
                  alternative to how Google harvests and sells your data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section fifth-section">
          <div className="second-content">
            <h2 className="section-title">Use</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Download &amp; Install</h3>
                <p>
                  Download the Walt app from the Google Play Store or F-Droid repository. Install on any Android device running Android 7.0 or higher.
                </p>
              </div>
              <div className="feature">
                <h3>Add Your Cards</h3>
                <p>
                  Scan or manually enter your debit and credit card details. All information is encrypted and stored locally on your device only.
                </p>
              </div>
              <div className="feature">
                <h3>Tap to Pay</h3>
                <p>
                  Hold your phone near any NFC-enabled payment terminal. Walt uses the same secure tokenization as Google Pay.
                </p>
              </div>
              <div className="feature">
                <h3>Stay Private</h3>
                <p>
                  No transaction data leaves your device. No tracking, no profiling, no data mining. Your spending habits remain yours alone.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section fourth-section">
          <div className="second-content">
            <h2 className="section-title">Timeline</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>H1 2026</h3>
                <p>
                  Establish relationships payment providers, acquirers, and initiate conversations with pilot bank for &quot;load card to Walt&quot; functionality. First DPAN and issued, and development against HCE APIs explored.
                </p>
              </div>
              <div className="feature">
                <h3>H2 2025</h3>
                <p>
                  Establish and gain understanding of market fit, with
                  signup link and marketing of product.
                </p>
              </div>
              <div className="feature">
                <h3>H1 2026</h3>
                <p>
                  Initial PoC development. Development of Android app
                  relying on HCE APIs. Establish relationships with at
                  least one bank for &quot;Push to Wallet&quot; functionality.
                </p>
              </div>
              <div className="feature">
                <h3>2027</h3>
                <p>Beta availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}