import React from 'react';
import Hero from '../components/Hero';
import LastSection from '../components/LastSection';
import Footer from '../components/Footer';
import ServicePageData from '../assets/data/ServicePageData';
import servicePageCard from '../components/ServicesCard';
import ServicesCard from './../components/ServicesCard';
import NumberCount from '../components/NumberCount';
import FQASection from '../components/FQASection';
import TitleAndDesc from '../components/TitleAndDesc';


const Services = ({ isDark }) => {

     const { heroSection, cardData, stats, portfolioSection } = ServicePageData;
     
    return (
        <main className='bg-light-body dark:bg-dark-body'>
            <Hero heroSection={heroSection} />
            <section>
                <div className="container flex  flex-wrap md:gap-y-30 gap-y-15 justify-between text-dark-text dark:text-light-text">
                    {
                        cardData.map(function(card, index){
                            return (
                                <ServicesCard
                                    key={index}
                                    title={card.title}
                                    smallTitle={card.small_title}
                                    desc={card.desc}
                                    icon={card.icon}
                                    btnText={card.button_text}
                                    btnLink={card.button_link}
                                    list={card.list_data}
                                />
                            );
                        })
                    }
                </div>
            </section>

            <section className='bg-linear-to-r from-blue-950 to-blue-600 dark:to-blue-800'>
                <div className="container">
                     <div className='flex flex-wrap justify-center sm:justify-between gap-10 text-light-text'>
                    {stats.map((item, index) => (
                        <NumberCount key={index} end={item.end} text={item.text} />
                    ))}
                 </div>
                </div>
            </section>
            
            <section>
                <FQASection />
            </section>
            <section className='bg-light-section dark:bg-dark-section'>
                <div className="container">
                    <TitleAndDesc SectionData={portfolioSection} />
                    <div className='flex flex-wrap gap-10 dark:text-light-text text-dark-text'>
                        <div className='md:flex-1 rounded-2xl overflow-hidden'><img src="/src/assets/aboutPageHero.jpg" className='w-full h-full' alt="" /></div>
                        <div className='md:flex-1'>
                            <h3 className='text-2xl font-bold mb-5'>Professional Business Website</h3>
                            <p>We designed and developed a modern, conversion-focused business website featuring responsive design, SEO optimization, fast performance, and an intuitive user experience that helps generate more leads and strengthen the client's online presence.</p>
                        </div>
                    </div>
                </div>
            </section>
            <LastSection isDark={isDark} />
            <Footer/>
        </main>
    );
};

export default Services;