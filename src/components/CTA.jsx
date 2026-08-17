import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

const CTA = (e) => {
    return (
        <div>
            <h1></h1>
            <div className='md:w-[70%] xl:w-[60%] w-full text-center mx-auto'>
                <span className='text-section-small-heading text-secondary-color uppercase tracking-widest font-semibold'>{e.cardData['small_title']}</span>
                <h2 className='text-section-heading font-bold  capitalize'>{e.cardData['section_title']}</h2>
                <p className='my-8'>{e.cardData['desc']}</p>
                <PrimaryButton title={e.cardData['link_text']} link={e.cardData.link_page} />
            </div>
        </div>
    );
};

export default CTA;