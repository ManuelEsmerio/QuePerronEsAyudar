import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ourColaborators } from '../database';

const CarruselMembers = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">Nuestros Colaboradores</h2>

      <Swiper
        modules={[Mousewheel, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        mousewheel={{ forceToAxis: true }}
        pagination={false}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="w-full"
      >
        {ourColaborators.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center h-full">
            <div className="bg-white dark:bg-gray-800 flex items-center justify-center w-full h-[150px]">
              <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarruselMembers