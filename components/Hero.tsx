import { allProducts, categories, upcomingProducts } from "@/data/products";

export function Hero() {
  const liveCount = allProducts.filter((p) => p.status === "live").length;
  const labsCount = upcomingProducts.length;
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 opacity-30 blur-3xl dark:opacity-20" />
        <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-25 blur-3xl dark:opacity-15" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-gradient-to-br from-amber-300 to-orange-400 opacity-20 blur-3xl dark:opacity-10" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {liveCount} products live
          {labsCount > 0 && (
            <span className="ml-1 text-black/40 dark:text-white/40">
              · {labsCount} in the labs
            </span>
          )}
        </div>

        <h1 className="mt-6 text-5xl sm:text-7xl font-black tracking-tight leading-[1.05]">
          One builder.
          <br />
          <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            A whole shelf of products.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-black/70 leading-relaxed dark:text-white/70">
          The JBDev hub. Every live platform I&apos;ve shipped — games, leagues, trackers, tools — in one place. Public roadmaps and backlogs included.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-black/80 backdrop-blur hover:border-black/30 hover:bg-white transition-all dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              <span className="mr-1.5">{c.emoji}</span>
              {c.title}
              <span className="ml-2 text-black/40 group-hover:text-black/70 dark:text-white/40 dark:group-hover:text-white/70">
                {c.products.length}
              </span>
            </a>
          ))}
          {labsCount > 0 && (
            <a
              href="#labs"
              className="group rounded-full border border-dashed border-black/20 bg-white/70 px-4 py-2 text-sm font-semibold text-black/80 backdrop-blur hover:border-black/50 hover:bg-white transition-all dark:border-white/20 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/50 dark:hover:bg-white/10"
            >
              <span className="mr-1.5">🧪</span>
              In the Labs
              <span className="ml-2 text-black/40 group-hover:text-black/70 dark:text-white/40 dark:group-hover:text-white/70">
                {labsCount}
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
