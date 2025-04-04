import { lazy, useState } from "react";
import { donations } from "../database"
import useScrollToHash from "../hooks/useScrollToHash";

const ShareIcon = lazy(() => import("../assets/share.svg?react"));

const HowToHelp = () => {

  const [copied, setCopied] = useState(false);
  
  const bankData = `Banco: BBVA
    Titular: Qué Perrón es Ayudar A.C.
    Cuenta: 4152 3134 5678 9010
    CLABE: 0123 4567 8901 2345 67`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankData)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = bankData;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
  };

  useScrollToHash();

  return (
    <div className="w-full min-h-screen px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Cómo Ayudar</h1>
      
      {/* Donaciones monetarias */}
      <section className="mb-16" id="sectionDonations">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Donaciones Monetarias</h2>
        <p className="text-lg mb-6 dark:text-gray-200">
          Tu contribución económica nos permite cubrir los gastos veterinarios, alimento, medicinas 
          y el mantenimiento de nuestras instalaciones.
        </p>
        
        <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl mb-8">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Datos Bancarios</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 dark:text-gray-300">Transferencias SPEI</h4>
              <ul className="space-y-2 dark:text-gray-200">
                <li><strong>Banco:</strong> BBVA</li>
                <li><strong>Nombre:</strong> Que perrón es Ayudar A.C</li>
                <li><strong>Cuenta:</strong> 0124 830 776</li>
                <li><strong>CLABE:</strong> 012 3630 0124 830 7765</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 dark:text-gray-300">Otras formas de donar</h4>
              <ul className="space-y-2 dark:text-gray-200">
                <li><strong>PayPal:</strong> donaciones@refugioanimal.org</li>
                <li><strong>Depósitos en OXXO:</strong> Referencia 1234567890</li>
                <li><strong>Criptomonedas:</strong> Bitcoin, Ethereum</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={copyToClipboard}
              className={`mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-all duration-200 ${
                copied ? 'bg-green-600 hover:bg-green-700' : ''
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ¡Copiado!
                </>
              ) : (
                <>
                  <ShareIcon />
                  Compartir datos bancarios
                </>
              )}
            </button>
          
            {copied && (
              <div className="absolute -bottom-10 left-0 bg-gray-800 text-white text-sm py-1 px-3 rounded-md whitespace-nowrap">
                Datos copiados al portapapeles
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Donaciones en especie */}
      <section className="mb-16" id="sectionInKindDonations">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Donaciones en Especie</h2>
        <p className="text-lg mb-6 dark:text-gray-200">
          También puedes ayudarnos donando productos que necesitamos para el cuidado diario de los animales.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donations.map((group, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 dark:text-white">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 mt-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* Voluntariado */}
      <section id="volunteer">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Voluntariado</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6 dark:text-gray-200">
              Nuestro refugio funciona gracias al trabajo comprometido de voluntarios que dedican su tiempo 
              y energía a cuidar de los animales. ¡Te necesitamos!
            </p>
            <div className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">¿Qué hacen nuestros voluntarios?</h3>
              <ul className="space-y-3 dark:text-gray-200">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Paseo y socialización de los animales
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Limpieza y mantenimiento del refugio
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Apoyo en eventos y campañas
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Transporte de animales al veterinario
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Gestionar casa puente
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Buscar adopción responsable
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Rescatar animales en situación de calle
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Registro de Voluntarios</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="vol-name" className="block mb-2 font-medium dark:text-gray-300">Nombre completo</label>
                  <input 
                    type="text" 
                    id="vol-name" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vol-email" className="block mb-2 font-medium dark:text-gray-300">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="vol-email" 
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="vol-phone" className="block mb-2 font-medium dark:text-gray-300">Teléfono</label>
                    <input 
                      type="tel" 
                      id="vol-phone" 
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="vol-availability" className="block mb-2 font-medium dark:text-gray-300">Disponibilidad</label>
                  <select 
                    id="vol-availability" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="weekdays">Entre semana</option>
                    <option value="weekends">Fines de semana</option>
                    <option value="both">Ambos</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="vol-skills" className="block mb-2 font-medium dark:text-gray-300">Habilidades o experiencia relevante</label>
                  <textarea 
                    id="vol-skills" 
                    rows="3" 
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowToHelp