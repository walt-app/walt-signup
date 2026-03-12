import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import DeckLayout from "../components/DeckLayout";

/* ─── Slide 1: Title ───────────────────────────────────────────────────────── */

function SlideTitle() {
  return (
    <div className="ps ps--accent">
      <div className="ps-pad ps-pad--center">
        <h1 className="ps-logo">Walt</h1>
        <div className="ps-divider" />
        <p className="ps-subtitle">Europe reclaims tap-to-pay</p>
      </div>
    </div>
  );
}

/* ─── Slide 2: The Problem ────────────────────────────────────────────────── */

function SlideProblem() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>
          Two US companies control every tap
        </p>
        <div className="ps-content">
          <div className="ps-split">
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">Duopoly scale</p>
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>1.0&ndash;1.3B</p>
                <p className="ps-body">combined users globally</p>
                <p className="ps-stat" style={{ fontSize: "clamp(14px, 2vw, 32px)", marginTop: "clamp(4px, 0.5vw, 8px)" }}>&euro;8.3T</p>
                <p className="ps-body">in digital wallet transactions (2025)</p>
              </div>
              <div className="ps-card">
                <p className="ps-card-h">Everyone else</p>
                <p className="ps-body">&lt;0.4% combined market share. No privacy-first NFC wallet exists.</p>
              </div>
            </div>
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">Apple Pay</p>
                <p className="ps-body">Charges banks 0.15% per transaction &mdash; an invisible tax on European commerce.</p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">Google Wallet</p>
                <p className="ps-body">Harvests every transaction for ad profiles. Extracts &euro;15&ndash;30 per active user per year in advertising value.</p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">Curve Pay</p>
                <p className="ps-body">Biometric scans, geo-location, behavioral tracking retained 10 years. Shared with ad companies.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-src">
          Sources: CoinLaw, WSJ / DOJ, StatCounter, Curve Privacy Policy (Jan 2026)
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: Solution ───────────────────────────────────────────────────── */

function SlideSolution() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Solution</h2>
        <p className="ps-lead">Privacy-first European tap-to-pay</p>
        <div className="ps-content">
          <div className="ps-split">
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--top">
                <span className="ps-label" style={{ color: "var(--orange-primary)" }}>B2C</span>
                <p className="ps-card-title">Walt App</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">&euro;10/year subscription &mdash; the user is the customer, not the product</li>
                  <li className="ps-bullet">On-device encryption: transaction data never leaves the phone</li>
                  <li className="ps-bullet">No backend server required &mdash; hardware-backed keys protect all data</li>
                </ul>
              </div>
              <div className="ps-card ps-card--top">
                <span className="ps-label" style={{ color: "var(--orange-primary)" }}>B2B2C</span>
                <p className="ps-card-title">Walt for Banks</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">Whitelabel tap-to-pay for banks wanting to reduce Apple/Google dependency</li>
                  <li className="ps-bullet">Banks keep customer relationship &mdash; Walt provides privacy infrastructure</li>
                </ul>
              </div>
            </div>
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card" style={{ background: "#151515", color: "#fff" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Cross-platform via DMA</p>
                <ul className="ps-bullets" style={{ color: "#ccc" }}>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Android: native HCE (Host Card Emulation)</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>iPhone: iOS 17.4+ NFC access via 10-year DMA mandate across all EEA</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Uses Face ID / Touch ID for authentication</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Can be set as default payment app</li>
                </ul>
              </div>
              <div className="ps-banner">
                <p className="ps-banner-h">Privacy guarantee</p>
                <p className="ps-banner-body">
                  Walt never touches PAN/CVC data. All sensitive operations handled by certified MeaWallet SDK. No tracking. No ads. No data sales. Ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 4: Why Now? ───────────────────────────────────────────────────── */

function SlideWhyNow() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Why Now?</h2>
        <p className="ps-lead">Four regulatory waves opening the market</p>
        <div className="ps-content">
          <div className="ps-cols-2 ps-gap-lg">
            <div className="ps-card ps-card--left">
              <p className="ps-label">July 2024</p>
              <p className="ps-card-title">Digital Markets Act</p>
              <p className="ps-body">
                EU forced Apple to open NFC to third-party wallets for <strong>10 years</strong> across all 30 EEA countries. Apple subsequently extended globally. First time a privacy alternative can exist.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-label">Late 2026</p>
              <p className="ps-card-title">eIDAS 2.0 &amp; EUDI</p>
              <p className="ps-body">
                All 27 EU member states must offer digital identity wallets. Privacy-by-design mandated. Normalizes non-Big-Tech wallets for 450M Europeans.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-label">2027&ndash;2028</p>
              <p className="ps-card-title">PSR / PSD3</p>
              <p className="ps-body">
                Payment Services Regulation harmonizes authentication and levels the playing field between bank and non-bank payment providers.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-label">~2029</p>
              <p className="ps-card-title">Digital Euro</p>
              <p className="ps-body">
                ECB&rsquo;s CBDC uses NFC tap-to-pay on existing terminals. Bypasses Visa/Mastercard entirely. Offline mode offers cash-like privacy. &euro;1.3B build cost.
              </p>
            </div>
          </div>
        </div>
        <div className="ps-src">
          Sources: European Commission, ECB, Council of the EU
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 5: Product Deep-Dive ──────────────────────────────────────────── */

function SlideProduct() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Product Deep-Dive</h2>
        <p className="ps-lead">How Walt tap-to-pay actually works</p>
        <div className="ps-content">
          <div className="ps-split">
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">HCE Architecture</p>
                <p className="ps-body">
                  Host Card Emulation &mdash; software-based card emulation on both Android and iPhone. No secure element dependency. Works on any modern smartphone.
                </p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">MeaWallet Token Platform</p>
                <p className="ps-body">
                  I-TSP certified for Visa, Mastercard, and Amex. 200+ institutions across 50+ countries already onboarded. Walt integrates their SDK &mdash; never touches card data directly.
                </p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">On-device Encryption</p>
                <p className="ps-body">
                  All transaction data encrypted with hardware-backed keys and stays on-device. No cloud sync. No server-side processing. PCI DSS likely does not apply to Walt directly.
                </p>
              </div>
            </div>
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card" style={{ background: "#151515", color: "#fff" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Security Model</p>
                <ul className="ps-bullets" style={{ color: "#ccc" }}>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>MeaWallet SDK handles PAN encryption &amp; transmission</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Walt&rsquo;s code never sees PAN/CVC</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Biometric auth via device OS (Face ID / fingerprint)</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>Double-click side button to invoke on iPhone</li>
                </ul>
              </div>
              <div className="ps-card">
                <p className="ps-card-h">Platform Support</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(6px, 0.6vw, 10px)" }}>
                  <div>
                    <p className="ps-label">Android</p>
                    <p className="ps-body">Native HCE, available today</p>
                  </div>
                  <div>
                    <p className="ps-label">iPhone</p>
                    <p className="ps-body">iOS 17.4+ via DMA NFC access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 6: Challenges ─────────────────────────────────────────────────── */

function SlideChallenges() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Challenges</h2>
        <p className="ps-lead">Tokenization approval chain</p>
        <div className="ps-content">
          <div className="ps-split">
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">I-TSP vs. TR-TSP</p>
                <p className="ps-body">
                  MeaWallet acts as Issuer Token Service Provider with pre-approved certification. Several hundred issuers already onboarded &mdash; for those banks, Walt tokenization works without re-negotiation.
                </p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">Bank Approval Chain</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet"><strong>Layer 1:</strong> Card scheme certification (Visa/Mastercard)</li>
                  <li className="ps-bullet"><strong>Layer 2:</strong> Payment processors (Nets/Nexi serves 250+ Nordic banks; Tietoevry serves 90+)</li>
                  <li className="ps-bullet"><strong>Layer 3:</strong> Individual issuing bank approval</li>
                </ul>
              </div>
            </div>
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">MeaWallet vs. Fidesmo</p>
                <p className="ps-body">
                  <strong>MeaWallet (primary):</strong> Proven I-TSP with hundreds of issuers. Integration-ready today.
                </p>
                <p className="ps-body" style={{ marginTop: "clamp(4px, 0.4vw, 6px)" }}>
                  <strong>Fidesmo (alternative):</strong> Phone SDK expected summer 2026 with Mastercard. Pre-approved issuer network. Hedge if MeaWallet terms unfavorable.
                </p>
              </div>
              <div className="ps-card ps-card--left">
                <p className="ps-card-h">Nordic Infrastructure</p>
                <p className="ps-body">
                  Danish IT cooperatives (Bankdata, BEC/BOKIS) are additional intermediaries. Processor partnerships are the key to scaling &mdash; one Nets/Nexi integration unlocks 250+ banks simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 7: The Market ─────────────────────────────────────────────────── */

function SlideMarket() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Market</h2>
        <p className="ps-lead">15&ndash;30M privacy-active Europeans</p>
        <div className="ps-content">
          <div className="ps-split">
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--top">
                <p className="ps-label">TAM</p>
                <p className="ps-stat" style={{ fontSize: "clamp(16px, 2vw, 32px)" }}>&euro;1.0&ndash;1.5B<span className="ps-muted" style={{ fontSize: "clamp(9px, 0.9vw, 14px)", fontWeight: 400 }}>/year</span></p>
                <p className="ps-body">100&ndash;150M &ldquo;Privacy Active&rdquo; Europeans (Eurostat: took at least one data protection step)</p>
              </div>
              <div className="ps-card ps-card--top">
                <p className="ps-label">SAM</p>
                <p className="ps-stat" style={{ fontSize: "clamp(16px, 2vw, 32px)" }}>&euro;150&ndash;300M<span className="ps-muted" style={{ fontSize: "clamp(9px, 0.9vw, 14px)", fontWeight: 400 }}>/year</span></p>
                <p className="ps-body">15&ndash;30M using multiple privacy tools simultaneously (encrypted email + privacy browser + VPN + secure messenger)</p>
              </div>
              <div className="ps-card ps-card--top">
                <p className="ps-label">SOM (Year 1&ndash;3)</p>
                <p className="ps-stat" style={{ fontSize: "clamp(16px, 2vw, 32px)" }}>&euro;1&ndash;5M<span className="ps-muted" style={{ fontSize: "clamp(9px, 0.9vw, 14px)", fontWeight: 400 }}>/year</span></p>
                <p className="ps-body">100K&ndash;500K paying users. GrapheneOS alone has 250K+ active users with zero NFC payment option.</p>
              </div>
            </div>
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card" style={{ background: "#151515", color: "#fff" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Comparable privacy brands</p>
                <ul className="ps-bullets" style={{ color: "#ccc" }}>
                  <li className="ps-bullet" style={{ color: "#ccc" }}><strong>Proton:</strong> 100M+ accounts (30&ndash;40M Europe)</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}><strong>Signal:</strong> 70M+ MAU (10&ndash;20M Europe)</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}><strong>Brave:</strong> 101M MAU (10&ndash;12M Europe)</li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}><strong>DuckDuckGo:</strong> 100M daily searches</li>
                </ul>
              </div>
              <div className="ps-banner">
                <p className="ps-banner-h">European sentiment</p>
                <p className="ps-banner-body">
                  70% of Germans and 71% of French prefer European-based apps if feature/price parity with US alternatives.
                </p>
              </div>
              <div className="ps-card">
                <p className="ps-card-h">Nordic momentum</p>
                <p className="ps-body">Proton reported ~80% surge in Nordic signups following US&ndash;EU geopolitical tensions. Signal downloads surging across Nordics.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-src">
          Sources: Eurostat, Proton (Feb 2026), company reports
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 8: Competitors ────────────────────────────────────────────────── */

function SlideCompetitors() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Competitors</h2>
        <p className="ps-lead">No privacy-first NFC competitor exists</p>
        <div className="ps-content">
          <div className="ps-cols-2 ps-gap-lg">
            <div className="ps-card ps-card--left">
              <p className="ps-card-title">Curve Pay</p>
              <p className="ps-label">6M+ users &middot; Acquired by Lloyds (~&pound;120M)</p>
              <p className="ps-body" style={{ marginTop: "clamp(4px, 0.4vw, 6px)" }}>
                January 2026 privacy policy: biometric scans, geo-location, behavioral tracking. Data retained 10 years, shared with ad companies and social media platforms. Lloyds acquisition likely deprioritizes European expansion.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-card-title">Revolut</p>
              <p className="ps-label">60&ndash;65M users &middot; &pound;300M ad revenue target</p>
              <p className="ps-body" style={{ marginTop: "clamp(4px, 0.4vw, 6px)" }}>
                Active data monetization. Hired TikTok UK&rsquo;s former head of e-commerce to build advertising business by 2026. Users are the product.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-card-title">Wero</p>
              <p className="ps-label">50M+ registered &middot; NFC planned 2026&ndash;2027</p>
              <p className="ps-body" style={{ marginTop: "clamp(4px, 0.4vw, 6px)" }}>
                Most dangerous near-term threat. Bank-backed, strong distribution. But weak privacy story and NFC point-of-sale not yet live. E-commerce only in Germany as of end-2025.
              </p>
            </div>
            <div className="ps-card ps-card--left">
              <p className="ps-card-title">EUDI Wallet</p>
              <p className="ps-label">Mandated by eIDAS 2.0 &middot; Late 2026</p>
              <p className="ps-body" style={{ marginTop: "clamp(4px, 0.4vw, 6px)" }}>
                Strongest privacy-by-design framework (selective disclosure, on-device storage). But uses QR/SEPA Credit Transfer &mdash; not NFC tap-to-pay. Preserves Walt&rsquo;s UX advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 9: Traction & Roadmap ─────────────────────────────────────────── */

function SlideTraction() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Traction &amp; Roadmap</h2>
        <p className="ps-lead">2&ndash;3 year head start before competitive terrain shifts</p>
        <div className="ps-content">
          <div className="ps-split">
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card ps-card--top">
                <p className="ps-card-h">Today</p>
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>400+</p>
                <p className="ps-body">waitlist signups &mdash; strong demand signal from privacy communities</p>
              </div>
              <div className="ps-card ps-card--top">
                <p className="ps-card-h">Break-even</p>
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>3K&ndash;6K</p>
                <p className="ps-body">paying users at &euro;10/year covers solo operation costs (&euro;30K/year)</p>
              </div>
              <div className="ps-card">
                <p className="ps-card-h">Key unlock</p>
                <p className="ps-body">
                  Fidesmo phone SDK expected <strong>summer 2026</strong> &mdash; alternative tokenization path with pre-approved issuer network. Processor partnerships (Nets/Nexi, Tietoevry) unlock banks at scale.
                </p>
              </div>
            </div>
            <div className="ps-stack ps-gap-sm">
              <div className="ps-card" style={{ background: "#151515", color: "#fff" }}>
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Geographic expansion</p>
                <ul className="ps-bullets" style={{ color: "#ccc" }}>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>
                    <strong>Phase 1 &mdash; Finland:</strong> Highest digital privacy index, strong privacy culture, Fidesmo HQ
                  </li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>
                    <strong>Phase 2 &mdash; Nordics:</strong> Denmark (63% iPhone), Norway, Sweden. High digital maturity, privacy awareness
                  </li>
                  <li className="ps-bullet" style={{ color: "#ccc" }}>
                    <strong>Phase 3 &mdash; Germany:</strong> Largest economy, most privacy-conscious EU nation (61.6% Android), 189+ digital independence organizations
                  </li>
                </ul>
              </div>
              <div className="ps-card">
                <p className="ps-card-h">Competitive window</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">Wero NFC: 2026&ndash;2027</li>
                  <li className="ps-bullet">EUDI rollout: late 2026</li>
                  <li className="ps-bullet">Digital euro: ~2029</li>
                  <li className="ps-bullet"><strong>Walt&rsquo;s window: now through 2028</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 10: The Ask ───────────────────────────────────────────────────── */

function SlideTheAsk() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Ask</h2>
        <div className="ps-content">
          <div className="ps-split ps-split--center">
            <div className="ps-price-card">
              <p className="ps-label" style={{ color: "#151515", letterSpacing: "0.12em" }}>STATUS</p>
              <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)", margin: "clamp(4px, 0.5vw, 10px) 0" }}>
                Work in Progress
              </p>
              <div className="ps-divider" />
              <p className="ps-banner-body">
                Still formulating the ask.
              </p>
            </div>
            <div className="ps-card" style={{ padding: "clamp(14px, 2.2vw, 38px) clamp(16px, 2.5vw, 42px)" }}>
              <p className="ps-card-h">Networking Needs</p>
              <ul className="ps-bullets" style={{ gap: "clamp(6px, 0.8vw, 14px)" }}>
                <li className="ps-bullet ps-bullet--bold">
                  <span>
                    Nordic payment infrastructure
                    <br />
                    <span className="ps-muted" style={{ fontWeight: 400, fontSize: "clamp(8px, 0.85vw, 14px)" }}>
                      Fidesmo, Nets/Nexi, Tietoevry
                    </span>
                  </span>
                </li>
                <li className="ps-bullet ps-bullet--bold">
                  <span>
                    Nordic bank cards &amp; payments leads
                    <br />
                    <span className="ps-muted" style={{ fontWeight: 400, fontSize: "clamp(8px, 0.85vw, 14px)" }}>
                      Nordea, Swedbank, DNB, Lunar, SpareBank 1
                    </span>
                  </span>
                </li>
                <li className="ps-bullet ps-bullet--bold">
                  <span>
                    Visa &amp; Mastercard Nordic fintech leads
                    <br />
                    <span className="ps-muted" style={{ fontWeight: 400, fontSize: "clamp(8px, 0.85vw, 14px)" }}>
                      Wallet certification contacts
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 11: Closing ───────────────────────────────────────────────────── */

function SlideClosing() {
  return (
    <div className="ps ps--accent">
      <div className="ps-pad ps-pad--center">
        <h1 className="ps-logo">Walt</h1>
        <div className="ps-divider" />
        <p className="ps-subtitle">Europe reclaims tap-to-pay</p>
        <div style={{ marginTop: "clamp(16px, 2.5vw, 40px)" }}>
          <p className="ps-body" style={{ color: "#151515" }}>Cole Bittel, Founder</p>
          <p className="ps-body" style={{ color: "#151515" }}>cole@walt.is</p>
          <p className="ps-body" style={{ color: "#151515" }}>walt.is</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide Array ──────────────────────────────────────────────────────────── */

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "Solution", render: SlideSolution },
  { title: "Why Now?", render: SlideWhyNow },
  { title: "Product Deep-Dive", render: SlideProduct },
  { title: "Challenges", render: SlideChallenges },
  { title: "The Market", render: SlideMarket },
  { title: "Competitors", render: SlideCompetitors },
  { title: "Traction & Roadmap", render: SlideTraction },
  { title: "The Ask", render: SlideTheAsk },
  { title: "Walt", render: SlideClosing },
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function ReadingDeck() {
  return (
    <DeckLayout
      slides={SLIDES}
      head={
        <Head>
          <title>Walt Reading Deck - Detailed Business Overview</title>
          <meta
            name="description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, competitive landscape, and roadmap."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://walt.is/reading-deck" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://walt.is/reading-deck" />
          <meta property="og:title" content="Walt Reading Deck" />
          <meta
            property="og:description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, and roadmap."
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://walt.is/reading-deck" />
          <meta property="twitter:title" content="Walt Reading Deck" />
          <meta
            property="twitter:description"
            content="European tap-to-pay — A detailed reading deck covering Walt's market opportunity, product architecture, and roadmap."
          />

          <link rel="icon" href="/favicon.ico" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Walt Reading Deck",
                "description": "Walt's detailed reading deck for investors and partners",
                "url": "https://walt.is/reading-deck",
                "publisher": {
                  "@type": "Organization",
                  "name": "Walt",
                  "url": "https://walt.is"
                }
              })
            }}
          />
        </Head>
      }
      activeDeck="reading-deck"
      downloads={
        <>
          <a
            href="/reading-deck/reading-deck.pdf"
            className="pitch-download-button outline"
            download="Walt-Reading-Deck.pdf"
          >
            Download PDF
          </a>
          <a
            href="/reading-deck/walt-reading-deck.pptx"
            className="pitch-download-button outline"
            download="Walt-Reading-Deck.pptx"
          >
            Download PowerPoint
          </a>
        </>
      }
      footerVariant="reading-deck"
    />
  );
}
