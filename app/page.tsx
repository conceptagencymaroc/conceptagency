import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Team from "@/components/team"
import Technology from "@/components/technology"
import Footer from "@/components/footer"
import ClientsSection from "@/components/clients-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Technology />
      <Team />
      <ClientsSection />
      <Footer />
    </main>
  )
}

