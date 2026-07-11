// Import de la fonction utilitaire
import { getLevel } from '../data/skill'

// Import Framer Motion — animation de la barre
import { motion } from 'framer-motion'

// Props reçues :
// - name       : nom de la technologie
// - percentage : niveau en pourcentage (0-100)

function SkillBar({ name, percentage }) {

  // Niveau calculé depuis le pourcentage — badge et couleur
  const level = getLevel(percentage)

  return (
    <div>

      {/* Ligne du haut : nom à gauche, pourcentage à droite */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-300 text-sm">{name}</span>
        <span className="text-primary-light text-sm font-medium">{percentage}%</span>
      </div>

      {/* Piste de la barre */}
      <div className="h-1.5 bg-dark-card border border-dark-border rounded-full overflow-hidden">

        {/* ✅ Barre animée — s'étend de 0 à percentage% au scroll */}
        {/* motion.div DANS la piste — pas en dehors */}
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />

      </div>

    </div>
  )
}

export default SkillBar