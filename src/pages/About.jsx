import { lazy, Suspense } from 'react';
import CarruselMembers from "../components/CarruselMembers"
import CarruselTeam from "../components/CarruselTeam"
import { teamMembers } from "../database"

// Componente optimizado para imágenes
const OptimizedImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
    decoding="async"
    width="800"  // Tamaño aproximado
    height="600" // Tamaño aproximado
  />
);

const About = () => {
  return (
    <div className="w-full min-h-screen px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Sobre Nosotros</h1>
      
      {/* Historia */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">#QuePerrónEsAyudar</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 dark:text-gray-200">
              Qué Perrón es Ayudar es una iniciativa ciudadana dedicada a educar y sensibilizar a la comunidad sobre el bienestar y protección de perros y gatos en Tequila, Jalisco. Nuestro objetivo es reducir el abandono y la crueldad animal a través de campañas de concienciación, rescate, atención médica y promoción de la adopción responsable.
            </p>
            <p className="text-lg mb-4 dark:text-gray-200">
              Funcionamos gracias al apoyo de voluntarios y donaciones de personas de buen corazón que creen en un mundo mejor para los animales. Trabajamos activamente en brigadas de esterilización, búsqueda de hogares responsables y en la recaudación de donativos en efectivo y especie para ayudar a aquellos animales que más lo necesitan.
            </p>
            <p className="text-lg dark:text-gray-200">
              Juntos, podemos hacer de Tequila un lugar más compasivo y seguro para nuestros amigos de cuatro patas. 🐶🐱💙
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop" 
              alt="Fundadores del refugio" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Misión</h3>
            <p className="text-lg dark:text-gray-200">
              Educar, sensibilizar y actuar en favor del bienestar de perros y gatos en situación de abandono o maltrato en Tequila, brindándoles asistencia, promoviendo la esterilización y fomentando la adopción responsable a través de la participación ciudadana y el apoyo de personas solidarias.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Visión</h3>
            <p className="text-lg dark:text-gray-200">
              Ser una comunidad referente en la protección y bienestar animal en Tequila, logrando una sociedad más consciente y comprometida, donde cada perro y gato tenga una vida digna, sin maltrato ni abandono, gracias a la educación, el rescate y el apoyo solidario.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Cargando equipo...</div>}>
        <CarruselTeam />
      </Suspense>

      {/* Colaboradores */}
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Cargando colaboradores...</div>}>
        <CarruselMembers />
      </Suspense>
    </div>
  )
}

export default About