import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccountContent } from "@/components/account-content"

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AccountContent />
      </main>
      <Footer />
    </div>
  )
}
