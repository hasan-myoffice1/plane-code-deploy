import React from 'react';
import Hero from '../components/Hero';
// import Header from '../components/Header';

const Home = () => {
   

    const homeHeroSection = {
        hero_section_heading_f:'Web Development Helps for ',
        hero_highlight_text :'Your business.',
        hero_small_title:'Web Development Agency',
        hero_desc:'',
        hero_button_text:'Explore Our Services',
        phone:'+088 16456445246 ',
        email:'PlanCodeDeploy@gmail.com',
        hero_bg_uri:'/src/assets/homepageHero.png'
    }    

    return (
        <main className='bg-light-body dark:bg-dark-body'>
            <Hero homeHeroSection={homeHeroSection} />

            <section className='w-screen h-screen  bg-light-body dark:bg-dark-body'>
            </section>
        </main>
    );
};

export default Home;