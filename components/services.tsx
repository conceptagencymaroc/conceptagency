"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Palette, Video, Newspaper, Users, Globe, Award, Mail, BarChart3, Sparkles } from "lucide-react"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Palette size={36} className="text-[#D4AF37]" />,
      title: "Design Graphique",
      description:
        "Création de logos, supports de communication, affiches, brochures, packaging et éléments graphiques percutants.",
    },
    {
      icon: <Video size={36} className="text-[#D4AF37]" />,
      title: "Production Audiovisuelle",
      description:
        "Production de films publicitaires, vidéos corporate, shootings photos et contenus visuels de qualité exceptionnelle.",
    },
    {
      icon: <Newspaper size={36} className="text-[#D4AF37]" />,
      title: "Relations Presse et Media",
      description:
        "Communiqués de presse, rédaction d'articles, relations avec les journalistes et mise en avant créative de votre identité.",
    },
    {
      icon: <Users size={36} className="text-[#D4AF37]" />,
      title: "Stratégie d'Influence & Social Media",
      description:
        "Gestion de vos réseaux sociaux, création de contenus, stratégies d'influence et partenariats avec des influenceurs.",
    },
    {
      icon: <BarChart3 size={36} className="text-[#D4AF37]" />,
      title: "Stratégie d'Image & Brand Content",
      description:
        "Développement de votre identité de marque, création de contenus engageants et stratégies de communication cohérentes.",
    },
    {
      icon: <Award size={36} className="text-[#D4AF37]" />,
      title: "Évènementiel & Booking Artistique",
      description:
        "Organisation d'événements, soirées, lancements de produits et booking d'artistes pour vos manifestations.",
    },
    {
      icon: <Globe size={36} className="text-[#D4AF37]" />,
      title: "Site Web & Application",
      description:
        "Création de sites web et applications mobiles, UX design, webdesign, e-commerce et référencement SEO/SEA.",
    },
    {
      icon: <Sparkles size={36} className="text-[#D4AF37]" />,
      title: "E-Reputation",
      description:
        "Gestion et amélioration de votre réputation en ligne, surveillance et intervention pour protéger votre image.",
    },
    {
      icon: <Mail size={36} className="text-[#D4AF37]" />,
      title: "Newsletter",
      description:
        "Service personnalisé de newsletter, SMSing et emailing basé sur une base de données ciblée par catégories.",
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
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            NOS SERVICES
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#D4AF37]"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Une gamme complète de services pour répondre à tous vos besoins en communication et marketing.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/50 border border-[#333] p-6 rounded-md transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

