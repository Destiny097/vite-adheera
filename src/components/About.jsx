import React from 'react';

function About() {
  return (
    <div className="w-full min-h-[50vh] md:min-h-[70vh] bg-black flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full md:w-[60%] lg:w-[50%] text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white pb-6">
          What is Adheera?
        </h2>
        <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
          U&I is a volunteer-driven NGO transforming lives through education. We work with children from underserved communities, providing after-school learning support, life skills training, and career guidance to help them break the cycle of poverty.
        </p>
        <br />
        <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
          Adheera is a community-driven center under U&I, dedicated to empowering underserved children through education and mentorship. We spend 3 hours a week providing quality after-school care, holistic development opportunities, and a nurturing environment to help the children realize their full potential.
        </p>
      </div>

      <div className="w-[70%] md:w-[40%] mt-10 flex flex-col sm:flex-row items-center justify-evenly gap-6 sm:gap-0">
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl text-amber-300 font-bold">35+</h3>
          <p className="text-white mt-2">Teaching Volunteers</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl text-amber-300 font-bold">35+</h3>
          <p className="text-white mt-2">Children Taught</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl text-amber-300 font-bold">80+</h3>
          <p className="text-white mt-2">Hours Spent</p>
        </div>
      </div>
    </div>
  );
}

export default About;
