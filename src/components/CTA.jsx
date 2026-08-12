import React from 'react';
import { Link } from 'react-router-dom';

const CTA = (e) => {
    return (
        <div>
            <h1></h1>
            <div className='md:w-[70%] xl:w-[60%] w-full text-center mx-auto mb-10'>
                <span className='text-section-small-heading text-secondary-color uppercase tracking-widest font-semibold'>{e.cardData['small_title']}</span>
                <h2 className='text-section-heading text-gray-800 dark:text-gray-50 font-bold  capitalize'>{e.cardData['section_title']}</h2>
                <p className='text-dark-text dark:text-light-text my-8'>{e.cardData['desc']}</p>
                <button className='button-primary hover:translate-y-1'><Link to='/services'>{e.cardData['link_text']}</Link></button>
                
            </div>
        </div>
    );
};

export default CTA;