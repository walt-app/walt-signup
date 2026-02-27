export default function Footer({ variant = "default" }) {
  const footerLinks = variant === "motivation"
    ? [
        { label: "GitHub", href: "https://github.com/walt-app/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/walt-app/" },
        { label: "Home", href: "/" },
        { label: "Updates", href: "/updates" },
        { label: "Privacy", href: "/privacy" },
      ]
    : variant === "pitch"
    ? [
        { label: "GitHub", href: "https://github.com/walt-app/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/walt-app/" },
        { label: "Home", href: "/" },
        { label: "Motivation", href: "/motivation" },
        { label: "Updates", href: "/updates" },
        { label: "Privacy", href: "/privacy" },
      ]
    : variant === "updates"
    ? [
        { label: "GitHub", href: "https://github.com/walt-app/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/walt-app/" },
        { label: "Home", href: "/" },
        { label: "Motivation", href: "/motivation" },
        { label: "Privacy", href: "/privacy" },
      ]
    : variant === "privacy"
    ? [
        { label: "GitHub", href: "https://github.com/walt-app/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/walt-app/" },
        { label: "Home", href: "/" },
        { label: "Motivation", href: "/motivation" },
        { label: "Updates", href: "/updates" },
      ]
    : [
        { label: "GitHub", href: "https://github.com/walt-app/walt-architecture" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/walt-app/" },
        { label: "Motivation", href: "/motivation" },
        { label: "Pitch Deck", href: "/pitch" },
        { label: "Updates", href: "/updates" },
        { label: "Privacy", href: "/privacy" },
      ];

  const footerClass = variant === "motivation" || variant === "pitch" || variant === "updates" || variant === "privacy"
    ? `site-footer ${variant}-footer-override`
    : "site-footer";

  return (
    <footer className={footerClass}>
      <div className="footer-shell">
        <div className="footer-meta">
          <span className="footer-logo">Walt</span>
          <span className="footer-credit">
            Private tap-to-pay
          </span>
          <span className="footer-mark">© 2026 Walt · Embedded Engineering ApS · Copenhagen</span>
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