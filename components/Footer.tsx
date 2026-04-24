export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white/50 dark:border-white/5 dark:bg-black/50">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-black/60 dark:text-white/60">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500 text-white font-black text-[10px]">
            JB
          </span>
          <span className="font-semibold text-black/80 dark:text-white/80">
            JBDev
          </span>
          <span>— © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://james-hankins.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors dark:hover:text-white"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/JamesHankinsDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors dark:hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
