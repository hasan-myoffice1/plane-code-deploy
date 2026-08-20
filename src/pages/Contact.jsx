import React from 'react';
import Hero from '../components/Hero';
import LastSection from '../components/LastSection';
import Footer from '../components/Footer';

const Contact = ({ isDark }) => {

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

            <section className='dark:text-light-body md:pt-20'>
                <div className="max-view flex flex-wrap bg-light-section dark:bg-dark-section md:p-15 rounded-2xl">
                    <div className='pr-5 self-center md:flex-1'>
                        <img src="/src/assets/Logo.png" alt="" />
                        <h4 className='text-2xl font-bold'>Send Us a Message.</h4>
                        <p>Have a question, project idea, or partnership opportunity? We'd love to hear from you. Fill out the form, and one of our specialists will get back to you as soon as possible.</p>
                        <div className='flex gap-3 my-5'>
                            <div className='w-7 h-7 bg-amber-300 rounded-full'></div>
                            <div className='w-7 h-7 bg-amber-300 rounded-full'></div>
                            <div className='w-7 h-7 bg-amber-300 rounded-full'></div>
                            <div className='w-7 h-7 bg-amber-300 rounded-full'></div>
                        </div>
                    
                        <a href='#'>codeplandeploy@gmail.com</a>
                        <a className='block' href='#'>+1  096 2542211</a>
                    </div>

                    <div className='md:pl-5 flex-1'>
                        <form action="#" className='flex flex-col pt-10'>
                            <label htmlFor="name">Full Name*</label>
                            <input type="text" name="name" id="name" className='input-field' />
                            <label htmlFor="number">Phone Number*</label>
                            <input type="tel" name="number" id="number" className='input-field'/>
                            <label htmlFor="email">Email*</label>
                            <input type="email" name="email" id="email" className='input-field' />
                            <label htmlFor="message">Project Details*</label>
                            <textarea  name="message" id="message" rows={4} className='input-field' />
                            <button type="submit" className='text-amber-50 bg-primary-color dark:bg-third-color px-7 py-3 rounded-full border-b-2 border-gray-200 hover:bg-secondary-color hover:shadow-md transition-all hover:translate-y-1 w-max ml-auto' >Submit</button>
                        </form>
                    </div>
                </div>
            </section>

            <LastSection isDark={isDark} />
            <Footer/>
        </main>
    );
};

export default Contact;