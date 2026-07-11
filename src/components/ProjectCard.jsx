// Link pour navigation interne sans rechargement
import { Link } from 'react-router-dom'

function ProjectCard({ project }) {

  // Badge statut
  const statusConfig = {
    'terminé': { label: 'Terminé', style: 'bg-emerald-950 text-emerald-300 border border-emerald-800' },
    'en cours': { label: 'En cours', style: 'bg-amber-950 text-amber-300 border border-amber-800' },
    'concept': { label: 'Concept', style: 'bg-blue-950 text-blue-300 border border-blue-800' },
  }

  const status = statusConfig[project.status]

  // Couleurs placeholder
  const placeholderColors = {
    5: 'from-blue-950 to-cyan-950',
    6: 'from-purple-950 to-blue-950',
  }

  return (
    <div className="bg-dark-card border-2 border-dark-border rounded-2xl overflow-hidden hover:border-primary transition-colors duration-300 flex flex-col h-full">

      {/* IMAGE */}
      <div className="relative h-36 overflow-hidden">
        {project.image
          ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            // ✅ bg-gradient-to-br — pas bg-linear-to-br
            <div className={`w-full h-full bg-gradient-to-br ${placeholderColors[project.id]} flex items-center justify-center`}>
              <span className="text-slate-500 text-3xl font-bold">
                {project.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </span>
            </div>
          )
        }

        {/* Badge */}
        <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full ${status.style}`}>
          {status.label}
        </span>
      </div>

      {/* CONTENU */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">

        <div>
          <h3 className="text-slate-100 font-bold text-xl mb-2">
            {project.name}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-dark-bg border border-dark-border text-primary-pale text-xs px-2.5 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bouton détail — Link au lieu de window.location.href */}
          <Link
            to={`/projects/${project.slug}`}
            className="block w-full text-center bg-primary hover:bg-primary-light text-white text-xs py-2 rounded-lg transition-colors duration-200"
          >
            Voir les détails
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard