import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-artium-zinc border-t border-white/5 pt-20 pb-10">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/artium-logo.png"
                                alt="Artium Logo"
                                className="h-16 w-auto object-contain"
                            />
                            <span className="text-2xl font-display font-bold text-white tracking-wide">
                                ARTIUM
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[300px]">
                            Redefiniendo el estándar del mobiliario a medida. Calidad artesanal y diseño contemporáneo.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explorar</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a className="hover:text-artium-gold transition-colors" href="#especialidades">Diseños</a></li>
                            <li><a className="hover:text-artium-gold transition-colors" href="#proceso">Metodología</a></li>
                            <li><a className="hover:text-artium-gold transition-colors" href="#galeria">Portfolio</a></li>
                            <li><a className="hover:text-artium-gold transition-colors" href="#nosotros">Quienes Somos</a></li>
                            <li><a className="hover:text-artium-gold transition-colors" href="#contacto">Contactanos</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-artium-gold text-lg">location_on</span>
                                <span>Av. Militar 3710,<br />Ciudadela, Buenos Aires</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-artium-gold text-lg">call</span>
                                <a href="https://wa.me/541164045074" className="hover:text-artium-gold transition-colors">+54 11 64 04 50 74</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-artium-gold text-lg">mail</span>
                                <a href="#contacto" className="hover:text-artium-gold transition-colors">Enviar mensaje</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/artium.ar?igsh=MWRldGhnYXhraG44eg==" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-artium-gold hover:text-black hover:border-artium-gold transition-all duration-300">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto justify-center md:justify-start">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Artium. Todos los derechos reservados.
                        </p>
                        <a href="/admin/login" className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-gray-400 hover:text-artium-gold hover:border-artium-gold transition-colors uppercase tracking-wider">
                            Admin Access
                        </a>
                    </div>

                    <p className="text-xs text-gray-600 text-center md:text-right">
                        Diseñado con <span className="text-artium-gold">♥</span> en Buenos Aires.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
