import React ,{useState} from 'react';

const FAQ = ({fqa_question, fqa_answer}) => {

    const [toggle, setToggle] = useState(false);
 
    const answerClasses = `transition-all duration-300 ease-in-out overflow-hidden ${toggle ? 'max-h-40 opacity-100 py-5' : 'max-h-0 opacity-0 py-0'}`;

    return (
        <article className='md:w-[60%] ml-auto border-b-1 border-secondary-color mt-10'>
            <div
                className='flex justify-between mb-4 cursor-pointer'
                onClick={() => setToggle(!toggle)}
                role='button'
                aria-expanded={toggle}
            >
                <h1 className='text-2xl font-semibold text-gray-800 dark:text-gray-50'>{fqa_question}</h1>
                <span className={`transition-transform duration-300 ${toggle ? 'rotate-180' : ''}`}>
                    {toggle ? '\u2B9D' : '\u2B9F'}
                </span>
            </div>
            <div className={answerClasses}>
                <p className='text-base pl-2'>{fqa_answer}</p>
            </div>
        </article>
    );
};

export default FAQ;