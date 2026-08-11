import React from 'react';
import { Link } from 'react-router-dom';

const Card = (card_Info) => {
    return (
        <div className='border-b-2 border-s-1 p-10 rounded-2xl border-b-gray-200 border-s-gray-300 text-light-body shadow-2xl  grid grid-cols-1  content-between'>
            <h3 className='text-card-title font-bold mb-7 capitalize'>{card_Info.card_title}</h3>
            <div>
                <img src="https://placehold.co/400" className='h-[100px] mb-7' alt="" />
                <hr  className='w-[60%] border border-secondary-color rounded'/>
                <p className='my-7'>{card_Info.card_desc}</p>
            </div>
            <div className='flex justify-between align-middle '>
                <Link className='text-md text-secondary-color font-semibold'>More details </Link>
                <span>→</span>
            </div>
        </div>
    );
};

export default Card;