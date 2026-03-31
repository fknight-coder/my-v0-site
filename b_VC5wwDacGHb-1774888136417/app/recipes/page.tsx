"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, Users, ArrowRight, Flame, Heart, Sparkles, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { id: "all", label: "All Recipes", icon: Utensils },
  { id: "main", label: "Main Course", icon: Flame },
  { id: "dessert", label: "Desserts", icon: Heart },
  { id: "wellness", label: "Wellness", icon: Sparkles },
]

const recipes = [
  {
    id: "dal-tadka",
    title: "Dal Tadka",
    category: "main",
    description: "Classic comfort food elevated with a generous tadka of golden ghee, cumin, and aromatics. A staple in every Indian household.",
    time: "30 mins",
    servings: 4,
    difficulty: "Easy",
    image: "/images/dal-tadka.jpg",
    featured: true,
  },
  {
    id: "gajar-halwa",
    title: "Gajar Ka Halwa",
    category: "dessert",
    description: "Rich, decadent carrot halwa slow-cooked in pure desi ghee with cardamom, saffron, and topped with nuts.",
    time: "45 mins",
    servings: 6,
    difficulty: "Medium",
    image: "/images/gajar-halwa.jpg",
    featured: true,
  },
  {
    id: "ghee-rice",
    title: "Ghee Rice",
    category: "main",
    description: "Fragrant basmati rice cooked with whole spices and finished with aromatic ghee. Perfect with any curry.",
    time: "25 mins",
    servings: 4,
    difficulty: "Easy",
    image: "/images/ghee-rice.jpg",
    featured: true,
  },
  {
    id: "aloo-paratha",
    title: "Aloo Paratha",
    category: "main",
    description: "Stuffed potato flatbread cooked to golden perfection with generous ghee. A breakfast favorite.",
    time: "40 mins",
    servings: 4,
    difficulty: "Medium",
    image: "/images/ghee-cooking.jpg",
    featured: false,
  },
  {
    id: "ghee-coffee",
    title: "Bulletproof Coffee",
    category: "wellness",
    description: "Energizing coffee blended with pure ghee for sustained energy and mental clarity throughout the day.",
    time: "5 mins",
    servings: 1,
    difficulty: "Easy",
    image: "/images/hero-ghee.jpg",
    featured: false,
  },
  {
    id: "moong-dal-halwa",
    title: "Moong Dal Halwa",
    category: "dessert",
    description: "Traditional festive sweet made with split yellow lentils, slow-cooked in ghee until golden and aromatic.",
    time: "60 mins",
    servings: 8,
    difficulty: "Hard",
    image: "/images/gajar-halwa.jpg",
    featured: false,
  },
  {
    id: "ghee-tadka",
    title: "Perfect Ghee Tadka",
    category: "main",
    description: "Master the art of tempering spices in ghee - the foundation of countless Indian dishes.",
    time: "5 mins",
    servings: 1,
    difficulty: "Easy",
    image: "/images/ghee-cooking.jpg",
    featured: false,
  },
  {
    id: "golden-milk",
    title: "Golden Milk (Haldi Doodh)",
    category: "wellness",
    description: "Ayurvedic turmeric milk enriched with ghee for immunity and better absorption of curcumin.",
    time: "10 mins",
    servings: 2,
    difficulty: "Easy",
    image: "/images/hero-ghee.jpg",
    featured: false,
  },
]

const benefits = [
  {
    title: "Rich in Vitamins",
    description: "Ghee is packed with fat-soluble vitamins A, D, E, and K.",
  },
  {
    title: "Supports Digestion",
    description: "Stimulates secretion of digestive acids and aids nutrient absorption.",
  },
  {
    title: "High Smoke Point",
    description: "Perfect for high-heat cooking without producing harmful compounds.",
  },
  {
    title: "Lactose-Free",
    description: "The clarification process removes lactose and casein.",
  },
]

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredRecipes = activeCategory === "all" 
    ? recipes 
    : recipes.filter(recipe => recipe.category === activeCategory)

  const featuredRecipes = recipes.filter(recipe => recipe.featured)

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
                From Our Kitchen
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Recipes with Ghevana
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover traditional recipes that celebrate the rich, nutty flavor of pure desi ghee. 
              From everyday meals to festive feasts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
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
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-card/90 text-foreground text-xs font-medium rounded-full">
                    {recipe.difficulty}
                  </span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {recipe.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
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
                    className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors"
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

      {/* All Recipes with Filter */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              All Recipes
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-primary/10"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="group bg-card border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                    {categories.find(c => c.id === recipe.category)?.label}
                  </p>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{recipe.time}</span>
                    <span>{recipe.difficulty}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section id="benefits" className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                Ayurvedic Wisdom
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Health Benefits of Ghee
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              For thousands of years, ghee has been revered in Ayurveda as a superfood with numerous health benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-secondary-foreground/5 rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Cook with Ghevana?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
              Get the authentic taste of tradition. Order your jar of pure desi ghee today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
