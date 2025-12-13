import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
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

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Diseños', href: '#especialidades' },
                        { name: 'Metodología', href: '#proceso' },
                        { name: 'Portfolio', href: '#galeria' },
                        { name: 'Quienes Somos', href: '#nosotros' },
                        { name: 'Contactanos', href: '#contacto' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-artium-gold transition-colors uppercase tracking-widest"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <button className="px-6 py-2.5 bg-artium-gold hover:bg-white hover:text-black transition-all duration-300 text-black text-xs font-bold uppercase tracking-widest rounded-sm">
                        Cotizar Ahora
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-1"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-up md:hidden">
                    {[
                        { name: 'Diseños', href: '#especialidades' },
                        { name: 'Metodología', href: '#proceso' },
                        { name: 'Portfolio', href: '#galeria' },
                        { name: 'Quienes Somos', href: '#nosotros' },
                        { name: 'Contactanos', href: '#contacto' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-white hover:text-artium-gold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className="mt-4 w-full py-3 bg-artium-gold text-black font-bold uppercase tracking-widest">
                        Solicitar Cotización
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
