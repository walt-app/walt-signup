import Ref from "../shared/Ref";

export default function SlideChallenges() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Challenges</h2>
        <p className="ps-lead">
          The infrastructure for third-party phone wallets is still being built
        </p>
        <div className="ps-content" style={{ gap: "clamp(16px, 2.2vw, 36px)" }}>
          {/* ── Concept: chain diagram + explanation ── */}
          <div>
            {/* Chain diagram — centered with connecting lines */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              marginBottom: "clamp(10px, 1.4vw, 22px)",
            }}>
              {/* Walt — ready */}
              <span style={{
                padding: "clamp(8px, 0.9vw, 16px) clamp(16px, 2vw, 36px)",
                background: "var(--orange-primary)",
                color: "#fff",
                borderRadius: "clamp(5px, 0.5vw, 10px)",
                fontSize: "clamp(9px, 1.1vw, 18px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>Walt</span>

              {/* Line connector */}
              <div style={{ width: "clamp(24px, 3.5vw, 56px)", height: "clamp(1.5px, 0.15vw, 2.5px)", background: "#d4d4d4", flexShrink: 0 }} />

              {/* Vertical stack — tokenization provider (gap), Visa/MC and Banks (in place) */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(4px, 0.5vw, 8px)",
                flexShrink: 0,
              }}>
                <span style={{
                  padding: "clamp(7px, 0.8vw, 14px) clamp(12px, 1.4vw, 24px)",
                  background: "transparent",
                  border: "clamp(1.5px, 0.15vw, 2.5px) dashed #bbb",
                  borderRadius: "clamp(5px, 0.5vw, 10px)",
                  color: "#999",
                  fontSize: "clamp(9px, 1.1vw, 18px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textAlign: "center",
                }}>Tokenization provider</span>
                <span style={{
                  padding: "clamp(8px, 0.9vw, 16px) clamp(12px, 1.4vw, 24px)",
                  background: "#151515",
                  color: "#fff",
                  borderRadius: "clamp(5px, 0.5vw, 10px)",
                  fontSize: "clamp(9px, 1.1vw, 18px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textAlign: "center",
                }}>Visa / Mastercard</span>
                <span style={{
                  padding: "clamp(8px, 0.9vw, 16px) clamp(12px, 1.4vw, 24px)",
                  background: "#151515",
                  color: "#fff",
                  borderRadius: "clamp(5px, 0.5vw, 10px)",
                  fontSize: "clamp(9px, 1.1vw, 18px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textAlign: "center",
                }}>Issuing banks</span>
              </div>

              {/* Line connector */}
              <div style={{ width: "clamp(24px, 3.5vw, 56px)", height: "clamp(1.5px, 0.15vw, 2.5px)", background: "#d4d4d4", flexShrink: 0 }} />

              {/* Revenue / Users — blocked destination */}
              <span style={{
                padding: "clamp(8px, 0.9vw, 16px) clamp(16px, 2vw, 36px)",
                background: "var(--orange-primary)",
                color: "#fff",
                borderRadius: "clamp(5px, 0.5vw, 10px)",
                fontSize: "clamp(9px, 1.1vw, 18px)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                opacity: 0.45,
                flexShrink: 0,
              }}>Revenue / Users</span>
            </div>
            <p className="ps-body" style={{ maxWidth: "88%" }}>
              To enable tap-to-pay, Walt needs a <strong style={{ color: "#151515" }}>tokenization provider</strong>: a company certified by Visa and Mastercard that converts card numbers into secure payment tokens, connecting a wallet to the banking system. The EU opened iPhone NFC to third parties in 2024, but no provider yet offers a production-ready SDK for independent phone wallets.
            </p>
          </div>

          {/* ── Three providers ── */}
          <div className="ps-cols-3">
            {/* IDEMIA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 0.7vw, 12px)" }}>
              <div>
                <p className="ps-card-title">IDEMIA</p>
                <p className="ps-label">Full SDK, enterprise only</p>
              </div>
              <p className="ps-body">
                World&rsquo;s largest independent token service provider. Launched Tap&nbsp;&amp;&nbsp;Pay SDKs for both iOS and Android.
              </p>
              <p className="ps-body" style={{ color: "var(--orange-primary)", fontWeight: 600 }}>
                Will not engage with early-stage startups.
              </p>
            </div>

            {/* Fidesmo */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(6px, 0.7vw, 12px)",
              borderLeft: "1.5px solid #e5e5e5",
              paddingLeft: "clamp(10px, 1.2vw, 20px)",
            }}>
              <div>
                <p className="ps-card-title">Fidesmo</p>
                <p className="ps-label">860+ banks, no phone SDK</p>
              </div>
              <p className="ps-body">
                Certified Token Requestor for Visa and Mastercard with pre-approved issuers across Europe, including key Nordic banks.
              </p>
              <p className="ps-body" style={{ color: "var(--orange-primary)", fontWeight: 600 }}>
                Wearables only.
              </p>
            </div>

            {/* Paymentology */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(6px, 0.7vw, 12px)",
              borderLeft: "1.5px solid #e5e5e5",
              paddingLeft: "clamp(10px, 1.2vw, 20px)",
            }}>
              <div>
                <p className="ps-card-title">Paymentology</p>
                <p className="ps-label">HCE SDK, not production-ready</p>
              </div>
              <p className="ps-body">
                Global card issuing processor. Subsidiary MeaWallet provides an HCE SDK and tokenization infrastructure.
              </p>
              <p className="ps-body" style={{ color: "var(--orange-primary)", fontWeight: 600 }}>
                Phone wallet SDK not yet production-ready for third-party tap-to-pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
