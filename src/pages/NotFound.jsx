import React from 'react';

const NotFound = () => {
    return (
        <section className='min-h-screen bg-white text-gray-900 dark:bg-[#1B1E24] dark:text-[#EBECF0] px-6 py-12'>

            <div className='flex align-middle justify-center w-full gap-4'>   
                <h1 className='font-bold text-red-500'>404</h1>
                <h2 className='font-bold text-shadow-blue-500'>Nothing</h2>
            </div>
        </section>
    );
};

export default NotFound;