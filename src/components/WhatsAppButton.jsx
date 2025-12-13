import React from 'react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/541164045074"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
            aria-label="Contactar por WhatsApp"
        >
            <span className="material-symbols-outlined text-3xl">chat</span>
        </a>
    );
};

export default WhatsAppButton;
