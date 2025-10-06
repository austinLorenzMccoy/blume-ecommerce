import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </div>
  )
}
