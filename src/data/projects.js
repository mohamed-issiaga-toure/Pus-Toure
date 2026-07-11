// Import des images
import mentorGuinee from '../assets/mentor-guinee.jpg'
import pusInnovation from '../assets/pus-innovation.jpg'
import pusFood from '../assets/pus-food.jpg'
import lounge224 from '../assets/lounge-224.jpg'
import guineePay from '../assets/guineePay.png'
import wonharan from '../assets/wonharan.png'

// Tableau de 6 projets — chaque objet = 1 projet
const projects = [
  {
    id: 1,
    slug: 'mentor-guinee',
    name: 'Mentor Guinée',
    description: 'Plateforme de mise en relation entre particuliers, entreprises et techniciens qualifiés en Guinée.',
    descriptionComplete: 'Mentor Guinée est une plateforme innovante qui facilite la mise en relation entre particuliers, entreprises et techniciens qualifiés en Guinée.',
    fonctionnalites: [
      'Inscription et connexion utilisateur',
      'Recherche de techniciens par spécialité',
      'Système de notation et avis clients',
      'Messagerie intégrée',
    ],
    apprentissages: 'Gestion complète d\'un projet full-stack, architecture REST API, authentification JWT.',
    image: mentorGuinee,
    tags: ['React', 'Node.js', 'MySQL'],
    status: 'terminé',
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    slug: 'pus-innovation',
    name: 'Pus Innovation',
    description: 'Site vitrine de mon agence digitale — Dev Web, Marketing, Branding, Formation.',
    descriptionComplete: 'Pus Innovation est le site vitrine de mon agence digitale proposant des services complets.',
    fonctionnalites: [
      'Présentation des services',
      'Portfolio des réalisations',
      'Formulaire de contact',
      'Design moderne et responsive',
    ],
    apprentissages: 'Design UI/UX professionnel, optimisation des performances, SEO.',
    image: pusInnovation,
    tags: ['React', 'Tailwind CSS'],
    status: 'terminé',
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    slug: 'pus-toure-food',
    name: 'Pus Touré Food',
    description: 'Trouve rapidement les restaurants les plus proches et commande ton plat préféré.',
    descriptionComplete: 'Application de restauration permettant aux utilisateurs de Conakry de trouver rapidement les restaurants proches.',
    fonctionnalites: [
      'Géolocalisation des restaurants',
      'Catalogue de plats avec photos',
      'Commande en ligne',
      'Suivi de commande en temps réel',
    ],
    apprentissages: 'Géolocalisation, gestion d\'état complexe, intégration paiement mobile.',
    image: pusFood,
    tags: ['React', 'Node.js', 'MySQL'],
    status: 'en cours',
    demo: '#',
    code: '#',
  },
  {
    id: 4,
    slug: 'lounge-224',
    name: 'Lounge 224',
    description: 'Application moderne pour retrouver facilement les coins lounge à Conakry.',
    descriptionComplete: 'Plateforme pour découvrir et réserver les meilleurs espaces lounge de Conakry.',
    fonctionnalites: [
      'Carte interactive des lounges',
      'Fiches détaillées par établissement',
      'Système de réservation',
      'Avis et notation',
    ],
    apprentissages: 'Intégration de cartes interactives, système de réservation, UX design.',
    image: lounge224,
    tags: ['React', 'Tailwind CSS'],
    status: 'en cours',
    demo: '#',
    code: '#',
  },
  {
    id: 5,
    slug: 'guinee-pay',
    name: 'GuinéePay',
    description: 'Dashboard de gestion et suivi de paiements mobile pour le marché guinéen.',
    descriptionComplete: 'Dashboard de gestion financière adapté au marché guinéen.',
    fonctionnalites: [
      'Tableau de bord des transactions',
      'Historique des paiements',
      'Graphiques et statistiques',
      'Export PDF/Excel',
    ],
    apprentissages: 'Dashboard complexe, visualisation de données, TypeScript, NestJS.',
    image: guineePay,
    tags: ['React', 'TypeScript', 'NestJS'],
    status: 'concept',
    demo: '#',
    code: '#',
  },
  {
    id: 6,
    slug: 'wonharan',
    name: 'WONHARAN',
    description: 'Plateforme éducative avec chat IA pour aider élèves et étudiants.',
    descriptionComplete: 'Plateforme éducative destinée aux élèves guinéens avec chat IA intégré.',
    fonctionnalites: [
      'Chat conversationnel IA',
      'Bibliothèque de ressources',
      'Suivi de progression',
      'Exercices interactifs',
    ],
    apprentissages: 'Intégration API IA, architecture éducative, gestion sessions.',
    image: wonharan,
    tags: ['React', 'Node.js', 'IA'],
    status: 'concept',
    demo: '#',
    code: '#',
  },
]

export default projects