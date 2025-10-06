import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight">TefanyHair</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium quality wigs and hair extensions for the modern woman. Embrace your beauty with confidence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Shop</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/shop/wigs" className="text-muted-foreground hover:text-primary transition-colors">
                Wigs
              </Link>
              <Link href="/shop/bundles" className="text-muted-foreground hover:text-primary transition-colors">
                Hair Bundles
              </Link>
              <Link href="/shop/closures" className="text-muted-foreground hover:text-primary transition-colors">
                Closures & Frontals
              </Link>
              <Link href="/shop/accessories" className="text-muted-foreground hover:text-primary transition-colors">
                Accessories
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Support</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Company</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TefanyHair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
