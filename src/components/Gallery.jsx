import React, { useState } from 'react';



const Gallery = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openProject = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <section id="galeria" className="py-24 bg-background border-t border-white/5 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-artium-gold/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-artium-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                            Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Proyectos <span className="text-gray-600 italic font-serif">Realizados</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? 'md:col-span-2' : ''
                                }`}
                            onClick={() => openProject(project)}
                        >
                            <div className="aspect-[4/3] w-full h-full bg-surface/50">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-artium-gold text-xs font-bold uppercase tracking-widest mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-2xl font-display font-bold text-white mb-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {project.location}
                                            </p>
                                        </div>
                                        {project.images.length > 1 && (
                                            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-white text-xs">
                                                <span className="material-symbols-outlined text-sm">photo_library</span>
                                                <span>{project.images.length}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal with Carousel logic */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <button className="absolute top-6 right-6 text-white hover:text-artium-gold transition-colors z-50">
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>

                    {/* Navigation Buttons */}
                    {selectedProject.images.length > 1 && (
                        <>
                            <button
                                className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50"
                                onClick={prevImage}
                            >
                                <span className="material-symbols-outlined text-5xl">chevron_left</span>
                            </button>
                            <button
                                className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50"
                                onClick={nextImage}
                            >
                                <span className="material-symbols-outlined text-5xl">chevron_right</span>
                            </button>
                        </>
                    )}

                    <div className="relative max-w-5xl w-full flex flex-col items-center">
                        <div className="relative w-auto shadow-2xl mb-4">
                            <img
                                src={selectedProject.images[currentImageIndex]}
                                alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                                className="block max-w-full max-h-[70vh] w-auto h-auto object-contain mx-auto rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>

                        <div className="text-center" onClick={(e) => e.stopPropagation()}>
                            <h3 className="text-white text-xl font-bold">{selectedProject.title}</h3>
                            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-1">
                                <span>{selectedProject.location}</span>
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <span>•</span>
                                        <span>{currentImageIndex + 1} / {selectedProject.images.length}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
