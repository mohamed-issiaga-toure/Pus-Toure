import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, defaultTransition } from '../util/animations'

function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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

        {/* GRILLE */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
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