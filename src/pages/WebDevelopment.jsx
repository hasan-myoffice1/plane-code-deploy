import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import webDevelopment from '../assets/data/WebDevelopmentData';
import LastSection from '../components/LastSection';
import Footer from '../components/Footer';
import TitleAndDesc from '../components/TitleAndDesc';
import TechCard from '../components/TechCard';
import WDS_Card from '../components/WDS_Card';
import homeData from '../assets/data/HomeData';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const WebDevelopment = ({ isDark }) => {

    const {heroSection, technologiesSection, techCards, W_D_Services, WDSCard_data} = webDevelopment;
    const { servicesSection, serviceCards,} = homeData;

    return (
        <main className='bg-light-body dark:bg-dark-body' >
            <Hero heroSection={heroSection} />

            <section className='bg-light-section dark:bg-dark-section '>
                <div className='max-view dark:text-light-text'>
                    <div className='w-full md:w-xl text-center m-auto'>
                        <TitleAndDesc SectionData={technologiesSection} />
                    </div>

                    <div className='flex flex-wrap justify-around gap-10'>
                        {
                            techCards.map((x, i)=>{
                                return  <TechCard key={i} title={x.card_title} step={x.step} desc={x.card_desc} icon={x.icon} />
                            })
                        }
                    </div>
                </div>
            </section>

            <section >
                <div className="max-view dark:text-light-text">
                    <div className='w-full md:w-2xl text-center m-auto'>
                        <TitleAndDesc SectionData={W_D_Services} />
                    </div>
                    <div className='flex flex-wrap'>
                        {WDSCard_data.map((x, i)=>{
                            return <WDS_Card key={i} id={x.id} icon={x.icon} title={x.title} desc={x.desc} features={x.features}/>
                        })}     
                    </div>
                </div>
            </section>

            <section id='services' className='bg-light-section dark:bg-dark-section'>
                <div className='max-view text-light-body'>
                    <div className='w-full md:w-xl'>
                        <TitleAndDesc SectionData={servicesSection} />
                    </div>
                    
                    <div className='w-max ml-auto'>
                        <Link to='/services' className='capitalize'>View All Services </Link>
                        <span className='ms-3'>→</span>
                    </div>
                   <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-10'>
                      {serviceCards.map((card, index) => (
                          <Card key={index} card_title={card.card_title} card_desc={card.card_desc} />
                      ))}
                   </div>
                </div>
            </section>

            <LastSection isDark={isDark} />
            <Footer />
        </main>
    );
};

export default WebDevelopment;