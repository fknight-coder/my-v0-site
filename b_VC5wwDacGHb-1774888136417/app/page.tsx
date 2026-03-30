import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { ProductsSection } from "@/components/products-section"
import { RecipesSection } from "@/components/recipes-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <RecipesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
