"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Share2, Star } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCartStore } from "@/lib/cart-store"
import { useRouter } from "next/navigation"

const product = {
  id: 1,
  name: "Silky Straight Lace Front Wig",
  price: 450000,
  rating: 4.8,
  reviews: 127,
  category: "Lace Front Wigs",
  texture: "Straight",
  description:
    "Experience luxury with our premium silky straight lace front wig. Made from 100% virgin human hair, this wig offers a natural hairline and versatile styling options. Perfect for everyday wear or special occasions.",
  features: [
    "100% virgin human hair",
    "HD transparent lace for natural hairline",
    "Pre-plucked hairline with baby hairs",
    "Bleached knots for realistic appearance",
    "Can be dyed, bleached, and heat styled",
    "Adjustable straps and combs for secure fit",
  ],
  images: [
    "/straight-black-wig-luxury-hair.jpg",
    "/straight-wig-side-view.jpg",
    "/straight-wig-back-view.jpg",
    "/straight-wig-texture-closeup.jpg",
  ],
  lengths: ["14 inches", "16 inches", "18 inches", "20 inches", "22 inches"],
  densities: ["130%", "150%", "180%"],
}

export function ProductDetail({ productId }: { productId: string }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedLength, setSelectedLength] = useState(product.lengths[3])
  const [selectedDensity, setSelectedDensity] = useState(product.densities[1])
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  const router = useRouter()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      length: selectedLength,
      density: selectedDensity,
    })
    router.push("/cart")
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary/20">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[4/5] overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">{product.name}</h1>
              <p className="text-3xl font-bold">₦{product.price.toLocaleString()}</p>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="flex flex-col gap-6 py-6 border-y border-border">
              <div className="flex flex-col gap-3">
                <Label className="text-base font-medium">Length</Label>
                <RadioGroup value={selectedLength} onValueChange={setSelectedLength} className="flex flex-wrap gap-3">
                  {product.lengths.map((length) => (
                    <div key={length}>
                      <RadioGroupItem value={length} id={length} className="peer sr-only" />
                      <Label
                        htmlFor={length}
                        className="flex items-center justify-center px-4 py-2 border-2 border-border rounded-md cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-colors"
                      >
                        {length}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex flex-col gap-3">
                <Label className="text-base font-medium">Density</Label>
                <RadioGroup value={selectedDensity} onValueChange={setSelectedDensity} className="flex gap-3">
                  {product.densities.map((density) => (
                    <div key={density}>
                      <RadioGroupItem value={density} id={density} className="peer sr-only" />
                      <Label
                        htmlFor={density}
                        className="flex items-center justify-center px-4 py-2 border-2 border-border rounded-md cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-colors"
                      >
                        {density}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="quantity" className="text-base font-medium">
                  Quantity
                </Label>
                <Select value={quantity.toString()} onValueChange={(v) => setQuantity(Number.parseInt(v))}>
                  <SelectTrigger id="quantity" className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full text-base" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" variant="outline">
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>

            <Tabs defaultValue="features" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="features" className="flex-1">
                  Features
                </TabsTrigger>
                <TabsTrigger value="care" className="flex-1">
                  Care Guide
                </TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">
                  Shipping
                </TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-6">
                <ul className="flex flex-col gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="care" className="mt-6">
                <div className="flex flex-col gap-4 text-muted-foreground">
                  <p>To maintain the quality and longevity of your wig:</p>
                  <ul className="flex flex-col gap-2 ml-4">
                    <li>• Wash with sulfate-free shampoo and conditioner</li>
                    <li>• Air dry on a wig stand when possible</li>
                    <li>• Use heat protectant before styling with heat tools</li>
                    <li>• Store on a wig stand or mannequin head</li>
                    <li>• Avoid sleeping in your wig</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="mt-6">
                <div className="flex flex-col gap-4 text-muted-foreground">
                  <p>Free express shipping on orders over ₦300,000</p>
                  <p>Standard delivery: 3-5 business days</p>
                  <p>Express delivery: 1-2 business days (additional fee)</p>
                  <p>All orders are carefully packaged and shipped with tracking.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
