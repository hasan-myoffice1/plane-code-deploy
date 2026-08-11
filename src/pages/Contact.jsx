import React from 'react';
import Hero from '../components/Hero';

const Contact = () => {

    const homeHeroSection = {
        hero_section_heading_f:"Let's ",
        hero_highlight_text :'discuss ',
        hero_section_heading_l:'your next digital project ',
        hero_small_title:'GET IN TOUCH',
        hero_desc:"Whether you need a business website, custom web application, UI/UX design, or ongoing website support, our team is ready to help. Contact us today and let's build a digital solution that drives measurable business growth.",
        hero_button_text:'',
        phone:'',
        email:'',
        hero_bg_uri:'/src/assets/aboutPageHero.jpg'
    } 

    return (
        <main className='bg-light-body dark:bg-dark-body'>
            <Hero heroSection={homeHeroSection} />

            <section className='w-screen h-screen  bg-light-body dark:bg-dark-body'>
            </section>
        </main>
    );
};

export default Contact;