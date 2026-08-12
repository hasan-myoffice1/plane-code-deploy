import React from 'react';

const ProcessCard = ({ card_title, card_desc, step, isActive }) => {
    const cardClass = isActive
        ? 'bg-[#279947] text-white border border-[#1e6c38] shadow-[0_30px_70px_rgba(39,166,71,0.18)]'
        : 'bg-white text-dark-text border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:bg-dark-section dark:text-light-text dark:border-slate-700';

    const badgeClass = isActive
        ? 'bg-white/20 text-white'
        : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200';

    return (
        <div className={`rounded-3xl py-10 px-5 md:py-10 text-center transition-all duration-300 ${cardClass}`}>
            <div className='mx-auto mb-8 h-[108px] w-[108px] relative'>
                <div className='absolute inset-0 rounded-[28px] border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-transparent blur-sm' />
                <div className='relative h-full w-full rounded-3xl overflow-hidden rotate-45'>
                    <div className='absolute inset-0 bg-gradient-to-br from-[#34d399] via-[#10b981] to-[#047857]' />
                </div>
            </div>

            <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${badgeClass}`}>{step}</span>
            <h3 className='mt-6 text-xl font-bold uppercase tracking-[0.06em]'>{card_title}</h3>
            <p className='mt-6 text-sm leading-7 text-slate-700 dark:text-slate-300'>{card_desc}</p>
        </div>
    );
};

export default ProcessCard;