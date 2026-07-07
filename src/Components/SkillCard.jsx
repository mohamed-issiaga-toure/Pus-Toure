// Import de la fonction utilitaire
import { getLevel } from '../data/skills'

// Props reçues :
// - name       : nom de la technologie
// - percentage : niveau en pourcentage

function SkillCard({ name, percentage }) {

  // Niveau calculé depuis le pourcentage
  const level = getLevel(percentage)

  // Initiales : on prend les 2 premières lettres de chaque mot
  // Ex: "Tailwind CSS" → "TC" | "React" → "Re"
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-3 text-center hover:border-primary transition-colors duration-200">

      {/* Icône avec initiales */}
      <div className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center mx-auto mb-3">
        <span className="text-primary-light text-xs font-semibold">{initials}</span>
      </div>

      {/* Nom de la technologie */}
      <p className="text-slate-300 text-xs mb-2">{name}</p>

      {/* Badge de niveau — style dynamique depuis getLevel() */}
      <span className={`text-xs px-2 py-0.5 rounded-full ${level.style}`}>
        {level.label}
      </span>

    </div>
  )
}

export default SkillCard