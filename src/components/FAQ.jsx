import React, { useState } from 'react';

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Most landing pages are completed within 2-3 weeks, while complex web applications can take 8-12 weeks depending on the scope."
    },
    {
        question: "Do you offer maintenance after launch?",
        answer: "Yes, we provide premium support and maintenance packages to ensure your digital experience stays fast, secure, and up-to-date."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. We follow a mobile-first approach, ensuring your site looks and performs perfectly on iPhones, iPads, and all other devices."
    },
    {
        question: "Can you help with rebranding?",
        answer: "Yes, our Brand Identity service includes everything from logo design to full visual systems and brand guidelines."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Questions</h2>
                    <p className="text-4xl font-bold text-apple-black tracking-tight">Common Inquiries</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200/50 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-apple-black">{faq.question}</span>
                                <span className={`material-symbols-outlined transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 md:p-8 pt-0 text-slate-500 font-medium leading-relaxed border-t border-slate-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;