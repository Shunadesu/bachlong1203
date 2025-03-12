import React, { useState } from 'react';
import navdata from '../../data/navdata';
import { Link } from 'react-router-dom';
import SearchBox from '../Input/searchBox';
import { IoMenu, IoClose } from "react-icons/io5"; // Import icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-yellow-300 flex flex-col justify-center items-center">
      <div className="max-w-[1440px] px-4 md:px-8 w-full grid grid-cols-3 md:grid-cols-6 justify-between items-center py-4">
        {/* Logo */}
        <Link to={'/'} className="w-[140px] md:w-[180px] h-[40px] md:h-[50px] col-span-1 md:col-span-2">
          <img
            src="https://bachlongmobile.com/assets/images/logo/logo-website-1.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Search Box - Hidden on Mobile */}
        <div className="hidden md:flex flex-col justify-center items-center gap-1 w-full col-span-2">
          <SearchBox />
          <p className="text-[10px]">16 Series, 16 Pro Max, S25 Ultra, AirPods 4, ...</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 w-full col-span-2 justify-end">
          <div className="flex items-center space-x-6">
            {navdata.map((nav) => (
              <Link
                key={nav.id}
                to={nav.link}
                className="flex items-center flex-col gap-1 hover:bg-amber-200 p-2 rounded-lg transition-all duration-300"
              >
                <div>{nav.icon}</div>
                <div className="text-black text-[12px]">{nav.title}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end col-span-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-2xl cursor-pointer">
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-yellow-400  flex flex-col items-center">
          {navdata.map((nav) => (
            <Link
              key={nav.id}
              to={nav.link}
              className="flex items-center gap-2 w-full text-center py-2 border-b border-yellow-500 hover:bg-yellow-500  px-4"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {nav.icon}
              <span className="text-black text-[14px]">{nav.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
