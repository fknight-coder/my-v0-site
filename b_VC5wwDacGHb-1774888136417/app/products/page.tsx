"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, ShoppingCart, Check, Minus, Plus, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "A2 Desi Ghee",
    subtitle: "Premium Collection",
    description: "Our signature ghee made from 100% A2 cow milk. The gold standard of purity with a rich, nutty aroma that elevates every dish.",
    longDescription: "Made using the traditional Bilona method, this ghee is churned from curd set in clay pots. The result is a ghee with superior taste, aroma, and nutritional profile. Perfect for daily cooking, religious ceremonies, and Ayurvedic practices.",
    variants: [
      { weight: "250g", price: 499, originalPrice: 549 },
      { weight: "500g", price: 899, originalPrice: 999 },
      { weight: "1kg", price: 1699, originalPrice: 1899 },
    ],
    rating: 4.9,
    reviews: 324,
    badge: "Bestseller",
    image: "/images/ghee-jar.jpg",
    features: ["100% A2 Milk", "Bilona Method", "No Additives", "12 Month Shelf Life"],
  },
  {
    id: 2,
    name: "Bilona Ghee",
    subtitle: "Artisan Series",
    description: "Wood-churned ghee following the ancient Vedic process. Each batch is a labor of love, taking 30+ hours to prepare.",
    longDescription: "Our artisan Bilona ghee is made in small batches using a traditional wooden churner. The curd is hand-churned at dawn, and the butter is slow-cooked over a wood fire. This method produces ghee with an incomparable depth of flavor.",
    variants: [
      { weight: "250g", price: 699, originalPrice: 799 },
      { weight: "500g", price: 1299, originalPrice: 1499 },
      { weight: "1kg", price: 2399, originalPrice: 2799 },
    ],
    rating: 4.8,
    reviews: 218,
    badge: "Traditional",
    image: "/images/ghee-jar.jpg",
    features: ["Wood-Churned", "Small Batch", "Vedic Process", "Handcrafted"],
  },
  {
    id: 3,
    name: "Gir Cow Ghee",
    subtitle: "Sacred Origin",
    description: "Exclusively from indigenous Gir cows of Gujarat. Known for its golden color and exceptional medicinal properties.",
    longDescription: "Gir cows are one of the most prized indigenous breeds, mentioned in ancient Ayurvedic texts. Their milk is naturally rich in A2 protein and has a higher fat content, resulting in ghee with superior nutritional value and a distinctive golden hue.",
    variants: [
      { weight: "250g", price: 899, originalPrice: 999 },
      { weight: "500g", price: 1599, originalPrice: 1799 },
      { weight: "1kg", price: 2999, originalPrice: 3399 },
    ],
    rating: 5.0,
    reviews: 156,
    badge: "Premium",
    image: "/images/ghee-jar.jpg",
    features: ["Pure Gir Cow", "Golden Color", "Ayurvedic Grade", "Limited Edition"],
  },
  {
    id: 4,
    name: "Sahiwal Cow Ghee",
    subtitle: "Heritage Breed",
    description: "From the prized Sahiwal breed of Punjab. Rich, aromatic ghee with a creamy texture and mild sweetness.",
    longDescription: "Sahiwal cows are known for their high-quality A2 milk with excellent fat content. The ghee has a distinctively creamy texture and a subtle sweetness that makes it perfect for desserts and traditional sweets.",
    variants: [
      { weight: "250g", price: 749, originalPrice: 849 },
      { weight: "500g", price: 1399, originalPrice: 1599 },
      { weight: "1kg", price: 2599, originalPrice: 2999 },
    ],
    rating: 4.7,
    reviews: 89,
    badge: "New",
    image: "/images/ghee-jar.jpg",
    features: ["Sahiwal Breed", "Creamy Texture", "Perfect for Sweets", "A2 Certified"],
  },
]

const benefits = [
  "Free shipping on orders above ₹999",
  "100% satisfaction guarantee",
  "Lab tested for purity",
  "Secure payment options",
]

export default function ProductsPage() {
  const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: number }>({
    1: 1, 2: 1, 3: 1, 4: 1 // Default to 500g (index 1) for all products
  })
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1, 2: 1, 3: 1, 4: 1
  })

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta)
    }))
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                Our Collection
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Pure Desi Ghee
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Handcrafted using traditional methods, our ghee brings the authentic taste 
              of Indian heritage to your kitchen.
            </p>
            {/* Benefits Bar */}
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm text-foreground"
                >
                  <Check className="h-4 w-4 text-primary" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`overflow-hidden ${index % 2 === 1 ? 'bg-muted' : 'bg-card'}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative aspect-square lg:aspect-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.badge && (
                      <span className="absolute top-6 left-6 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        {product.badge}
                      </span>
                    )}
                    <button className="absolute top-6 right-6 p-3 bg-card/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
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
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <p className="text-sm text-primary font-medium tracking-wider uppercase mb-2">
                      {product.subtitle}
                    </p>
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      {product.longDescription}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Variant Selection */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-3">Select Size:</p>
                      <div className="flex flex-wrap gap-3">
                        {product.variants.map((variant, variantIndex) => (
                          <button
                            key={variant.weight}
                            onClick={() => setSelectedVariants(prev => ({ ...prev, [product.id]: variantIndex }))}
                            className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                              selectedVariants[product.id] === variantIndex
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border text-foreground hover:border-primary/50"
                            }`}
                          >
                            {variant.weight}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-secondary">
                            ₹{product.variants[selectedVariants[product.id] || 0].price}
                          </span>
                          <span className="text-lg text-muted-foreground line-through">
                            ₹{product.variants[selectedVariants[product.id] || 0].originalPrice}
                          </span>
                        </div>
                        <p className="text-sm text-primary">
                          Save ₹{product.variants[selectedVariants[product.id] || 0].originalPrice - product.variants[selectedVariants[product.id] || 0].price}
                        </p>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 font-medium">
                            {quantities[product.id] || 1}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <Button
                          size="lg"
                          className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        >
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Ghevana */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Why Choose Ghevana?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "100% Pure", description: "No additives, preservatives, or artificial colors" },
              { title: "Traditional Method", description: "Made using ancient Bilona churning process" },
              { title: "A2 Certified", description: "Exclusively from indigenous cow breeds" },
              { title: "Lab Tested", description: "Every batch tested for purity and quality" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-secondary-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
