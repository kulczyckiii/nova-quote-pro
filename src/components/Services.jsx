import React from 'react';

const services = [
    {
        icon: 'token',
        title: 'Brand Identity',
        description: 'We craft high-end visual identities that resonate with corporate audiences and establish market authority.'
    },
    {
        icon: 'language',
        title: 'Web Development',
        description: 'Premium, responsive websites built with the latest technologies and a focus on conversion and speed.'
    },
    {
        icon: 'conversion_path',
        title: 'Digital Strategy',
        description: 'Data-driven approaches to scale your business and dominate your niche in the digital landscape.'
    },
    {
        icon: 'shopping_bag',
        title: 'E-commerce',
        description: 'Seamless shopping experiences designed to turn visitors into loyal customers through elegant UX.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">What we do</h2>
                    <p className="text-4xl md:text-5xl font-bold text-apple-black tracking-tight">
                        Comprehensive solutions for <br className="hidden md:block" /> the modern enterprise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-[2rem] border border-slate-100 bg-[#F5F5F7] hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group"
                        >
                            <div className="size-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-primary text-2xl">
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-apple-black">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;