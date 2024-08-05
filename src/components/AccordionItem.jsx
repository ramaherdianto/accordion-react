import React from 'react';

const AccordionItem = ({ faq, currOpen, setIsOpen }) => {
    const isOpen = faq.id === currOpen;

    const handleToggle = () => {
        setIsOpen(isOpen ? null : faq.id);
    };

    return (
        <>
            <article
                className={`flex cursor-pointer sm:max-w-2xl p-4 rounded-lg justify-start gap-8 transition-all duration-300 ease-in-out ${
                    isOpen ? 'bg-[#F0F4FD]' : ''
                }`}
                onClick={handleToggle}
            >
                <div className='flex gap-4 items-start'>
                    <span className='text-xl font-semibold bg-white w-14 h-7 rounded-full flex items-center justify-center'>
                        {isOpen ? '-' : '+'}
                    </span>
                </div>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-md font-semibold ms-0'>{faq.question}</h1>
                    {isOpen && <p className='text-sm'>{faq.answer}</p>}
                </div>
            </article>
        </>
    );
};

export default AccordionItem;
