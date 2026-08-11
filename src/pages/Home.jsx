import React from 'react';
import Hero from '../components/Hero';
import TitleAndDesc from '../components/TitleAndDesc';
import NumberCount from '../components/NumberCount';


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

    return (
        <main className='bg-light-body dark:bg-dark-body'>
            <Hero heroSection={homeHeroSection} />

            <section className=' bg-light-body dark:bg-dark-body container'>
                <div>
                    <p>Trusted by leading companies</p>
                </div>
            </section>

            <section className='bg-light-body dark:bg-dark-body container'>
                 <TitleAndDesc SectionData={homeAboutSection} />
                 <div className='flex flex-wrap gap-10 pt-10'>
                    <NumberCount end={37} text={'Projects Successfully Delivered'}/>
                    <NumberCount end={9} text={'Years of Industry Experience'} />
                    <NumberCount end={12} text={'Businesses Worldwide Served'} />
                 </div>
                 
            </section>
        </main>
    );
};

export default Home;