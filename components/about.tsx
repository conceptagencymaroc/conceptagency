"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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

  return (
    <section id="a-propos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-center mb-12"
          >
            À PROPOS DE NOUS
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#D4AF37]"></span>
          </motion.h2>

          <motion.div variants={itemVariants} className="text-lg text-gray-300 space-y-6 leading-relaxed">
            <p>
              Depuis notre création, CONCEPT AGENCY a su rassembler les talents les plus brillants de l'industrie du
              luxe, de la communication et du digital. Notre agence s'engage à offrir des campagnes toujours plus
              créatives, conversationnelles et parfaitement alignées sur les attentes changeantes des consommateurs.
            </p>
            <p>
              Aujourd'hui, plus que jamais, les marques ont un rôle essentiel à jouer et un terrain de jeu à exploiter.
              Nous les accompagnons dans cette aventure en créant des contenus ambitieux, captivants et engagés, qui
              favorisent des interactions sincères et durables avec leur audience.
            </p>
            <p>
              Chez CONCEPT AGENCY, nous mettons notre passion au service de votre réussite, en donnant vie à des idées
              audacieuses et en transformant chaque projet en une expérience unique et mémorable pour votre public.
            </p>
            <p>
              Ensemble, nous écrivons une nouvelle page de communication, où l'innovation et la créativité sont les clés
              pour se démarquer dans un monde en constante évolution.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

