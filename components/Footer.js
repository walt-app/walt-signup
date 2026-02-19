export default function Footer({ variant = "default" }) {
  const footerLinks = variant === "motivation"
    ? [
        { label: "GitHub", href: "https://github.com/walt-app/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/walt-app/" },
        { label: "Home", href: "/" },
      ]
    : variant === "pitch"
    ? [
        { label: "GitHub", href: "https://github.com/walt-app/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/walt-app/" },
        { label: "Home", href: "/" },
        { label: "Motivation", href: "/motivation" },
      ]
    : [
        { label: "GitHub", href: "https://github.com/walt-app/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/walt-app/" },
        { label: "Motivation", href: "/motivation" },
        { label: "Pitch Deck", href: "/pitch" },
      ];

  const footerClass = variant === "motivation" || variant === "pitch"
    ? `site-footer ${variant}-footer-override`
    : "site-footer";

  return (
    <footer className={footerClass}>
      <div className="footer-shell">
        <div className="footer-meta">
          <span className="footer-mark">© 2026 Walt</span>
          <span className="footer-credit">
            Developed by Embedded Engineering ApS
          </span>
          <span className="footer-credit">
            Built with ♥ in Copenhagen
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