import React, { useState } from 'react';

const ContactForm = () => {
    // Estados para el formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        details: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Validación y Envío
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación simple
        if (!formData.name || !formData.email || !formData.details) {
            alert("Please fill in all fields.");
            return;
        }

        setIsSubmitting(true);

        // Simulamos envío a servidor (2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Resetear formulario tras éxito (opcional si quieres que puedan volver a enviarlo)
        setFormData({ name: '', email: '', details: '' });
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#0071E3]/5 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-12 lg:p-20 shadow-xl flex flex-col lg:flex-row gap-16 min-h-[500px] items-center">

                    {/* Info de contacto */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-apple-black leading-tight">
                            Let's build something <br className="hidden md:block" />extraordinary.
                        </h2>
                        <p className="text-slate-500 mb-10 max-w-sm text-lg font-medium">
                            Ready to elevate your digital presence? Send us a message and our team will get back to you within 24 hours.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-apple-black font-bold">
                                <span className="material-symbols-outlined text-primary">mail</span>
                                <span>hello@b2bsolutions.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-apple-black font-bold">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <span>Zürich, Switzerland</span>
                            </div>
                        </div>
                    </div>

                    {/* Lógica del Formulario / Éxito */}
                    <div className="lg:w-1/2 w-full">
                        {isSuccess ? (
                            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                                <div className="size-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                                    <span className="material-symbols-outlined text-4xl">done_all</span>
                                </div>
                                <h3 className="text-3xl font-bold text-apple-black mb-2">Message Sent!</h3>
                                <p className="text-slate-500 mb-8">Thank you for reaching out. We'll be in touch shortly.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="border-b border-slate-200 pb-2 transition-all focus-within:border-primary">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Full Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border-0 bg-transparent p-0 text-apple-black focus:ring-0 placeholder-slate-300 text-lg"
                                        placeholder="Your Name"
                                        type="text"
                                    />
                                </div>
                                <div className="border-b border-slate-200 pb-2 transition-all focus-within:border-primary">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Email Address</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border-0 bg-transparent p-0 text-apple-black focus:ring-0 placeholder-slate-300 text-lg"
                                        placeholder="hello@example.com"
                                        type="email"
                                    />
                                </div>
                                <div className="border-b border-slate-200 pb-2 transition-all focus-within:border-primary">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Project Details</label>
                                    <textarea
                                        name="details"
                                        value={formData.details}
                                        onChange={handleChange}
                                        className="w-full border-0 bg-transparent p-0 text-apple-black focus:ring-0 placeholder-slate-300 text-lg resize-none"
                                        placeholder="Tell us about your project"
                                        rows="2"
                                    ></textarea>
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    className={`w-full bg-primary text-white py-4 font-bold rounded-full shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110 active:scale-[0.98]'}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Proposal Request"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;