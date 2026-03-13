import React from 'react';

const QuoteCard = ({ title, subtitle, icon, isSelected, onClick, variant = "default" }) => {
    const selectedClass = "bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02] border-transparent";
    const unselectedClass = "bg-white dark:bg-white/5 border-black/5 dark:border-white/10 hover:border-primary/50 shadow-sm hover:scale-[1.02]";

    if (variant === "pill") {
        return (
            <button
                onClick={onClick}
                className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all ${isSelected ? selectedClass : unselectedClass}`}
            >
                {icon && <span className="material-symbols-outlined text-sm">{icon}</span>}
                {title}
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`p-5 rounded-2xl border text-left transition-all flex flex-col ${isSelected ? selectedClass : unselectedClass}`}
        >
            <span className={`block text-sm font-bold mb-1 ${isSelected ? 'text-white' : 'text-apple-black'}`}>
                {title}
            </span>
            <span className={`text-[10px] uppercase tracking-tight font-semibold ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                {subtitle}
            </span>
        </button>
    );
};

export default QuoteCard;