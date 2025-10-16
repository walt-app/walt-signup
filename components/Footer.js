export default function Footer({ variant = "default" }) {
  const footerLinks = variant === "whitepaper"
    ? [
        { label: "GitHub", href: "https://github.com/Walt-App/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/bittelc/" },
        { label: "Home", href: "/" },
      ]
    : [
        { label: "GitHub", href: "https://github.com/Walt-App/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/bittelc/" },
        { label: "Whitepaper", href: "/whitepaper" },
      ];

  const footerClass = variant === "whitepaper"
    ? "site-footer whitepaper-footer-override"
    : "site-footer";

  return (
    <footer className={footerClass}>
      <div className="footer-shell">
        <div className="footer-meta">
          <span className="footer-mark">© 2025 Walt</span>
          <span className="footer-credit">
            Developed by Embedded Engineering ApS
          </span>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link"
              target={link.href.startsWith('/') ? undefined : "_blank"}
              rel={link.href.startsWith('/') ? undefined : "noopener noreferrer"}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}