import { lazy, Suspense, useState } from 'react'
import AnimalCard from '../components/AnimalCard'
import { animals, stepsAdoption } from '../database'
import AdoptionForm from '../components/AdoptionForm'
import AdoptionStep from '../components/AdoptionStep'
import ParallaxBackground from '../components/ParallaxBackground'

const Adoptions = () => {
  const [showForm, setShowForm] = useState(false)
  const [selectedAnimal, setSelectedAnimal] = useState(null)  

  const handleAdoptClick = (animal) => {
    setSelectedAnimal(animal)
    setShowForm(true)
  }

  return (
    <div className="w-full min-h-screen px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Adopciones</h1>
      
      {/* Proceso de adopción */}
      <section className="mb-16 bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestro Proceso de Adopción</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {stepsAdoption.map((step, index) => (
            <AdoptionStep key={index} step={step} />
          ))}
        </div>
      </section>

      {/* Sección con efecto parallax */}
      <section className="relative mb-16 rounded-xl overflow-hidden min-h-[400px] flex items-center">
        <ParallaxBackground />
        
        {/* Contenido sobre el parallax */}
        <div className="relative z-10 w-full p-8 text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Carta Responsiva de Adopción</h2>
            <p className="text-lg mb-8 text-white/90">Descarga nuestra carta responsiva de adopción para conocer los términos y condiciones.</p>
          </div>
          
          {/* Botón circular flotante */}
          <div className="absolute right-8 bottom-8">
            <a
              href="/doc/Carta_Responsiva_de_Adpcion.pdf"
              download="Carta_Responsiva_de_Adpcion.pdf"
              className="rounded-full bg-red-600 hover:bg-red-700 text-white font-bold p-5 shadow-xl transition-all transform hover:scale-110 flex items-center justify-center w-16 h-16 animate-bounce"
              aria-label="Descargar carta responsiva de adopción"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M8 12l4 4m0 0l4-4m-4 4V4"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Galería de animales */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Nuestros Animales en Adopción</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map(animal => (
            <AnimalCard 
              key={animal.id} 
              animal={animal} 
              onAdoptClick={handleAdoptClick}
            />
          ))}
        </div>
      </section>

      {/* Formulario de adopción */}
      {showForm && (
        <AdoptionForm 
          animal={selectedAnimal} 
          onClose={() => setShowForm(false)} 
        />
      )}
    </div>
  )
}

export default Adoptions