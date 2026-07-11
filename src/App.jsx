import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './sections/Footer'
import WhatsAppButton from './components/WhatsAppButton'

import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/projectsPages/ProjectDetail'
import AlbumPage from './pages/AlbumPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg">

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />

      </div>
    </BrowserRouter>
  )
}

export default App