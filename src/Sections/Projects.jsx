// Import des composants
import ProjectCard from '../Components/ProjectCard'
import projects from '../data/projects'

// Framer Motion
import { motion } from 'framer-motion'

// Animations centralisées
import { fadeUp, staggerContainer, defaultTransition } from '../util/animations'

function Projects() {

  return (
    <section
      id="projects"
      className="py-24 bg-dark-bg"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER SECTION ================= */}
        <motion.div
          // Animation du bloc header (titre + sous-titre)
          initial={{ opacity: 0, y: 40 }}        // invisible + légèrement en bas
          whileInView={{ opacity: 1, y: 0 }}     // apparition fluide vers position normale
          viewport={{ once: true, amount: 0.3 }}  // déclenche une seule fois
          transition={defaultTransition}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Ce que j'ai construit
          </p>

          <h2 className="text-3xl md:text-4xl font-medium text-slate-200">
            Mes projets
          </h2>

          <div className="w-12 h-0.5 bg-primary mt-4"></div>
        </motion.div>

        {/* ================= GRID CONTAINER ================= */}
        <motion.div
          // Conteneur qui gère l’animation en cascade (stagger)
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}

          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {/* ================= PROJECT CARDS ================= */}
          {projects.map((project, index) => (
             <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...defaultTransition, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
              <ProjectCard project={project} />
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  )
}

export default Projects