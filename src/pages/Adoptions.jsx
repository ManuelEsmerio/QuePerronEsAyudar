import { useState } from 'react'
import AnimalCard from '../components/AnimalCard'

const Adoptions = () => {
  const [showForm, setShowForm] = useState(false)
  const [selectedAnimal, setSelectedAnimal] = useState(null)

  // Datos de ejemplo - en una app real vendrían de una API
  const animals = [
    {
      id: 1,
      name: "Max",
      breed: "Mezcla",
      age: "2 años",
      gender: "Macho",
      size: "Mediano",
      description: "Max es un perro juguetón y cariñoso que adora los paseos y los niños. Está esterilizado y con todas sus vacunas al día.",
      image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=600&auto=format"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Siamés",
      age: "1 año",
      gender: "Hembra",
      size: "Pequeño",
      description: "Luna es una gata tranquila que disfruta de los mimos y las siestas al sol. Ideal para apartamentos.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format"
    },
    {
      id: 3,
      name: "Rocky",
      breed: "Bulldog",
      age: "4 años",
      gender: "Macho",
      size: "Grande",
      description: "Rocky es un perro tranquilo que busca un hogar donde pueda descansar y recibir amor. Necesita un patio.",
      image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&auto=format"
    },
    {
      id: 4,
      name: "Bella",
      breed: "Labrador",
      age: "3 años",
      gender: "Hembra",
      size: "Grande",
      description: "Bella es una perra activa que adora jugar y nadar. Perfecta para familias deportistas.",
      image: "/assets/images/dog3.jpg"
    },
    {
      id: 5,
      name: "Simón",
      breed: "Mestizo",
      age: "5 meses",
      gender: "Macho",
      size: "Pequeño",
      description: "Simón es un cachorro lleno de energía que está buscando una familia paciente para crecer juntos.",
      image: "/assets/images/dog4.jpg"
    },
    {
      id: 6,
      name: "Mía",
      breed: "Persa",
      age: "2 años",
      gender: "Hembra",
      size: "Mediano",
      description: "Mía es una gata elegante que disfruta de la tranquilidad y los mimos en su propio tiempo.",
      image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&auto=format"
    }
  ]

  const handleAdoptClick = (animal) => {
    setSelectedAnimal(animal)
    setShowForm(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Adopciones</h1>
      
      {/* Proceso de adopción */}
      <section className="mb-16 bg-blue-50 dark:bg-gray-800 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestro Proceso de Adopción</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Conoce al animal",
              description: "Visita nuestro refugio o agenda una videollamada para conocer a tu posible nuevo compañero."
            },
            {
              step: "2",
              title: "Llena la solicitud",
              description: "Completa nuestro formulario de adopción para que conozcamos más de ti."
            },
            {
              step: "3",
              title: "Visita al hogar",
              description: "Realizamos una visita a tu hogar para asegurarnos que es el lugar adecuado."
            },
            {
              step: "4",
              title: "Firma de contrato",
              description: "Firmamos un contrato de adopción donde te comprometes a cuidar del animal."
            }
          ].map((step, index) => (
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

      {/* Galería de animales */}
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