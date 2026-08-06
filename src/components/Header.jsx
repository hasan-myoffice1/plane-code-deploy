import React from 'react';
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

          {/* Mood Changing BUTTON */}
          <button
            className='w-[40px] h-[40px] bg-primary-color hover:bg-secondary-color rounded-full flex items-center justify-center z-10 mood-button hover:shadow-gray-700 shadow-lg shadow-gray-600'
            onClick={moodButton}
            aria-pressed={isDark}
            aria-label='Toggle dark mode'
            type='button'>
              <img src={moodImage || '/solar_moon-line-duotone.svg'} alt='theme icon' className='m-auto' />
          </button>
        </div>
      </div>
      
      <MobileMenu/>
    </header>
  );
};

export default Header;