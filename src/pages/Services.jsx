import React from 'react';
import Hero from '../components/Hero';
import LastSection from '../components/LastSection';
import Footer from '../components/Footer';
import ServicePageData from '../assets/data/ServicePageData';
import servicePageCard from '../components/ServicesCard';
import ServicesCard from './../components/ServicesCard';

const Services = ({ isDark }) => {

     const { heroSection, cardData } = ServicePageData;
     
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
            
            <LastSection isDark={isDark} />
            <Footer/>
        </main>
    );
};

export default Services;