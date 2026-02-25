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
                <em>Last updated: February 2026</em>
              </p>

              <p>
                Walt is built on a simple promise: your transaction data stays on your phone. This policy explains
                exactly what data we collect, where it lives, and what we do with it.
              </p>

              <hr className="section-divider" />

              <h2>Who we are</h2>

              <p>
                Walt is operated by <strong>Embedded Engineering ApS</strong>, a company registered in Denmark.
              </p>
              <p>
                Address: Godsbanegade 31, sal 3th, 1722 København V, Denmark<br />
                Contact: <a href="mailto:cole@walt.is">cole@walt.is</a>
              </p>
              <p>
                Embedded Engineering ApS is the data controller for any personal data collected through
                the Walt app and the walt.is website.
              </p>

              <hr className="section-divider" />

              <h2>The Walt app</h2>

              <h3>What stays on your device</h3>

              <p>
                The following data is stored <strong>only on your device</strong> and is never transmitted to our servers
                or any third party:
              </p>
              <ul>
                <li>Card details you add to Walt (card number, expiry, cardholder name)</li>
                <li>Your transaction history</li>
                <li>Any other payment-related data</li>
              </ul>
              <p>
                This data is encrypted using your device&apos;s hardware-backed keystore (Android Keystore).
                We have no ability to access it. If you uninstall the app, this data is deleted.
              </p>

              <h3>What we do not collect</h3>

              <p>Walt does not collect:</p>
              <ul>
                <li>Your transaction history or purchase patterns</li>
                <li>Your card details</li>
                <li>Location data</li>
                <li>Behavioral analytics or usage statistics</li>
                <li>Advertising identifiers</li>
                <li>Any data that would allow us to build a profile of your spending</li>
              </ul>

              <h3>Subscription</h3>

              <p>
                Walt requires a subscription to use. Subscription management and payment processing are
                handled by the platform through which you downloaded the app (Google Play). We do not
                receive your payment card details. We may receive a subscriber identifier from the
                platform to verify your active subscription status.
              </p>

              <hr className="section-divider" />

              <h2>The walt.is website</h2>

              <h3>Waitlist</h3>

              <p>
                If you join the waitlist at walt.is, we collect your <strong>email address</strong>.
                We use it solely to notify you when Walt becomes available and to send occasional
                product updates. We do not share your email with third parties and do not use it
                for advertising.
              </p>
              <p>
                You can unsubscribe at any time using the link in any email we send, or by
                emailing <a href="mailto:cole@walt.is">cole@walt.is</a>.
              </p>

              <h3>No tracking</h3>

              <p>
                walt.is does not use advertising trackers, third-party analytics platforms, or
                cross-site tracking cookies. We do not build a profile of visitors to our website.
              </p>

              <hr className="section-divider" />

              <h2>Third-party services</h2>

              <p>
                Walt uses the following third-party services. Each has its own privacy policy:
              </p>
              <ul>
                <li>
                  <strong>MeaWallet</strong> — payment card tokenisation and NFC transaction
                  processing. Card details are tokenised according to the relevant card scheme
                  (Visa/Mastercard) specifications. MeaWallet processes only what is necessary
                  to perform the payment transaction.
                </li>
                <li>
                  <strong>Google Play</strong> — app distribution and subscription billing on Android.
                  Subject to Google&apos;s own privacy policy.
                </li>
                <li>
                  <strong>Vercel</strong> — website hosting for walt.is.
                </li>
                <li>
                  <strong>Resend</strong> — transactional email delivery for waitlist confirmations.
                </li>
              </ul>

              <hr className="section-divider" />

              <h2>Your rights (GDPR)</h2>

              <p>
                Embedded Engineering ApS is subject to the General Data Protection Regulation (GDPR).
                If you are located in the EU or EEA, you have the following rights regarding any personal
                data we hold about you:
              </p>
              <ul>
                <li><strong>Access</strong> — request a copy of the data we hold about you</li>
                <li><strong>Rectification</strong> — request correction of inaccurate data</li>
                <li><strong>Erasure</strong> — request deletion of your data</li>
                <li><strong>Restriction</strong> — request that we limit how we process your data</li>
                <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
                <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
              </ul>
              <p>
                The only personal data we hold about most users is their waitlist email address.
                App data (card details, transaction history) is stored only on your device and
                is not accessible to us.
              </p>
              <p>
                To exercise any of these rights, email <a href="mailto:cole@walt.is">cole@walt.is</a>.
                We will respond within 30 days. If you are unsatisfied with our response, you have
                the right to lodge a complaint with the Danish Data Protection Agency
                (Datatilsynet, <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">datatilsynet.dk</a>).
              </p>

              <hr className="section-divider" />

              <h2>Data retention</h2>

              <p>
                Waitlist email addresses are retained until you unsubscribe or request deletion.
                App data is stored on your device and is deleted when you uninstall the app.
              </p>

              <hr className="section-divider" />

              <h2>Children</h2>

              <p>
                Walt is intended for users aged 18 and over. We do not knowingly collect personal
                data from anyone under 18. If you believe a minor has provided us with personal data,
                please contact us and we will delete it.
              </p>

              <hr className="section-divider" />

              <h2>Changes to this policy</h2>

              <p>
                If we make material changes to this policy, we will update the &quot;Last updated&quot; date at
                the top and notify waitlist subscribers by email. Continued use of the app after
                changes take effect constitutes acceptance of the updated policy.
              </p>

              <hr className="section-divider" />

              <h2>Contact</h2>

              <p>
                Questions about this policy or Walt&apos;s privacy practices:{" "}
                <a href="mailto:cole@walt.is">cole@walt.is</a>
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
