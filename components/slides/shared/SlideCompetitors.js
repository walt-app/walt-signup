import { Fragment } from "react";

export default function SlideCompetitors() {
  const rows = [
    { label: "NFC tap-to-pay is core product", walt: "check", wero: "", vipps: "" },
    { label: "NFC tap-to-pay live today", walt: "", wero: "", vipps: "check-limited" },
    { label: "Private, no data collection", walt: "check", wero: "", vipps: "" },
    { label: "User base", walt: "0", wero: "50M", vipps: "12.5M" },
    { label: "Revenue model", walt: "\u20AC10/yr subscription", wero: "Merchant pays fee", vipps: "Merchant pays fee" },
    { label: "Geographic focus", walt: "Europe", wero: "DE, FR, BE", vipps: "Nordics" },
  ];

  const Check = ({ orange }) => (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "clamp(22px, 2.4vw, 38px)",
      height: "clamp(22px, 2.4vw, 38px)",
      borderRadius: "50%",
      background: orange ? "var(--orange-primary)" : "#151515",
      flexShrink: 0,
    }}>
      <svg width="55%" height="55%" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5L6.5 12L13 4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const Dash = () => (
    <span style={{
      display: "inline-block",
      width: "clamp(14px, 1.4vw, 22px)",
      height: "2px",
      background: "#ccc",
      borderRadius: "1px",
    }} />
  );

  const renderCell = (value, isWalt) => {
    if (value === "check") return <Check orange={isWalt} />;
    if (value === "check-limited") {
      return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "clamp(4px, 0.4vw, 8px)" }}>
          <Check orange={false} />
          <span style={{
            fontSize: "clamp(7px, 0.75vw, 12px)",
            fontWeight: 500,
            color: "#999",
            letterSpacing: "0.02em",
          }}>Limited</span>
        </span>
      );
    }
    if (value === "") return <Dash />;
    return (
      <span style={{
        fontSize: "clamp(9px, 1vw, 16px)",
        fontWeight: isWalt ? 600 : 400,
        color: isWalt ? "#151515" : "#555",
      }}>{value}</span>
    );
  };

  return (
    <div className="ps">
      <div className="ps-pad">
        <h2 className="ps-h1">Competitors</h2>
        <p className="ps-lead" style={{ marginBottom: "clamp(8px, 1.2vw, 20px)" }}>
          Competitors offering tap-to-pay as a secondary feature
        </p>
        <div className="ps-content" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2.4fr 1fr 1fr 1fr",
            width: "100%",
          }}>
            {/* Header row */}
            <div style={{ padding: "clamp(10px, 1.4vw, 24px) clamp(12px, 1.6vw, 28px)" }} />
            {["Walt", "Wero", "Vipps"].map((name) => (
              <div key={name} style={{
                padding: "clamp(10px, 1.4vw, 24px) clamp(8px, 1vw, 18px)",
                textAlign: "center",
                fontSize: "clamp(12px, 1.4vw, 24px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: name === "Walt" ? "var(--orange-primary)" : "#151515",
                borderBottom: name === "Walt" ? "3px solid var(--orange-primary)" : "1px solid #ddd",
                background: name === "Walt" ? "rgba(255, 72, 0, 0.04)" : "transparent",
              }}>{name}</div>
            ))}

            {/* Data rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const border = isLast ? "none" : "1px solid #eee";
              return (
                <Fragment key={row.label}>
                  <div style={{
                    padding: "clamp(10px, 1.2vw, 20px) clamp(12px, 1.6vw, 28px)",
                    fontSize: "clamp(9px, 1.05vw, 17px)",
                    fontWeight: 500,
                    color: "#333",
                    borderBottom: border,
                    display: "flex",
                    alignItems: "center",
                  }}>{row.label}</div>
                  {[row.walt, row.wero, row.vipps].map((val, j) => (
                    <div key={j} style={{
                      padding: "clamp(10px, 1.2vw, 20px) clamp(8px, 1vw, 18px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: border,
                      background: j === 0 ? "rgba(255, 72, 0, 0.04)" : "transparent",
                    }}>
                      {renderCell(val, j === 0)}
                    </div>
                  ))}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
