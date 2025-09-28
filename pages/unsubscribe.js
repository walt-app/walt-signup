import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Unsubscribe() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [autoUnsubscribed, setAutoUnsubscribed] = useState(false);

  useEffect(() => {
    // Auto-unsubscribe if email is in URL params
    if (router.query.email) {
      setEmail(router.query.email);
      handleUnsubscribe(router.query.email);
      setAutoUnsubscribed(true);
    }
  }, [router.query.email]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showMessage = (message, type) => {
    setMessage(message);
    setMessageType(type);
  };

  const handleUnsubscribe = async (emailToUnsubscribe = null) => {
    const emailValue = (emailToUnsubscribe || email).trim();

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
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue }),
      });

      const data = await response.json();

      if (data.success) {
        showMessage(
          data.message || "Successfully unsubscribed from the waitlist!",
          "success"
        );
        if (!autoUnsubscribed) {
          setEmail("");
        }
      } else {
        showMessage(
          data.error || "Something went wrong. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error unsubscribing:", error);
      showMessage(
        "Network error. Please check your connection and try again.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUnsubscribe();
  };

  return (
    <>
      <Head>
        <title>Unsubscribe from Walt waitlist</title>
        <meta
          name="description"
          content="Unsubscribe from the Walt waitlist"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="scroll-container">
        <div className="section hero-section">
          <div className="hero-inner">
            <div className="hero-copy" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
              <h1 className="hero-title">Unsubscribe from Walt waitlist</h1>

              {autoUnsubscribed ? (
                <div>
                  <p className="hero-subtitle">
                    Processing unsubscribe request for: <strong>{email}</strong>
                  </p>
                  {message && (
                    <div className={`form-message ${messageType}`} style={{ marginTop: "20px" }}>
                      {message}
                    </div>
                  )}
                  {messageType === "success" && (
                    <div style={{ marginTop: "30px" }}>
                      <a href="/" className="hero-secondary-button">
                        Return to home
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <p className="hero-subtitle">
                    Enter your email address to unsubscribe from the Walt waitlist.
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
                          {isLoading ? "Unsubscribing..." : "Unsubscribe"}
                        </span>
                      </button>
                    </div>
                    {message && (
                      <div className={`form-message ${messageType}`}>{message}</div>
                    )}
                  </form>

                  <div className="hero-secondary-action">
                    <a className="hero-secondary-button" href="/">
                      Return to home
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}