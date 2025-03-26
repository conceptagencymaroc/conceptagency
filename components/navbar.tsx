"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "À Propos", href: "#a-propos" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Technologie", href: "#technologie" },
    { name: "Équipe", href: "#equipe" },
    { name: "Contact", href: "#contact" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image src="/images/logo-white.png" alt="Concept Agency" width={180} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#D4AF37] transition-colors font-medium"
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-black">
              <a href="#contact">Contactez-nous</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#D4AF37] transition-colors py-2 font-medium"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-black w-full">
                <a href="#contact" onClick={handleLinkClick}>
                  Contactez-nous
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

