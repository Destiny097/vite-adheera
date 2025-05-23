import React, { useState, useEffect, useRef, useCallback } from "react";
import experiences from "./data/experience.json";

const ExperiencesSection = () => {
  const [heading, setHeading] = useState(
    "Ready to explore? Hear from the Teachers themselves!"
  );
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [allExperiences, setAllExperiences] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [tick, setTick] = useState(0);
  const modalRef = useRef(null);

  // Responsive heading
  useEffect(() => {
    const updateHeading = () => {
      setHeading(
        window.innerWidth <= 600
          ? "Our Teachers, Their Stories!"
          : "Ready to explore? Hear from the Teachers themselves!"
      );
    };
    updateHeading();
    window.addEventListener("resize", updateHeading);
    return () => window.removeEventListener("resize", updateHeading);
  }, []);

  // Shuffle logic (stable reference)
  const shuffleArray = useCallback(() => {
    const shuffled = [...experiences].sort(() => Math.random() - 0.5);
    setAllExperiences(shuffled);
    setTick((prev) => prev + 1); // force re-render
  }, []);

  // Initial shuffle + interval shuffle
  useEffect(() => {
    shuffleArray(); // initial
    const interval = setInterval(shuffleArray, 10000); // every 10s
    return () => clearInterval(interval);
  }, [shuffleArray]);

  // Modal click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedExperience(null);
      }
    };
    if (selectedExperience) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedExperience]);

  const truncateText = (text, charLimit) =>
    text.length > charLimit ? text.substring(0, charLimit) + "..." : text;

  const visibleExperiences = showAll
    ? allExperiences
    : allExperiences.slice(0, 4);

  return (
    <section
      id="Experience"
      className="text-center pb-8 bg-[#2d2d2d] flex flex-col justify-center"
    >
      <div>
        <div className="flex justify-center items-center flex-wrap mb-8 bg-[#ff3b6d] w-full p-4 mt-0">
          <h4 className="font-bold text-black text-center break-words max-w-[90%] text-4xl">
            {heading}
          </h4>
        </div>

        <div
          key={tick}
          className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-8 w-full max-w-[1200px] mx-auto auto-rows-fr px-5 transition-all duration-500"
        >
          {visibleExperiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl text-left w-full h-[500px] max-h-[70vh] flex flex-col overflow-hidden cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105"
              onClick={() => setSelectedExperience(exp)}
            >
              <img
                src={exp.image}
                alt={exp.name}
                className="w-full h-1/2 object-cover object-center"
                loading="lazy"
              />
              <div className="h-1/2 p-2 px-4 flex flex-col overflow-hidden relative">
                <div className="flex justify-between items-center mb-1 text-xl font-bold">
                  <h6>
                    {exp.name}, {exp.age}
                  </h6>
                  <p className="text-gray-600 font-normal text-right">
                    {exp.year}
                  </p>
                </div>
                <p className="leading-snug max-h-full overflow-hidden text-ellipsis italic text-xl">
                  "{truncateText(exp.experience, 150)}"
                </p>
                <span className="text-[#ff3b6d] cursor-pointer underline absolute bottom-2 right-2 hover:no-underline">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>

        {experiences.length > 4 && (
          <div className="mt-10 flex justify-center items-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#ff3b6d] text-black border text-xl font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-all"
            >
              {showAll ? "Read Less" : "Read More"}
            </button>
          </div>
        )}
      </div>

      {selectedExperience && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setSelectedExperience(null)}
          ></div>
          <div
            ref={modalRef}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[80vh] max-h-[90vh] bg-white rounded-md shadow-lg flex flex-col z-[1000] overflow-hidden p-4 max-[590px]:w-[90%]"
          >
            <button
              className="absolute top-2 right-4 bg-none border-none cursor-pointer"
              onClick={() => setSelectedExperience(null)}
            >
              <h6>×</h6>
            </button>
            <img
              src={selectedExperience.image}
              alt={selectedExperience.name}
              className="w-full h-1/2 object-contain block"
            />
            <div className="flex-grow p-5 flex flex-col justify-start overflow-y-auto whitespace-pre-line">
              <h6 className="text-center font-bold">
                {selectedExperience.name}, {selectedExperience.age}
              </h6>
              <p className="text-center font-bold text-black mb-2">
                {selectedExperience.year}
              </p>
              <p className="subtitle whitespace-pre-line">
                {selectedExperience.experience}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ExperiencesSection;
