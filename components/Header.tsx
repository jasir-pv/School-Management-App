'use client';
import { useState } from 'react';
import { FaSearch, FaSun, FaMoon, FaBell } from 'react-icons/fa';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4 flex  justify-between items-center shadow-md rounded-lg gap-2">
      {/* Left Section: Dashboard Info */}
      <div>
        <h1 className="text-2xl md:text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-300 text-sm md:text-xs">19 February, 2024</p>
      </div>

     {/* Search Bar */}
        <div className="relative flex items-center bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md rounded-full px-4 py-4 w-72">
        <FaSearch className="absolute left-4 text-gray-400" />
        <input
            type="text"
            placeholder="Search anything"
            className="pl-10 w-full bg-transparent outline-none"
        />
        </div>


      {/* Right Section: Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Light/Dark Mode Toggle */}
        <button
          className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-md"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
        </button>

        {/* Notification Icon */}
        <button className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-md">
          <FaBell className="text-gray-500 dark:text-gray-300" />
        </button>


     <div className="flex items-center gap-x-2 bg-white px-4 py-2 rounded-2xl">
        <Image
            src="/small.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
        />
        <div className="hidden lg:block">
            <p className="text-sm font-semibold">Jasir Ahsan Pv</p>
            <p className="text-xs text-gray-500">Sr. Lecturer</p>
        </div>
        <MdKeyboardArrowRight className='ml-2'/>
     </div>


      </div>
    </header>
  );
};

export default Header;
