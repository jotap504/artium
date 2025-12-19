import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Consulta Inicial',
        description: 'Nos reunimos para entender tu visión, necesidades funcionales y estilo personal.'
    },
    {
        number: '02',
        title: 'Diseño & Propuesta',
        description: 'Creamos un diseño detallado para vos, apoyados en IA para hacer un fotomontaje real de tu espacio a renovar, en materiales Premium.'
    },
    {
        number: '03',
        title: 'Fabricación Artesanal',
        description: 'Nuestros maestros carpinteros dan vida al diseño con precisión milimétrica.'
    },
    {
        number: '04',
        title: 'Instalación',
        description: 'Montaje profesional en tu hogar, asegurando un acabado limpio y perfecto.'
    }
];

const Process = () => {
    return (
        <section id="proceso" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-artium-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="mb-16 md:flex md:justify-between md:items-end">
                    <div className="max-w-[600px]">
                        <span className="text-artium-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                            Cómo Trabajamos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
                            Del concepto a la <span className="font-serif italic text-gray-500">Realidad.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[24px] left-0 w-full h-[1px] bg-gradient-to-r from-artium-gold/20 via-artium-gold/50 to-artium-gold/20 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 group">
                            <div className="mb-6 relative">
                                <div className="size-12 flex items-center justify-center rounded-full bg-surface border border-white/10 text-artium-gold font-bold text-lg group-hover:scale-110 group-hover:border-artium-gold transition-all duration-300 relative z-10 mx-auto md:mx-0">
                                    {step.number}
                                </div>
                                {/* Mobile Vertical Line */}
                                {index !== steps.length - 1 && (
                                    <div className="md:hidden absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/10 -z-10" />
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
