const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={animal.image} 
        alt={animal.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold dark:text-white">{animal.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{animal.breed} • {animal.age}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-200">{animal.description}</p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Adoptar
        </button>
      </div>
    </div>
  )
}

export default AnimalCard