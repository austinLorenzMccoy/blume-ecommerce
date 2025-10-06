"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const allProducts = [
  {
    id: 1,
    name: "Silky Straight Lace Front",
    price: 450000,
    image: "/straight-black-wig-luxury-hair.jpg",
    category: "Lace Front Wigs",
    texture: "Straight",
    length: "20 inches",
  },
  {
    id: 2,
    name: "Natural Wave Bundle",
    price: 375000,
    image: "/wavy-brown-hair-extensions-luxury.jpg",
    category: "Hair Bundles",
    texture: "Wavy",
    length: "18 inches",
  },
  {
    id: 3,
    name: "Curly Bob Wig",
    price: 420000,
    image: "/curly-bob-wig-black-hair.jpg",
    category: "Bob Wigs",
    texture: "Curly",
    length: "12 inches",
  },
  {
    id: 4,
    name: "Deep Wave Closure",
    price: 285000,
    image: "/deep-wave-hair-closure-luxury.jpg",
    category: "Closures",
    texture: "Deep Wave",
    length: "14 inches",
  },
  {
    id: 5,
    name: "Body Wave Full Lace",
    price: 525000,
    image: "/body-wave-full-lace-wig.jpg",
    category: "Full Lace Wigs",
    texture: "Body Wave",
    length: "22 inches",
  },
  {
    id: 6,
    name: "Straight Bob Wig",
    price: 390000,
    image: "/straight-bob-wig-black-hair.jpg",
    category: "Bob Wigs",
    texture: "Straight",
    length: "10 inches",
  },
  {
    id: 7,
    name: "Kinky Curly Bundle",
    price: 405000,
    image: "/kinky-curly-hair-bundle.jpg",
    category: "Hair Bundles",
    texture: "Curly",
    length: "16 inches",
  },
  {
    id: 8,
    name: "Water Wave Frontal",
    price: 300000,
    image: "/water-wave-frontal-closure.jpg",
    category: "Closures",
    texture: "Wavy",
    length: "14 inches",
  },
]

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("featured")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{allProducts.length} products</p>
        <Select value={sortBy} onValueChange={setSortBy}>
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden border-border/50 hover:border-primary/50 transition-colors"
          >
            <CardContent className="p-0">
              <div className="relative">
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary/20">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-medium text-lg group-hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {product.texture} • {product.length}
                  </p>
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
    </div>
  )
}

export default ProductGrid
