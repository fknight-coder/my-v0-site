import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "A2 Desi Ghee",
    subtitle: "Premium Collection",
    description: "Pure ghee from grass-fed A2 cows, handcrafted using traditional Bilona method.",
    price: 899,
    originalPrice: 999,
    weight: "500g",
    rating: 4.9,
    reviews: 324,
    badge: "Bestseller",
    image: "/images/ghee-jar.jpg",
  },
  {
    id: 2,
    name: "Bilona Ghee",
    subtitle: "Artisan Series",
    description: "Wood-churned ghee made from curd, following the ancient Vedic process.",
    price: 1299,
    originalPrice: 1499,
    weight: "500g",
    rating: 4.8,
    reviews: 218,
    badge: "Traditional",
    image: "/images/ghee-jar.jpg",
  },
  {
    id: 3,
    name: "Gir Cow Ghee",
    subtitle: "Sacred Origin",
    description: "Exclusively from indigenous Gir cows of Gujarat, known for supreme quality.",
    price: 1599,
    originalPrice: 1799,
    weight: "500g",
    rating: 5.0,
    reviews: 156,
    badge: "Premium",
    image: "/images/ghee-jar.jpg",
  },
]

export function ProductsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Our Collection
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Pure Desi Ghee
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each jar is a testament to our commitment to purity and tradition. 
            Choose from our carefully curated collection.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group bg-card border-border hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-xs text-primary font-medium tracking-wider uppercase mb-1">
                  {product.subtitle}
                </p>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-secondary">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      / {product.weight}
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
