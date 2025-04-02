import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Aquí se renderizarán las páginas */}
      </main>
      <Footer />
      <DarkModeToggle />
    </div>
  )
}