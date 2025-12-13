import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background Image Parallax/Fixed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
                style={{
                    backgroundImage: 'url("/images/cta-background.png")'
                }}
            />
            <div className="absolute inset-0 bg-black/80 z-10" />

            <div className="relative z-20 max-w-[800px] px-6 text-center">
                <span className="text-artium-gold font-bold uppercase tracking-widest text-sm mb-6 block animate-bounce">
                    Comienza tu Proyecto
                </span>
                <h2 className="text-4xl md:text-6xl font-display text-white leading-tight mb-8">
                    ¿Listo para transformar <br /> tu espacio?
                </h2>
                <p className="text-gray-300 text-lg md:text-xl font-light mb-10 leading-relaxed">
                    Agenda una consulta gratuita con nuestros diseñadores y descubre cómo podemos elevar el estilo y funcionalidad de tu hogar.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="https://wa.me/541164045074"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 bg-artium-gold text-black text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Contactar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
