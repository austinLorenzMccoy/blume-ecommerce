import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image src="/elegant-african-woman-with-beautiful-hair-portrait.jpg" alt="TefanyHair Story" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-balance opacity-90">
              Empowering women through premium hair solutions
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Why TefanyHair?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  TefanyHair means confidence — and that's exactly what we help you build. We believe every woman deserves to
                  feel confident and beautiful in her own skin.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide premium quality wigs and hair products that empower women to express their unique beauty
                    and confidence. We source only the finest materials and work with skilled artisans to create pieces
                    that look and feel natural.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Our Promise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every TefanyHair product is crafted with care, tested for quality, and designed to last. We stand behind
                    our products with exceptional customer service and a commitment to your satisfaction. Your
                    confidence is our success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Quality First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never compromise on quality. Every product is carefully selected and tested to meet our high
                  standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💝</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Customer Love</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your satisfaction is our priority. We're here to support you every step of the way with responsive,
                  caring service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Ethical Sourcing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We work with ethical suppliers and ensure fair practices throughout our supply chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Bloom?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our collection of premium wigs and hair products designed to help you look and feel your absolute
              best.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
