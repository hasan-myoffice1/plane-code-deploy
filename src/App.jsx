import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';

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
               <Route path='/' element={<Home />} />
               <Route path='/services' element={<Services />} />
               <Route path='/about' element={<About />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
