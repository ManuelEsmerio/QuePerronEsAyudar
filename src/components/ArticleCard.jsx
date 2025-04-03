import { Link } from "react-router-dom";

// components/ArticleCard.js
export default function ArticleCard({ article }) {

    console.log('ArticleCard', article);
  return (
    <div key={article.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img 
        src={article.image} 
        alt={article.title} 
        width="192"
        height="192"
        className="w-full h-48 object-cover"
    />
    <div className="p-6">
        <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{article.category}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{article.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
        <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
            Leer más
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </Link>
    </div>
    </div>
  );
}