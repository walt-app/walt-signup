import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

/* ─── Inline SVG Icons ─────────────────────────────────────────────────────── */

const IconEye = (
  <svg className="deck-slide-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 20C2.5 20 8.33 8.33 20 8.33C31.67 8.33 37.5 20 37.5 20C37.5 20 31.67 31.67 20 31.67C8.33 31.67 2.5 20 2.5 20Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconLock = (
  <svg className="deck-step-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18.33" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.33 18.33V13.33C13.33 9.65 16.32 6.67 20 6.67C23.68 6.67 26.67 9.65 26.67 13.33V18.33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconServerOff = (
  <svg className="deck-step-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6.67" y="6.67" width="26.67" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6.67" y="23.33" width="26.67" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.67 11.67H11.68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.67 28.33H11.68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 5L35 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconUsers = (
  <svg className="deck-step-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.33 35V31.67C28.33 29.9 27.63 28.2 26.38 26.95C25.13 25.7 23.43 25 21.67 25H8.33C6.57 25 4.87 25.7 3.62 26.95C2.37 28.2 1.67 29.9 1.67 31.67V35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 18.33C18.68 18.33 21.67 15.35 21.67 11.67C21.67 7.98 18.68 5 15 5C11.32 5 8.33 7.98 8.33 11.67C8.33 15.35 11.32 18.33 15 18.33Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38.33 35V31.67C38.33 30.19 37.84 28.75 36.94 27.59C36.03 26.42 34.77 25.58 33.33 25.22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.67 5.22C28.11 5.58 29.37 6.42 30.28 7.59C31.19 8.76 31.68 10.19 31.68 11.67C31.68 13.16 31.19 14.59 30.28 15.76C29.37 16.93 28.11 17.77 26.67 18.13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCheckCircle = (
  <svg className="deck-traction-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17" fill="var(--orange-primary)"/>
    <path d="M13 20L18 25L27 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBriefcase = (
  <svg className="deck-hire-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.33" y="13.33" width="33.33" height="21.67" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.67 35V8.33C26.67 7.45 26.31 6.6 25.69 5.98C25.07 5.35 24.22 5 23.33 5H16.67C15.78 5 14.93 5.35 14.31 5.98C13.69 6.6 13.33 7.45 13.33 8.33V35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMegaphone = (
  <svg className="deck-hire-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 6.67V26.67C30 26.67 25.83 24.17 22.5 21.67" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 13.33H10C10 13.33 22.5 13.33 22.5 6.67V26.67C22.5 20 10 20 10 20H5V13.33Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 20V30C10 31.38 10.53 32.71 11.46 33.68C12.4 34.64 13.67 35 15 35C16.33 35 17.6 34.64 18.54 33.68C19.47 32.71 20 31.38 20 30V22.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconScale = (
  <svg className="deck-slide-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5V35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 12L20 7L35 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 12L10 25H0L5 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 12L40 25H30L35 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 35H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconShield = (
  <svg className="deck-slide-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3.33L33.33 10V20C33.33 28.33 27.5 35.17 20 36.67C12.5 35.17 6.67 28.33 6.67 20V10L20 3.33Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Slide Components ─────────────────────────────────────────────────────── */

function SlideTitle() {
  return (
    <div className="deck-slide deck-slide--accent">
      <div className="deck-slide-inner deck-slide-center">
        <h1 className="deck-slide-logo">WALT</h1>
        <div className="deck-slide-divider" />
        <p className="deck-slide-subtitle">Private tap-to-pay</p>
        <p className="deck-slide-body" style={{ marginTop: "clamp(8px, 1.5vw, 24px)" }}>
          Pre-Seed Investment Opportunity
        </p>
      </div>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        {IconEye}
        <h2 className="deck-slide-heading">The Problem</h2>
        <p className="deck-slide-lead">Your daily spending reveals who you are.</p>
        <p className="deck-slide-body">
          Every tap-to-pay transaction routes through Apple Pay or Google Wallet.
          Apple charges banks 0.15% on every credit card tap and controls which wallets can access NFC on iPhone.
          Google harvests transaction data alongside Search, Gmail, and Maps.
          Neither treats your spending data as private.
        </p>
        <div className="deck-stat-card">
          <div className="deck-stat-row">
            <div className="deck-stat-item">
              <span className="deck-stat-num">~650M</span>
              <span className="deck-stat-desc">Apple Pay users (est.)</span>
            </div>
            <div className="deck-stat-item">
              <span className="deck-stat-num">~520M</span>
              <span className="deck-stat-desc">Google Pay users (est.)</span>
            </div>
          </div>
          <div className="deck-stat-row">
            <div className="deck-stat-item">
              <span className="deck-stat-num">~$14T</span>
              <span className="deck-stat-desc">combined processed annually (est.)</span>
            </div>
            <div className="deck-stat-item">
              <span className="deck-stat-num">23.2B</span>
              <span className="deck-stat-desc">contactless payments, euro area H2 2023</span>
            </div>
          </div>
          <p className="deck-stat-footer">Zero private alternatives exist.</p>
        </div>
      </div>
    </div>
  );
}

function SlideNoAlternatives() {
  return (
    <div className="deck-slide deck-slide--warm">
      <div className="deck-slide-inner">
        {IconShield}
        <h2 className="deck-slide-heading">No Alternatives Exist</h2>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
          For anyone who wants tap-to-pay without surveillance, current options are:
        </p>
        <div style={{ display: "flex", gap: "clamp(6px, 1vw, 16px)", marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
          <div className="deck-stat-card" style={{ flex: 1 }}>
            <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>Switch to Cash</p>
            <p className="deck-slide-body">Go backwards. Use physical cards or cash. Lose convenience, risk loss/theft.</p>
          </div>
          <div className="deck-stat-card" style={{ flex: 1 }}>
            <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>Use a Big Tech Wallet</p>
            <p className="deck-slide-body">Apple charges banks per tap. Google harvests your data. Neither offers privacy by default.</p>
          </div>
          <div className="deck-stat-card" style={{ flex: 1 }}>
            <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>Accept It</p>
            <p className="deck-slide-body">73% of US consumers feel they have no control over how companies use their data.</p>
          </div>
        </div>
        <div className="deck-highlight-stat">
          <span className="deck-stat-num">99.6%</span>
          <span className="deck-stat-desc">
            of smartphones are Android or iOS.<br />
            No privacy-preserving tap-to-pay on either.
          </span>
        </div>
      </div>
    </div>
  );
}

function SlideSolution() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner deck-slide-split">
        <div>
          <h2 className="deck-slide-heading">The Solution</h2>
          <p className="deck-slide-lead">
            Walt is the private alternative to Apple Pay and Google Wallet.
          </p>
          <p className="deck-slide-body" style={{ marginBottom: "clamp(12px, 2vw, 24px)" }}>
            A tap-to-pay wallet for Android and iOS that treats transaction data as sacred.
            No collection. No storage. No selling.
          </p>
          <div className="deck-steps">
            <div className="deck-step">
              {IconLock}
              <span>On-device encryption</span>
            </div>
            <div className="deck-step">
              {IconServerOff}
              <span>No server-side storage</span>
            </div>
            <div className="deck-step">
              {IconUsers}
              <span>Funded by users, not data</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            background: "var(--orange-primary)",
            borderRadius: "clamp(6px, 0.8vw, 16px)",
            padding: "clamp(12px, 2vw, 32px)",
            color: "var(--text-dark)",
            textAlign: "center"
          }}>
            <p style={{
              fontSize: "clamp(8px, 0.9vw, 15px)",
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.4,
              margin: 0
            }}>
              No AI. No premium features. There&rsquo;s only one user flow that matters.
              Load a card, set Walt as default wallet, start tapping to pay.
            </p>
            <p style={{
              fontSize: "clamp(7px, 0.7vw, 12px)",
              fontWeight: 400,
              color: "var(--text-dark)",
              opacity: 0.7,
              marginTop: "clamp(4px, 0.5vw, 8px)",
              margin: "clamp(4px, 0.5vw, 8px) 0 0"
            }}>
              Deliberately simple. Intentionally focused.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideProduct() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Product</h2>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
          Simple and straightforward. A predictable, familiar wallet app.
        </p>
        <div className="deck-slide-split" style={{ gap: "4%" }}>
          <div style={{ display: "flex", gap: "clamp(6px, 1vw, 16px)", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <p className="deck-stat-footer" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>1. Download</p>
              <p className="deck-slide-body">Available on Android and iOS</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p className="deck-stat-footer" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>2. Add Cards</p>
              <p className="deck-slide-body">Everything stays encrypted locally</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p className="deck-stat-footer" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>3. Tap to Pay</p>
              <p className="deck-slide-body">Same experience as Google Wallet or Apple Pay</p>
            </div>
          </div>
          <div className="deck-phone-row">
            <div className="deck-phone-mini">
              <Image
                src="/promo-screen.jpg"
                alt="Walt app home screen"
                width={140}
                height={304}
                sizes="(max-width: 768px) 80px, 140px"
              />
            </div>
            <div className="deck-phone-mini">
              <Image
                src="/add-card.jpg"
                alt="Add card screen"
                width={140}
                height={304}
                sizes="(max-width: 768px) 80px, 140px"
              />
            </div>
            <div className="deck-phone-mini">
              <Image
                src="/intro-screen.jpg"
                alt="Tap to pay screen"
                width={140}
                height={304}
                sizes="(max-width: 768px) 80px, 140px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideWhyNow() {
  return (
    <div className="deck-slide deck-slide--warm">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Why Now?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "clamp(6px, 1vw, 16px)", marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
          <div className="deck-stat-card">
            <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>Privacy Awareness Surging</p>
            <p className="deck-slide-body">
              300K+ r/degoogle members. Apple fined &euro;1.8B + &euro;500M by EU (2024&ndash;2025). Users increasingly distrust both platforms.
            </p>
          </div>
          <div className="deck-stat-card">
            <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>Tap-to-Pay Exploding</p>
            <p className="deck-slide-body">
              23.2B contactless payments in euro area, H2 2023 (+16% YoY). &gt;97% of new smartphones ship with NFC.
            </p>
          </div>
          <div className="deck-stat-card">
            <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>Legislation</p>
            <p className="deck-slide-body">
              EU opened iPhone NFC to rivals (July 2024). US DOJ antitrust suit vs Apple Pay (filed March 2024). eIDAS 2.0 mandates EU digital wallets by Dec 2026.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(6px, 1vw, 16px)" }}>
          <div className="deck-stat-card">
            <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>Privacy Alternatives Winning</p>
            <p className="deck-slide-body">
              Google Search &rarr; DuckDuckGo, ChatGPT &bull;
              Gmail &rarr; ProtonMail, Hey.com &bull;
              Chrome &rarr; Firefox, Brave &bull;
              iMessage &rarr; Signal
            </p>
          </div>
          <div style={{
            background: "var(--orange-primary)",
            borderRadius: "clamp(6px, 0.8vw, 16px)",
            padding: "clamp(8px, 1.5vw, 24px) clamp(12px, 2vw, 32px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center"
          }}>
            <p style={{
              fontSize: "clamp(10px, 1.2vw, 20px)",
              fontWeight: 700,
              color: "var(--text-dark)",
              margin: "0 0 clamp(2px, 0.3vw, 6px)"
            }}>
              The Gap
            </p>
            <p style={{
              fontSize: "clamp(7px, 0.8vw, 14px)",
              color: "var(--text-dark)",
              margin: 0,
              lineHeight: 1.5
            }}>
              Every major Big Tech product has a privacy-focused competitor &mdash; except mobile payments.
              EU regulation unlocked competition for both Google Wallet and Apple Pay in 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideMarketSize() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Market Size</h2>
        <div className="deck-slide-split" style={{ gap: "6%" }}>
          <div>
            <div className="deck-stat-card" style={{ marginBottom: "clamp(6px, 1vw, 16px)" }}>
              <p style={{ fontSize: "clamp(6px, 0.6vw, 10px)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 clamp(2px, 0.3vw, 4px)" }}>
                TAM &ndash; Total Addressable Market
              </p>
              <span className="deck-stat-num">$18.7B</span>
              <p className="deck-slide-body">Global mobile wallet market (2024)</p>
            </div>
            <div className="deck-stat-card" style={{ marginBottom: "clamp(6px, 1vw, 16px)" }}>
              <p style={{ fontSize: "clamp(6px, 0.6vw, 10px)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 clamp(2px, 0.3vw, 4px)" }}>
                SAM &ndash; Serviceable Addressable Market
              </p>
              <span className="deck-stat-num">$6.9B</span>
              <p className="deck-slide-body">European Android + iOS tap-to-pay users</p>
            </div>
            <div className="deck-stat-card">
              <p style={{ fontSize: "clamp(6px, 0.6vw, 10px)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 clamp(2px, 0.3vw, 4px)" }}>
                SOM &ndash; Serviceable Obtainable Market
              </p>
              <span className="deck-stat-num">$34.5M</span>
              <p className="deck-slide-body">0.5% of European mobile wallet users willing to pay for privacy</p>
            </div>
          </div>
          <div>
            <div className="deck-stat-card" style={{ marginBottom: "clamp(6px, 1vw, 16px)" }}>
              <p className="deck-stat-footer" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>Market Tailwinds</p>
              <p className="deck-slide-body">&bull; Android + iOS = 99.6% of smartphones globally</p>
              <p className="deck-slide-body">&bull; EU digital payments growing 15% annually</p>
              <p className="deck-slide-body">&bull; Pro-privacy sentiment accelerating across EU and US</p>
            </div>
            <div style={{
              background: "var(--orange-primary)",
              borderRadius: "clamp(6px, 0.8vw, 16px)",
              padding: "clamp(8px, 1.5vw, 24px) clamp(12px, 2vw, 32px)",
              textAlign: "center"
            }}>
              <p style={{
                fontSize: "clamp(10px, 1.2vw, 20px)",
                fontWeight: 700,
                color: "var(--text-dark)",
                margin: "0 0 clamp(2px, 0.3vw, 4px)"
              }}>
                1.2B Apple Pay + Google Wallet users (est.)
              </p>
              <p style={{
                fontSize: "clamp(7px, 0.8vw, 14px)",
                color: "var(--text-dark)",
                margin: 0
              }}>
                All potential Walt converts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTeam() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner deck-slide-center">
        <h2 className="deck-slide-heading">Team</h2>
        <h3 className="deck-slide-lead" style={{ marginBottom: "clamp(2px, 0.3vw, 6px)" }}>
          Cole Bittel
        </h3>
        <p className="deck-slide-body" style={{ color: "var(--orange-primary)", marginBottom: "clamp(2px, 0.3vw, 4px)" }}>
          Founder
        </p>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>
          DevOps and Infrastructure Engineer.
          <br />
          Former: Pleo, Funding Circle. Current: Legora.
        </p>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
          Embedded Engineering ApS | Copenhagen, Denmark
        </p>
        <div className="deck-hires">
          <div className="deck-hire">
            {IconBriefcase}
            <span className="deck-hire-role">Key Hire #1</span>
            <span className="deck-hire-title">BDR / Partnerships</span>
          </div>
          <div className="deck-hire">
            {IconMegaphone}
            <span className="deck-hire-role">Key Hire #2</span>
            <span className="deck-hire-title">Marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideBusinessModel() {
  return (
    <div className="deck-slide deck-slide--warm">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Business Model</h2>
        <p className="deck-slide-body" style={{ marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
          Simple pricing that replaces the hidden costs of Big Tech wallets.
        </p>
        <div className="deck-slide-split" style={{ gap: "4%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="deck-price-hero" style={{ width: "100%", textAlign: "center" }}>
              <div className="deck-price-row">
                <span className="deck-slide-stat">&euro;10</span>
                <span className="deck-price-period">/year</span>
              </div>
              <p className="deck-slide-body">
                Privacy you can trust, funded by users who value it.
              </p>
            </div>
          </div>
          <div>
            <div className="deck-stat-card" style={{ marginBottom: "clamp(6px, 1vw, 12px)" }}>
              <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 4px)" }}>How Incumbents Make Money</p>
              <p className="deck-slide-body">&bull; Apple Pay: charges banks 0.15% per credit tap (~$2.7B/yr)</p>
              <p className="deck-slide-body">&bull; Google Wallet: $0 fees &mdash; monetizes your data through ads</p>
              <p className="deck-slide-body">&bull; Walt: &euro;10/year from you. No bank fees. No data. Ever.</p>
            </div>
            <div className="deck-stat-card">
              <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 4px)" }}>Why Subscription?</p>
              <p className="deck-slide-body">Aligns incentives with users. Straightforward relationship between customer and company.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTraction() {
  return (
    <div className="deck-slide deck-slide--light">
      <div className="deck-slide-inner">
        <h2 className="deck-slide-heading">Traction &amp; Roadmap</h2>
        <div className="deck-slide-split" style={{ gap: "4%", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", gap: "clamp(4px, 0.6vw, 10px)", marginBottom: "clamp(8px, 1.5vw, 24px)" }}>
              <div className="deck-stat-card" style={{ flex: 1 }}>
                <p style={{ fontSize: "clamp(6px, 0.6vw, 10px)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 clamp(2px, 0.3vw, 4px)" }}>H2 2025</p>
                <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 4px)" }}>Foundation</p>
                <p className="deck-slide-body">Waitlist live. Paymentology partnership. Android app ready for card loading.</p>
              </div>
              <div className="deck-stat-card" style={{ flex: 1 }}>
                <p style={{ fontSize: "clamp(6px, 0.6vw, 10px)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 clamp(2px, 0.3vw, 4px)" }}>Q1 2026</p>
                <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 4px)" }}>Partnerships</p>
                <p className="deck-slide-body">First bank contract. Begin iOS development leveraging EU NFC access mandate.</p>
              </div>
              <div className="deck-stat-card" style={{ flex: 1 }}>
                <p style={{ fontSize: "clamp(6px, 0.6vw, 10px)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 clamp(2px, 0.3vw, 4px)" }}>Q2 2026</p>
                <p className="deck-stat-footer" style={{ marginBottom: "clamp(2px, 0.3vw, 4px)" }}>Launch</p>
                <p className="deck-slide-body">First cards loaded. First transactions processed. Geographic expansion begins.</p>
              </div>
            </div>
            <div className="deck-stat-card">
              <p className="deck-stat-footer" style={{ marginBottom: "clamp(4px, 0.5vw, 8px)" }}>Current Progress</p>
              <div className="deck-traction-list">
                <div className="deck-traction-item">{IconCheckCircle}<span>Paymentology partnership for aggregator</span></div>
                <div className="deck-traction-item">{IconCheckCircle}<span>Android application ready for beta</span></div>
                <div className="deck-traction-item">{IconCheckCircle}<span>Public website and signup list</span></div>
              </div>
            </div>
          </div>
          <div style={{
            background: "var(--orange-primary)",
            borderRadius: "clamp(6px, 0.8vw, 16px)",
            padding: "clamp(8px, 1.5vw, 24px) clamp(12px, 2vw, 32px)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <p style={{
              fontSize: "clamp(10px, 1.2vw, 20px)",
              fontWeight: 700,
              color: "var(--text-dark)",
              margin: "0 0 clamp(4px, 0.5vw, 8px)"
            }}>
              Key Challenges Ahead
            </p>
            <p style={{ fontSize: "clamp(8px, 0.9vw, 15px)", color: "var(--text-dark)", margin: "0 0 clamp(2px, 0.3vw, 4px)", lineHeight: 1.5 }}>&bull; First bank partnership</p>
            <p style={{ fontSize: "clamp(8px, 0.9vw, 15px)", color: "var(--text-dark)", margin: "0 0 clamp(2px, 0.3vw, 4px)", lineHeight: 1.5 }}>&bull; Legal signoff from Visa and Mastercard</p>
            <p style={{ fontSize: "clamp(8px, 0.9vw, 15px)", color: "var(--text-dark)", margin: "0 0 clamp(2px, 0.3vw, 4px)", lineHeight: 1.5 }}>&bull; First card load onto Walt</p>
            <p style={{ fontSize: "clamp(8px, 0.9vw, 15px)", color: "var(--text-dark)", margin: 0, lineHeight: 1.5 }}>&bull; iOS NFC integration (EU markets first)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTheAsk() {
  return (
    <div className="deck-slide deck-slide--warm">
      <div className="deck-slide-inner deck-slide-split">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            background: "var(--orange-primary)",
            borderRadius: "clamp(6px, 0.8vw, 16px)",
            padding: "clamp(16px, 3vw, 48px)",
            textAlign: "center",
            width: "100%"
          }}>
            <p style={{
              fontSize: "clamp(7px, 0.7vw, 12px)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dark)",
              margin: "0 0 clamp(4px, 0.5vw, 8px)"
            }}>
              Pre-Seed Round
            </p>
            <p style={{
              fontSize: "clamp(28px, 4.5vw, 72px)",
              fontWeight: 900,
              color: "var(--text-dark)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              margin: "0 0 clamp(4px, 0.5vw, 8px)"
            }}>
              $500K
            </p>
            <div className="deck-slide-divider" style={{ margin: "clamp(4px, 0.5vw, 8px) auto" }} />
            <p style={{
              fontSize: "clamp(9px, 1vw, 16px)",
              color: "var(--text-dark)",
              margin: 0
            }}>
              18 months runway
            </p>
          </div>
        </div>
        <div>
          <h2 className="deck-slide-heading">The Ask</h2>
          <div className="deck-stat-card">
            <p className="deck-stat-footer" style={{ marginBottom: "clamp(6px, 1vw, 12px)" }}>Use of Funds</p>
            {[
              { label: "Business Development Hire", pct: "50%" },
              { label: "Aggregator Fees", pct: "25%" },
              { label: "Founder Salary", pct: "15%" },
              { label: "Marketing", pct: "10%" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "clamp(4px, 0.5vw, 8px)" }}>
                <p className="deck-slide-body">{item.label}</p>
                <p className="deck-stat-footer">{item.pct}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideClosing() {
  return (
    <div className="deck-slide deck-slide--accent">
      <div className="deck-slide-inner deck-slide-center">
        <h1 className="deck-slide-logo">WALT</h1>
        <div className="deck-slide-divider" />
        <blockquote className="deck-closing-quote">
          &ldquo;Transaction data is sacred.&rdquo;
        </blockquote>
        <p className="deck-slide-body" style={{ marginTop: "clamp(16px, 3vw, 48px)" }}>
          Cole Bittel, Founder
        </p>
        <p className="deck-slide-body">cole@walt.is</p>
        <p className="deck-slide-body">walt.is</p>
        <p className="deck-slide-body" style={{ marginTop: "clamp(8px, 1.5vw, 24px)", opacity: 0.6 }}>
          Embedded Engineering ApS | Copenhagen, Denmark
        </p>
      </div>
    </div>
  );
}

/* ─── Slide Array ──────────────────────────────────────────────────────────── */

const SLIDES = [
  { title: "Walt", render: SlideTitle },
  { title: "The Problem", render: SlideProblem },
  { title: "No Alternatives Exist", render: SlideNoAlternatives },
  { title: "The Solution", render: SlideSolution },
  { title: "Product", render: SlideProduct },
  { title: "Why Now?", render: SlideWhyNow },
  { title: "Market Size", render: SlideMarketSize },
  { title: "Team", render: SlideTeam },
  { title: "Business Model", render: SlideBusinessModel },
  { title: "Traction & Roadmap", render: SlideTraction },
  { title: "The Ask", render: SlideTheAsk },
  { title: "Walt", render: SlideClosing },
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function Pitch() {
  const [mode, setMode] = useState("grid");
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(
    () => setCurrentSlide((i) => Math.min(i + 1, SLIDES.length - 1)),
    []
  );
  const goPrev = useCallback(
    () => setCurrentSlide((i) => Math.max(i - 1, 0)),
    []
  );
  const exitPresentation = useCallback(() => setMode("grid"), []);

  const enterPresentation = useCallback((index) => {
    setCurrentSlide(index);
    setMode("present");
  }, []);

  useEffect(() => {
    if (mode !== "present") return;
    const handleKey = (e) => {
      if (e.key === "Escape") exitPresentation();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [mode, exitPresentation, goNext, goPrev]);

  const SlideComponent = SLIDES[currentSlide]?.render;

  return (
    <>
      <Head>
        <title>Walt Pitch Deck - Investment & Business Overview</title>
        <meta
          name="description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet technology, roadmap, and business model for Android and iOS tap-to-pay."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://walt.is/pitch" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walt.is/pitch" />
        <meta property="og:title" content="Walt Pitch Deck" />
        <meta
          property="og:description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
        />
        <meta property="og:image" content="https://walt.is/pitch/slide-01.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://walt.is/pitch" />
        <meta property="twitter:title" content="Walt Pitch Deck" />
        <meta
          property="twitter:description"
          content="Review Walt's pitch deck covering market opportunity, privacy-first mobile wallet, and business model."
        />
        <meta property="twitter:image" content="https://walt.is/pitch/slide-01.jpg" />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Walt Pitch Deck",
              "description": "Walt's comprehensive pitch deck for investors",
              "url": "https://walt.is/pitch",
              "publisher": {
                "@type": "Organization",
                "name": "Walt",
                "url": "https://walt.is"
              }
            })
          }}
        />
      </Head>

      <div className="deck-page">
        <section className="hero-section">
          <header className="site-header">
            <Link href="/" className="site-logo">
              Walt
            </Link>
          </header>

          <div className="deck-hero-card">
            <h1>Pitch Deck</h1>
            <p>
              A comprehensive overview of Walt&rsquo;s mission to bring privacy-first mobile payments to Android and iOS.
              Review our market opportunity, technology approach, roadmap, and business model.
            </p>
            <div className="pitch-downloads">
              <button
                className="deck-present-button"
                onClick={() => enterPresentation(0)}
              >
                Start Presentation
              </button>
              <a
                href="/pitch/pitch-deck.pdf"
                className="pitch-download-button outline"
                download="Walt-Pitch-Deck.pdf"
              >
                Download PDF
              </a>
              <a
                href="/pitch/walt-pitch.pptx"
                className="pitch-download-button outline"
                download="Walt-Pitch.pptx"
              >
                Download PowerPoint
              </a>
              <a
                href="/pitch/walt-pitch.key"
                className="pitch-download-button outline"
                download="Walt-Pitch.key"
              >
                Download Keynote
              </a>
              <Link href="/pitch-deck" className="pitch-download-button orange">
                5-Minute Version
              </Link>
            </div>
          </div>
        </section>

        <section className="deck-slides-section">
          <div className="deck-grid">
            {SLIDES.map((slide, index) => (
              <button
                key={index}
                className="deck-grid-item"
                onClick={() => enterPresentation(index)}
                aria-label={`View slide ${index + 1}: ${slide.title}`}
              >
                <div className="deck-slide-number">{index + 1}</div>
                <slide.render />
              </button>
            ))}
          </div>
        </section>

        {mode === "present" && (
          <div className="deck-presentation" onClick={exitPresentation}>
            <button
              className="deck-pres-close"
              onClick={exitPresentation}
              aria-label="Exit presentation"
            >
              &times;
            </button>
            {currentSlide > 0 && (
              <button
                className="deck-pres-arrow deck-pres-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
            )}
            <div
              className="deck-pres-content"
              onClick={(e) => e.stopPropagation()}
            >
              <SlideComponent />
              <div className="deck-pres-counter">
                {currentSlide + 1} / {SLIDES.length}
              </div>
            </div>
            {currentSlide < SLIDES.length - 1 && (
              <button
                className="deck-pres-arrow deck-pres-next"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next slide"
              >
                &#8250;
              </button>
            )}
            <div className="deck-pres-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`deck-pres-dot${i === currentSlide ? " active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <Footer variant="pitch" />
      </div>
    </>
  );
}
