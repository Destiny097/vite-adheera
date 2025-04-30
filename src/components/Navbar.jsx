import React , { useState } from 'react'
import logo from '../assets/1674568940329-rs541f9x.svg'
import { FaBars ,FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen , setIsOpen]=useState(false);
  return (
    
    <nav className='w-[100%] h-[80px] bg-white flex items-center justify-center fixed top-0 left-0 z-50'>
      <div className='flex items-center justify-between w-[80%]'>
        <div className='w-[25%]'>
          <img src={logo} alt="U&I Logo" className='w-[60px]'/>
        </div>


        <ul className='hidden md:flex items-center justify-evenly w-[50%] '>
          {['Home','About','Impact Stories','Gallery','Experiences','Videos','Links','Contacts'].map((item,index)=>(
            <li key={index} className='font-medium hover:text-amber-300 duration-300 cursor-pointer'>
              <a href='#'>{item}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>  
      </div>
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 gap-4">
            {['Home', 'About', 'Impact Stories', 'Gallery', 'Experiences', 'Videos', 'Links', 'Contacts'].map((item, index) => (
              <li key={index} className="hover:text-amber-300 transition-colors duration-300 cursor-pointer">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;