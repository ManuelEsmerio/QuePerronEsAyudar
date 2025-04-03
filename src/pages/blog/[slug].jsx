import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../../database';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = blogPosts.find(post => post.slug === slug);

  const relatedArticles = blogPosts.filter(
    post => post.slug !== slug && post.category === article?.category
  ).slice(0, 2);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Artículo no encontrado</h1>
          <Link 
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Contenido principal */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Imagen destacada */}
          <div className="relative h-72 sm:h-80 lg:h-96 w-full">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Contenido del artículo */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Publicado el {article.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: article.longContent }}>
            </div>

            {/* Sección de autor (opcional) */}
            {
              article.references.map((reference, index) => (
                <div key={index} className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div class="relative w-12 h-12">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="text-blue-500">
                          <circle cx="50" cy="50" r="48" fill="currentColor" class="opacity-20"/>
                          <path 
                            fill="currentColor" 
                            opacity="1"
                            d="M50 40c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zm0 10c-9.4 0-17 7.6-17 17v7h34v-7c0-9.4-7.6-17-17-17z"
                            class="text-blue-600 dark:text-blue-400"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {reference.autor}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {reference.title}
                      </p>
                      <a className='mt-3 text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-400' href={reference.url}>{reference.url}</a>
                    </div>
                  </div>
                </div>
              ))
            }
            
            {/* Botón de volver */}
            <div className="mt-8">
              <Link 
                to="/blog"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-colors"
              >
                ← Volver al blog
              </Link>
            </div>
          </div>
        </article>

        {/* Sección de artículos relacionados (opcional) */}
        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map(related => (
                  <div key={related.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={`/blog/${related.slug}`} className="block">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{related.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{related.date}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}