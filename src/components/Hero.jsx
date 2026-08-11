import React from 'react';
import { Link } from 'react-router-dom';


const Hero = (p) => {
     const heroButtonText = p?.heroSection?.['hero_button_text'];
     const email = p?.heroSection?.['email'];
     const phone = p?.heroSection?.['phone'];

     return (
          <div id='hero' className='bg-no-repeat bg-cover z-0 relative bg-center'  style={{ backgroundImage: `url(${p.heroSection?.hero_bg_uri})` }}>
               <div className='bg-dark-body/75 z-[-1] w-full h-full absolute to-0% right-0'></div>
               <div className='container z-30 flex flex-col justify-between h-[80vh]'>
                    <div className='text-right'>

                         {phone ? (
                              <div className='flex gap-3  align-middle  justify-end'>
                                   <p className='highlight-text-sec mt-1 text-sm'>{p.heroSection['phone']} </p> 
                                   <img src="/ion_call-outline.png" alt="" className='p-1'/>
                              </div>
                         ): null}

                         {email ? (
                              <div className='flex gap-3  align-middle  justify-end'>
                                   <p className='highlight-text-sec mt-1 text-sm'>{p.heroSection['email']}</p>    
                                   <img src="/line-md_email.png" alt="" className='p-1'/>
                              </div>
                         ): null}
                         
                    </div>
                    <div className='md:w-[70%]  w-full mb-10'>
                         <span className='text-section-small-heading text-secondary-color uppercase tracking-widest font-semibold'>{p.heroSection['hero_small_title']}</span>

                         <h1 className='text-hero-heading font-bold leading-tight text-light-body'>
                              {p.heroSection['hero_section_heading_f']}
                              <span className='highlight-text-pri'>{p.heroSection['hero_highlight_text']}</span>
                              {p.heroSection['hero_section_heading_l']}
                         </h1>
                         <p className='text-gray-200 mt-5'>{p.heroSection['hero_desc']}</p>

                         {heroButtonText ? (
                              <button className='mt-4'>
                                   <Link to='/services' className='button-primary'>{heroButtonText}</Link>
                              </button>
                         ) : null}
                    </div>
               </div>
          </div>
     );
};

export default Hero;