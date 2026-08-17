import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-200'>
            <div className="container">
                <div className="flex flex-wrap items-stretch  justify-between gap-10">
                    <div>
                        <img src="/src/assets/footeroLogo.png" alt=""  className='w-50 mb-5'/>
                        <p className='max-w-100'>PlanCodeDeploy is a professional web development agency delivering modern websites, custom web applications, UI/UX design, and digital solutions for businesses across the USA, UK, and Europe.</p>
                        <div className='mt-4'>
                            <h4 className='text-xl font-bold'>Contact</h4>
                            <p>codeplandeploy@gmail.com</p>
                            <p>+1  096 2542211</p>
                            <div className='flex gap-3 mt-3'>
                                <div className='w-7 h-7 bg-amber-300 rounded-full'></div>
                                <div className='w-7 h-7 bg-amber-300 rounded-full'></div>
                                <div className='w-7 h-7 bg-amber-300 rounded-full'></div>
                                <div className='w-7 h-7 bg-amber-300 rounded-full'></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-10 self-end'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-xl font-bold'>The Company</h4>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About Us</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='/contact'>Contact Us</Link>
                            <div className='flex flex-col gap-2'>
                                <Link>Terms of Services</Link>
                                <Link>Privacy Policies</Link>
                                <Link>cookies</Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-xl font-bold'>Services</h4>
                            <Link to='/'>Web Development</Link>
                            <Link to='/'>Ui/Ux Design</Link>
                            <Link to='/'>Content writing</Link>
                            <Link to='/'>SEO</Link>
                        </div>
                    </div>

                    <div className='self-end'>
                        <h4 className='text-2xl font-bold'>Payment Methods</h4>
                        <div className='flex gap-3 mt-3'>
                            <div className='w-7 h-7 bg-amber-300 '></div>
                            <div className='w-7 h-7 bg-amber-300 '></div>
                            <div className='w-7 h-7 bg-amber-300 '></div>
                            <div className='w-7 h-7 bg-amber-300 '></div> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;