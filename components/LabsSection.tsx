import { upcomingProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function LabsSection() {
  if (upcomingProducts.length === 0) return null;

  return (
    <section id="labs" className="scroll-mt-24 relative">
      <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-black/10 bg-white/60 p-8 sm:p-10 dark:border-white/10 dark:bg-white/[0.03]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
        >
          <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-gradient-to-br from-amber-300 to-pink-400 opacity-30 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-400 opacity-25 blur-3xl" />
        </div>

        <div className="relative">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="flex items-center gap-3 text-3xl sm:text-4xl font-black tracking-tight">
                <span className="text-4xl" aria-hidden>
                  🧪
                </span>
                In the Labs
              </h2>
              <p className="mt-2 max-w-xl text-base text-black/60 dark:text-white/60">
                What&apos;s cooking next. Some of these are weeks out, some are
                months — all of them are being built.
              </p>
            </div>
            <span className="text-sm font-semibold text-black/40 dark:text-white/40">
              {upcomingProducts.length}{" "}
              {upcomingProducts.length === 1 ? "project" : "projects"}
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
