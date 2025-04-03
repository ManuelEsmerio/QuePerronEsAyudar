import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useState, useEffect, useRef } from 'react'
import { navLinks } from '../database'

export default function Navbar() {
  const { isDarkMode } = useDarkMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  // Cerrar menú al hacer clic fuera o en un enlace
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
         buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <header className={`fixed top-0 w-full z-[1000] ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 shadow-gray-900/50' 
        : 'bg-gradient-to-b from-white to-gray-50 shadow-gray-200/50'
    } shadow-lg`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className={`mr-3 rounded-full flex items-center justify-center 
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18
              transition-all duration-300 group-hover:scale-105 ${
              isDarkMode 
                ? 'bg-purple-600 text-white' 
                : 'bg-amber-400 text-amber-900'
            }`}>
              <img 
                src="/images/logo.webp" 
                alt="Logo Qué Perrón es Ayudar" 
                className="w-full h-auto object-cover rounded-full"
              />
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isDarkMode 
                ? 'text-purple-300 group-hover:text-purple-400' 
                : 'text-amber-700 group-hover:text-amber-600'
            }`}>
              #QuePerrónEsAyudar
            </span>
          </Link>

          {/* Menú principal (desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-all duration-300 font-medium py-2 px-1 border-b-2 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-purple-400 border-transparent hover:border-purple-400' 
                    : 'text-gray-700 hover:text-amber-600 border-transparent hover:border-amber-500'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium hover:scale-105 ${
                isDarkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-900/50' 
                  : 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30'
              } shadow-md`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón hamburguesa (mobile) */}
          <button 
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md md:hidden relative ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-700' 
                : 'text-gray-700 hover:bg-gray-100'
            } transition-all duration-300`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`w-6 h-6 flex flex-col justify-between transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-purple-300' : 'bg-amber-600'
              } ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-purple-300' : 'bg-amber-600'
              } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-purple-300' : 'bg-amber-600'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Menú móvil */}
        <div 
          ref={menuRef}
          className={`md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] ${
            isDarkMode 
              ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
              : 'bg-gradient-to-b from-white to-gray-50'
          } transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          } shadow-xl z-[999] overflow-y-auto`}
        >
          <div className="container mx-auto px-6 py-8">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-4 px-6 rounded-lg transition-all duration-300 font-medium ${
                    isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-purple-400'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-amber-600'
                  } hover:pl-8 hover:shadow-lg ${
                    isDarkMode ? 'hover:shadow-purple-900/20' : 'hover:shadow-amber-500/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`mt-8 py-4 px-6 rounded-lg text-center font-medium transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-900/50'
                    : 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30'
                } shadow-md`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}