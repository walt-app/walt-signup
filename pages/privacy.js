import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
          <Header />
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
                When you add a bank card to Walt, you enter your card number (PAN), expiry date,
                and CVV into input fields that are provided by a secure overlay from our
                tokenization partner. This overlay sits on top of the Walt app but is completely
                isolated from it. Walt&apos;s own code cannot read, intercept, or store the values
                you type into these fields.
              </p>
              <p>
                As a result, neither the Walt app nor Embedded Engineering ApS, the company behind
                Walt, ever has access to your card PAN, DPAN (device-specific card number), or any
                other sensitive card credentials. These details go directly from the secure overlay
                to the tokenization provider and never pass through Walt&apos;s systems.
              </p>

              <hr className="section-divider" />

              <h2>Transaction history</h2>

              <p>
                Walt displays your transaction history directly within the app so you can see what
                you&apos;ve spent. To do this, the app receives transaction details from the payment
                network and presents them on screen.
              </p>
              <p>
                This data is stored only on your smartphone. Walt does not upload, sync, or
                replicate your transaction history to any centralized server or database operated
                by Walt or Embedded Engineering ApS. If you uninstall the app, your transaction
                history is deleted with it.
              </p>

              <hr className="section-divider" />

              <h2>The role of the aggregator</h2>

              <p>
                Walt&apos;s local-only privacy model is made possible by Paymentology, a payment
                processing platform that acts as the aggregator between Walt and the card networks.
                Paymentology handles PCI-compliant tokenization, meaning it securely converts your
                card details into tokens that can be used for payments without exposing the
                underlying card data. Paymentology also manages the regulatory and compliance
                requirements that come with processing card transactions, so that Walt itself does
                not need to handle or store sensitive payment information.
              </p>

              <hr className="section-divider" />

              <h2>Payments to Walt, the company</h2>

              <p>
                Walt intends to charge customers for its product in the future. When billing is
                introduced, Walt will integrate with a third-party payment platform to process
                charges, issue receipts, and optionally store your preferred billing method for
                recurring payments.
              </p>
              <p>
                The specifics of this billing integration have not yet been finalized, as all Walt
                services are currently free. This page will be updated with full details once
                customer billing begins.
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
