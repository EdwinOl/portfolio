//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Hero } from './pages/home/hero'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/experiencia" element={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-white text-4xl">Experiencia - Próximamente</h1></div>} />
        <Route path="/proyectos" element={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-white text-4xl">Proyectos - Próximamente</h1></div>} />
        <Route path="/sobre-mi" element={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-white text-4xl">Sobre mí - Próximamente</h1></div>} />
        <Route path="/contacto" element={<div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-white text-4xl">Contacto - Próximamente</h1></div>} />
      </Routes>
    </Layout>
  )
}

export default App
