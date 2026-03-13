import React, { useState, useEffect } from 'react';
import QuoteCard from '../components/QuoteCard';
import QuoteExtra from '../components/QuoteExtra';
import { calculateQuote, PRICING_DATA } from '../utils/pricing';

const QuoteGenerator = () => {
    // FUNCIÓN DE AYUDA: Intenta obtener datos guardados o devuelve el valor por defecto
    const getSavedValue = (key, defaultValue) => {
        const saved = localStorage.getItem('quote_config');
        if (!saved) return defaultValue;
        try {
            const parsed = JSON.parse(saved);
            return parsed[key] !== undefined ? parsed[key] : defaultValue;
        } catch {
            return defaultValue;
        }
    };

    // INICIALIZACIÓN DIRECTA (Esto evita que al recargar se pongan los valores por defecto)
    const [service, setService] = useState(() => getSavedValue('service', 'Web App'));
    const [complexity, setComplexity] = useState(() => getSavedValue('complexity', 'Standard'));
    const [urgency, setUrgency] = useState(() => getSavedValue('urgency', 'Standard'));
    const [extras, setExtras] = useState(() => getSavedValue('extras', []));

    // GUARDAR: Cada vez que cambie algo, actualizamos el LocalStorage
    useEffect(() => {
        const configToSave = { service, complexity, urgency, extras };
        localStorage.setItem('quote_config', JSON.stringify(configToSave));
        console.log("Configuración guardada:", configToSave); // Para que verifiques en la consola
    }, [service, complexity, urgency, extras]);

    const { total, max } = calculateQuote(service, complexity, urgency, extras);

    return (
        <main className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-12">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-apple-black">Design your solution.</h1>
                    <p className="text-lg text-slate-500">Configure your requirements to get an instant budget estimate.</p>
                </div>

                {/* 1. Core Services */}
                <section className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">1. Core Services</h3>
                    <div className="flex flex-wrap gap-3">
                        {Object.keys(PRICING_DATA.services).map(item => (
                            <QuoteCard
                                key={item}
                                title={item}
                                variant="pill"
                                icon={item === 'Mobile iOS' ? 'smartphone' : (item === 'Design System' ? 'palette' : (item === 'Backend API' ? 'database' : 'language'))}
                                isSelected={service === item}
                                onClick={() => setService(item)}
                            />
                        ))}
                    </div>
                </section>

                {/* 2. Complexity */}
                <section className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">2. Complexity</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <QuoteCard title="MVP" subtitle="Core features only" isSelected={complexity === 'MVP'} onClick={() => setComplexity('MVP')} />
                        <QuoteCard title="Standard" subtitle="Most popular choice" isSelected={complexity === 'Standard'} onClick={() => setComplexity('Standard')} />
                        <QuoteCard title="Enterprise" subtitle="Scalable & Robust" isSelected={complexity === 'Enterprise'} onClick={() => setComplexity('Enterprise')} />
                    </div>
                </section>

                {/* 3. Urgency */}
                <section className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">3. Urgency</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <QuoteCard title="Standard" subtitle="8-12 Weeks" isSelected={urgency === 'Standard'} onClick={() => setUrgency('Standard')} />
                        <QuoteCard title="Express" subtitle="4-6 Weeks (x1.5)" isSelected={urgency === 'Express'} onClick={() => setUrgency('Express')} />
                        <QuoteCard title="Maintenance" subtitle="Ongoing Support" isSelected={urgency === 'Maintenance'} onClick={() => setUrgency('Maintenance')} />
                    </div>
                </section>

                {/* 4. Project Extras */}
                <section className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">4. Project Extras</h3>
                    <div className="space-y-3">
                        <QuoteExtra
                            title="SEO Optimization"
                            description="Better visibility on search engines"
                            price={1200}
                            isChecked={extras.includes('seo')}
                            onChange={() => setExtras(prev => prev.includes('seo') ? prev.filter(e => e !== 'seo') : [...prev, 'seo'])}
                        />
                        <QuoteExtra
                            title="Multilingual Support"
                            description="Target a global audience"
                            price={2500}
                            isChecked={extras.includes('multi')}
                            onChange={() => setExtras(prev => prev.includes('multi') ? prev.filter(e => e !== 'multi') : [...prev, 'multi'])}
                        />
                        <QuoteExtra
                            title="Performance Optimization"
                            description="Advanced caching and minification"
                            price={1500}
                            isChecked={extras.includes('perf')}
                            onChange={() => setExtras(prev => prev.includes('perf') ? prev.filter(e => e !== 'perf') : [...prev, 'perf'])}
                        />
                    </div>
                </section>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-5 relative">
                <div className="sticky top-28 bg-white/80 backdrop-blur-2xl p-8 rounded-4xl border border-white/40 shadow-2xl">
                    <h2 className="text-2xl font-bold mb-2">Estimate Summary</h2>
                    <p className="text-slate-500 text-sm mb-6">Based on your current selections</p>

                    <div className="space-y-4 border-y border-slate-200 py-6 mb-6">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">{service} ({complexity})</span>
                            <span className="font-medium text-apple-black">${PRICING_DATA.services[service]?.toLocaleString()}</span>
                        </div>
                        {urgency === 'Express' && (
                            <div className="flex justify-between text-sm text-primary font-medium">
                                <span>Express Delivery Fees</span>
                                <span>Included (x1.5)</span>
                            </div>
                        )}
                        {extras.map(e => (
                            <div key={e} className="flex justify-between text-sm">
                                <span className="text-slate-500 capitalize">{e} Optimization</span>
                                <span className="font-medium text-apple-black">
                                    +${PRICING_DATA.extras[e]?.toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2 mb-8">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-500">Estimated Price Range</p>
                            <div className="flex items-center gap-1.5">
                                <span className="size-1.5 bg-green-500 rounded-full"></span>
                                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Auto-saved</span>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black tracking-tight text-apple-black">
                                ${total.toLocaleString()}
                            </span>
                            <span className="text-xl text-slate-400 font-medium">
                                - ${max.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                            Book Free Strategy Call
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default QuoteGenerator;