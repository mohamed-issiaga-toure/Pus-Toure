// Import supprimé — ProjectCard reçoit les données via props
// C'est le composant parent (Projects.jsx) qui importe les données

import ProjectDetail from "../Pages/ProjectsPages/ProjectDatail"

function ProjectCard({ project }) {

  // Configuration badge statut
  const statusConfig = {
    'terminé':  { label: 'Terminé',  style: 'bg-emerald-950 text-emerald-300 border border-emerald-800' },
    'en cours': { label: 'En cours', style: 'bg-amber-950 text-amber-300 border border-amber-800' },
    'concept':  { label: 'Concept',  style: 'bg-blue-950 text-blue-300 border border-blue-800' },
  }

  const status = statusConfig[project.status]

  // Couleurs placeholder selon l'id du projet
  const placeholderColors = {
    5: 'from-blue-950 to-cyan-950',
    6: 'from-purple-950 to-blue-950',
  }

  return (
    <div className="bg-dark-card border-2 border-dark-border rounded-2xl overflow-hidden hover:border-primary transition-colors duration-300 flex flex-col">

      {/* ===== IMAGE / PLACEHOLDER ===== */}
      {/* h-36 = 144px — plus compact que h-48 */}
      <div className="relative h-36 overflow-hidden">

        {project.image
          ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
          
            <div className={`w-full h-full bg-linear-to-br ${placeholderColors[project.id]} flex items-center justify-center`}>
              <span className="text-slate-500 text-3xl font-bold tracking-wider">
                {project.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </span>
            </div>
          )
        }

        {/* Badge statut */}
        <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full ${status.style}`}>
          {status.label}
        </span>

      </div>

      {/* ===== CONTENU ===== */}
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

          {/* Boutons */}
          <div className="flex gap-3">
            
             
            
              <button  className="flex-1 text-center border border-dark-border cursor-pointer hover:border-primary text-slate-400 hover:text-primary-pale text-xs py-2 rounded-lg transition-colors duration-200"
              onClick={() => window.location.href = `/projects/${project.slug}`}
              >
                Voir les Détails ...
              </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard