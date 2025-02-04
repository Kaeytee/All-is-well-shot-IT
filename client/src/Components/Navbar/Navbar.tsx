import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/logo.PNG";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (!event.target.closest('.hamburger-button')) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsMenuOpen]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMenuOpen]);

  return (
    <nav className="relative bg-white shadow-sm z-50">
      <div className="flex justify-between items-center py-4 uppercase text-lg mx-auto lg:px-8 lg:py-4 lg:w-4/5 lg:mx-auto">
        {/* Logo */}
        <NavLink to="/" className="z-20">
          <img 
            src={Logo} 
            alt="All is well Logo" 
            className="w-32 lg:w-48 xl:w-56 transition-all duration-300 hover:scale-105" 
          />
        </NavLink>

        {/* Centered Book Us Button - Mobile */}
        <NavLink
          to="/book-us"
          className="lg:hidden bg-black text-white hover:bg-gray-500 px-6 py-2 rounded-lg active:bg-gray-700 whitespace-nowrap transform transition-all duration-300 hover:scale-105 z-20"
        >
          Book Us
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center w-full z-20">
          <ul className="flex justify-between w-full mx-8">
            {['Home', 'About', 'Portfolio', 'Team', 'Contact-Us', 'Ratecard'].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={({ isActive }) =>
                    `hover:text-gray-500 ${isActive ? 'font-semibold' : ''} transition-colors duration-300`
                  }
                >
                  {item.replace('-', ' ')}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Book Us Button - Desktop */}
          <NavLink
            to="/book-us"
            className="bg-black text-white hover:bg-gray-500 px-8 lg:px-12 py-2 lg:py-3 rounded-lg active:bg-gray-700 whitespace-nowrap transform transition-all duration-300 hover:scale-105 z-20"
          >
            Book Us
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="hamburger-button lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none z-20 transform transition-all duration-300 hover:scale-110"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed inset-0 z-50 h-screen bg-white transition-all duration-500 ease-in-out transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <div className="relative h-full overflow-y-auto">
          <div className="px-4 py-8 space-y-6 flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8">
              {['Home', 'About', 'Portfolio', 'Team', 'Contact-Us', 'Ratecard'].map((item, index) => (
                <li 
                  key={item}
                  className="opacity-0 transform -translate-y-4 transition-all duration-500 ease-out"
                  style={isMenuOpen ? { 
                    opacity: 1,
                    transform: 'translateY(0)',
                    transitionDelay: `${index * 75}ms`
                  } : {}}
                >
                  <NavLink
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className={({ isActive }) =>
                      `text-2xl hover:text-gray-500 ${isActive ? 'font-semibold' : ''} transition-colors duration-300`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.replace('-', ' ')}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Book Us Button - Mobile Menu */}
            <div className="text-center pt-8 opacity-0 transform -translate-y-4 transition-all duration-500 ease-out"
              style={isMenuOpen ? { 
                opacity: 1,
                transform: 'translateY(0)',
                transitionDelay: '450ms'
              } : {}}
            >
              <NavLink
                to="/book-us"
                className="bg-black text-white hover:bg-gray-500 px-12 py-4 rounded-lg active:bg-gray-700 inline-block text-xl transform transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Us
              </NavLink>
            </div>
          </div>
        </div>

        {/* Overlay Background */}
        <div 
          className={`fixed  bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-30' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
}