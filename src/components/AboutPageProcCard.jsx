import React from 'react';

const AboutPageProcCard = ({step, title ,desc}) => {
    return (
        <div className="max-w-xl md:flex-1/2 py-5 md:p-10 md:even:pt-40  last:text-center md:last:mx-auto"> 
            <span className='text-6xl font-bold'>{step}</span>
            <h4 className='text-card-title font-bold'>{title}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default AboutPageProcCard;