import React from 'react';
import logo from '../assets/uandi_logo_BW.png';
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className='w-full bg-black px-4 py-10 text-white'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10'>

        
        <div className='flex flex-col items-start gap-4 lg:w-[20%]'>
          <img src={logo} alt="U&I logo" className='w-[125px]' />
          <div className='flex gap-4'>
            <a href="#" className='hover:text-amber-300 transition'><Facebook /></a>
            <a href="#" className='hover:text-amber-300 transition'><Instagram /></a>
            <a href="#" className='hover:text-amber-300 transition'><Linkedin /></a>
            <a href="#" className='hover:text-amber-300 transition'><Youtube /></a>
          </div>
          <p className='text-sm'>
            U&I Trust is dedicated to transforming lives through education, empowerment, and volunteer-driven impact.
          </p>
        </div>

        
        <div className='flex flex-col gap-2 lg:w-[20%]'>
          <h3 className='text-amber-300 text-2xl font-bold'>WHAT WE DO</h3>
          <a href="https://uandi.org.in/volunteer" className='hover:text-amber-300 duration-300 cursor-pointer text-[18px]'>Volunteering</a>
          <a href="https://uandi.my.canva.site/fellowship-2024"className='hover:text-amber-300 duration-300 cursor-pointer text-[18px]'>Fellowship</a>
          <a href="https://www.canva.com/design/DAE55FVu9w4/j4ErARvafRu4eoj-zMxChw/view?website#2:apply-now" className='hover:text-amber-300 duration-300 cursor-pointer text-[18px]'>Internship</a>
          <a href="https://uandi.org.in/hiring" className='hover:text-amber-300 duration-300 cursor-pointer text-[18px]'>Work</a>
          <a href="https://uandi.org.in/csr" className='hover:text-amber-300 duration-300 cursor-pointer text-[18px]'>CSR Partnership</a>
          <a href="https://uandi.org.in/donatenow" className='hover:text-amber-300 duration-300 cursor-pointer text-[18px]'>Donate</a>


        </div>

        
        <div className='flex flex-col gap-2 lg:w-[20%]'>
          <h3 className='text-amber-300 text-2xl font-bold'>WHERE WE ARE</h3>
          <p className='text-[18px]'>A: 8/1, Gover Road,</p>
          <p className='text-[18px]'>Cox Town, Bangalore</p>
          <p className='text-[18px]'>560 005</p>
        </div>

        
        <div className='flex flex-col gap-2 lg:w-[20%]'>
          <h3 className='text-amber-300 text-2xl font-bold'>GET IN TOUCH</h3>
          <p className='text-[18px]'>+91 7019345052</p>
          <p className='text-[18px]'>adheerauandi@gmail.com</p>
        </div>
      </div>
      
    </footer>
    
  );
}

export default Footer;
