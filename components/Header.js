import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo">
        Walt
      </Link>
    </header>
  );
}
