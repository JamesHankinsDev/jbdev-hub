import { About } from "@/components/About";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LabsSection } from "@/components/LabsSection";
import { categories } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="products" className="mx-auto max-w-6xl px-6 space-y-20 pb-20">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
          <LabsSection />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}
