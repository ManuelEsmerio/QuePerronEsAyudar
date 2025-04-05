import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useState, useEffect, useRef } from 'react'
import { navLinks } from '../database'

export default function Navbar() {
  const { isDarkMode } = useDarkMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  // Efecto para detectar modales abiertos
  useEffect(() => {
    const handler = () => {
      setModalIsOpen(document.querySelectorAll('[data-modal-open="true"]').length > 0);
    };
    
    // Observar cambios en el DOM
    const observer = new MutationObserver(handler);
    observer.observe(document.body, { subtree: true, attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // Efecto mejorado para el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setHasScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
         buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
  }, [isMenuOpen])

  return (
    <header className={`fixed top-0 w-full z-[999] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.4,1)] ${
      hasScrolled || isMenuOpen || modalIsOpen
        ? isDarkMode 
          ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' 
          : 'bg-white/95 shadow-lg backdrop-blur-sm'
        : `backdrop-blur-sm ${
            isDarkMode 
              ? 'bg-gray-900/20 shadow-none' 
              : 'bg-white/20 shadow-none'
          }`
    } ${isMenuOpen ? (isDarkMode ? 'bg-gray-900' : 'bg-white') : ''}`}>

      <div className={`container mx-auto px-6 py-3 transition-all duration-300 ${
        hasScrolled ? 'py-3' : 'py-4'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className={`mr-3 rounded-full flex items-center justify-center 
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
              transition-all duration-500 group-hover:scale-105 ${
              isDarkMode 
                ? 'bg-purple-600 text-white' 
                : 'bg-amber-400 text-amber-900'
              } ${
                hasScrolled ? 'scale-95' : 'scale-100'
              }`}>
              <img 
                src="/images/logo.webp" 
                alt="Logo Qué Perrón es Ayudar" 
                className="w-full h-auto object-cover rounded-full"
              />
            </div>
            <span className={`text-2xl font-bold transition-all duration-500 ${
              isDarkMode 
                ? 'text-purple-300 group-hover:text-purple-400' 
                : 'text-amber-700 group-hover:text-amber-600'
              } ${
                hasScrolled ? 'scale-95' : 'scale-100'
              }`}>
              #QuePerrónEsAyudar
            </span>
          </Link>

          {/* Menú principal (desktop) */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative transition-all duration-300 font-medium py-2 px-1 group ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {link.text}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-out ${
                  isDarkMode 
                    ? 'bg-purple-400 group-hover:w-full' 
                    : 'bg-amber-500 group-hover:w-full'
                } ${hasScrolled ? 'w-0' : 'w-0'} group-hover:w-full`}></span>
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium hover:scale-105 ${
                isDarkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-900/50' 
                  : 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30'
              } shadow-md transform hover:shadow-lg ${
                hasScrolled ? 'scale-95 hover:scale-100' : 'scale-100'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón hamburguesa (mobile) - RESTAURADO */}
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

        {/* Menú móvil - RESTAURADO */}
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