import { lazy } from 'react';
import { blogPosts, events } from "../database"
import useScrollToHash from '../hooks/useScrollToHash';

const EventCard = lazy(() => import("../components/EventCard"));
const ArticleCard = lazy(() => import("../components/ArticleCard"));

const Blog = () => {  
  useScrollToHash();

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

export default Blog;