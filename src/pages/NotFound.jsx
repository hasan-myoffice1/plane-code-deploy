import React from 'react';
import Header from '../components/Header';

const NotFound = () => {
    return (
        <div>
            <Header/>
            <div className='flex align-middle justify-center w-full'>   
                <h1 className='font-bold text-red-500'>404</h1>
                <h2 className='font-bold text-shadow-blue-500'>Nothing</h2>
            </div>
        </div>
    );
};

export default NotFound;