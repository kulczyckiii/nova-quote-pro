import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="pb-20 px-6 pt-24 md:pt-32">
            <div className="max-w-5xl mx-auto text-center">
                {/* Título Principal con los colores de tu configuración */}
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-apple-black">
                    Next-Gen Corporate <br />
                    <span className="text-slate-400">Digital Experiences.</span>
                </h1>

                {/* Descripción extraída de 1.html */}
                <p className="text-xl md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    We build high-impact landing pages, web apps, and e-commerce solutions with Swiss-precision design and Apple-inspired minimalism.
                </p>

                {/* Botones de Acción con lógica de navegación */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/quote"
                        className="bg-primary text-white px-8 py-4 text-lg font-bold hover:brightness-110 transition-all w-full sm:w-auto rounded-full shadow-lg shadow-primary/20 text-center"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Imagen / Mockup del Hero */}
                <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 mx-auto max-w-5xl">
                    <img
                        alt="Digital Dashboard Mockup"
                        className="w-full h-auto object-cover"
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;