import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Premium Quality Hair</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Embrace your natural beauty
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Discover our curated collection of luxury wigs and hair extensions. Handcrafted with care, designed to
                make you feel confident and beautiful.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/shop">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="/beautiful-woman-with-long-wavy-hair-portrait-luxur.jpg"
              alt="Beautiful woman with luxury hair"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
