// Données des compétences séparées du composant
// Modifier une compétence = toucher uniquement ce fichier

// Fonction utilitaire — retourne le niveau textuel selon le pourcentage
// Réutilisable dans n'importe quel composant
export const getLevel = (percentage) => {
  if (percentage >= 75) return { label: 'Avancé',       style: 'bg-blue-950 text-blue-300 border border-blue-800' }
  if (percentage >= 60) return { label: 'Intermédiaire', style: 'bg-emerald-950 text-emerald-300 border border-emerald-800' }
  return                       { label: 'Débutant',      style: 'bg-amber-950 text-amber-300 border border-amber-800' }
}

// Compétences de développement
export const devSkills = [
  { id: 1,  name: 'HTML',         percentage: 78 },
  { id: 2,  name: 'CSS',          percentage: 75 },
  { id: 3,  name: 'Boostrapp',    percentage: 75 },
  { id: 4,  name: 'Tailwind CSS', percentage: 75 },
  { id: 5,  name: 'JavaScript',   percentage: 70 },
  { id: 6,  name: 'TypeScript',   percentage: 68 },
  { id: 7,  name: 'React',        percentage: 70 },
  { id: 8,  name: 'React Native',  percentage: 70 },
  { id: 9,  name: 'NestJS',       percentage: 60 },
  { id: 10, name: 'Java',         percentage: 60 },
  { id: 11, name: 'windev',       percentage: 60 },
  { id: 12, name: 'Mysql',        percentage: 60 }
]

// Compétences créatives — catégorie séparée intentionnellement
export const creativeSkills = [
  { id: 1, name: 'Photoshop',    percentage: 55 },
  { id: 2, name: 'Première Pro', percentage: 40 },
]