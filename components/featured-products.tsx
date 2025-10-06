import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Silky Straight Lace Front",
    price: 450000,
    image: "/straight-black-wig-luxury-hair.jpg",
    category: "Lace Front Wigs",
  },
  {
    id: 2,
    name: "Natural Wave Bundle",
    price: 375000,
    image: "/wavy-brown-hair-extensions-luxury.jpg",
    category: "Hair Bundles",
  },
  {
    id: 3,
    name: "Curly Bob Wig",
    price: 420000,
    image: "/curly-bob-wig-black-hair.jpg",
    category: "Bob Wigs",
  },
  {
    id: 4,
    name: "Deep Wave Closure",
    price: 285000,
    image: "/deep-wave-hair-closure-luxury.jpg",
    category: "Closures",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Featured Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked styles that celebrate your unique beauty
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-0">
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary/20">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-medium text-lg group-hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold">₦{product.price.toLocaleString()}</p>
                    <Button size="sm" variant="outline">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
