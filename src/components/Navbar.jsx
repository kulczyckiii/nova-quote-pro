import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isQuotePage = location.pathname === '/quote';

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/20 backdrop-blur-[25px]">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* LADO IZQUIERDO: Logo */}
                    <Link to="/" className="flex items-center gap-2 w-48">
                        <div className="size-8 bg-primary flex items-center justify-center rounded-lg">
                            <span className="material-symbols-outlined text-white text-lg">bolt</span>
                        </div>
                        <span className="text-lg font-bold tracking-tighter text-apple-black uppercase">B2B Solutions</span>
                    </Link>

                    {/* CENTRO: Navegación Actualizada */}
                    {!isQuotePage && (
                        <div className="hidden lg:flex items-center gap-6 text-[13px] font-bold uppercase tracking-widest text-slate-600">
                            <a href="#services" className="hover:text-primary transition-colors">Services</a>
                            <a href="#portfolio" className="hover:text-primary transition-colors">Works</a>
                            <a href="#process" className="hover:text-primary transition-colors">Process</a>
                            <a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a>
                            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
                        </div>
                    )}

                    {/* LADO DERECHO: Botón y Menú Móvil */}
                    <div className="flex items-center justify-end gap-3 w-48">
                        {isQuotePage ? (
                            <Link
                                to="/"
                                className="bg-apple-black text-white px-5 py-2 text-sm font-bold hover:bg-black transition-all rounded-full"
                            >
                                Main Site
                            </Link>
                        ) : (
                            <Link
                                to="/quote"
                                className="bg-primary text-white px-5 py-2 text-sm font-bold hover:brightness-110 transition-all rounded-full shadow-lg shadow-primary/20"
                            >
                                Get a Quote
                            </Link>
                        )}

                        {/* Toggle para móvil con tamaño fijo para evitar saltos */}
                        {!isQuotePage && (
                            <button
                                className="size-10 lg:!hidden flex items-center justify-center material-symbols-outlined text-apple-black text-[32px]"
                                onClick={toggleMenu}
                            >
                                {isOpen ? 'close' : 'menu'}
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Menú Móvil Overlay Actualizado */}
            <div
                className={`fixed inset-0 z-[200] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                {/* Botón de cierre con el mismo tamaño que el de apertura */}
                <button className="absolute top-6 right-6 size-10 flex items-center justify-center" onClick={toggleMenu}>
                    <span className="material-symbols-outlined text-[32px]">close</span>
                </button>
                <ul className="flex flex-col gap-6 text-center">
                    <li><a href="#services" className="text-4xl font-bold" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#portfolio" className="text-4xl font-bold" onClick={toggleMenu}>Works</a></li>
                    <li><a href="#process" className="text-4xl font-bold" onClick={toggleMenu}>Process</a></li>
                    <li><a href="#testimonials" className="text-4xl font-bold" onClick={toggleMenu}>Reviews</a></li>
                    <li><Link to="/quote" className="text-4xl font-bold text-primary" onClick={toggleMenu}>Get a Quote</Link></li>
                    <li><a href="#contact" className="text-4xl font-bold" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;