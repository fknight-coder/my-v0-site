"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The aroma of Ghevana takes me back to my grandmother's kitchen. This is exactly how ghee should taste - rich, nutty, and pure. My family won't use any other brand now.",
    highlight: "Tastes like grandmother's ghee",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "As someone who grew up in a village, I can immediately tell the difference between real bilona ghee and commercial products. Ghevana is the real deal - authentic and incredibly aromatic.",
    highlight: "Authentic bilona quality",
  },
  {
    id: 3,
    name: "Dr. Anjali Menon",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "I recommend Ghevana to all my patients looking for genuine A2 ghee. The quality is consistent, and you can taste the purity in every spoonful. A trustworthy brand for health-conscious families.",
    highlight: "Doctor recommended",
  },
  {
    id: 4,
    name: "Sunita Agarwal",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "We use Ghevana for all our festivals and daily cooking. The ghee melts beautifully and adds such depth to our dishes. It's become an essential part of our kitchen.",
    highlight: "Perfect for festivals",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Testimonials
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Loved by Families
          </h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">
            Hear what our customers have to say about their Ghevana experience.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-secondary-foreground/5 rounded-2xl p-8 lg:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < currentTestimonial.rating
                        ? "fill-primary text-primary"
                        : "fill-secondary-foreground/20 text-secondary-foreground/20"
                    }`}
                  />
                ))}
              </div>

              {/* Highlight Badge */}
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-6">
                {currentTestimonial.highlight}
              </span>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl font-serif leading-relaxed mb-8">
                &ldquo;{currentTestimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-lg font-semibold">{currentTestimonial.name}</p>
                <p className="text-secondary-foreground/60">{currentTestimonial.location}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-secondary-foreground/30 hover:bg-secondary-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
