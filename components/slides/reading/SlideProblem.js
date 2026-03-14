import Ref from "../shared/Ref";

export default function SlideProblem() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <p className="ps-lead">
          Tap-to-pay in Europe lives with Google and Apple
        </p>
        <div className="ps-content">
          <div className="ps-split" style={{ flex: "none" }}>
            <div className="ps-stack">
              <div>
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>200&ndash;250M</p>
                <p className="ps-body">Europeans use Apple Pay or Google Wallet for in-store purchases<Ref n={1} /></p>
              </div>
              <div>
                <p className="ps-stat" style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}>&euro;700B+</p>
                <p className="ps-body">in mobile wallet payments at European point-of-sale terminals (2024)<Ref n={2} /></p>
              </div>
              <p className="ps-body" style={{ color: "#7f7f7f", marginTop: "clamp(4px, 0.5vw, 8px)" }}>
                &lt;0.4% combined market share for everyone else.<Ref n={3} /> No legitimate tap-to-pay alternative exists for either iPhone or Android.
              </p>
            </div>
            <div className="ps-stack">
              <div className="ps-card">
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Apple Pay</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">Charges European banks ~0.05% per transaction<Ref n={4} /></li>
                  <li className="ps-bullet">Extracts &euro;300&ndash;500M annually from European transactions<Ref n={5} /></li>
                </ul>
              </div>
              <div className="ps-card">
                <p className="ps-card-h" style={{ color: "var(--orange-primary)" }}>Google Wallet</p>
                <ul className="ps-bullets">
                  <li className="ps-bullet">Harvests every transaction for ad profiles and selling to 3rd parties<Ref n={6} /></li>
                  <li className="ps-bullet">Estimated &euro;1B+ annually in ad value from European payment data<Ref n={7} /><Ref n={8} /></li>
                </ul>
              </div>
              <p className="ps-body" style={{ fontWeight: 600, color: "#151515", marginTop: "clamp(4px, 0.5vw, 8px)" }}>
                The only alternative is to go back to physical cards or cash. For Europeans who care about privacy, there is no tap-to-pay option at all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
