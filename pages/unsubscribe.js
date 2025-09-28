import Head from "next/head";
import Footer from "../components/Footer";
import { Resend } from "resend";

export default function Unsubscribe({ email, unsubscribeSuccess }) {

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
  let unsubscribeSuccess = false;

  if (email) {
    // Perform unsubscribe directly with Resend API
    try {
      if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
        console.error("Missing Resend configuration");
        return {
          props: {
            email: email,
            unsubscribeSuccess: false,
          },
        };
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      // Update contact status to unsubscribed in Resend audience
      const { data, error } = await resend.contacts.update({
        email: email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
        unsubscribed: true,
      });

      if (error) {
        console.error("Resend unsubscribe error:", error);

        // Check if contact doesn't exist (treat as success since they're effectively unsubscribed)
        if (error.message && error.message.includes("not found")) {
          unsubscribeSuccess = true;
        }
      } else {
        console.log("Contact marked as unsubscribed successfully:", data);
        unsubscribeSuccess = true;
      }
    } catch (error) {
      console.error("Error unsubscribing:", error);
    }
  }

  return {
    props: {
      email: email || null,
      unsubscribeSuccess,
    },
  };
}