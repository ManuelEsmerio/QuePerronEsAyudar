import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext' // Custom hook (ver abajo)
import { useState } from 'react'
import { navLinks } from '../database'

export default function Navbar() {
  const { isDarkMode } = useDarkMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 shadow-gray-800' 
        : 'bg-white shadow-gray-200'
    } shadow-md`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-purple-600 text-white' 
                : 'bg-amber-400 text-amber-900'
            }`}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <span className={`text-2xl font-bold ${
              isDarkMode 
                ? 'text-purple-300' 
                : 'text-amber-700'
            }`}>
              #QuePerrónEsAyudar
            </span>
          </Link>

          {/* Menú principal */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`transition-colors font-medium ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isDarkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-amber-500 hover:bg-amber-600 text-white'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón hamburguesa */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md md:hidden ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
        </div>
      </div>
    </header>
  )
}