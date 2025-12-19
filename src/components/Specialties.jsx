import React from 'react';

const specialties = [
    {
        id: 'cocinas-1',
        title: 'Cocinas de Autor',
        description: 'Funcionalidad y estética fusionadas en el corazón de tu hogar.',
        image: '/images/kitchen-1.png'
    },
    {
        id: 'cocinas-2',
        title: 'Cocinas Modernas',
        description: 'Diseños vanguardistas que inspiran tus momentos culinarios.',
        image: '/images/kitchen-2.jpg'
    },
    {
        id: 'vestidores-1',
        title: 'Vestidores Boutique',
        description: 'Organización inteligente para tu colección personal.',
        image: '/images/vestidor-1.jpg'
    },
    {
        id: 'vestidores-2',
        title: 'Placares a Medida',
        description: 'Maximizamos el espacio sin sacrificar el estilo.',
        image: '/images/placar-white.png'
    },
    {
        id: 'livings-1',
        title: 'Livings & Estar',
        description: 'Entornos acogedores diseñados para el relax y la reunión.',
        image: '/images/living-new.jpg'
    },
    {
        id: 'escritorios',
        title: 'Escritorios con personalidad',
        description: 'Espacios de trabajo diseñados a tu medida para inspirar productividad.',
        image: '/images/escritorio.jpg'
    }
];

const Specialties = () => {
    return (
        <section id="especialidades" className="py-24 bg-artium-zinc border-t border-white/5">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="text-center max-w-[800px] mx-auto mb-16">
                    <span className="text-artium-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                        Nuestras Especialidades
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
                        Elegancia en cada <span className="font-serif italic text-gray-400">Rincón.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {specialties.map((item) => (
                        <div key={item.id} className="group relative overflow-hidden h-[500px] cursor-pointer" id={item.id}>
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="h-[2px] w-12 bg-artium-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specialties;
