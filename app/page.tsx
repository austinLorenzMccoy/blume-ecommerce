import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Features } from "@/components/features"
import { Newsletter } from "@/components/newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
