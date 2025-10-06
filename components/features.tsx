import { Sparkles, Shield, Truck, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "100% human hair, ethically sourced and carefully selected for superior quality.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every product comes with our satisfaction guarantee and easy returns.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free express shipping on orders over ₦300,000. Delivered within 3-5 business days.",
  },
  {
    icon: Heart,
    title: "Expert Support",
    description: "Our hair specialists are here to help you find your perfect match.",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
