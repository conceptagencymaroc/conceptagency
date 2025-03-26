"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Brain, Cloud, Cpu, Database, LineChart, MessageSquare, Network } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Technology() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const technologies = [
    {
      icon: <Brain className="h-10 w-10 text-[#D4AF37]" />,
      title: "Intelligence Artificielle",
      description:
        "Intégration de solutions IA pour optimiser vos stratégies marketing et analyser les comportements clients.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#D4AF37]" />,
      title: "Chatbots & Assistants Virtuels",
      description:
        "Développement d'assistants conversationnels pour améliorer l'expérience client et automatiser les interactions.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-[#D4AF37]" />,
      title: "Cloud Computing",
      description: "Solutions cloud sécurisées pour stocker, gérer et analyser vos données marketing à grande échelle.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-[#D4AF37]" />,
      title: "Analyse Prédictive",
      description: "Utilisation des données pour anticiper les tendances et optimiser vos campagnes marketing.",
    },
    {
      icon: <Network className="h-10 w-10 text-[#D4AF37]" />,
      title: "Automatisation Marketing",
      description:
        "Automatisation des processus marketing pour gagner en efficacité et personnaliser l'expérience client.",
    },
    {
      icon: <Database className="h-10 w-10 text-[#D4AF37]" />,
      title: "Big Data",
      description: "Exploitation des grandes masses de données pour des insights marketing précis et pertinents.",
    },
  ]

  return (
    <section id="technologie" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              TECHNOLOGIE & INNOVATION
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#D4AF37]"></span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-300 mb-6 text-lg">
              Chez Concept Agency, nous intégrons les technologies les plus avancées pour transformer votre
              communication et vous donner un avantage concurrentiel décisif.
            </motion.p>

            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className="relative w-24 h-24 rounded-full border-2 border-[#D4AF37] overflow-hidden mr-4">
                  <Image
                    src="/images/mohammed-derouich.jpg"
                    alt="Mohammed Derouich"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mohammed Derouich</h3>
                  <p className="text-[#D4AF37]">Co-fondateur & Expert en Technologie</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic text-gray-300 mb-6">
                "L'intelligence artificielle et le cloud computing ne sont pas seulement des outils, mais des leviers
                stratégiques qui redéfinissent la communication moderne. Notre mission est d'exploiter ces technologies
                pour créer des expériences client exceptionnelles et des campagnes à fort impact."
              </blockquote>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center bg-[#D4AF37] hover:bg-[#B8860B] text-black px-6 py-3 rounded-md font-medium transition-colors"
              >
                <Cpu className="mr-2 h-5 w-5" />
                Découvrir nos solutions technologiques
              </a>
            </motion.div>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-black/50 border border-gray-800 hover:border-[#D4AF37] transition-all">
                  <CardHeader>
                    <div className="mb-2">{tech.icon}</div>
                    <CardTitle className="text-white">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-base">{tech.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

