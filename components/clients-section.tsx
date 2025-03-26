"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function ClientsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sectors = [
    {
      name: "Hôtellerie & Voyage",
      clients: [
        "/images/clients/sofitel.png",
        "/images/clients/radisson.png",
        "/images/clients/pullman.png",
        "/images/clients/michlifen.png",
      ],
    },
    {
      name: "Télécommunications",
      clients: ["/images/clients/maroc-telecom.png", "/images/clients/sitel.png"],
    },
    {
      name: "Bancaire",
      clients: ["/images/clients/banque-populaire.png"],
    },
    {
      name: "Institutionnel",
      clients: ["/images/clients/onde.png", "/images/clients/fondation-mohammed-v.png"],
    },
    {
      name: "Assurance",
      clients: ["/images/clients/saham.png", "/images/clients/sanlam.png"],
    },
    {
      name: "Automobile",
      clients: ["/images/clients/nissan.png"],
    },
    {
      name: "Aviation",
      clients: ["/images/clients/royal-air-maroc.png", "/images/clients/jetex.png"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            NOS CLIENTS
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#D4AF37]"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ils nous font confiance pour leurs stratégies de communication et de marketing.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {sectors.map((sector, sectorIndex) => (
            <motion.div key={sectorIndex} variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-[#D4AF37] uppercase">Secteur {sector.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {sector.clients.map((client, clientIndex) => (
                  <div
                    key={clientIndex}
                    className="bg-black/30 p-6 rounded-lg flex items-center justify-center h-32 border border-gray-800 hover:border-[#D4AF37] transition-all"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={client || "/placeholder.svg"}
                        alt={`Client ${clientIndex + 1} du secteur ${sector.name}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

