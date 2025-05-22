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
    <div id='Home' className='w-[100%] pt-20 h-[50vh] md:h-[80vh] overflow-x-hidden relative'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={1500}
        className='w-full h-full '
      >
        {[img1, img2, img3, img4 , img5].map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 z-10">
  <Link
    to="Events"
    smooth={true}
    duration={500}
    offset={-100}
    className="cursor-pointer no-underline text-black font-bold transition-colors duration-300 px-4 py-3 w-[20vw] min-w-max flex justify-center bg-[#ffda1b] rounded-xl hover:bg-[#d8b400]"
  >
    <p>See what we do</p>
  </Link>
</div>
    </div>
  );
}

export default Homepage;
