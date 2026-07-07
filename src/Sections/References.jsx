import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, defaultTransition } from '../util/animations'
import { Phone } from 'lucide-react'
import references from '../data/references'

function References() {
  return (
    <section id="references" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== EN-TÊTE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={defaultTransition}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Ils me connaissent
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-slate-200">
            Mes références
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-4"></div>
        </motion.div>

        {/* ===== GRILLE RÉFÉRENCES ===== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {references.map((ref, index) => (
            <motion.div
              key={ref.id}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary transition-colors duration-300 flex gap-5"
            >

              {/* Photo */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-dark-border shrink-0">
                <img
                  src={ref.image}
                  alt={ref.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Infos */}
              <div className="flex flex-col justify-between flex-1">

                <div>
                  {/* Badge keyword */}
                  <span className="text-xs bg-dark-bg border border-dark-border text-primary-pale px-2 py-0.5 rounded-full">
                    {ref.keyword}
                  </span>

                  {/* Nom */}
                  <h3 className="text-slate-200 font-medium text-base mt-2">
                    {ref.name}
                  </h3>

                  {/* Rôle + institution */}
                  <p className="text-slate-500 text-xs mt-0.5">
                    {ref.role}
                  </p>
                  <p className="text-primary-pale text-xs">
                    {ref.institution}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mt-3 italic">
                    "{ref.description}"
                  </p>
                </div>

                {/* Téléphone */}
                {ref.phone && (
                  
                    <a href={`tel:${ref.phone}`}
                    className="flex items-center gap-2 text-primary-pale hover:text-primary-light text-xs mt-3 transition-colors duration-200 w-fit"
                  >
                    <Phone className="w-3 h-3" />
                    {ref.phone}
                  </a>
                )}

              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  )
}

export default References