"use client"

import Link from "next/link"
import { useCartStore } from "@/lib/cart-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export function CartContent() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore()

  const freeShippingThreshold = 300000
  const shippingCost = 22500

  if (items.length === 0) {
    return (
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center max-w-md mx-auto">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-3xl font-bold">Your cart is empty</h1>
              <p className="text-muted-foreground">Start shopping to add items to your cart</p>
            </div>
            <Button size="lg" asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Shopping Cart</h1>

          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="relative aspect-[4/5] w-32 overflow-hidden rounded-lg bg-secondary/20">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="flex flex-1 flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex flex-col gap-1">
                            <Link href={`/products/${item.id}`}>
                              <h3 className="font-medium text-lg hover:text-primary transition-colors">{item.name}</h3>
                            </Link>
                            {item.length && (
                              <p className="text-sm text-muted-foreground">
                                {item.length}
                                {item.density && ` • ${item.density}`}
                              </p>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <p className="text-xl font-semibold">₦{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <Card>
                <CardContent className="p-6 flex flex-col gap-6">
                  <h2 className="font-serif text-2xl font-bold">Order Summary</h2>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">₦{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {getTotalPrice() >= freeShippingThreshold ? "Free" : `₦${shippingCost.toLocaleString()}`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium">₦{(getTotalPrice() * 0.08).toLocaleString()}</span>
                    </div>
                    <div className="h-px bg-border my-2" />
                    <div className="flex items-center justify-between text-lg">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold">
                        ₦
                        {(
                          getTotalPrice() +
                          (getTotalPrice() >= freeShippingThreshold ? 0 : shippingCost) +
                          getTotalPrice() * 0.08
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full" asChild>
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>

                  <Button variant="outline" size="lg" className="w-full bg-transparent" asChild>
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>

                  {getTotalPrice() < freeShippingThreshold && (
                    <p className="text-sm text-center text-muted-foreground">
                      Add ₦{(freeShippingThreshold - getTotalPrice()).toLocaleString()} more for free shipping
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
