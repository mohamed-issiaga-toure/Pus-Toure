// Toutes les animations du portfolio centralisées ici
// On importe uniquement ce qu'on a besoin dans chaque composant

// Fade + glisse vers le haut — le plus utilisé
export const fadeUp = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0  },
}

// Fade + glisse depuis la gauche — pour les textes Hero
export const fadeLeft = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0   },
}

// Fade + glisse depuis la droite — pour la photo Hero
export const fadeRight = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0  },
}

// Fade simple — pour les éléments discrets
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

// Zoom léger — pour les cards
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1   },
}

// Conteneur — orchestre les enfants en cascade
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

// Transition par défaut — réutilisée partout
export const defaultTransition = {
  duration: 0.6,
  ease: 'easeOut',
}

// Transition rapide — pour les éléments discrets
export const fastTransition = {
  duration: 0.3,
  ease: 'easeOut',
}