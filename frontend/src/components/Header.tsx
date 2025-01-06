import Link from "next/link";

export default function Header() {
  return (
    <header className="headerSection">
      <h1>Checkpoint : frontend</h1>
      <Link href="/" className="headerLink">Countries</Link>
    </header>
  );
}
