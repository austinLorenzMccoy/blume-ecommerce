import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Our Collections
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Explore our curated collections of premium wigs and hair extensions. Each piece is carefully selected to
                ensure the highest quality and most natural look.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Luxury Wigs Collection */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img
                    src="/straight-black-wig-luxury-hair.jpg"
                    alt="Luxury Wigs Collection"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-3xl font-bold text-white mb-2">Luxury Wigs</h3>
                    <p className="text-white/90 text-sm">Premium full lace wigs</p>
                  </div>
                </div>
              </div>

              {/* Hair Bundles Collection */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img
                    src="/body-wave-full-lace-wig.jpg"
                    alt="Hair Bundles Collection"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-3xl font-bold text-white mb-2">Hair Bundles</h3>
                    <p className="text-white/90 text-sm">Virgin hair extensions</p>
                  </div>
                </div>
              </div>

              {/* Closures & Frontals Collection */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img
                    src="/water-wave-frontal-closure.jpg"
                    alt="Closures & Frontals Collection"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-3xl font-bold text-white mb-2">Closures & Frontals</h3>
                    <p className="text-white/90 text-sm">Natural hairline solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* All Products Section */}
            <div className="border-t pt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">All Products</h2>
                  <p className="text-muted-foreground">Browse our complete collection</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <ProductGrid />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
