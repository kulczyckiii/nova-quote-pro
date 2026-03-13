import React from 'react';

const testimonials = [
    {
        text: "The attention to detail and minimalism of B2B Solutions completely transformed our digital presence.",
        name: "Marco Rossi",
        role: "CTO, Global Tech"
    },
    {
        text: "A Swiss team with a global vision. Their design process is simply impeccable.",
        name: "Elena Schneider",
        role: "Design Director, Alpine Lux"
    },
    {
        text: "Results that speak for themselves. Our conversion rate increased by 40% in three months.",
        name: "Adrian Müller",
        role: "Founder, Zürich Innovations"
    }
];

const Testimonials = () => {
    // Duplicamos el array para crear el efecto de bucle infinito sin saltos
    const doubleTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-24 bg-[#F5F5F7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-black mb-4">
                    Success Stories
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                    Our corporate clients trust us to lead their digital transformation with precision and care.
                </p>
            </div>

            {/* Contenedor del Carrusel Infinito */}
            <div className="relative flex overflow-hidden">
                <div className="flex gap-8 animate-infinite-scroll hover:[animation-play-state:paused] py-4">
                    {doubleTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[2.5rem] w-[450px] shrink-0 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-500"
                        >
                            <p className="text-lg font-medium text-apple-black mb-8 italic leading-relaxed">
                                "{item.text}"
                            </p>
                            <div>
                                <p className="font-bold text-apple-black">{item.name}</p>
                                <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;