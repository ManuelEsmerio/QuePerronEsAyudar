import { useDarkMode } from '../contexts/DarkModeContext'

// SVG imports for dark and light mode icons
// Note: Ensure you have the correct path to your SVG files
import DarkModeIcon from "../assets/dark.svg?react";
import LightModeIcon from "../assets/light.svg?react";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
        isDarkMode
          ? 'bg-purple-600 hover:bg-purple-700 text-yellow-300'
          : 'bg-amber-400 hover:bg-amber-500 text-gray-800'
      }`}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDarkMode ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon />
      )}
    </button>
  )
}

export default DarkModeToggle