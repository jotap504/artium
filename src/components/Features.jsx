import React from 'react';

const features = [
    {
        icon: 'diamond',
        title: 'Diseño Exclusivo',
        description: 'Cada pieza es única, diseñada específicamente para adaptarse a tu estilo y necesidades especiales.'
    },
    {
        icon: 'handyman',
        title: 'Alta Carpintería',
        description: 'Mobiliario de gama alta diseñado con precisión y materiales seleccionados para perdurar.'
    },
    {
        icon: 'forest',
        title: 'Materiales Premium',
        description: 'Seleccionamos Melaminas de alta calidad, Maderas macizas y materiales en tendencia y herrajes de primera calidad para garantizar durabilidad.'
    },
    {
        icon: 'verified',
        title: 'Garantía Artium',
        description: 'Respaldamos nuestro trabajo con un compromiso absoluto de satisfacción y servicio post-venta.'
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/5 -skew-x-12 transform translate-x-20 pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Header */}
                    <div className="md:w-1/3 md:sticky md:top-32">
                        <span className="text-artium-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                            Por qué elegirnos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-6">
                            La diferencia está en los <span className="text-gray-500 font-serif italic">detalles.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            No solo fabricamos muebles, creamos experiencias táctiles y visuales que definen el carácter de tu hogar.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 border border-white/5 bg-surface/30 backdrop-blur-sm rounded-sm hover:bg-surface/50 hover:border-artium-gold/30 transition-all duration-500 group"
                            >
                                <div className="mb-6 inline-flex p-3 rounded-full bg-surface border border-white/10 text-artium-gold group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-artium-gold transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
