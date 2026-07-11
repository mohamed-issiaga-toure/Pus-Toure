// Import des composants réutilisables
import SkillBar from '../components/SkillBar'
import SkillCard from '../components/SkillCard'

// Import des données
import { devSkills, creativeSkills } from '../data/skill'

// Framer Motion
import { motion } from 'framer-motion'

// Import des animations centralisées
import { fadeUp, staggerContainer, defaultTransition } from '../util/animations'

function Skills() {

  return (
    <section
      id="skills"
      className="py-24 bg-dark-bg"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* ===== EN-TÊTE ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={defaultTransition}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Ce que je fais
          </p>

          <h2 className="text-3xl md:text-4xl font-medium text-slate-200">
            Mes Compétences
          </h2>

          <div className="w-12 h-0.5 bg-primary mt-4"></div>
        </motion.div>

        {/* ===== DÉVELOPPEMENT ===== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >

          {/* Titre catégorie */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 mb-10"
          >
            <p className="text-slate-500 text-xs uppercase tracking-widest whitespace-nowrap">
              Développement
            </p>
            <div className="flex-1 h-px bg-dark-border"></div>
          </motion.div>

          {/* Grille */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Colonne gauche */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-5"
            >
              {devSkills.map(skill => (
                <motion.div
                  key={skill.id}
                  variants={fadeUp}
                >
                  <SkillBar
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Colonne droite */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-4 gap-3 content-start"
            >
              {devSkills.map(skill => (
                <motion.div
                  key={skill.id}
                  variants={fadeUp}
                >
                  <SkillCard
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>

        {/* ===== CRÉATIF & DESIGN ===== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Titre catégorie */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 mb-10"
          >
            <p className="text-slate-500 text-xs uppercase tracking-widest whitespace-nowrap">
              Créatif & Design
            </p>
            <div className="flex-1 h-px bg-dark-border"></div>
          </motion.div>

          {/* Grid creative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">

            {creativeSkills.map(skill => (
              <motion.div
                key={skill.id}
                variants={fadeUp}
                className="bg-dark-card border border-dark-border rounded-xl p-4 flex items-center gap-4"
              >

                {/* Icône */}
                <div className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center shrink-0">
                  <span className="text-accent text-xs font-semibold">
                    {skill.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Contenu */}
                <div className="flex-1">

                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 text-sm">
                      {skill.name}
                    </span>
                    <span className="text-accent text-sm">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="h-1.5 bg-dark-bg border border-dark-border rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-purple-600 to-accent"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Skills