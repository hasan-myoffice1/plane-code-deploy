import React from 'react';
import Hero from '../components/Hero';

const Services = () => {

     const homeHeroSection = {
        hero_section_heading_f:'Professional ',
        hero_highlight_text :'web solutions ',
        hero_section_heading_l:'designed for modern businesses',
        hero_small_title:'OUR SERVICES',
        hero_desc:'We provide end-to-end web development, UI/UX design, SEO, and digital solutions that help businesses improve visibility, increase conversions, and accelerate long-term growth.',
        hero_button_text: false,
        hero_bg_uri:'/src/assets/servicesPageHero.jpg'
      
    }  

    return (
        <main className='bg-light-body dark:bg-dark-body'>
            <Hero heroSection={homeHeroSection} />
            <section className='w-screen h-screen  bg-light-body dark:bg-dark-body'>
            </section>
        </main>
    );
};

export default Services;