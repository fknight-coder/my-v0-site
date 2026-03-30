"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, ChevronDown, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211"],
    subtitle: "Mon-Sat, 9am-6pm IST",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@gheevana.com", "support@gheevana.com"],
    subtitle: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Village Kherla, Tehsil Bilaspur", "Rajasthan, India - 331001"],
    subtitle: "Dairy visits by appointment",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
    subtitle: "Closed on Sundays",
  },
]

const stores = [
  {
    city: "Mumbai",
    locations: [
      { name: "Nature's Basket - Bandra", address: "Linking Road, Bandra West" },
      { name: "Foodhall - Palladium", address: "Lower Parel" },
      { name: "Organic World - Andheri", address: "Lokhandwala Complex" },
    ],
  },
  {
    city: "Delhi NCR",
    locations: [
      { name: "Modern Bazaar - Gurgaon", address: "DLF Phase 4" },
      { name: "Le Marche - Vasant Kunj", address: "Ambience Mall" },
      { name: "Needs Supermarket - Noida", address: "Sector 18" },
    ],
  },
  {
    city: "Bangalore",
    locations: [
      { name: "Namdhari's Fresh - Indiranagar", address: "100 Feet Road" },
      { name: "Godrej Nature's Basket - Koramangala", address: "80 Feet Road" },
      { name: "Organic World - Whitefield", address: "ITPL Main Road" },
    ],
  },
  {
    city: "Jaipur",
    locations: [
      { name: "Gheevana Store (Flagship)", address: "MI Road" },
      { name: "Big Bazaar - World Trade Park", address: "Malviya Nagar" },
      { name: "Spencers - Crystal Palm", address: "Bani Park" },
    ],
  },
]

const faqs = [
  {
    question: "How is Gheevana different from regular ghee?",
    answer: "Gheevana is made using the traditional Bilona method from 100% A2 cow milk. Unlike commercial ghee made from cream, we churn curd to extract makkhan, then slow-simmer it to create ghee. This preserves more nutrients and gives a richer, nuttier flavor.",
  },
  {
    question: "What is A2 milk and why is it important?",
    answer: "A2 milk comes from indigenous cow breeds that produce milk containing only the A2 beta-casein protein. Research suggests A2 milk is easier to digest and may not cause the discomfort some people experience with regular milk.",
  },
  {
    question: "How should I store Gheevana ghee?",
    answer: "Store in a cool, dry place away from direct sunlight. Gheevana ghee has a long shelf life of 12-18 months. Always use a clean, dry spoon to scoop ghee. Refrigeration is not necessary but won't harm the ghee.",
  },
  {
    question: "Is your ghee suitable for lactose intolerant individuals?",
    answer: "Yes! The clarification process removes milk solids including lactose and casein. Most lactose intolerant individuals can safely consume pure ghee. However, if you have severe allergies, please consult your doctor first.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship throughout India. International shipping is coming soon. Sign up for our newsletter to be notified when we expand our shipping destinations.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with your purchase, contact us within 7 days of delivery for a full refund or replacement. The product must be unused and in original packaging.",
  },
]

const onlineStores = [
  { name: "Amazon", url: "#" },
  { name: "Flipkart", url: "#" },
  { name: "BigBasket", url: "#" },
  { name: "Blinkit", url: "#" },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
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
                Get in Touch
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our ghee? Want to become a retail partner? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-full text-primary w-fit mx-auto mb-4">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-foreground">{detail}</p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-2">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="wholesale">Wholesale/Retail Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Contact */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
                Quick Contact
              </h2>
              <Card className="bg-secondary text-secondary-foreground mb-6">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-full text-primary">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Chat on WhatsApp</h3>
                      <p className="text-secondary-foreground/80">Get instant replies</p>
                    </div>
                  </div>
                  <p className="text-secondary-foreground/80 mb-6">
                    For quick queries about orders, products, or anything else, 
                    reach out to us on WhatsApp. We typically respond within minutes.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#25D366] text-white hover:bg-[#128C7E]"
                  >
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Chat with Us
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Online Availability */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Shop Online
                </h3>
                <p className="text-muted-foreground mb-4">
                  Gheevana is available on all major e-commerce platforms:
                </p>
                <div className="flex flex-wrap gap-3">
                  {onlineStores.map((store) => (
                    <a
                      key={store.name}
                      href={store.url}
                      className="px-4 py-2 bg-muted rounded-lg text-foreground font-medium hover:bg-primary/10 transition-colors"
                    >
                      {store.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locator */}
      <section id="stores" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                Find Us Near You
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Store Locator
            </h2>
            <p className="text-lg text-muted-foreground">
              Find Gheevana at premium grocery stores across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stores.map((store) => (
              <Card key={store.city} className="overflow-hidden">
                <div className="bg-primary p-4">
                  <h3 className="text-lg font-semibold text-primary-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {store.city}
                  </h3>
                </div>
                <CardContent className="p-4">
                  <ul className="space-y-4">
                    {store.locations.map((location) => (
                      <li key={location.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
                        <p className="font-medium text-foreground">{location.name}</p>
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                FAQs
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
