import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout
import NavBar  from './Components/NavBar'
import Footer  from './Sections/Footer'
import WhatsAppButton from './Components/WhatsAppButton'

// Pages
import Home         from "./Pages/Home"
import ProjectsPage from './Pages/ProjectsPage'
import ProjectDetail from './Pages/ProjectsPages/ProjectDatail'
import AlbumPage    from './Pages/AlbumPage'
import ContactPage  from './Pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg">

        {/* Navbar présente sur toutes les pages */}
        <NavBar />

        {/* Routes — chaque URL affiche une page différente */}
        <Routes>
          <Route path="/"                    element={<Home />}          />
          <Route path="/projects"            element={<ProjectsPage />}  />
          <Route path="/projects/:id"        element={<ProjectDetail />} />
          <Route path="/album"               element={<AlbumPage />}     />
          <Route path="/contact"             element={<ContactPage />}   />
        </Routes>

        {/* Footer présent sur toutes les pages */}
        <Footer />

        {/* Bouton WhatsApp flottant */}
        <WhatsAppButton />

      </div>
    </BrowserRouter>
  )
}

export default App