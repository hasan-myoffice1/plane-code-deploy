import React from 'react';
import Hero from '../components/Hero';
import LastSection from '../components/LastSection';
import Footer from '../components/Footer';
import ServicePageData from '../assets/data/ServicePageData';
import servicePageCard from '../components/ServicesCard';
import ServicesCard from './../components/ServicesCard';
import NumberCount from '../components/NumberCount';


const Services = ({ isDark }) => {

     const { heroSection, cardData, stats } = ServicePageData;
     
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
            
            <LastSection isDark={isDark} />
            <Footer/>
        </main>
    );
};

export default Services;