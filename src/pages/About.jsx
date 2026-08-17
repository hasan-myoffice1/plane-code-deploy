import React from 'react';
import Hero from '../components/Hero';
import LastSection from '../components/LastSection';
import Footer from './../components/Footer';


const About = ({ isDark }) => {
 console.log(isDark);
 
    const homeHeroSection = {
        hero_section_heading_f:"Building reliable ",
        hero_highlight_text :'digital solutions ',
        hero_section_heading_l:'for ambitious businesses',
        hero_small_title:'ABOUT PLANCODEDEPLOY',
        hero_desc:"At PlanCodeDeploy, we combine strategy, design, and development to create modern websites and web applications that help businesses strengthen their online presence, improve customer experiences, and achieve sustainable growth.",
        hero_button_text:'',
        phone:'',
        email:'',
        hero_bg_uri:'/src/assets/aboutPageHero.jpg'
    } 

    return (
       <main className='bg-light-body dark:bg-dark-body'>
            <Hero heroSection={homeHeroSection} />

            <LastSection isDark={isDark} />
            <Footer/>
        </main>
    );
};

export default About;