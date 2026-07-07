// Import des données pures
import services from '../data/services'

// Framer Motion
import { motion } from 'framer-motion'

// Import des animations centralisées
import { defaultTransition } from '../util/animations'

// Icônes Lucide
import { Code, Video, BarChart3, Brush, Megaphone, Search } from 'lucide-react'

// Mapping clé → icône
const icons = {
  code:      Code,
  video:     Video,
  chart:     BarChart3,
  brush:     Brush,
  megaphone: Megaphone,
  search:    Search,
}

function Services() {
  return (
    <section id="services" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={defaultTransition}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Ce que je propose
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-slate-200">
            Mes services
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-4"></div>
        </motion.div>

        {/* ===== GRID SERVICES ===== */}
        {/* Pas de motion.div isolé ici — uniquement le .map() */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {

            // On récupère le composant icône via iconName
            const Icon = icons[service.iconName]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...defaultTransition, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary transition-colors duration-300 group"
              >

                {/* Icône */}
                <div className="w-12 h-12 bg-dark-bg border border-dark-border rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary-light group-hover:text-white transition-colors" />
                </div>

                {/* Titre */}
                <h3 className="text-slate-200 font-medium text-base mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Services