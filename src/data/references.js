import gomez   from '../assets/Référence/Gomez.jpeg'
import bgras   from '../assets/Référence/Bgras.jpeg'
import kouyate from '../assets/Référence/Mr-Kouyate.jpeg'
import camara  from '../assets/Référence/Mr-Camara.jpeg'

const references = [
  {
    id: 1,
    name: 'Mr Youssouf Gomez',
    role: 'Chef de département',
    institution: 'Université Ahmadou Dieng',
    phone: '+224 620 66 72 48',
    image: gomez,
    description: "Mon encadreur universitaire — informaticien de profession et modèle d'inspiration. Une référence sans précédent dans mon parcours académique.",
    keyword: 'Mentor académique',
  },
  {
    id: 2,
    name: 'Mr Bah Amadou Tidiane',
    role: 'Chef de département',
    institution: 'Université Barack Obama — Sonfonia',
    phone: '+224 625 78 91 18',
    image: bgras,
    description: "Connu sous le pseudo BGRAS — un véritable ingénieur. De l'algorithme aux langages les plus puissants, il m'a fait comprendre les technologies les plus complexes.",
    keyword: 'Ingénieur & Enseignant',
  },
  {
    id: 3,
    name: 'Mr Kouyaté',
    role: 'Enseignant informatique',
    institution: 'Institut de formation professionnelle Ahmadou Dieng',
    phone: '+224 625 91 48 91',
    image: kouyate,
    description: "Plus qu'un professeur en informatique — un frère qui a brisé toute barrière entre nous. Son accompagnement a été déterminant dans mon évolution.",
    keyword: 'Frère & Formateur',
  },
  {
    id: 4,
    name: 'Mr Camara Manga Fodé',
    role: 'Initiateur en informatique',
    institution: 'Premier mentor — depuis 2017',
    phone: '',
    image: camara,
    description: "La première personne à mettre un clavier entre mes mains en 2017. C'est lui qui m'a initié à l'informatique de base — le point de départ de tout.",
    keyword: 'Premier mentor',
  },
]

export default references