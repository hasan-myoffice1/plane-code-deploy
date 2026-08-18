import React from 'react';
import TitleAndDesc from './TitleAndDesc';
import homeData from '../assets/data/HomeData';
import FAQ from './FAQ';

const FQASection = () => {
    const { fqaSection, commonQuestions } = homeData;
    return (
        <div className="container text-dark-text dark:text-light-text">
            <TitleAndDesc SectionData={fqaSection}/>
            
            {
                commonQuestions.map(( fqa, index )=>(
                    <FAQ key={index} fqa_question={fqa.question} fqa_answer={fqa.answer}/>
                ))
            }
        </div>
    );
};

export default FQASection;