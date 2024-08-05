import React from 'react';

const AccordionItem = ({ faq, currOpen, setIsOpen }) => {
    const isOpen = faq.id === currOpen;

    const handleToggle = () => {
        setIsOpen(isOpen ? null : faq.id);
    };

    return (
        <>
            <article
                className={`flex cursor-pointer flex-col sm:max-w-2xl p-4 rounded-lg justify-center gap-8 transition-all duration-300 ease-in-out ${
                    isOpen ? 'bg-[#F0F4FD]' : ''
                }`}
                onClick={handleToggle}
            >
                <div className='flex gap-4'>
                    <span className='text-xl font-semibold bg-white w-14 h-7 rounded-full flex items-center justify-center'>
                        {isOpen ? '-' : '+'}
                    </span>
                    <h1 className='text-md font-semibold'>{faq.question}</h1>
                </div>
                {isOpen && (
                    <div className='flex justify-center items-center gap-4'>
                        <div className='text-xl font-semibold invisible bg-white w-[90px] sm:w-[100px] md:w-[95px] lg:w-[85px] h-7 rounded-full flex items-center justify-center'>
                            +
                        </div>
                        <p className='text-sm'>{faq.answer}</p>
                    </div>
                )}
            </article>
        </>
    );
};

export default AccordionItem;
