import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, defaultTransition } from '../util/animations'
import testimonial from '../data/testimonial'

// Étoiles — composant réutilisable
function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-dark-bg">
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
            Ce qu'ils disent
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-slate-200">
            Témoignages
          </h2>
          <div className="w-12 h-0.5 bg-primary mt-4"></div>
        </motion.div>

        {/* ===== GRILLE TÉMOIGNAGES ===== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonial.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary transition-colors duration-300"
            >

              {/* Étoiles */}
              <Stars count={item.stars} />

              {/* Témoignage */}
              <p className="text-slate-400 text-sm leading-relaxed italic my-4">
                "{item.testimony}"
              </p>

              {/* Séparateur */}
              <div className="h-px bg-dark-border mb-4"></div>

              {/* Personne */}
              <div className="flex items-center gap-3">

                {/* Photo */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nom + rôle + téléphone */}
                <div>
                  <p className="text-slate-200 text-sm font-medium">
                    {item.name}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {item.role}
                  </p>
                  {item.phone && (

                    <a href={`tel:${item.phone}`}
                      className="text-primary-pale text-xs hover:text-primary-light transition-colors duration-200"
                    >
                      {item.phone}
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials