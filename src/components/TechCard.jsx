import React from 'react';

const TechCard = (props) => {
    return (
        <>
            <div className='text-center'>
                <div className='p-4'>
                    <span className='text-4xl font-bold p-3'>{props.step}</span>
                    <span className='border rounded-xl px-5 py-2'>{props.icon}</span>
                </div>
                <h4 className='text-xl font-bold'>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
        </>
    );
};

export default TechCard;