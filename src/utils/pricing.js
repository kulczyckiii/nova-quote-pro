export const PRICING_DATA = {
    services: {
        'Web App': 2000,
        'Mobile iOS': 5000,
        'Design System': 3000,
        'Backend API': 4500
    },
    complexity: {
        'MVP': 0.7,
        'Standard': 1.0,
        'Enterprise': 1.5
    },
    urgency: {
        'Standard': 1.0,
        'Express': 1.5,
        'Maintenance': 1.2
    },
    extras: {
        'seo': 300,
        'multi': 400,
        'perf': 600
    }
};

export const calculateQuote = (service, complexity, urgency, selectedExtras) => {
    let base = PRICING_DATA.services[service] || 0;
    base *= PRICING_DATA.complexity[complexity] || 1;
    base *= PRICING_DATA.urgency[urgency] || 1;

    const extrasTotal = selectedExtras.reduce((acc, curr) => acc + (PRICING_DATA.extras[curr] || 0), 0);
    const total = Math.round(base + extrasTotal);

    return {
        total,
        max: Math.round(total * 1.15) // Rango del +15% como en el 2.html
    };
};