// Import du hook typewriter
import useTypewriter from '../hooks/useTypewriter'

// Import Framer Motion
import { motion } from "framer-motion"

// Import des animations centralisées
import { fadeLeft, fadeRight, staggerContainer, defaultTransition } from "../util/animations"

// Import de l'image
import monImage from '../assets/monImage.png'

// Titres qui défileront un par un
const titles = [
  'Développeur web full-stack / Junior.',
  'Technicien IT .',
  'Créateur de contenu Tech .',
  'Community manager.',
  'Freelance disponible .',
  'Marketing Digital'
]

const titles2 = [
  ' Passionné par le développement web, ',
  'Je construis des Solutions robustes et scalables ',
  'pour vos plateformes numériques  .',
]

function Hero() {

  // Hook typewriter (inchangé)
  const displayText = useTypewriter(titles, 100, 1500)

  return (
    <section
      id="hero"
      className="min-h-screen pt-16 flex items-center bg-dark-bg"
    >

      <div className="max-w-6xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ===== COLONNE GAUCHE ===== */}
        {/* ===== COLONNE GAUCHE ===== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >

          {/* Badge — enfant animé 1 */}
          <motion.div
            variants={fadeLeft}
            transition={defaultTransition}
            className="inline-flex items-center gap-2 bg-dark-card border border-dark-border shadow-4xl shadow-primary text-primary-pale text-xs px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Disponible pour opportunités
          </motion.div>

          {/* Titre — enfant animé 2 */}
          <motion.h1
            variants={fadeLeft}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-slate-200 leading-tight  mb-4"
          >
            Bonjour, je suis <br />

            <h1 className="text-3xm font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pus <span className="text-primary font-bold text-3xm tracking-wide mb-5">
                Touré
              </span>
            </h1>
          </motion.h1>

          {/* Typewriter — enfant animé 3 */}
          <motion.div
            variants={fadeLeft}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 h-8"
          >
            <span className="text-primary-light font-bold text-xl">Je suis</span>
            <span className="text-primary font-medium uppercase text-base italic">
              {displayText}
            </span>
            <span className="w-0.5 h-5 bg-accent animate-pulse"></span>
          </motion.div>

          {/* Description — enfant animé 4 */}
          {/* useTypewriter sur titles2 — pas d'affichage direct du tableau */}
          <motion.p
            variants={fadeLeft}
            transition={{ ...defaultTransition, delay: 0.3 }}
            className="text-accent text-base italic leading-relaxed mb-8 max-w-md"
          >
            Passionné par le développement web, je construis des solutions
            robustes et scalables pour vos plateformes numériques.
          </motion.p>

          {/* Boutons — enfant animé 5 */}
          <motion.div
            variants={fadeLeft}
            transition={{ ...defaultTransition, delay: 0.4 }}
            className="flex items-center gap-4"
          >

            <a href="projects"
              className="bg-primary font-bold hover:bg-primary-light text-white text-sm px-6 py-3 rounded-full transition-colors duration-200"
            >
              Voir mes projets
            </a>

            <a href="contact"
              className="border-2 border-dark-border font-bold hover:border-primary text-slate-400 hover:text-primary-pale text-sm px-6 py-3 rounded-full transition-colors duration-200"
            >
              Me contacter
            </a>
          </motion.div>

        </motion.div>

        {/* ===== COLONNE DROITE ===== */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: 0.3 }}
          className="flex justify-center lg:justify-end  "
        >

          <div className="bg-dark-card border border-dark-border shadow-2xl shadow-primary rounded-2xl p-2 w-90 h-full relative hover:border-primary transition-colors">

            <div className="absolute top-0 left-8 right-8 h-0.5  rounded-full"></div>

            <div className="w-full h-80 rounded-xl border border-dark-border overflow-hidden mb-4">
              <img
                src={monImage}
                alt="Pus Touré Tech — Développeur web full-stack"
                className="w-full h-full object-cover object-top shadow-3xl shadow-emerald-950"
              />
            </div>

            <div className="text-center mb-4 shadow-4xl">
              <p className="text-primary font-medium text-sm">
                Pus Touré
              </p>
              <p className="text-primary-pale text-xs mt-1">
                Développeur Full-Stack
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-dark-bg border border-dark-border rounded-lg p-3 text-center">
                <p className="text-primary-light font-medium text-lg">3+</p>
                <p className="text-slate-500 text-xs mt-1">Projets réalisés</p>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-3 text-center">
                <p className="text-primary-light font-medium text-lg">2+</p>
                <p className="text-slate-500 text-xs mt-1">Ans d'expérience</p>
              </div>
            </div>

            <div className="flex justify-center gap-3">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-slate-400 hover:text-primary-pale hover:border-primary transition-colors duration-200"
              >
                Gh
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-slate-400 hover:text-primary-pale hover:border-primary transition-colors duration-200"
              >
                Li
              </a>

              <a
                href="mailto:mohamedissigt@gmail.com"
                className="w-9 h-9 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center text-slate-400 hover:text-primary-pale hover:border-primary transition-colors duration-200"
              >
                @
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero;