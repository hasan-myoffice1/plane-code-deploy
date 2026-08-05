import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = (p) => {

  const navLinkClass = ({ isActive, isPending }) => {
    return [
      'uppercase',
      isPending ? 'pending' : '',
      isActive ? 'active' : ''
    ].filter(Boolean).join(' ');
  };

  return (
    <header>
      <div className='dark:bg-gray-800 bg-gray-100 py-3 px-5 lg:px-20 flex justify-between z-10'>
        <Link to='/'><img src="/src/assets/Logo.png" alt="Logo" className='w-32 sm:w-48' /></Link>

        <div className='mt-2 transition-all hidden md:block'>
          <nav className='flex align-bottom gap-7 dark:text-gray-200 text-gray-800'>
            <NavLink to='/' className={navLinkClass}>Home</NavLink>
            <NavLink to='/services' className={navLinkClass}>Services</NavLink>
            <NavLink to='/about' className={navLinkClass}>About</NavLink>
            <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
          </nav>
        </div>

        <button className='button-primary hidden md:block'>
          <Link to='/contact'>Free Quote</Link>
        </button>
      </div>
      <button
          className='w-[40px] h-[40px] bg-primary-color hover:bg-secondary-color rounded-full flex absolute top-[400px] right-[3%] z-0 mood-button hover:shadow-gray-700 shadow-lg shadow-gray-600 animate-bounce'
          onClick={p.moodButton}
          type='button'>
           <img src={p.moodImage || '/solar_moon-line-duotone.svg'} alt='' className='m-auto' />
      </button>
    </header>
  );
};

export default Header;