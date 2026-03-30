import Image from "next/image"
import Link from "next/link"
import { Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const recipes = [
  {
    id: 1,
    title: "Dal Tadka",
    category: "Main Course",
    description: "Classic comfort food elevated with a generous tadka of golden ghee, cumin, and aromatics.",
    time: "30 mins",
    servings: 4,
    image: "/images/ghee-cooking.jpg",
  },
  {
    id: 2,
    title: "Gajar Halwa",
    category: "Dessert",
    description: "Rich, decadent carrot halwa slow-cooked in pure desi ghee with cardamom and nuts.",
    time: "45 mins",
    servings: 6,
    image: "/images/ghee-cooking.jpg",
  },
  {
    id: 3,
    title: "Ghee Rice",
    category: "Rice",
    description: "Fragrant basmati rice cooked with whole spices and finished with aromatic ghee.",
    time: "25 mins",
    servings: 4,
    image: "/images/ghee-cooking.jpg",
  },
]

export function RecipesSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                From Our Kitchen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Recipes with Gheevana
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover traditional recipes that celebrate the rich, nutty flavor of pure desi ghee.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground self-start lg:self-auto"
          >
            <Link href="/recipes">
              View All Recipes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="group bg-card border-border hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {recipe.category}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {recipe.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
                <Link
                  href={`/recipes/${recipe.id}`}
                  className="inline-flex items-center text-secondary font-medium mt-4 hover:text-primary transition-colors"
                >
                  View Recipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
