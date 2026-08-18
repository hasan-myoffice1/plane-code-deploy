import React from 'react';
import homeData from '../assets/data/HomeData';
import CTA from './CTA';
import bgCircle from '../assets/bg-Circel.png';
import bgCircleBlack from '../assets/bg-Circle-black.png';

const LastSection = ({ isDark }) => {

    const { lastSection } = homeData;

    return (
        <section>
            <div className="relative max-view pt-40 z-0  text-gray-800 dark:text-gray-50 ">
                <div className='w-full h-full absolute top-0 right-0 flex justify-center -z-1'>
                    <img
                        src={isDark ? bgCircleBlack : bgCircle  }
                        className='w-60 h-60 md:w-80 md:h-80 self-center animate-wiggle'
                        alt='Decorative background'
                    />
                </div>
                <CTA cardData={lastSection}/>
            </div>
        </section>
    );
};

export default LastSection;