import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Logo Minimalista */}
                    <div className="flex items-center gap-2 grayscale opacity-50 font-bold text-sm tracking-tighter">
                        <div className="size-5 bg-slate-900 rounded-md"></div>
                        <span className="text-apple-black uppercase">B2B SOLUTIONS</span>
                    </div>

                    {/* Links de Navegación */}
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">LinkedIn</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-slate-400 font-medium">
                        © 2026 B2B Solutions. Handcrafted with precision.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;