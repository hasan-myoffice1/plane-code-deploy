import React, { useState } from 'react';
import Header from '../components/Header';

const Home = () => {
    const [isDark, setDark] = useState(false);
    const moodImage = isDark ? '/lucide_sun.svg' : '/solar_moon-line-duotone.svg';

    const moodButton = () => {
        setDark((prev) => !prev);
    };

    return (
        <main className={isDark ? 'dark' : ''}>
            <Header moodButton={moodButton} moodImage={moodImage} />
            <section className='dark:bg-dark-body w-full h-[100vh]'>
       
            </section>

        
        </main>
    );
};

export default Home;