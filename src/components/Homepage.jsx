import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import { Link } from 'react-scroll';

function Homepage() {
  return (
    <div id='Home' className='w-full pt-20 h-[50vh] md:h-[80vh] overflow-hidden relative'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={1500}
        className='w-full h-full'
      >
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom-centered Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10">
  <Link
    to="Events"
    smooth={true}
    duration={500}
    offset={-100}
    className="cursor-pointer text-black font-bold bg-[#ffda1b] rounded-xl text-center hover:bg-[#d8b400] transition-all duration-300 
      text-sm px-4 py-2 w-[60vw]
      sm:text-base sm:px-5 sm:py-2.5 sm:w-[150px]
      md:text-lg md:px-6 md:py-3 md:w-[220px]
      lg:w-[250px]"
  >
    See what we do
  </Link>
</div>

    </div>
  );
}

export default Homepage;
