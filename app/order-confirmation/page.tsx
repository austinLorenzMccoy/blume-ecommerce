import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8 md:p-12 flex flex-col items-center gap-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold">Order Confirmed!</h1>
                    <p className="text-lg text-muted-foreground">Thank you for your purchase</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full p-6 bg-secondary/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">Order Number</p>
                    <p className="text-2xl font-bold">#BLM-{Math.floor(Math.random() * 100000)}</p>
                  </div>
                  <p className="text-muted-foreground">
                    We've sent a confirmation email with your order details. Your items will be shipped within 1-2
                    business days.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
                    <Button size="lg" className="flex-1" asChild>
                      <Link href="/shop">Continue Shopping</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
                      <Link href="/orders">View Orders</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
