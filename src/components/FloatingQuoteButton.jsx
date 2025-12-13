import React, { useState } from 'react';

const FloatingQuoteButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="#contacto"
            className={`flex items-center gap-2 h-14 bg-artium-gold text-black shadow-lg rounded-full transition-all duration-300 ${isHovered ? 'pl-6 pr-2 w-auto' : 'w-14 justify-center pl-0 pr-0'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={`whitespace-nowrap font-bold text-sm overflow-hidden transition-all duration-300 ${isHovered ? 'w-auto opacity-100' : 'w-0 opacity-0'
                }`}>
                Solicitar Cotización
            </span>
            <div className="size-10 flex items-center justify-center rounded-full bg-black text-artium-gold">
                <span className="material-symbols-outlined text-xl">request_quote</span>
            </div>
        </a>
    );
};

export default FloatingQuoteButton;
