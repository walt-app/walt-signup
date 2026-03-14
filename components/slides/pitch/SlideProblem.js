export default function SlideProblem() {
  const maxR = 150;
  const maxUsers = 150;
  const scaleR = (users) => Math.round(maxR * Math.sqrt(users / maxUsers));

  const bubbles = [
    { name: "Apple Pay", users: "150M", desc: "Charges banks ~0.05% per transaction", cx: 280, cy: 200, r: scaleR(150), stroke: "#151515", strokeWidth: 2.5 },
    { name: "Google Wallet", users: "80M", desc: "Harvests every transaction", cx: 620, cy: 210, r: scaleR(80), stroke: "#151515", strokeWidth: 2.5 },
    { name: "Everyone else", users: "<0.4%", desc: "combined market share", cx: 870, cy: 200, r: scaleR(1), stroke: "#d0d0d0", strokeWidth: 1.5 },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Problem</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(6px, 0.8vw, 14px)" }}>
          Tap-to-pay in Europe lives with Google and Apple
        </p>
        <div className="ps-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 1060 400" width="100%" style={{ display: "block" }}>
            <g fontFamily="'Geist', -apple-system, BlinkMacSystemFont, sans-serif">
              {bubbles.slice(0, 2).map((b) => (
                <g key={b.name}>
                  <circle cx={b.cx} cy={b.cy} r={b.r} fill="#f0f0f0" stroke={b.stroke} strokeWidth={b.strokeWidth} />
                  <text x={b.cx} y={b.cy - 28} textAnchor="middle" fontSize="14" fontWeight="700" fill="#151515">{b.name}</text>
                  <text x={b.cx} y={b.cy + 2} textAnchor="middle" fontSize="28" fontWeight="900" fill="#151515">{b.users}</text>
                  <text x={b.cx} y={b.cy + 24} textAnchor="middle" fontSize="10" fill="#7f7f7f">{b.desc}</text>
                </g>
              ))}

              {/* Everyone else — tiny bubble with arrow and label below */}
              {(() => {
                const b = bubbles[2];
                return (
                  <g>
                    <circle cx={b.cx} cy={b.cy} r={b.r} fill="#f0f0f0" stroke={b.stroke} strokeWidth={b.strokeWidth} />
                    <line x1={b.cx} y1={b.cy + b.r + 30} x2={b.cx} y2={b.cy + b.r + 6} stroke="#aaa" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                    <text x={b.cx} y={b.cy + b.r + 46} textAnchor="middle" fontSize="14" fontWeight="700" fill="#151515">{b.name}</text>
                    <text x={b.cx} y={b.cy + b.r + 66} textAnchor="middle" fontSize="20" fontWeight="900" fill="#151515">{b.users}</text>
                    <text x={b.cx} y={b.cy + b.r + 82} textAnchor="middle" fontSize="10" fill="#7f7f7f">{b.desc}</text>
                  </g>
                );
              })()}

              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#aaa" />
                </marker>
              </defs>
            </g>
          </svg>
        </div>
        <div className="ps-src">
          Sources: <a href="#">Flagship Advisory Partners</a>, <a href="#">Worldpay</a>, <a href="#">CoinLaw</a>, <a href="#">StatCounter</a>
        </div>
      </div>
    </div>
  );
}
