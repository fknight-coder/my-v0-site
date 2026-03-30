import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Leaf, Flame, Clock, Award, Heart, Shield } from "lucide-react"

const timeline = [
  {
    year: "1952",
    title: "The Beginning",
    description: "Shri Ramji Lal began making ghee for his family using milk from his two beloved cows.",
  },
  {
    year: "1975",
    title: "Growing Demand",
    description: "Word spread across villages. The family expanded to serve neighboring communities.",
  },
  {
    year: "1998",
    title: "Second Generation",
    description: "The tradition passed to the next generation, preserving the sacred bilona method.",
  },
  {
    year: "2015",
    title: "Gheevana is Born",
    description: "The brand was formalized to bring authentic desi ghee to urban households.",
  },
  {
    year: "Today",
    title: "Nationwide Presence",
    description: "Serving thousands of families while staying true to our traditional roots.",
  },
]

const processSteps = [
  {
    icon: Leaf,
    title: "Sourcing",
    description: "We source fresh A2 milk from indigenous Gir and Sahiwal cows raised on our partner farms.",
  },
  {
    icon: Flame,
    title: "Curd Setting",
    description: "Milk is gently heated and set into curd overnight using traditional clay pots.",
  },
  {
    icon: Clock,
    title: "Bilona Churning",
    description: "The curd is hand-churned using a wooden bilona to extract fresh makkhan (butter).",
  },
  {
    icon: Heart,
    title: "Slow Simmering",
    description: "Makkhan is slowly simmered over a low flame until it transforms into golden ghee.",
  },
]

const certifications = [
  { name: "FSSAI Certified", description: "Food Safety Standards Authority of India" },
  { name: "ISO 22000", description: "Food Safety Management System" },
  { name: "A2 Verified", description: "100% A2 Beta-Casein Protein" },
  { name: "Lab Tested", description: "Regular quality testing by NABL accredited labs" },
]

const values = [
  {
    icon: Shield,
    title: "Purity",
    description: "No additives, preservatives, or artificial ingredients. Just pure, traditional ghee.",
  },
  {
    icon: Heart,
    title: "Tradition",
    description: "We honor the wisdom of our ancestors by following time-tested methods.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Every batch is personally inspected to ensure it meets our exacting standards.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-32 bg-muted mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-medium tracking-widest text-sm uppercase">
                  Our Story
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                A Legacy of
                <span className="text-secondary block">Pure Tradition</span>
              </h1>
              <p className="text-xl text-primary font-serif mb-6">
                देसीपन हर बूंद में
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over seven decades, our family has been dedicated to one simple mission: 
                bringing the purest, most authentic desi ghee to Indian households. What started 
                as a small family tradition has grown into a trusted brand, but our values 
                remain unchanged.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every jar of Gheevana carries the love, care, and expertise of three generations. 
                We believe that good food starts with good ingredients, and there&apos;s no 
                substitute for pure, traditionally-made ghee.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder of Gheevana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <p className="text-sm font-medium mb-1">Founded by</p>
                <p className="text-xl font-serif font-bold">Shri Ramji Lal</p>
                <p className="text-sm opacity-80">Est. 1952</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                Our Journey
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              70 Years of Excellence
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <span className="text-3xl font-serif font-bold text-primary">{item.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-primary rounded-full lg:-translate-x-1/2 ring-4 ring-background" />

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                The Bilona Method
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Our Traditional Process
            </h2>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed">
              We follow the ancient Bilona method, a process that takes time but yields 
              ghee of unmatched purity and flavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-secondary-foreground/5 rounded-2xl p-8 h-full">
                  <span className="text-6xl font-serif font-bold text-primary/20 absolute top-4 right-4">
                    {index + 1}
                  </span>
                  <div className="p-3 bg-primary/20 rounded-lg text-primary w-fit mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-secondary-foreground/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/a2-cows.jpg"
                alt="Indigenous A2 cows grazing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-medium tracking-widest text-sm uppercase">
                  Our Source
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                100% A2 Milk from
                <span className="text-secondary block">Indigenous Cows</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We work exclusively with farms that raise indigenous Gir, Sahiwal, and 
                Red Sindhi cows. These native breeds produce A2 milk, which contains 
                the A2 beta-casein protein that is easier to digest and more nutritious.
              </p>
              <ul className="space-y-4">
                {[
                  "Grass-fed and pasture-raised cows",
                  "No hormones or antibiotics",
                  "Ethical and humane treatment",
                  "Direct sourcing from trusted farmers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-muted mandala-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                What We Stand For
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="p-4 bg-primary/10 rounded-full text-primary w-fit mx-auto mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest text-sm uppercase">
                Trust & Quality
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quality and safety are at the heart of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors"
              >
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
