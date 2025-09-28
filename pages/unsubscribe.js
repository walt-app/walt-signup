import Head from "next/head";
import Footer from "../components/Footer";

export default function Unsubscribe({ email }) {

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
            <div className="hero-copy">
              <h1 className="hero-title">You've been unsubscribed</h1>
              <p className="hero-subtitle">
                <strong>{email}</strong> has been successfully removed from the Walt waitlist.
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

export async function getServerSideProps(context) {
  const { email } = context.query;

  if (email) {
    // Perform unsubscribe on server side
    try {
      const response = await fetch(`${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}/api/unsubscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Unsubscribe result:", data);
    } catch (error) {
      console.error("Error unsubscribing:", error);
    }
  }

  return {
    props: {
      email: email || null,
    },
  };
}