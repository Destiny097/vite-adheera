import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import images from "d:/vite-adheera/src/components/data/Events";

const EventsCarousol = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='w-full bg-[#ffda18] flex flex-col items-center justify-center'>
      <div className='w-full h-full'>
        <div className='w-full bg-purple-700 text-white text-center flex items-center justify-center py-4'>
          <h2 className='text-2xl md:text-4xl font-bold px-2'>
            Follow the story, one photo at a time!
          </h2>
        </div>

        <div className="text-center mb-10 mt-10  overflow-hidden relative flex items-center justify-center">
          <div className="w-full overflow-hidden relative ">
            <Marquee
              speed={100}
              pauseOnClick={!selectedImage}
              play={!selectedImage}
              gradient={false}
              className="flex gap-[2vw] min-w-[200%]"
            >
              {[...images, ...images].map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className="flex flex-col items-center flex-shrink-0 max-w-[250px] w-[70vw] sm:w-[250px] cursor-pointer mx-4"
                >
                  {index % 2 === 0 ? (
                    <>
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full max-h-[180px] object-cover rounded-[10px] shadow-md transition-transform duration-200 ease-in-out hover:scale-105 active:scale-105"
                      />
                      <div className="w-[2px] h-[10vh] bg-black my-2.5"></div>
                      <p className="mt-2 text-[#5d1aae] font-bold text-center text-sm sm:text-base">{img.caption}</p>
                      <p className="text-black font-bold text-center text-sm sm:text-base">{img.date}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[#5d1aae] font-bold text-center text-sm sm:text-base">{img.caption}</p>
                      <p className="text-black font-bold text-center text-sm sm:text-base">{img.date}</p>
                      <div className="w-[2px] h-[10vh] bg-black my-2.5"></div>
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full max-h-[180px] object-cover rounded-[10px] shadow-md transition-transform duration-200 ease-in-out hover:scale-105 active:scale-105"
                      />
                    </>
                  )}
                </div>
              ))}
            </Marquee>
          </div>

          {/* Modal */}
          {selectedImage && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1000] flex items-center justify-center px-2">
              <div className="bg-white p-5 rounded-[10px] shadow-xl text-center z-[1001] max-w-[700px] max-h-[85vh] w-full overflow-hidden flex flex-col items-center justify-center relative sm:w-[80vw] sm:max-h-[90vh] sm:p-2">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-3 bg-transparent border-none text-black cursor-pointer text-xl"
                >
                  ✕
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full max-h-[60vh] object-contain rounded-[10px] sm:max-h-[85vh]"
                />
                <p className="w-full py-2 font-bold text-[#333] text-center break-words text-sm sm:text-base">
                  {selectedImage.caption}
                </p>
                <p className="w-full pt-0 pb-2 font-bold text-[#333] text-center break-words text-sm sm:text-base">
                  {selectedImage.date}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsCarousol;
