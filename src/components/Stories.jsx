import React, { useState } from 'react';
import art from '../assets/art5.png';
import art2 from '../assets/art2.png';

function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    { image: art, disTitle: "Adarsh's Journey", volunteer: 'Supriya', kid: "Adarsh", description: "When I started with Adarsh, he was a very shy and quiet kid, and I initially thought it would be hard to teach him because he wouldn’t interact with me. But slowly, we started bonding, and he began opening up to me, sharing the things he wanted to learn. Since then, I’ve seen him grow from a child who struggled with understanding letters to someone who can now read full sentences. His curiosity and willingness to learn have truly helped him become the best version of himself.", className: "col-span-3 md:col-span-3 row-span-1 bg-white" },
    { image: art2, disTitle: "Sainath's Journey", volunteer: 'Charu Keerthi', kid: "Sainath", description: "When I first met Sainath, he understood basic English but struggled to form his own sentences and grasp complex words. He initially relied heavily on translation. However, his determination and sharp memory were evident from the beginning. Over the past year, his transformation has been remarkable, he now speaks with much more confidence, forms sentences more accurately, and understands significantly more complex language. Watching his growth has been one of the most rewarding parts of my time at Adheera.", className: "col-span-1 md:col-span-1 row-span-1 bg-white" },
    { image: art, disTitle: "Kiran's Journey", volunteer: 'Satwik', kid: "Kiran", description: "Kiran started off as a curious but slightly hesitant learner who needed a structured and engaging flow to stay focused. The breakthrough came on Children’s Day, when he saw me outside the teacher role, performing, anchoring and having fun. That shifted his perception, and he began to open up. Over time, his confidence bloomed- he started reading new words and forming sentences with ease. From struggling with alphabets to spelling words independently, his growth was incredible. Ending the year with him proudly calling out my name at the celebration was the most rewarding moment.", className: "col-span-2 md:col-span-2 row-span-1 bg-white" },
    { image: art2, disTitle: "Sunil's Journey", volunteer: 'Infacia', kid: "Sunil", description: "Sunil was extremely shy when I first started teaching him in August 2024, even basic introductions made him nervous. He lacked confidence in English, but I could sense his potential. With consistent sessions, fun learning methods, and a strong bond, I watched him gradually open up. Within months, his pronunciation improved, and he began reading paragraphs confidently. One of the most touching moments was when he wrote, “I want to talk English fluently,” showing how far he had come. By the end of the year, he was promoted to the advanced level, a moment of pure pride for me.", className: "col-span-2 md:col-span-2 row-span-1 bg-white" },
    { image: art2, disTitle: "Gagan's Journey", volunteer: 'Archana', kid: "Gagan", description: "When I began teaching Gagan, he was at word level, but I soon realized he was struggling to follow along. After a quick assessment, I found he was actually at letter level, which shifted everything. I restarted from phonetics, tailoring lessons to his pace. Introducing flashcards was a game-changer, he loved them and came to class excited every time. His progress became so visible, it felt like I was teaching a completely different Gagan. The shift in his confidence and learning was truly heartwarming.", className: "col-span-1 md:col-span-1 row-span-1 bg-white" },
    { image: art, disTitle: "Bhargav's Journey", volunteer: 'Dheemanth', kid: "Bhargav", description: "When I first started volunteering at U&I, I had three kids in my class and Bhargav was definitely the most mischievous of them all. Always full of energy, I wasn’t even sure how much he was understanding, until it became a 1:1 class with just the two of us. That’s when I saw his true potential, he’s such a quick learner and finished 60% of the syllabus at word level with great accuracy! He barely spoke any English at the start, but by the end of the year, he was confidently narrating stories and greeting everyone with the sweetest smile and a “Good afternoon akka/ anna.” Watching him grow in confidence, curiosity, and expression has been the most heart-warming part of my journey. I genuinely feel so lucky to have been a small part of his big transformation.", className: "col-span-3 md:col-span-3 row-span-1 bg-white" },
  ];

  return (
    <div className='w-full h-fit bg-black flex flex-col items-center justify-center px-2 py-4'>
      <div className='w-full h-full flex flex-col items-center justify-between'>

        <div className='w-full bg-[#ff3b6d] text-center flex items-center justify-center py-4 px-4'>
          <h2 className='font-bold text-2xl md:text-4xl '>See how our Volunteers change lives — one story at a time!</h2>
        </div>

        <p className='text-white py-4 text-sm md:text-base text-center px-4'>
          *All the children have their names and other identifying features hidden to comply with Child Protection Policy
        </p>

        <div className='w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[minmax(200px,_auto)] gap-2 px-'>
          {stories.map((story, index) => (
            <div
              key={index}
              className={`${story.className} shadow-2xl rounded-xl transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col items-center justify-center p-2`}
              onClick={() => setSelectedStory(story)}
            >
              <img src={story.image} alt="Story" className='w-[120px] md:w-[200px]' />
              <h2 className='font-bold text-center text-lg mt-2'>{story.disTitle}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStory && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedStory(null)}
          />
          <div className="fixed z-50 bg-white rounded-xl p-6 w-[90%] md:w-[60%] lg:w-[40%] shadow-lg flex flex-col items-center justify-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
            <button className="self-end text-2xl font-bold" onClick={() => setSelectedStory(null)}>×</button>
            <img src={selectedStory.image} alt="Modal" className="w-[60%] md:w-[40%] rounded-md" />
            <h2 className='text-black text-center text-xl md:text-2xl'>{selectedStory.kid}</h2>
            <p className='text-black text-center text-base md:text-lg'>Volunteer: {selectedStory.volunteer}</p>
            <p className="text-gray-800 text-center text-sm md:text-base">{selectedStory.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Stories;
