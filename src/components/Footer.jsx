import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-700 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Refugio Animal</h3>
          <p>Dedicados al rescate y protección de animales en situación de riesgo.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Enlaces</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">Sobre Nosotros</Link></li>
            <li><Link to="/adoptions" className="hover:underline">Adopciones</Link></li>
            <li><Link to="/how-to-help" className="hover:underline">Cómo Ayudar</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:underline">Aviso de Privacidad</Link></li>
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
        <p>© {new Date().getFullYear()} Refugio Animal. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer