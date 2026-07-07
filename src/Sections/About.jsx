import monImage from '../assets/About.jpeg'

// Framer Motion
import { motion } from "framer-motion"

// Animations centralisées
import { fadeLeft, fadeRight, defaultTransition } from "../util/animations"

// Données des compétences
const stack = [
  'HTML / CSS',
  'JavaScript',
  'TypeScript',
  'React js',
  'React Native',
  'Tailwind CSS',
  'Boostrapp',
  'Node.js',
  'NestJS',
  'MySQL',
  'JAVA',
  'Windev',
  'Claude / Codex / AI Studio',
  'GitHub'
]

// Parcours
const parcours = [
  {
    id: 1,
    annee: '2025',
    titre: 'Diplôme MIAGE Bac+4',
    lieu: 'Université Ahmadou Dieng — Conakry',
  },
  {
    id: 2,
    annee: '2023',
    titre: 'Développeur Full-stack',
    lieu: 'Projets personnels et de soutenance — React, Node.js, NestJS',
  },
  {
    id: 3,
    annee: '2021',
    titre: 'Début du développement web',
    lieu: 'HTML, CSS, JavaScript',
  },
]

const histoire1 =
  "Né à Forécariah, installé à Conakry — je suis Mohamed Issiaga Touré,développeur Full-stack diplômé en MIAGE (Bac+4) à l'Université Ahmadou Dieng.Depuis 2021, je transforme des idées en expériences digitales en mobilisant React, TypeScript, Tailwind, Node.js, NestJS et MySQL."

const histoire2 =
  "Passionné de nouvelles technologies, j'intègre les outils d'IA(Claude, Codex, Google AI Studio) pour augmenter ma productivitéet livrer plus vite. Mon ambition : concevoir des outils performants qui ont un impact réel, en Guinée et à travers le monde."

function About() {
  return (
    <section id="about" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== EN-TÊTE ===== */}
        <div className="mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Qui suis-je ?
          </p>

          <h2 className="text-3xl md:text-4xl font-medium text-slate-200">
            À propos de moi
          </h2>

          <div className="w-12 h-0.5 bg-primary mt-4"></div>
        </div>

        {/* ===== CONTENU ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ===== GAUCHE ===== */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={defaultTransition}
            className="flex flex-col gap-6"
          >
            <div className="w-full  max-w-sm rounded-2xl overflow-hidden border-2 shadow-2xl shadow-primary border-dark-border hover:border-primary transition-colors">
              <img
                src={monImage}
                alt="Mohamed Issiaga Touré"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Infos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="text-primary-light font-medium text-2xl">4+</p>
                <p className="text-slate-500 text-xs mt-1">Ans d'expérience</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="text-primary-light font-medium text-2xl">Bac+4</p>
                <p className="text-slate-500 text-xs mt-1">MIAGE — 2025</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="text-primary-light font-medium text-2xl">Développement web</p>
                <p className="text-slate-500 text-xs mt-1">Solution digitale</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="text-primary-light font-medium text-2xl">Infographie</p>
                <p className="text-slate-500 text-xs mt-1">Designer</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="text-primary-light font-medium text-2xl">Marketing Digital</p>
                <p className="text-slate-500 text-xs mt-1">Management</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-primary transition-colors">
                <p className="text-primary-light font-medium text-2xl">Création de contenu</p>
                <p className="text-slate-500 text-xs mt-1">Facebook, Instagram X...</p>
              </div>
            </div>
          </motion.div>



          {/* ===== DROITE ===== */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="flex flex-col gap-10"
          >

            {/* Histoire */}
            <div>
              <h3 className="text-primary-light font-medium text-lg mb-4">
                Mon histoire
              </h3>

              <p className="italic text-primary-pale text-sm leading-relaxed">
                {histoire1}
              </p>

              <p className="italic text-primary-pale text-sm leading-relaxed mt-3">
                {histoire2}
              </p>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-slate-200 font-medium text-lg mb-4">
                Ma stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-dark-card border border-dark-border text-primary-pale text-xs px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-slate-200 font-medium text-lg mb-6">
                Mon parcours
              </h3>

              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-dark-border"></div>

                <div className="flex flex-col gap-8">
                  {parcours.map(item => (
                    <div key={item.id} className="flex gap-6 relative">

                      <div className="w-6 h-6 rounded-full bg-dark-card border-2 border-primary shrink-0 z-10"></div>

                      <div>
                        <span className="text-primary text-xs font-medium">
                          {item.annee}
                        </span>

                        <p className="text-slate-200 text-sm font-medium mt-1">
                          {item.titre}
                        </p>

                        <p className="text-slate-500 text-xs mt-1">
                          {item.lieu}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About