import React, { useState } from 'react';
import arrow from '../assets/arrow.png';

function Celebrations() {
  const videos = [
    " /vite-adheera/videos/adheera_Eoy.mp4 ",
    "/vite-adheera/videos/adheera_childrens_day.mp4",
    "/vite-adheera/videos/IMG_0248.MP4"
    // Add more videos as needed
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='w-full min-h-screen bg-[#2d2d2d] flex items-center justify-center py-8 md:py-0'>
      <div className='w-full md:w-[90%] lg:w-[80%] xl:w-[60%] h-auto md:h-[90vh] flex flex-col items-start justify-evenly relative p-4 md:p-6 lg:p-8'>
        <h2 className='text-left font-bold text-xl sm:text-2xl text-white mb-4 md:mb-0'>
          Not a fan of reading? Then see it in action!
        </h2>
        
        <div className='w-full flex items-center justify-center my-4 md:my-0'>
          <img 
            src={arrow} 
            alt="" 
            className='w-[100px] sm:w-[120px] md:w-[150px]' 
          />
        </div>

        <div className='w-full h-[50vh] sm:h-[60vh] md:h-full bg-green-500 overflow-hidden relative rounded-lg'>
          <video 
            key={currentVideoIndex}
            controls 
            autoPlay 
            muted 
            loop 
            className='w-full h-full object-cover'
            playsInline // Important for mobile browsers
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Navigation arrows - larger on mobile for better touch targets */}
          <button 
            onClick={goToPrevVideo}
            className='absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-2 rounded-full hover:bg-opacity-75 transition'
            aria-label="Previous video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNextVideo}
            className='absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-2 rounded-full hover:bg-opacity-75 transition'
            aria-label="Next video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Video counter indicator */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm'>
            {currentVideoIndex + 1} / {videos.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Celebrations;