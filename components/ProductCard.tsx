import type { Product } from "@/data/products";

const statusStyles: Record<Product["status"], string> = {
  live: "bg-emerald-500/15 text-emerald-700 ring-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-300 dark:ring-emerald-400/30",
  beta: "bg-amber-500/15 text-amber-700 ring-amber-500/30 dark:bg-amber-500/20 dark:text-amber-300 dark:ring-amber-400/30",
  soon: "bg-white/90 text-slate-800 ring-slate-900/10 dark:bg-slate-900/80 dark:text-slate-100 dark:ring-white/15",
};

const statusLabel: Record<Product["status"], string> = {
  live: "Live",
  beta: "Beta",
  soon: "Coming soon",
};

export function ProductCard({ product }: { product: Product }) {
  const isSoon = product.status === "soon";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30 ${
        isSoon ? "opacity-95" : "hover:-translate-y-1 hover:shadow-xl"
      }`}
    >
      <div className={`relative h-32 bg-gradient-to-br ${product.gradient}`}>
        {isSoon && (
          <div
            aria-hidden
            className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0_10px,rgba(255,255,255,0)_10px_20px)]"
          />
        )}
        <div className="absolute inset-0 flex items-end p-5">
          <span
            className={`text-5xl drop-shadow-sm ${isSoon ? "grayscale-[30%] opacity-90" : ""}`}
            aria-hidden
          >
            {product.emoji}
          </span>
        </div>
        <span
          className={`absolute top-4 right-4 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset backdrop-blur ${statusStyles[product.status]}`}
        >
          {statusLabel[product.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          {product.categoryLabel && (
            <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
              {product.categoryLabel}
            </p>
          )}
          <h3
            className={`text-xl font-black tracking-tight ${isSoon ? "text-black/80 dark:text-white/90" : "dark:text-white"}`}
          >
            {product.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-black/60 dark:text-white/60">
            {product.tagline}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
          {product.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {isSoon ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-white/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-white/50" />
              In the works
            </span>
          ) : (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full ${product.accent} px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity`}
            >
              Visit
              <span aria-hidden>↗</span>
            </a>
          )}
          {product.cannyUrl && (
            <a
              href={product.cannyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/80 hover:border-black/30 transition-colors dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/40 dark:hover:bg-white/10"
            >
              Roadmap
            </a>
          )}
          {product.linearUrl && (
            <a
              href={product.linearUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/80 hover:border-black/30 transition-colors dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/40 dark:hover:bg-white/10"
            >
              Backlog
            </a>
          )}
          {!isSoon && !product.cannyUrl && !product.linearUrl && (
            <span className="inline-flex items-center rounded-full px-3 py-2 text-xs font-medium text-black/40 dark:text-white/40">
              Public roadmap coming
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
