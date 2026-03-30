import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Heart, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Leaf,
    title: "Pure & Natural",
    description: "No additives, preservatives, or artificial colors. Just pure, golden ghee.",
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Each batch is personally overseen to ensure the highest quality.",
  },
  {
    icon: Award,
    title: "Traditional Bilona",
    description: "Made using the ancient churning method passed down through generations.",
  },
]

export function StorySection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/traditional-kitchen.jpg"
                alt="Traditional ghee making process"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <p className="text-4xl font-serif font-bold">70+</p>
              <p className="text-sm font-medium">Years of Tradition</p>
            </div>
            {/* Decorative Border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                Our Heritage
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              A Legacy of
              <span className="text-secondary block">Purity & Tradition</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For over seven decades, our family has been crafting the finest Desi Ghee 
              using the time-honored Bilona method. What started in a small village 
              kitchen has grown into a mission to bring authentic, pure ghee to every 
              Indian household.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We source our milk exclusively from indigenous A2 cows, ensuring each 
              spoonful carries the rich nutritional profile and distinct aroma that 
              only true Desi Ghee can offer.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/about">
                Read Our Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
