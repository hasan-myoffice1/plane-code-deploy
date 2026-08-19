import React from 'react';
import Hero from '../components/Hero';
import LastSection from '../components/LastSection';
import Footer from './../components/Footer';
import TitleAndDesc from './../components/TitleAndDesc';
import AboutCompany from '../assets/data/AboutCompany';
import NumberCount from './../components/NumberCount';


const About = ({ isDark }) => {

    const {HeroSection, aboutCompany, stats, testimonialsSection} = AboutCompany; 

    return (
       <main className='bg-light-body dark:bg-dark-body'>
            <Hero heroSection={HeroSection} />

            <section>
                <div className="max-view flex flex-wrap gap-12">
                    <div className='md:flex-1 shadow rounded-2xl overflow-hidden'>
                        <img src="/src/assets/homepageHero.png" alt="" className=' object-cover w-full md:h-[70vh] ' />
                    </div>
                    <div className='md:flex-1 self-center'>
                        <div className='xl:-translate-x-30 bg-light-body dark:bg-dark-body sm:p-10 rounded-2xl'>
                            <TitleAndDesc SectionData={aboutCompany} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-linear-to-r bg-light-section dark:bg-dark-section'>
                <div className="max-view">
                     <div className='flex flex-wrap justify-center sm:justify-between gap-10 dark:text-light-text'>
                    {stats.map((item, index) => (
                        <NumberCount key={index} end={item.end} text={item.text} />
                    ))}
                 </div>
                </div>
            </section>

            <section className='bg-light-section dark:bg-dark-section'>
                <div className='max-view dark:text-light-text text-dark-text'>
                    <TitleAndDesc SectionData={testimonialsSection}/>
                
                    <div className='border-l-2 border-secondary-color mt-10 md:mt-0 p-5 sm:px-10 py-4 md:w-[60%] mx-auto'>
                        <p className='text-balance'>PlanCodeDeploy transformed our outdated website into a modern platform that reflects our brand perfectly. The communication was excellent, deadlines were met, and the final product exceeded expectations.</p>
                        <div className='flex justify-between'>
                            <div>
                                <h4 className='text-xl font-bold mt-5'>Michael Anderson</h4>
                                <span className='text-sm text-secondary-color font-semibold'>Business Owner</span>
                            </div>
                            <div className='grid grid-cols-2 content-end gap-5'>
                                <span className='text-2xl sm:text-3xl text-secondary-color'>&#8617;</span>
                                <span className='text-2xl sm:text-3xl text-secondary-color'>&#8618;</span>
                            </div>
                        </div>   
                    </div>
                 
                </div>
            </section>

            <LastSection isDark={isDark} />
            <Footer/>
        </main>
    );
};

export default About;