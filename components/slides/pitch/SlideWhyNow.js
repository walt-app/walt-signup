export default function SlideWhyNow() {
  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Why Now?</h2>
        <div className="ps-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <p className="ps-stat" style={{ fontSize: "clamp(28px, 4.5vw, 72px)", marginBottom: "clamp(6px, 0.8vw, 14px)" }}>
            July 2024
          </p>
          <p className="ps-lead" style={{ maxWidth: "780px" }}>
            EU&rsquo;s EUDI wallet mandate forced Apple and Google to open their NFC APIs to third-party wallets.
          </p>
          <p style={{ maxWidth: "780px", textAlign: "center", fontSize: "clamp(11px, 1.3vw, 22px)", fontWeight: 400, color: "#555", margin: 0 }}>
            January 2025: Apple and Google comply with mandate and expose APIs
          </p>
        </div>
        <div className="ps-src">
          Sources: <a href="#">European Commission, Case AT.40452</a>, <a href="#">Regulation (EU) 2024/1183</a>
        </div>
      </div>
    </div>
  );
}
