"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/products", label: "Products" },
  { href: "/recipes", label: "Recipes" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-secondary">
              Gheevana
            </span>
            <span className="text-xs text-primary font-medium tracking-widest">
              देसीपन हर बूंद में
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button
              className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Shop Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-xl font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 w-full">
              Shop Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
