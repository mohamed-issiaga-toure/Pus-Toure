// Page d'accueil — assemble les sections principales
import Hero     from '../sections/Hero'
import About   from '../sections/About'
import Skills   from '../sections/Skills'
 import Services from '../sections/Services'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills   />
      <Services />
    </>
  )
}

export default Home
