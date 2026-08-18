import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ smallTitle, title, desc, icon, btnText, btnLink, list = [] }) => {
    return (
        <>
            <article className='md:basis-1/2 xl:pr-20 '>
                <span className='text-sm uppercase text-secondary-color font-semibold tracking-[.25em]'>{smallTitle}</span>
                <h2 className='text-section-heading font-bold mb-5'>{title}</h2>
                <div className='w-30 h-20 bg-gray-500 rounded-xl'></div>
                <hr className='w-40 border-1 border-secondary-color my-5'/>
                <p>{desc}</p>
                <ul className='list-disc list-inside my-6'>
                    {list.map((item, index) => (
                        <li key={`${item}-${index}`}>{item}</li>
                    ))}
                </ul>
                <button className='bg-white py-3 px-10 rounded-full border-b-2 border-r border-b-secondary-color text-secondary-color font-semibold hover:border-primary-color hover:text-primary-color transition-all hover:translate-y-1 shadow capitalize'>
                    <Link to={btnLink}>{btnText}</Link>
                </button>
            </article>
        </>
    );
};

export default ServicesCard;