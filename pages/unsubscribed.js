import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Unsubscribed() {
  const router = useRouter();
  const { email, success } = router.query;

  return (
    <>
      <Head>
        <title>Unsubscribed from Walt waitlist</title>
        <meta
          name="description"
          content="You have been unsubscribed from the Walt waitlist"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://walt.is/unsubscribed" />

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
              <h1 className="hero-title">You've been unsubscribed</h1>
              <p className="hero-subtitle">
                {email ? (
                  <>
                    <strong>{email}</strong> has been removed from the Walt waitlist.
                  </>
                ) : (
                  <>
                    You have been removed from the Walt waitlist.
                  </>
                )}
              </p>
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