import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import WebDevelopment from './pages/WebDevelopment';

function App() {
   
    const [isDark, setDark] = useState(false);
    const moodImage = isDark ? '/lucide_sun.svg' : '/solar_moon-line-duotone.svg';

    const moodButton = () => {
        setDark((prev) => !prev);
    };
    
      // initialize theme from localStorage
      useEffect(() => {
         const saved = localStorage.getItem('theme');
         if (saved === 'dark') setDark(true);
      }, []);

      // persist theme changes
      useEffect(() => {
         localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }, [isDark]);

   return (
      <div className={isDark ? 'dark' : ''}>
         <BrowserRouter>
            <Header isDark={isDark} moodButton={moodButton} moodImage={moodImage} />
            <Routes>
               <Route path='/' element={<Home isDark={isDark} />} />
               <Route path='/services' element={<Services isDark={isDark} />} />
               <Route path='/about' element={<About isDark={isDark} />} />
               <Route path='/contact' element={<Contact isDark={isDark} />} />
               <Route path='*' element={<NotFound />} />
               <Route path='/service/web-development' element={<WebDevelopment isDark={isDark}/>}/>
            </Routes>
         </BrowserRouter>
      </div>
   )
}
   
export default App
