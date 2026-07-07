// Page d'accueil — assemble les sections principales
import Hero     from '../Sections/Hero'
import About    from '../Sections/About'
import Skills   from '../Sections/Skills'
import Services from '../Sections/Services'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
    </>
  )
}

export default Home
