import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { teamMembers } from '../database';
import { Link } from 'react-router-dom';

const CarruselTeam = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">Nuestro Equipo de Voluntariado  </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center h-full mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col h-full">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <div className='flex justify-center'>
            <Link 
                type="submit" 
                className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                            text-white font-bold py-3 px-6 rounded-lg inline-flex items-center 
                            shadow-lg transition-transform transform hover:scale-105"
                to="/how-to-help#volunteer"
                aria-label="Únete a nuestro equipo"
            >
                Únete a nuestro equipo
            </Link>
        </div>
    
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
            ¡Siempre estamos buscando nuevos voluntarios apasionados por ayudar!
        </p>
    </section>
  );
};

export default CarruselTeam