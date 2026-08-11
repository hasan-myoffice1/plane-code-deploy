import React, { useEffect, useState } from 'react';

const NumberCount = ({ end = 100, text = 'Projects Successfully Delivered' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const finalValue = Number(end) || 0;
        const duration = 1800;
        const startTime = Date.now();

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.round(progress * finalValue);

            setCount(value);

            if (progress >= 1) {
                clearInterval(timer);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className='dark:text-light-body max-w-[170px]'>
            <h3 className='text-5xl sm:text-8xl font-bold relative'>
                <span>{count}</span>
                <sup className='text-secondary-color font-medium text-4xl absolute to-15%'>+</sup>
            </h3>
            <p className='text-balance'>{text}</p>
        </div>
    );
};

export default NumberCount;