import React from 'react';
import Hero from '../components/Hero';
import TitleAndDesc from '../components/TitleAndDesc';
import NumberCount from '../components/NumberCount';
import Card from './../components/Card';
import { Link } from 'react-router-dom';
import homeData from '../assets/HomeData';
import FAQ from '../components/FAQ';
import CenterHeading from './../components/CenterHeading';
import ProcessCard from '../components/ProcessCard';
import CTA from '../components/CTA';

const Home = () => {
    const { heroSection, aboutSection, servicesSection, stats, serviceCards,testimonialsSection, fqaSection, commonQuestions, processSection, pCards, expertiseSection } = homeData;

    return (
        <main className='bg-light-body dark:bg-dark-body'>
            <Hero heroSection={heroSection} />

            <section className='container text-dark-text dark:text-light-text'>
                 <TitleAndDesc SectionData={aboutSection} />
                 <div className='flex flex-wrap gap-10 pt-10'>
                    {stats.map((item, index) => (
                        <NumberCount key={index} end={item.end} text={item.text} />
                    ))}
                 </div>
            </section>

            <section id='services' className='bg-linear-to-r from-blue-950 to-blue-600'>
                <div className='container text-light-body'>
                    <TitleAndDesc SectionData={servicesSection} />
                    
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

            <section>
                <div className='container dark:text-light-text text-dark-text'>
                    <TitleAndDesc SectionData={testimonialsSection}/>
                    <div className='flex pt-10 md:flex-nowrap flex-wrap gap-10'>
                        <div className='dark:text-light-text w-max'>
                            <h3 className='text-5xl sm:text-8xl font-bold relative'>4.7/5</h3>
                            <span>⭐⭐⭐⭐⭐</span>
                            <p className='text-balance'>Trusted by businesses across the USA, UK, and Europe for quality web development services.</p>
                        </div>
                        <div className='border-l-2 border-secondary-color mt-10 md:mt-0 p-5 sm:px-10 py-4'>
                            <p className='text-balance'>PlanCodeDeploy transformed our outdated website into a modern platform that reflects our brand perfectly. The communication was excellent, deadlines were met, and the final product exceeded expectations.</p>
                            <div className='flex justify-between'>
                                <div>
                                    <h4 className='text-xl font-bold mt-5'>Michael Anderson</h4>
                                    <span className='text-sm text-secondary-color font-semibold'>Business Owner</span>
                                </div>
                                <div className='grid grid-cols-2 content-end gap-5'>
                                    <span className='text-2xl sm:text-3xl text-secondary-color'>&#8617;</span>
                                    <span className='text-2xl sm:text-3xl text-secondary-color'>&#8618;</span>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-light-section dark:bg-dark-section'>
                <div className="container text-dark-text dark:text-light-text">
                    <TitleAndDesc SectionData={fqaSection}/>
                    
                    {
                        commonQuestions.map(( fqa, index )=>(
                            <FAQ key={index} fqa_question={fqa.question} fqa_answer={fqa.answer}/>
                        ))
                    }
                </div>
            </section>

            <section>
                <div className="container text-dark-text dark:text-light-text">
                    <CenterHeading SectionData={processSection}/>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 pt-10'>
                        {pCards.map((card, index) => (
                            <ProcessCard
                                key={index}
                                card_title={card.card_title}
                                card_desc={card.card_desc}
                                step={card.step}
                                isActive={index === 0}
                            />
                        ))}
                    </div>
                    <p className='text-center p-10'>Trusted by <span className='bg-secondary-color px-6 py-2 rounded-full'>120+</span> businesses across international markets.</p>             
                </div>
            </section>

            <section className='h-[80vh] flex bg-no-repeat bg-cover z-0 relative bg-center overflow-hidden' style={{ backgroundImage: `url('/src/assets/aboutPageHero.jpg')`}}>
                <div className='bg-dark-body/75 z-[-1] w-full h-full absolute to-0% right-0'></div>
                <div className='w-[100px] h-[100px] absolute top-5 left-100 rotate-45 border-2 border-secondary-color rounded-xl overflow-hidden hover:scale-110'>
                    <img src="/src/assets/homepageHero.png" className='w-full h-full object-cover -rotate-45 scale-150' alt="" />
                </div>
                <div className='w-[300px] h-[300px] hidden xl:block absolute top-50 right-0 rotate-45 border-2 border-secondary-color rounded-3xl overflow-hidden hover:scale-110 z-0'>
                    <img src="/src/assets/aboutPageHero.jpg" className='w-full h-full object-cover -rotate-45 scale-150' alt="" />
                </div>
                <div className='w-[100px] h-[100px] absolute  bottom-0 left-40 rotate-45 border-2 border-secondary-color rounded-xl overflow-hidden hover:scale-110'>
                    <img src="/src/assets/servicesPageHero.jpg" className='w-full h-full object-cover -rotate-45 scale-150' alt="" />
                </div>
                <div className="container z-20">
                    <CTA cardData={expertiseSection}/>
                </div>
            </section>
            <section className='h-40'></section>
        </main>
    );
};

export default Home;