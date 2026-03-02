import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Walt</title>
        <meta
          name="description"
          content="Walt privacy policy. Your transaction data stays on your device. We don't collect, store, or sell your payment data."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://walt.is/privacy" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://walt.is/privacy" />
        <meta property="og:title" content="Privacy Policy - Walt" />
        <meta property="og:description" content="Walt privacy policy. Your transaction data stays on your device." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="motivation-page">
        <div className="motivation-hero">
          <div className="section-shell">
            <div className="section-header">
              <h1 className="section-heading">Privacy Policy</h1>
            </div>
          </div>
        </div>

        <div className="motivation-main">
          <div className="section-shell">
            <div className="motivation-content">
              <p>
                <em>Last updated: March 2026</em>
              </p>

              <hr className="section-divider" />

              <h2>Cards added to the Walt app</h2>

              <p>
                Walt, the smartphone app, and Embedded Engineering ApS, the company, cannot access
                bank card PAN or DPANs that you load into the Walt app. This is because all input
                fields related to these fields are provided by an overlayed UI that the Walt app
                cannot access.
              </p>

              <hr className="section-divider" />

              <h2>Transaction history</h2>

              <p>
                The locally running Walt app is responsible for presenting the transaction history
                within the app. In this way, the Walt app has access to your transaction details
                that are provided in-app.
              </p>
              <p>
                However, as with the rest of the Walt app, this data is only stored locally on the
                user&apos;s smartphone and does not get stored within any centralized Walt databases.
              </p>

              <hr className="section-divider" />

              <h2>The role of the aggregator</h2>

              <p>
                Walt accomplishes its local-only privacy model by relying on Paymentology for
                PCI-compliant tokenization and compliance.
              </p>

              <hr className="section-divider" />

              <h2>Payments to Walt, the company</h2>

              <p>
                As described across the Walt product, Walt will someday charge customers for its
                product. To charge customers, Walt integrates with a 3rd party platform to charge
                bank cards for purchases, provide receipts to customers, and store their chosen
                billing mechanism (if desired). The specifics of this are not yet detailed, as
                currently all Walt services are free. This page will be updated once customer
                billing begins.
              </p>

              <p>
                <Link href="/">← Back to Walt</Link>
              </p>
            </div>
          </div>
        </div>

        <Footer variant="privacy" />
      </div>
    </>
  );
}
