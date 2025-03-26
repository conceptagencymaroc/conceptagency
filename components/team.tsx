"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Linkedin, Twitter, Globe } from "lucide-react"

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const team = [
    {
      name: "Khalid Kortbi",
      role: "Fondateur",
      image: "/images/khalid-kortbi.jpg",
      quote:
        "LA COMMUNICATION EST L'ART DE DONNER VIE AUX IDÉES, D'ILLUMINER LES ESPRITS ET DE TISSER DES LIENS DURABLES. EN TANT QUE FONDATEURS DE CONCEPT AGENCY, NOUS NOUS ENGAGEONS À CRÉER DES PONTS ENTRE LES MARQUES ET LEUR PUBLIC, ET À FAIRE RAYONNER CHAQUE CONCEPT POUR QU'IL DEVIENNE UNE RÉALITÉ INSPIRANTE.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Mohammed Derouich",
      role: "Co-fondateur & Expert en Technologie",
      image: "/images/mohammed-derouich.jpg",
      quote:
        "L'INNOVATION TECHNOLOGIQUE EST LE MOTEUR DE LA COMMUNICATION MODERNE. NOTRE EXPERTISE EN IA ET CLOUD COMPUTING PERMET DE CRÉER DES EXPÉRIENCES UNIQUES ET PERSONNALISÉES QUI TRANSFORMENT LA RELATION ENTRE LES MARQUES ET LEUR AUDIENCE.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="equipe" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            NOTRE ÉQUIPE
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#D4AF37]"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Rencontrez les visionnaires qui dirigent Concept Agency et façonnent l'avenir de la communication.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-[#D4AF37] transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-full min-h-[300px] md:min-h-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#D4AF37] mb-4">{member.role}</p>
                  <p className="text-gray-400 mb-6 text-sm italic">"{member.quote}"</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={member.social.website}
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                      aria-label="Website"
                    >
                      <Globe size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

