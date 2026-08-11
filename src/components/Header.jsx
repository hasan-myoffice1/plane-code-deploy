import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = ({ moodButton, moodImage, isDark }) => {

  const navLinkClass = ({ isActive, isPending }) => {
    return [
      'uppercase',
      isPending ? 'pending' : '',
      isActive ? 'active' : ''
    ].filter(Boolean).join(' ');
  };

  const [sidebarOpen, setSidebarOpen] = useState(false); //------------------ for Side navbar 
 
  return (
    <header>
      <div className='bg-gray-800 py-3 px-5 lg:px-20 flex justify-between z-22'>
        <Link to='/'><img src="/src/assets/Logo.png" alt="Logo" className='w-32 sm:w-48' /></Link>

        <div className='mt-2 transition-all hidden md:block'>
          <nav className='flex align-bottom gap-7 text-gray-200'>
            <NavLink to='/' className={navLinkClass}>Home</NavLink>
            <NavLink to='/services' className={navLinkClass}>Services</NavLink>
            <NavLink to='/about' className={navLinkClass}>About</NavLink>
            <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
          </nav>
        </div>

        <div className='flex items-center gap-4'>
          {/* <button className='button-primary hidden md:block'>Free Quote</button> */}

          {/* ------ Mood Changing BUTTON */}
          <button
            className='w-[40px] h-[40px] bg-primary-color hover:bg-secondary-color rounded-full flex items-center justify-center z-10  hover:shadow-gray-700 shadow-lg shadow-gray-600 hidden md:block' 
            onClick={moodButton}
            aria-pressed={isDark}
            aria-label='Toggle dark mode'
            type='button'>
              <img src={moodImage || '/solar_moon-line-duotone.svg'} alt='theme icon' className='m-auto' />
          </button>
          
          {/* ---- Sidebar Menu Button */}
          <button
            type='button'
            onClick={() => setSidebarOpen(true)}
            className='text-white md:hidden'
          >
            <img src="/mingcute_menu-fill.svg" alt="" />

          </button>
        </div>
      </div>
      
      {/* ---------------------  Side Navbar */}
      <div className={`${sidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'} fixed inset-y-0 right-0 z-50 w-screen bg-dark-body/95 p-8 text-light-body transition-transform duration-300`}>
          <button
              type='button'
              onClick={() => setSidebarOpen(false)}
              className='absolute right-4 top-4 text-white'
          >
              <img src="/line-md_close.svg" alt="" />
          </button>

          <nav className='mt-12 flex flex-col gap-7 dark:text-gray-200 text-light-body'>
              <NavLink to='/' className={navLinkClass}>Home</NavLink>
              <NavLink to='/services' className={navLinkClass}>Services</NavLink>
              <NavLink to='/about' className={navLinkClass}>About</NavLink>
              <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
          </nav>

          <button
              className='w-[40px] h-[40px] bg-primary-color hover:bg-secondary-color rounded-full flex items-center justify-center z-10 hover:shadow-gray-700 shadow-lg shadow-gray-600 mt-5' 
              onClick={moodButton}
              aria-pressed={isDark}
              aria-label='Toggle dark mode'
              type='button'>
              <img src={moodImage || '/solar_moon-line-duotone.svg'} alt='theme icon' className='m-auto' />
          </button>
      </div>
      
    </header>
  );
};

export default Header;