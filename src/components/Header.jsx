import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkClass = ({ isActive, isPending }) => {
    return [
      'uppercase',
      isPending ? 'pending' : '',
      isActive ? 'active' : ''
    ].filter(Boolean).join(' ');
  };

  return (
    <div className='text-gray-800 flex gap-6 transition-all'>
      <NavLink to='/' className={navLinkClass}>Home</NavLink>
      <NavLink to='/services' className={navLinkClass}>Services</NavLink>
      <NavLink to='/about' className={navLinkClass}>About</NavLink>
      <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
    </div>
  );
};

export default Header;