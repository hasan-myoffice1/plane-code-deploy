import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ moodButton, moodImage, isDark }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLinkClass = ({ isActive }) => {
        return [
            'uppercase',
            isActive ? 'active' : 'text-gray-200'
        ].filter(Boolean).join(' ');
    };

    return (
        <div className='md:hidden'>
            <button
                type='button'
                onClick={() => setSidebarOpen(true)}
                className='absolute right-4 top-4  text-white'
            >
                <img src="/mingcute_menu-fill.svg" alt="" />

            </button>

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
                    className='w-[40px] h-[40px] bg-primary-color hover:bg-secondary-color rounded-full flex items-center justify-center z-10 mood-button hover:shadow-gray-700 shadow-lg shadow-gray-600' 
                    onClick={moodButton}
                    aria-pressed={isDark}
                    aria-label='Toggle dark mode'
                    type='button'>
                    <img src={moodImage || '/solar_moon-line-duotone.svg'} alt='theme icon' className='m-auto' />
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;