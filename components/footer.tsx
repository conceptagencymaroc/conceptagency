"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ name, email, message })
    // Reset form
    setName("")
    setEmail("")
    setMessage("")
    // Show success message
    alert("Votre message a été envoyé avec succès!")
  }

  return (
    <footer id="contact" className="bg-black pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div>
            <Image src="/images/logo-white.png" alt="Concept Agency" width={180} height={60} className="mb-6" />
            <p className="text-gray-400 mb-6">
              Votre partenaire en communication 360° spécialisé dans le luxe et la créativité. Nous transformons vos
              idées en expériences mémorables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Liens Rapides</h3>
            <ul className="space-y-3">
              {["Accueil", "À Propos", "Services", "Portfolio", "Technologie", "Équipe", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")}`}
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center"
                    >
                      <ArrowRight size={14} className="mr-2" />
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="text-[#D4AF37] mr-3 mt-1" size={18} />
                <span className="text-gray-400">+212 6 61 62 29 26</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-[#D4AF37] mr-3 mt-1" size={18} />
                <span className="text-gray-400">khalidkortbi@conceptagency.net</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#D4AF37] mr-3 mt-1" size={18} />
                <span className="text-gray-400">Casablanca, Maroc</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-gray-900 border-gray-700 focus:border-[#D4AF37]"
              />
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-900 border-gray-700 focus:border-[#D4AF37]"
              />
              <Textarea
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-gray-900 border-gray-700 focus:border-[#D4AF37] min-h-[100px]"
              />
              <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8860B] text-black">
                Envoyer
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Concept Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

