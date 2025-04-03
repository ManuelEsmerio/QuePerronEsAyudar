import { useState } from 'react'
import AnimalCard from '../components/AnimalCard'
import { animals, stepsAdoption } from '../database'

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
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección con efecto parallax */}
      <section className="relative mb-16 rounded-xl overflow-hidden min-h-[400px] flex items-center">
        {/* Capa de fondo con parallax */}
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
          }}
        >
          {/* Overlay para mejor legibilidad */}
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        </div>
        
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

      {/* Galería de animales (sección original) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Nuestros Animales en Adopción</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      {/* Formulario de adopción */}
      {showForm && (
        <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold dark:text-white">Formulario de Adopción</h2>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            
            <p className="mb-6 dark:text-gray-300">
              Estás solicitando adoptar a <span className="font-bold">{selectedAnimal.name}</span>. 
              Por favor completa el siguiente formulario con tus datos.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium dark:text-gray-300">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium dark:text-gray-300">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium dark:text-gray-300">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block mb-2 font-medium dark:text-gray-300">Dirección</label>
                <input 
                  type="text" 
                  id="address" 
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="living" className="block mb-2 font-medium dark:text-gray-300">Tipo de vivienda</label>
                  <select 
                    id="living" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="house">Casa con patio</option>
                    <option value="apartment">Apartamento</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2 font-medium dark:text-gray-300">Experiencia con mascotas</label>
                  <select 
                    id="experience" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="none">Ninguna</option>
                    <option value="some">Alguna experiencia</option>
                    <option value="much">Mucha experiencia</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="reason" className="block mb-2 font-medium dark:text-gray-300">¿Por qué quieres adoptar a {selectedAnimal.name}?</label>
                <textarea 
                  id="reason" 
                  rows="4" 
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mr-2"
                  required
                />
                <label htmlFor="terms" className="text-sm dark:text-gray-300">
                  Acepto los términos de adopción y me comprometo a cuidar responsablemente de {selectedAnimal.name}.
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  )
}

export default Adoptions