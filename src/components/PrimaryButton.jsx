import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = (button) => {
    return (
        <>
          <button className='text-amber-50 bg-primary-color dark:bg-third-color px-7 py-3 rounded-full border-b-2 border-gray-200 hover:bg-secondary-color hover:shadow-md transition-all hover:translate-y-1'>
            <Link to={button.link}>{button.title}</Link>    
        </button>  
        </>
    );
};

export default PrimaryButton;