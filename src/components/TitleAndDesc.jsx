import React from 'react';

const TitleAndDesc = (p) => {
    return (
        <div className='md:w-[65%]  w-full mb-10'>
            <span className='text-section-small-heading text-secondary-color uppercase tracking-widest'>{p.SectionData['small_title']}</span>
            <h2 className='text-dark-body dark:text-light-body text-section-heading font-bold capitalize'>{p.SectionData['section_title']}</h2>
            <p className='text-dark-body dark:text-light-body mt-5'>{p.SectionData['desc']}</p>
        </div>
    );
};

export default TitleAndDesc;