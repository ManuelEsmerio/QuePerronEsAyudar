import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext'

const Footer = () => {

  const { isDarkMode } = useDarkMode()

  return (
    <footer className="bg-gray-800 dark:bg-gray-700 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">#QuePerronEsAyudar</h3>
          {/* <div className={`mr-3 rounded-full flex items-center justify-center 
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
              transition-all duration-500 group-hover:scale-105 ${
              isDarkMode 
                ? 'bg-purple-600 text-white' 
                : 'bg-amber-400 text-amber-900'
              }`}> */}
                <img 
                  src="/images/logo.webp" 
                  alt="Logo Qué Perrón es Ayudar" 
                  className="object-cover rounded-full w-24 h-24"
                />
          {/* </div> */}
        </div>
        <div>
          <h4 className="font-bold mb-4">Enlaces</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">Sobre Nosotros</Link></li>
            <li><Link to="/adoptions#sectionAdoptionAnimals" className="hover:underline">Adopciones</Link></li>
            <li><Link to="/how-to-help#sectionInKindDonations" className="hover:underline">Cómo Ayudar</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a 
                href="/doc/Carta_Responsiva_de_Adpcion.pdf"
                download="Carta_Responsiva_de_Adpcion.pdf"
                className="hover:underline">
                  Aviso de Privacidad
              </a>
            </li>
            <li><Link to="/contact" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-pink-400">Instagram</a>
            <a href="#" className="hover:text-blue-300">Twitter</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-gray-700 text-center">
        <p>© {new Date().getFullYear()} #QuePerronEsAyudar. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer