const SuccessStories = () => {
  return (
    <div className="w-full min-h-screen px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Casos de Éxito</h1>
      
      {/* Historias de adopción */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Historias de Adopción</h2>
        
        <div className="space-y-12">
          {[
            {
              id: 1,
              name: "Toby",
              before: "/assets/images/toby-before.jpg",
              after: "/assets/images/toby-after.jpg",
              story: "Toby fue rescatado de la calle en muy mal estado de salud. Después de meses de cuidados, encontró un hogar con la familia Martínez, donde es el consentido de la casa.",
              quote: "Toby llegó a llenar de alegría nuestro hogar. No podemos imaginar la vida sin él.",
              author: "Familia Martínez"
            },
            {
              id: 2,
              name: "Mimi",
              before: "/assets/images/mimi-before.jpg",
              after: "/assets/images/mimi-after.jpg",
              story: "Mimi fue abandonada en una caja frente a nuestro refugio. Hoy vive feliz con Laura, una estudiante universitaria que la adora.",
              quote: "Mimi es mi compañera de estudios y la mejor amiga que podría tener.",
              author: "Laura Sánchez"
            },
            {
              id: 3,
              name: "Rufo",
              before: "/assets/images/rufo-before.jpg",
              after: "/assets/images/rufo-after.jpg",
              story: "Rufo fue rescatado de una construcción abandonada. Después de recuperarse, fue adoptado por un jubilado que necesitaba compañía.",
              quote: "Rufo y yo nos cuidamos mutuamente. Es mi mejor compañero de caminatas.",
              author: "Don Manuel"
            }
          ].map(story => (
            <div key={story.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{story.name}: Una historia de esperanza</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2 dark:text-gray-300">Antes</h4>
                    <img 
                      src={story.before} 
                      alt={`${story.name} antes de la adopción`} 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 dark:text-gray-300">Después</h4>
                    <img 
                      src={story.after} 
                      alt={`${story.name} después de la adopción`} 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
                
                <p className="text-lg mb-6 dark:text-gray-200">{story.story}</p>
                
                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="italic mb-2 dark:text-gray-200">"{story.quote}"</p>
                  <p className="font-bold dark:text-gray-300">- {story.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonios */}
      <section>
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Testimonios</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              quote: "Adoptar a Luna fue la mejor decisión que hemos tomado como familia. Llenó nuestro hogar de alegría.",
              author: "Familia Rodríguez",
              role: "Adoptantes"
            },
            {
              id: 2,
              quote: "Como voluntaria en el refugio, he visto transformaciones increíbles. Cada adopción exitosa nos llena de energía para seguir.",
              author: "Ana Torres",
              role: "Voluntaria"
            },
            {
              id: 3,
              quote: "Donar mensualmente al refugio es mi pequeña contribución para ayudar a estos ángeles sin hogar.",
              author: "Carlos Jiménez",
              role: "Donador"
            }
          ].map(testimonial => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-4 dark:text-gray-200">"{testimonial.quote}"</p>
              <p className="font-bold dark:text-gray-300">{testimonial.author}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SuccessStories