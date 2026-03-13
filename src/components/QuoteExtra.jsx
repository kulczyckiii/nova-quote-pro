import React from 'react';

const QuoteExtra = ({ title, description, price, isChecked, onChange }) => {
    return (
        <label className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer hover:scale-[1.01] shadow-sm 
      ${isChecked
                ? 'border-primary/40 bg-white shadow-md'
                : 'border-black/5 bg-white'}`}>

            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={onChange}
                    // accent-primary asegura que el interior sea azul en todos los navegadores
                    className="w-5 h-5 rounded border-slate-300 text-primary accent-primary focus:ring-primary transition-all cursor-pointer"
                />
                <div>
                    {/* Título: Siempre legible. Slate-900 es casi negro, ideal para el estilo Apple */}
                    <p className={`text-sm font-bold ${isChecked ? 'text-apple-black' : 'text-slate-700'}`}>
                        {title}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                        {description}
                    </p>
                </div>
            </div>

            <span className="text-sm font-mono font-bold text-slate-400">
                +${(price / 1000).toFixed(1)}k
            </span>
        </label>
    );
};

export default QuoteExtra;