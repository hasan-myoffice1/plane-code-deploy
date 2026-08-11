import React from 'react';
import Hero from '../components/Hero';
import TitleAndDesc from '../components/TitleAndDesc';
import NumberCount from '../components/NumberCount';
import Card from './../components/Card';
import { Link } from 'react-router-dom';


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

    const homeAboutSection = {
        small_title:'About Company',
        section_title:'We create modern websites and scalable digital solutions',
        desc:'Your website is more than an online presence—it is your most valuable digital asset. At PlanCodeDeploy, we build custom websites, business platforms, and web applications that combine exceptional design with reliable technology. Every project is developed with performance, security, scalability, and long-term business growth in mind, helping companies establish a stronger digital presence and deliver better customer experiences.',
    }

    const homeServicesSection = {
        small_title:'OUR SERVICES',
        section_title:'Professional web solutions designed for business growth',
        desc:'',
    }

    return (
        <main className='bg-light-body dark:bg-dark-body'>
            <Hero heroSection={homeHeroSection} />

            {/* <section className='container'>  
                    <p>Trusted by leading companies</p>
            </section> */}

            <section className='container text-dark-body dark:text-light-body'>
                 <TitleAndDesc SectionData={homeAboutSection} />
                 <div className='flex flex-wrap gap-10 pt-10'>
                    <NumberCount end={37} text={'Projects Successfully Delivered'}/>
                    <NumberCount end={9} text={'Years of Industry Experience'} />
                    <NumberCount end={12} text={'Businesses Worldwide Served'} />
                 </div>
                 
            </section>

            <section className='bg-linear-to-r from-blue-950 to-blue-600'>
                <div className='container text-light-body'>
                    <TitleAndDesc SectionData={homeServicesSection} />
                    
                    <div className='w-max ml-auto'>
                        <Link to='/services' className='capitalize'>View All Services </Link>
                        <span className='ms-3'>→</span>
                    </div>
                   <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-10'>
                      <Card card_title='Web Development' card_desc='Responsive and scalable websites built with modern technologies for businesses, startups, and personal brands.'/> 

                      <Card card_title='UI/UX Design' card_desc='Eye-catching and user-focused designs to ensure your website looks stunning and works smoothly.'/> 

                      <Card card_title='Content Writing' card_desc='Professional and SEO-friendly content that engages your audience and drives conversions.'/> 
                     
                      <Card card_title='Web Development' card_desc='Responsive and scalable websites built with modern technologies for businesses, startups, and personal brands.'/> 
                   </div>
                </div>
            </section>
        </main>
    );
};

export default Home;