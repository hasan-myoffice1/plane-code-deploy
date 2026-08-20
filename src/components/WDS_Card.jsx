import React from 'react';

const WDS_Card = ({id, icon, title, desc, features=[]}) => {
    console.log(features);
    
    return (
        <div className='md:flex-1/2 md:p-10 mb-20 '>
            <article>
                <div className='mb-5'>
                    <span className='text-4xl font-bold p-3'>{id}</span>
                    <span className='border rounded-xl px-5 py-2'>{icon}</span>
                </div>
                <h3 className='text-xl font-bold mb-3'>{title}</h3>
                <p>{desc}</p>
                <ul className='list-disc list-inside'>
                    {features.map(
                        (list, index) => {
                            return <li key={index}>{list}</li>
                        }
                    )}
                </ul>
            </article>
        </div>
    );
};

export default WDS_Card;