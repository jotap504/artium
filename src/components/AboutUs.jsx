import React from 'react';

const AboutUs = () => {
    return (
        <section id="nosotros" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Image/Visual Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface/30 relative">
                            {/* Video de presentación */}
                            <video
                                src="/nosotros.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-white font-display text-2xl font-bold">Rodrigo & Juan Pablo</h3>
                                <p className="text-artium-gold text-sm uppercase tracking-widest mt-2">Unidos por la pasión del oficio</p>
                            </div>
                        </div>
                        {/* Decorative frame */}
                        <div className="absolute -top-4 -right-4 w-full h-full border border-artium-gold/30 rounded-lg -z-10" />
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <span className="text-artium-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                            Quienes Somos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-8">
                            Pasión por el <span className="font-serif italic text-gray-500">Detalle.</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 leading-relaxed font-light">
                            <p>
                                En Artium, fusionamos la tradición de la carpintería artesanal con el diseño contemporáneo. Fundada por <strong>Rodrigo y Juan Pablo</strong>, nuestra firma nace de una visión compartida: transformar espacios en experiencias.
                            </p>
                            <p>
                                Con años de experiencia perfeccionando la técnica, cada pieza que creamos es un testimonio de dedicación, calidad sin compromisos y un profundo respeto por los materiales nobles. No solo construimos muebles; materializamos sueños y elevamos el estándar de vida de nuestros clientes.
                            </p>
                            <p>
                                Creemos que el verdadero lujo reside en la personalización y en la durabilidad de lo que te rodea.
                            </p>
                        </div>

                        <div className="mt-10">
                            <img
                                src="/images/signature.png"
                                alt="Firma"
                                className="h-12 opacity-50 invert"
                                onError={(e) => e.target.style.display = 'none'} // Hide if no signature image
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
