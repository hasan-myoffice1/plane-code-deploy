import React from 'react';

const CenterHeading = (p) => {
    return (
     
        <div className='md:w-[50%] w-full mx-auto mb-10 text-center'>
            <span className='text-section-small-heading text-secondary-color uppercase tracking-widest font-semibold'>{p.SectionData['small_title']}</span>
            <h2 className='text-section-heading text-gray-800 dark:text-gray-50 font-bold  capitalize w-full'>{p.SectionData['section_title']}</h2>
            <p className='text-dark-text dark:text-light-text  mt-5'>{p.SectionData['desc']}</p>
        </div>
      
    );  
};

export default CenterHeading;