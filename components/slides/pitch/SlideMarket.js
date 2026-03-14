export default function SlideMarket() {
  const maxR = 110;
  const maxUsers = 101;
  const scaleR = (users) => Math.round(maxR * Math.sqrt(users / maxUsers));

  const bubbles = [
    { name: "Proton", users: "100M+", userDesc: "accounts", category: "EMAIL / CLOUD", cx: 135, cy: 180, r: scaleR(100) },
    { name: "Brave", users: "101M", userDesc: "MAU", category: "BROWSER", cx: 355, cy: 198, r: scaleR(101) },
    { name: "DuckDuckGo", users: "100M", userDesc: "daily searches", category: "SEARCH", cx: 555, cy: 170, r: scaleR(100) },
    { name: "Signal", users: "70M+", userDesc: "MAU", category: "MESSAGING", cx: 735, cy: 212, r: scaleR(70) },
  ];

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">The Market</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(6px, 0.8vw, 14px)" }}>
          Already established pay-for-privacy market
        </p>
        <div className="ps-content" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 1060 400" width="100%" style={{ display: "block" }}>
            <g fontFamily="'Geist', -apple-system, BlinkMacSystemFont, sans-serif">
              {bubbles.map((b) => (
                <g key={b.name}>
                  <circle cx={b.cx} cy={b.cy} r={b.r} fill="#f0f0f0" stroke="#ff4800" strokeWidth="2.5" />
                  <text x={b.cx} y={b.cy - 22} textAnchor="middle" fontSize="8" fontWeight="600" fill="#7f7f7f" letterSpacing="0.08em">{b.category}</text>
                  <text x={b.cx} y={b.cy - 4} textAnchor="middle" fontSize="14" fontWeight="700" fill="#151515">{b.name}</text>
                  <text x={b.cx} y={b.cy + 22} textAnchor="middle" fontSize="24" fontWeight="900" fill="#151515">{b.users}</text>
                  <text x={b.cx} y={b.cy + 37} textAnchor="middle" fontSize="10" fill="#7f7f7f">{b.userDesc}</text>
                </g>
              ))}

              <line x1="840" y1="25" x2="840" y2="395" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4 3" />

              {/* Subscription box */}
              <rect x="858" y="30" width="180" height="110" rx="10" fill="#ff4800" />
              <text x="948" y="58" textAnchor="middle" fontSize="8" fontWeight="600" fill="#151515" letterSpacing="0.1em">WALT SUBSCRIPTION</text>
              <text x="948" y="100" textAnchor="middle" fontSize="42" fontWeight="900" fill="#151515">&#x20AC;10</text>
              <text x="948" y="123" textAnchor="middle" fontSize="14" fill="#151515">/year</text>

              {/* Walt Year 1-2 */}
              <circle cx="875" cy="185" r={scaleR(0.5)} fill="#ff4800" opacity="0.5" />
              <text x="892" y="173" fontSize="8" fontWeight="600" fill="#7f7f7f" letterSpacing="0.06em">YEAR 1&#x2013;2 &#xB7; NORDIC FOCUS</text>
              <text x="892" y="189" fontSize="15" fontWeight="900" fill="#151515">100K&#x2013;500K users</text>
              <text x="892" y="203" fontSize="11" fontWeight="700" fill="#ff4800">&#x20AC;1&#x2013;5M ARR</text>

              {/* Walt Year 2-4 */}
              <circle cx="875" cy="255" r={scaleR(3)} fill="#ff4800" opacity="0.6" />
              <text x="898" y="243" fontSize="8" fontWeight="600" fill="#7f7f7f" letterSpacing="0.06em">YEAR 2&#x2013;4 &#xB7; EUROPE FOCUS</text>
              <text x="898" y="259" fontSize="15" fontWeight="900" fill="#151515">3M users</text>
              <text x="898" y="273" fontSize="11" fontWeight="700" fill="#ff4800">&#x20AC;30M ARR</text>

              {/* Walt Year 4-8 */}
              <circle cx="875" cy="330" r={scaleR(6)} fill="#ff4800" opacity="0.7" />
              <text x="910" y="318" fontSize="8" fontWeight="600" fill="#7f7f7f" letterSpacing="0.06em">YEAR 4&#x2013;8 &#xB7; US &#x26; ASIA FOCUS</text>
              <text x="910" y="334" fontSize="15" fontWeight="900" fill="#151515">6M users</text>
              <text x="910" y="348" fontSize="11" fontWeight="700" fill="#ff4800">&#x20AC;60M ARR</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
