import Link from "next/link"
import { ArrowRight, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-background mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 lg:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                Experience the
                <span className="text-primary block">Ghevana Difference</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ready to bring the richness of traditional desi ghee to your kitchen? 
                Order now and taste the difference that 70 years of expertise makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                >
                  <Link href="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8"
                >
                  <Link href="/contact">
                    Find a Store
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat, 9am-6pm IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Visit Our Dairy</p>
                    <p className="text-muted-foreground">Village Kherla, Tehsil Bilaspur</p>
                    <p className="text-sm text-muted-foreground">Rajasthan, India - 331001</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Available on</p>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
                    Amazon
                  </span>
                  <span className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
                    Flipkart
                  </span>
                  <span className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
                    BigBasket
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
