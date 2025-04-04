import { lazy, Suspense, memo } from 'react';
import ArticleCard from "../components/ArticleCard"
import { blogPosts, events } from "../database"

// Carga diferida de iconos
const ClockIcon = lazy(() => import("../assets/clock.svg?react"));
const LocationIcon = lazy(() => import("../assets/location.svg?react"));
const CalendarIcon = lazy(() => import("../assets/calendar.svg?react"));

const Blog = () => {
  return (
    <div className="w-full min-h-screen px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Blog y Noticias</h1>
      
      {/* Artículos destacados */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Artículos Recientes</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(article => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow" 
            />
          ))}
        </div>
      </section>
      
      {/* Eventos y campañas */}
      <section>
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Eventos y Campañas</h2>
        
        <div className="space-y-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  )
}

// Componente separado para Eventos con carga diferida de iconos
const EventCard = memo(({ event }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/3">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
          loading="lazy" // Carga diferida de imágenes
          width="400"  // Definir tamaño aproximado
          height="300" // Definir tamaño aproximado
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-2xl font-bold mb-2 dark:text-white">{event.title}</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          <Suspense fallback={<span>...</span>}>
            <div className="flex items-center">
              <CalendarIcon />
              <span className="dark:text-gray-300">{event.date}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon />
              <span className="dark:text-gray-300">{event.time}</span>
            </div>
            <div className="flex items-center">
              <LocationIcon />
              <span className="dark:text-gray-300">{event.location}</span>
            </div>
          </Suspense>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Más información
        </button>
      </div>
    </div>
  </div>
));

export default Blog;