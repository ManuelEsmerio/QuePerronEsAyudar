import { Link } from 'react-router-dom'
import { lazy, useState } from 'react';

import { animals } from '../database'

const AnimalCard = lazy(() => import('../components/AnimalCard'))
const AdoptionForm = lazy(() => import('../components/AdoptionForm'))

import OptimizedImage from '../components/OptimizedImage'
import useScrollToHash from '../hooks/useScrollToHash';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null)  

  const handleAdoptClick = (animal) => {
    setSelectedAnimal(animal)
    setShowForm(true)
  }

  useScrollToHash();

  return (
    <>
      {/* Banner principal full-screen - VERSIÓN CORREGIDA */}
      <div className="relative w-full h-screen overflow-hidden py-6">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="/images/banner.jpg" 
            alt="Animales del refugio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-2xl mx-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Dales un hogar, recibe amor</h1>
              <p className="text-xl md:text-2xl mb-10">Rescatamos, rehabilitamos y buscamos familias para animales abandonados.</p>
              <Link 
                to="/adoptions" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105"
              >
                Adopta Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen px-4 py-6">
        {/* Sección de bienvenida */}
      <section className="mb-24 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white relative">
            <span className="relative inline-block">
              Bienvenidos a Que Perrón es Ayudar
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 dark:text-yellow-400 font-semibold">Qué Perrón es Ayudar</span> es una iniciativa ciudadana que nace del amor y respeto por los animales, con la misión de educar y sensibilizar a la comunidad sobre el bienestar y protección de perros y gatos en situación de calle en 
                <span className="text-blue-600 dark:text-yellow-400 font-semibold"> Tequila, Jalisco</span>. Creemos que cada ser vivo merece una vida digna, libre de maltrato y abandono, por lo que trabajamos incansablemente para generar un impacto positivo en nuestra comunidad a través de:
              </p>
              
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Campañas de concienciación
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Rescate y atención médica
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Promoción de adopción responsable
                </li>
              </ul>
              
              <div className="bg-blue-100 dark:bg-gray-700 p-6 rounded-xl border-l-4 border-blue-500 dark:border-yellow-400">
                <h3 className="text-2xl font-bold mb-3 text-blue-800 dark:text-yellow-400">Nuestro impacto</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Desde nuestra fundación, hemos logrado cambiar la vida de muchos perros y gatos, ofreciéndoles una segunda oportunidad para ser parte de una familia que los ame y cuide como merecen. Cada adopción concretada, cada animal rescatado y cada persona sensibilizada nos motiva a seguir adelante con nuestra labor.
                  Sin embargo, aún queda mucho por hacer. El abandono y maltrato animal siguen siendo un problema que requiere la colaboración de toda la sociedad.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to="/about" 
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                >
                  Conoce más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link 
                  to="/how-to-help#donations" 
                  className="inline-flex items-center bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30"
                >
                  ¡Colabora!
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <OptimizedImage 
                  src="/images/refugio-1.jpg" 
                  alt="Voluntarios con animales"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-lg">
                +200 vidas cambiadas
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Llamado a la acción */}
        <section className="bg-blue-600 dark:bg-blue-800 text-white p-8 rounded-xl mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Tu ayuda hace la diferencia</h2>
            <p className="text-lg mb-6">
              Con tu donación podemos seguir rescatando animales, proporcionándoles atención veterinaria, 
              alimento y un lugar seguro mientras encuentran un hogar permanente.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/how-to-help#sectionDonations" 
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full"
              >
                Donar Ahora
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full border border-white"
              >
                Ser Voluntario
              </Link>
            </div>
          </div>
        </section>

        {/* Animales destacados */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Ellos buscan un hogar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Estos datos vendrían de una API o archivo JSON */}
            {animals.slice(0,3).map(animal => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                onAdoptClick={handleAdoptClick}
              />
            ))}
          </div>
          {animals.length > 3 && (
            <div className="text-center mt-8">
              <Link 
                to="/adoptions" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full"
              >
                Ver todos los animales ({animals.length})
              </Link>
            </div>
          )}
        </section>

        {/* Formulario de adopción */}
        {showForm && (
          <AdoptionForm 
            animal={selectedAnimal} 
            onClose={() => setShowForm(false)} 
          />
        )}
      </div>
    </>
  )
}

export default Home