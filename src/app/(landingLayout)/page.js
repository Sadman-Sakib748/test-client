import { BlogSection } from "@/components/BlogSection";
import { AboutSection } from "@/components/pages/AboutSection";
import { ProductsSection } from "@/components/pages/ProductsSection";
import { SeasonalOffer } from "@/components/pages/SeasonalOffer";
import { TestimonialsSection } from "@/components/pages/TestimonialsSection";


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div>
        <ProductsSection />
        <AboutSection />
      </div>
      {/* <SeasonalOffer /> */}
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
}
