import { useEffect, useRef, useState } from 'react';
import OptimizedImage from "./OptimizedImage"
import { useDisableScroll } from '../hooks/useDisableScroll';

const AnimalCard = ({ animal, onAdoptClick }) => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const modalRef = useRef(null);

  useDisableScroll(showDetailModal);

  // Detectar clic fuera del modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowDetailModal(false);
      }
    };

    if (showDetailModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDetailModal]);


  const handleCardClick = (e) => {
    // Evita que el click se propague al botón de adopción
    if (!e.target.closest('button')) {
      setShowDetailModal(true);
    }
  };

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
        onClick={handleCardClick}
      >
        <OptimizedImage 
          src={animal.image} 
          alt={`Foto de ${animal.name}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold dark:text-white">{animal.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{animal.breed} • {animal.age}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-200 line-clamp-2">{animal.description}</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAdoptClick(animal);
            }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
          >
            Adoptar
          </button>
        </div>
      </div>

      {/* Modal de detalle */}
      {showDetailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-[1000] pt-[navbarHeight]" data-modal-open="true">
          <div 
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <OptimizedImage 
                src={animal.image} 
                alt={`Foto de ${animal.name}`}
                className="w-full h-64 md:h-96 object-cover"
              />
              <button
                onClick={() => setShowDetailModal(false)}
                className="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold dark:text-white">{animal.name}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                    {animal.breed} • {animal.age} • {animal.gender}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    onAdoptClick(animal);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-colors"
                >
                  Adoptar
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold dark:text-white mb-4">Sobre mí</h3>
                  <p className="text-gray-700 dark:text-gray-300">{animal.description}</p>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold dark:text-white mb-4">Detalles</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Tamaño</p>
                        <p className="dark:text-white">{animal.size}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Personalidad</p>
                        <p className="dark:text-white">{animal.personality}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Salud</p>
                        <p className="dark:text-white">{animal.health}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Convive con</p>
                        <p className="dark:text-white">{animal.getsAlongWith}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold dark:text-white mb-4">Requisitos de adopción</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Hogar con espacio adecuado
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Compromiso de esterilización
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Visitas de seguimiento
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold dark:text-white mb-4">Historia</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {animal.history || 'Rescatado por nuestro refugio, en busca de un hogar amoroso.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AnimalCard