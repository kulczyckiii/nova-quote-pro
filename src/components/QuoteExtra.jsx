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
                    className="w-5 h-5 rounded border-slate-300 text-primary accent-primary focus:ring-primary transition-all cursor-pointer"
                />
                <div>
                    <p className={`text-sm font-bold ${isChecked ? 'text-apple-black' : 'text-slate-700'}`}>
                        {title}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                        {description}
                    </p>
                </div>
            </div>

            {/* Mostramos el precio real (ej: +$300) en lugar de +$0.3k */}
            <span className={`text-sm font-bold ${isChecked ? 'text-primary' : 'text-slate-400'}`}>
                +${price.toLocaleString()}
            </span>
        </label>
    );
};

export default QuoteExtra;