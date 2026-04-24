const PORTFOLIO_URL = "https://james-hankins.com";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-rose-500 p-8 sm:p-12 text-white shadow-xl"
    >
      <div
        aria-hidden
        className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-black/20 blur-3xl"
      />

      <div className="relative max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
          About
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
          Hi, I&apos;m James. I build a lot of things.
        </h2>
        <p className="mt-5 text-white/85 text-lg leading-relaxed">
          JBDev is the umbrella for the products I ship — some tools, some games, some places for my friends and me to keep score. Every product on this page is live and in active development.
        </p>
        <p className="mt-3 text-white/75 leading-relaxed">
          Want to see the rest? My personal portfolio has the story, the stack, and the rest of the work.
        </p>

        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black shadow-lg hover:bg-white/90 transition-colors"
        >
          Visit the portfolio
          <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
