import ArticleCard from "../components/ArticleCard"
import { blogPosts, events } from "../database"

const Blog = () => {
  return (
    <div className="w-full min-h-screen px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Blog y Noticias</h1>
      
      {/* Artículos destacados */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Artículos Recientes</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(article => (
            <ArticleCard key={article.id} article={article} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow" />
          ))}
        </div>
      </section>
      
      {/* Eventos y campañas */}
      <section>
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Eventos y Campañas</h2>
        
        <div className="space-y-6">
          {events.map(event => (
            <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="dark:text-gray-300">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="dark:text-gray-300">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="dark:text-gray-300">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Más información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog