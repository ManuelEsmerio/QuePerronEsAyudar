import { Link } from 'react-router-dom'
import AnimalCard from '../components/AnimalCard'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner principal */}
      <div className="relative rounded-xl overflow-hidden mb-12 h-96">
        <img 
          src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=1200&auto=format" 
          alt="Animales del refugio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dales un hogar, recibe amor</h1>
            <p className="text-xl mb-8">Rescatamos, rehabilitamos y buscamos familias para animales abandonados.</p>
            <Link 
              to="/adoptions" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg"
            >
              Adopta Ahora
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de bienvenida */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Bienvenidos a Refugio Animal</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 dark:text-gray-200">
              Somos una organización sin fines de lucro comprometida con el bienestar animal. 
              Nuestro objetivo es rescatar, rehabilitar y encontrar hogares amorosos para animales 
              en situación de abandono o maltrato.
            </p>
            <p className="text-lg mb-6 dark:text-gray-200">
              Desde nuestra fundación en 2010, hemos ayudado a más de 1,500 animales a encontrar 
              un hogar donde reciben el amor y cuidado que merecen.
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            >
              Conoce más
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src="/assets/images/about.jpg" 
              alt="Voluntarios con animales" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white p-8 rounded-xl mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tu ayuda hace la diferencia</h2>
          <p className="text-lg mb-6">
            Con tu donación podemos seguir rescatando animales, proporcionándoles atención veterinaria, 
            alimento y un lugar seguro mientras encuentran un hogar permanente.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/how-to-help" 
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full"
            >
              Donar Ahora
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full border border-white"
            >
              Ser Voluntario
            </Link>
          </div>
        </div>
      </section>

      {/* Animales destacados */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Ellos buscan un hogar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Estos datos vendrían de una API o archivo JSON */}
          {[
            {
              id: 1,
              name: "Max",
              breed: "Mezcla",
              age: "2 años",
              description: "Max es un perro juguetón y cariñoso que adora los paseos y los niños.",
              image: "/assets/images/dog1.jpg"
            },
            {
              id: 2,
              name: "Luna",
              breed: "Siamés",
              age: "1 año",
              description: "Luna es una gata tranquila que disfruta de los mimos y las siestas al sol.",
              image: "/assets/images/cat1.jpg"
            },
            {
              id: 3,
              name: "Rocky",
              breed: "Bulldog",
              age: "4 años",
              description: "Rocky es un perro tranquilo que busca un hogar donde pueda descansar y recibir amor.",
              image: "/assets/images/dog2.jpg"
            }
          ].map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/adoptions" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full"
          >
            Ver todos los animales
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home