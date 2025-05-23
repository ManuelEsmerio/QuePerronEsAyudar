import React, { lazy, memo, Suspense } from 'react'

// Carga diferida de iconos
const ClockIcon = lazy(() => import("../assets/clock.svg?react"));
const LocationIcon = lazy(() => import("../assets/location.svg?react"));
const CalendarIcon = lazy(() => import("../assets/calendar.svg?react"));

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

export default EventCard