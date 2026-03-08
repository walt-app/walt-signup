import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Unsubscribe() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [unsubscribeSuccess, setUnsubscribeSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleUnsubscribe = async () => {
      const emailParam = router.query.email;

      if (!emailParam) {
        setIsLoading(false);
        return;
      }

      setEmail(emailParam);

      try {
        const response = await fetch("/api/unsubscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailParam }),
        });

        const data = await response.json();
        setUnsubscribeSuccess(data.success);
      } catch (error) {
        console.error("Error unsubscribing:", error);
        setUnsubscribeSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (router.isReady) {
      handleUnsubscribe();
    }
  }, [router.isReady, router.query.email]);

  return (
    <>
      <Head>
        <title>Unsubscribe from Walt waitlist</title>
        <meta
          name="description"
          content="Unsubscribe from the Walt waitlist"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://walt.is/unsubscribe" />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="scroll-container">
        <div className="section hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              {isLoading ? (
                <>
                  <h1 className="hero-title">Processing unsubscribe...</h1>
                  <p className="hero-subtitle">
                    Please wait while we process your unsubscribe request.
                  </p>
                </>
              ) : !email ? (
                <>
                  <h1 className="hero-title">Invalid unsubscribe link</h1>
                  <p className="hero-subtitle">
                    The unsubscribe link appears to be invalid. Please contact support if you need assistance.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="hero-title">
                    {unsubscribeSuccess ? "You've been unsubscribed" : "Unsubscribe failed"}
                  </h1>
                  <p className="hero-subtitle">
                    {unsubscribeSuccess ? (
                      <>
                        <strong>{email}</strong> has been successfully removed from the Walt waitlist.
                      </>
                    ) : (
                      <>
                        We couldn't unsubscribe <strong>{email}</strong>. Please try again or contact support.
                      </>
                    )}
                  </p>
                </>
              )}
              <div className="hero-secondary-action">
                <a className="hero-secondary-button" href="/">
                  Return to home
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

