import React, { useState } from 'react';
import { Faqs } from './FaqsData';
import AccordionItem from './AccordionItem';

const Accordion = () => {
    const [currOpen, setIsOpen] = useState(null);

    return (
        <>
            <article className='bg-white p-4 sm:p-8 md:p-10 lg:p-12 max-w-2xl rounded-lg shadow-2xl'>
                <section className='max-w-7xl'>
                    <section className='border-b-2 border-slate-200 flex flex-col gap-10'>
                        <h1 className='text-2xl font-semibold'>
                            FAQ Accordion Content: Digital Agency Web Development
                        </h1>
                        <p className='text-sm mb-10'>
                            We understand that you have questions about our digital agency and the
                            services we offer.
                        </p>
                    </section>
                    <section className='my-10 flex flex-col gap-12 md:gap-6 w-full'>
                        {Faqs.map((faq) => {
                            return (
                                <AccordionItem
                                    faq={faq}
                                    currOpen={currOpen}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </section>
                </section>
            </article>
        </>
    );
};

export default Accordion;
