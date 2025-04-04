const AdoptionForm = ({ animal, onClose }) => (
  <div className="fixed inset-0 z-[1001] overflow-y-auto">
    {/* Fondo oscuro semi-transparente */}
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      onClick={onClose}
    ></div>
    
    {/* Contenedor principal del formulario */}
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      {/* Contenedor del formulario */}
      <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
        <div className="bg-white dark:bg-gray-800 px-6 py-6 sm:p-8">
          {/* Cabecera del formulario */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold dark:text-white">Formulario de Adopción</h2>
              <p className="mt-2 dark:text-gray-300">
                Estás solicitando adoptar a <span className="font-bold">{animal.name}</span>.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 -mt-2 -mr-2"
              aria-label="Cerrar formulario"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Formulario */}
          <form className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium dark:text-gray-300">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium dark:text-gray-300">Dirección</label>
                <input 
                  type="text" 
                  id="address" 
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="living" className="block text-sm font-medium dark:text-gray-300">Tipo de vivienda</label>
                <select 
                  id="living" 
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="">Selecciona...</option>
                  <option value="house">Casa con patio</option>
                  <option value="apartment">Apartamento</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium dark:text-gray-300">Experiencia con mascotas</label>
                <select 
                  id="experience" 
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
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
              <label htmlFor="reason" className="block text-sm font-medium dark:text-gray-300">¿Por qué quieres adoptar a {animal.name}?</label>
              <textarea 
                id="reason" 
                rows="4" 
                className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="dark:text-gray-300">
                  Acepto los términos de adopción y me comprometo a cuidar responsablemente de {animal.name}.
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default AdoptionForm