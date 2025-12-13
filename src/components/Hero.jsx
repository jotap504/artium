import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                    poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    {/* Fallback pattern if video fails/loads */}
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat bg-hero-pattern opacity-50"
                    />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-[1000px] px-6 text-center flex flex-col items-center gap-8 animate-fade-in-up">
                <div className="flex flex-col gap-4">
                    <span className="text-artium-gold text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                        Carpintería de Autor
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-[0.9]">
                        Elevamos <br />
                        <span className="italic font-serif text-gray-400">Tu Espacio</span>
                    </h1>
                </div>

                <p className="max-w-[600px] text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                    Diseñamos y materializamos muebles a medida que fusionan funcionalidad con una estética atemporal.
                </p>


            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <span className="material-symbols-outlined text-white/50 text-4xl">keyboard_arrow_down</span>
            </div>
        </section>
    );
};

export default Hero;
