import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ghee.jpg"
          alt="Golden desi ghee being poured"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Decorative Element */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Since 1952
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-4">
            Crafted by
            <span className="block text-primary">Tradition</span>
          </h1>

          {/* Hindi Tagline */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-secondary mb-6">
            देसीपन हर बूंद में
          </p>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Pure A2 Desi Ghee made using the ancient Bilona method. Every drop 
            carries the richness of tradition and the purity of our ancestors&apos; wisdom.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-lg"
            >
              <Link href="/products">
                Shop Our Ghee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 rounded-lg"
            >
              <Link href="/about">
                Our Story
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary">100%</span>
              <span className="text-sm text-muted-foreground">Pure A2 Milk</span>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary">Bilona</span>
              <span className="text-sm text-muted-foreground">Hand Churned</span>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary">70+</span>
              <span className="text-sm text-muted-foreground">Years Legacy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
