import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          Next<span>JS</span>
        </Link>
        <ul className="navbar-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
        </ul>
      </div>
    </nav>
  );
}