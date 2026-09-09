import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>

      <Link href="/my-career">
        My-Career
      </Link>

      <Link href="/feedback">
        Feedback
      </Link>
    </nav>
  );
}