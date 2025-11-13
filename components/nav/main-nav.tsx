import Link from "next/link";

export function MainNav() {
  return (
    <nav className="border-b border-slate-800 bg-brand-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-brand-teal">
          Nikia Renee HQ
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="text-slate-300 hover:text-brand-teal transition">
            Home
          </Link>
          <Link href="/adult" className="text-slate-300 hover:text-brand-pink transition">
            18+
          </Link>
        </div>
      </div>
    </nav>
  );
}
