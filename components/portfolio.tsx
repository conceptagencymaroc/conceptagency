"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sectors = [
    "Tous",
    "Hôtellerie & Voyage",
    "Télécommunications",
    "Bancaire",
    "Institutionnel",
    "Assurance",
    "Automobile",
    "Aviation",
  ]

  const projects = [
    {
      title: "Campagne Digitale",
      client: "Maroc Telecom",
      category: "Télécommunications",
      image: "/images/portfolio-1.jpg",
    },
    {
      title: "Identité Visuelle",
      client: "Banque Populaire",
      category: "Bancaire",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "Événement de Lancement",
      client: "Nissan Maroc",
      category: "Automobile",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "Campagne Publicitaire",
      client: "Royal Air Maroc",
      category: "Aviation",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "Stratégie Social Media",
      client: "Sofitel",
      category: "Hôtellerie & Voyage",
      image: "/images/portfolio-5.jpg",
    },
    {
      title: "Refonte Site Web",
      client: "Saham Assurance",
      category: "Assurance",
      image: "/images/portfolio-6.jpg",
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
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            NOS RÉALISATIONS
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#D4AF37]"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Découvrez nos projets les plus récents et les plus marquants à travers différents secteurs d'activité.
          </p>
        </div>

        <Tabs defaultValue="Tous" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-12 bg-transparent">
            {sectors.map((sector) => (
              <TabsTrigger
                key={sector}
                value={sector}
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black px-4 py-2 rounded-md m-1"
              >
                {sector}
              </TabsTrigger>
            ))}
          </TabsList>

          {sectors.map((sector) => (
            <TabsContent key={sector} value={sector}>
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects
                  .filter((project) => sector === "Tous" || project.category === sector)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group relative overflow-hidden rounded-lg"
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-[#D4AF37]">{project.client}</p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

