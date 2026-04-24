import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const PORTFOLIO_URL = "https://james-hankins.com";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-black/5 dark:bg-black/60 dark:border-white/5">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500 text-white font-black text-sm shadow-md shadow-indigo-500/20 transition-transform group-hover:rotate-6">
            JB
          </span>
          <span className="font-black tracking-tight text-lg">
            JBDev
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
          <a
            href="#products"
            className="hidden sm:inline text-black/70 hover:text-black transition-colors dark:text-white/70 dark:hover:text-white"
          >
            Products
          </a>
          <a
            href="#about"
            className="hidden sm:inline text-black/70 hover:text-black transition-colors dark:text-white/70 dark:hover:text-white"
          >
            About
          </a>
          <ThemeToggle />
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 bg-black text-white hover:bg-black/80 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Portfolio ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
