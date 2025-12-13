import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío - aquí puedes integrar con tu backend o servicio de email
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Form submitted:', formData);
        setSubmitted(true);
        setIsSubmitting(false);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
        }, 3000);
    };

    return (
        <section id="contacto" className="py-24 bg-artium-zinc relative border-t border-white/5 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-artium-gold rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-artium-gold rounded-full blur-3xl" />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left side - Text content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-artium-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                            Contacto
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-6">
                            Hagamos realidad <span className="font-serif italic text-gray-500">tu proyecto.</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                            Completá el formulario y nos pondremos en contacto contigo a la brevedad para comenzar a diseñar el espacio de tus sueños.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-artium-gold/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-artium-gold">location_on</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Visitanos</p>
                                    <p className="text-gray-400 text-sm">Av. Militar 3710, Ciudadela</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-artium-gold/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-artium-gold">call</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Llamanos</p>
                                    <a href="https://wa.me/541164045074" className="text-gray-400 text-sm hover:text-artium-gold transition-colors">+54 11 64 04 50 74</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="size-16 rounded-full bg-artium-gold/20 flex items-center justify-center mx-auto mb-4">
                                        <span className="material-symbols-outlined text-artium-gold text-3xl">check_circle</span>
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                                    <p className="text-gray-400">Nos pondremos en contacto pronto.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-artium-gold focus:ring-1 focus:ring-artium-gold transition-colors"
                                            placeholder="Tu nombre"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="telefono"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-artium-gold focus:ring-1 focus:ring-artium-gold transition-colors"
                                                placeholder="+54 11 ..."
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-artium-gold focus:ring-1 focus:ring-artium-gold transition-colors"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-artium-gold focus:ring-1 focus:ring-artium-gold transition-colors resize-none"
                                            placeholder="Contanos sobre tu proyecto..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-artium-gold hover:bg-white hover:text-black transition-all duration-300 text-black font-bold uppercase tracking-widest rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-spin">⏳</span>
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Mensaje
                                                <span className="material-symbols-outlined">arrow_forward</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
