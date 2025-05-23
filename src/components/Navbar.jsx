import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/uandi_logo.png"
import Adheera from '../assets/Adheera_logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-20 flex items-center">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full pl-2 md:p-0">
        
        {/* Hamburger (left) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} className="text-yellow-400" /> : <FaBars size={24} className="text-yellow-400" />}
        </div>

        {/* Logo (right) */}
        <div
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => handleNavigation("home")}
>
  <img src={logo} className="h-15 w-auto" alt="U&I Logo" />
  <div className="text-xl font-bold text-yellow-400">x</div>
  <img
    id="LakshyaLogo"
    src={Adheera}
    className="h-15 w-auto"
    alt="Lakshya Logo"
  />
</div>

        {/* Desktop Nav */}
        <ul className={`hidden md:flex gap-6 font-medium`}>
          {[
            { name: "Home", id: "Home" },
            { name: "About", id: "About" },
            { name: "Impact Stories", id: "Stories" },
            { name: "Gallery", id: "Events" },
            { name: "Experiences", id: "Experience" },
            { name: "Videos", id: "Celebrations" },
            { name: "Contact", id: "Contact" },
          ].map((item, i) => (
            <li
              key={i}
              onClick={() => handleNavigation(item.id)}
              className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            >
              {item.name}
            </li>
          ))}

          {/* Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Links
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md min-w-[200px] py-2 z-50">
                <li className="px-4 py-2 hover:text-yellow-400">
                  <a href="https://uandi.org.in/volunteer" target="_blank" rel="noopener noreferrer">Sign Up</a>
                </li>
                <li className="px-4 py-2 hover:text-yellow-400">
                  <a href="https://build.uandi.org.in/" target="_blank" rel="noopener noreferrer">Build: Student Logs</a>
                </li>
                <li className="px-4 py-2 hover:text-yellow-400">
                  <a href="https://trainingandresources2024.softr.app/teacher-resources" target="_blank" rel="noopener noreferrer">Teaching Resources</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 font-medium z-40">
          {[
            { name: "Home", id: "Home" },
            { name: "About", id: "About" },
            { name: "Impact Stories", id: "Stories" },
            { name: "Gallery", id: "Events" },
            { name: "Experiences", id: "Experience" },
            { name: "Videos", id: "Celebrations" },
            { name: "Contact", id: "Contact" },
          ].map((item, i) => (
            <li
              key={i}
              onClick={() => handleNavigation(item.id)}
              className="cursor-pointer hover:text-yellow-400"
            >
              {item.name}
            </li>
          ))}
          <li className="cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Links
            {isDropdownOpen && (
              <ul className="mt-2 bg-white shadow-md rounded-md w-[200px] py-2 text-center">
                <li className="py-2 hover:text-yellow-400">
                  <a href="https://uandi.org.in/volunteer" target="_blank" rel="noopener noreferrer">Sign Up</a>
                </li>
                <li className="py-2 hover:text-yellow-400">
                  <a href="https://build.uandi.org.in/" target="_blank" rel="noopener noreferrer">Build: Student Logs</a>
                </li>
                <li className="py-2 hover:text-yellow-400">
                  <a href="https://trainingandresources2024.softr.app/teacher-resources" target="_blank" rel="noopener noreferrer">Teaching Resources</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
