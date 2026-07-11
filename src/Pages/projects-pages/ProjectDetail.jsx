// Page détail d'un projet — dynamique selon l'id dans l'URL
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react'
import projects from '../../data/projects'
import { fadeUp, defaultTransition } from '../../util/animations'

function ProjectDetail() {

  // useParams récupère l'id dans l'URL
  // ex: /projects/mentor-guinee → params.id = "mentor-guinee"
  const { id } = useParams()

  // On cherche le projet dont le slug correspond à l'id dans l'URL
  const project = projects.find(p => p.slug === id)

  // Si le projet n'existe pas — page 404 simple
  if (!project) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 text-lg mb-4">Projet introuvable</p>
          <Link
            to="/projects"
            className="text-primary-light hover:text-primary-pale transition-colors"
          >
            ← Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-16">
      <div className="max-w-4xl h-3xl mx-auto px-6">

        {/* ===== RETOUR ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-pale transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Retour aux projets
          </Link>
        </motion.div>

        {/* ===== IMAGE PRINCIPALE ===== */}
        {project.image && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="w-full h-72 rounded-2xl overflow-hidden border border-dark-border mb-8"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* ===== INFOS PROJET ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: 0.2 }}
        >

          {/* Badge statut */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs px-3 py-1 rounded-full ${project.status === 'terminé'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                : project.status === 'en cours'
                  ? 'bg-amber-950 text-amber-300 border border-amber-800'
                  : 'bg-blue-950 text-blue-300 border border-blue-800'
              }`}>
              {project.status}
            </span>
          </div>

          {/* Titre */}
          <h1 className="text-3xl md:text-4xl font-medium text-slate-200 mb-4">
            {project.name}
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            {project.descriptionComplete}
          </p>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-slate-200 font-medium text-lg mb-4">
              Stack technique
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-dark-card border border-dark-border text-primary-pale text-sm px-3 py-1.5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Boutons */}
          <div className="flex gap-4">

            <a href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white text-sm px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Voir la démo
            </a>

            <a href={project.code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-dark-border hover:border-primary text-slate-400 hover:text-primary-pale text-sm px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <GitBranch className="w-4 h-4" />
              Voir le code
            </a>
          </div>

        </motion.div>

      </div>
    </div>
  )
}

export default ProjectDetail