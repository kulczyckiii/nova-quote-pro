import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We dive deep into your business model to align our digital strategy with your corporate goals.'
    },
    {
        number: '02',
        title: 'Design & Experience',
        description: 'Our designers craft high-fidelity interfaces focusing on premium aesthetics and intuitive user flows.'
    },
    {
        number: '03',
        title: 'Development & QA',
        description: 'We build with precision using modern frameworks, ensuring every line of code is optimized for performance.'
    },
    {
        number: '04',
        title: 'Launch & Growth',
        description: 'A seamless deployment followed by continuous optimization to ensure your digital asset scales.'
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Method</h2>
                    <p className="text-4xl md:text-5xl font-bold text-apple-black tracking-tight">
                        How we bring your <br className="hidden md:block" /> vision to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {steps.map((step, index) => (
                        <div key={index} className="relative h-64">
                            {/* El número ahora tiene una posición fija y un color más visible */}
                            <div
                                className="absolute top-0 left-0 select-none pointer-events-none"
                                style={{
                                    fontSize: '120px',
                                    fontWeight: '900',
                                    color: '#c1c6ceff', // Un gris slate-200 sólido
                                    lineHeight: '1',
                                    zIndex: '0'
                                }}
                            >
                                {step.number}
                            </div>

                            {/* El contenido se desplaza hacia abajo para no tapar el número totalmente */}
                            <div className="relative z-10 pt-20">
                                <h3 className="text-xl font-bold mb-4 text-apple-black uppercase tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed font-medium text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;