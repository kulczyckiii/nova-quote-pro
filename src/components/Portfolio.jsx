import React, { useRef } from 'react';

const projects = [
    {
        title: 'HealthTech Platform',
        category: 'Web App',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070',
    },
    {
        title: 'FinStream Dashboard',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=2070',
    },
    {
        title: 'EcoStore E-commerce',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2070',
    },
    {
        title: 'Luxury Real Estate',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2073',
    }
];

const Portfolio = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth * 0.8;
            current.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="portfolio" className="py-24 px-6 bg-[#F5F5F7]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Portfolio</h2>
                        <p className="text-4xl md:text-5xl font-bold text-apple-black tracking-tight">
                            Selected works that <br className="hidden md:block" /> define excellence.
                        </p>
                    </div>

                    {/* Controles del Carrusel */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll(-1)}
                            className="size-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button
                            onClick={() => scroll(1)}
                            className="size-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Contenedor del Carrusel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[500px] aspect-[4/3] snap-start relative group rounded-[2.5rem] overflow-hidden shadow-lg"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">{project.category}</span>
                                <h3 className="text-white text-3xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;