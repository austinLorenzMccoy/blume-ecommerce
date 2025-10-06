import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Shop All Products</h1>
                <p className="text-lg text-muted-foreground">
                  Discover our complete collection of premium wigs and hair extensions
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
                <aside className="lg:sticky lg:top-24 lg:self-start">
                  <ProductFilters />
                </aside>
                <div>
                  <ProductGrid />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
