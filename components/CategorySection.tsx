import type { Category } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function CategorySection({ category }: { category: Category }) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="flex items-center gap-3 text-3xl sm:text-4xl font-black tracking-tight">
            <span className="text-4xl" aria-hidden>
              {category.emoji}
            </span>
            {category.title}
          </h2>
          <p className="mt-2 max-w-xl text-base text-black/60 dark:text-white/60">
            {category.blurb}
          </p>
        </div>
        <span className="text-sm font-semibold text-black/40 dark:text-white/40">
          {category.products.length}{" "}
          {category.products.length === 1 ? "product" : "products"}
        </span>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
