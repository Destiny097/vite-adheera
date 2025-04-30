import React  , {useRef} from 'react';
import question from '../assets/Question.png';
import emailjs from '@emailjs/browser';

function Contact() {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
          'service_hq0s7td',     // Replace with EmailJS Service ID
          'template_10tnprb',    // Replace with EmailJS Template ID
          form.current,
          'F5gX2wqKKo_NNgInM'     // Replace with EmailJS Public Key
        ).then(
          (result) => {
            alert('Message sent successfully!');
            form.current.reset();
          },
          (error) => {
            alert('Failed to send message.');
          }
        );
      };
  return (
    <div className='w-full min-h-screen bg-black'>
      <div className='w-full h-full flex flex-col justify-center'>
        
        <div className='w-full h-[10%] bg-amber-300 text-black text-center flex items-center justify-center py-4'>
          <h2 className='text-2xl md:text-4xl font-bold'>
            Got a question? Fill out this quick form, and we'll get back to you!
          </h2>
        </div>

        <div className='w-full bg-purple-700 flex flex-col md:flex-row items-center justify-evenly py-10'>

          
          <div className="w-[90%] md:w-[40%] bg-purple-700 flex justify-center items-center p-4">
            <form ref={form} onSubmit={sendEmail} className="w-full text-white space-y-5">
              <div>
                <label className="block mb-1 font-bold text-xl">Full Name*</label>
                <input name="user_name" type="text" required placeholder="Your Name" className="w-full p-3 text-black rounded border focus:outline-none bg-white" />
              </div>

              <div>
                <label className="block mb-1 font-bold text-xl">Email Address*</label>
                <input name="user_email" type="email" required placeholder="Your Email ID" className="w-full p-3 text-black rounded border focus:outline-none bg-white" />
              </div>

              <div>
                <label className="block mb-1 font-bold text-xl">Contact Number*</label>
                <input name="user_phone" type="tel" required placeholder="Your Phone Number" className="w-full p-3 text-black rounded border focus:outline-none bg-white" />
              </div>

              <div>
                <label className="block mb-1 font-bold text-xl">Message*</label>
                <textarea name="message" required placeholder="Does U&I provide its own curriculum and resources?" className="w-full p-3 text-black rounded border h-28 resize-none focus:outline-none bg-white"></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" name="volunteer_interest" className="mr-2" />
                <label className="font-semibold">Show your interest to Volunteer!</label>
              </div>

              <button type="submit" className="bg-black w-full py-3 rounded font-bold hover:bg-gray-800 transition">Submit</button>
            </form>
          </div>

          {/* Image (hidden on mobile) */}
          <div className='hidden md:block'>
            <img src={question} alt="Question Art" className='w-[300px]' />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
