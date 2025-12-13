import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AdminDashboard = ({ projects, setProjects, onLogout }) => {
    const navigate = useNavigate();
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        category: '',
        images: []
    });

    const handleLogout = () => {
        onLogout();
        navigate('/admin/login');
    };

    const handleEdit = (project) => {
        setEditingId(project.id);
        setFormData({
            title: project.title,
            location: project.location,
            category: project.category || '',
            images: project.images || []
        });
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de eliminar este proyecto?')) {
            setProjects(projects.filter(p => p.id !== id));
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    images: [...prev.images, reader.result]
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = (indexToRemove) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, index) => index !== indexToRemove)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            // Update existing
            setProjects(projects.map(p =>
                p.id === editingId ? { ...p, ...formData } : p
            ));
            setEditingId(null);
        } else {
            // Add new
            const newProject = {
                id: Date.now(),
                ...formData
            };
            setProjects([...projects, newProject]);
        }
        setFormData({ title: '', location: '', category: '', images: [] });
    };

    return (
        <div className="bg-background min-h-screen flex flex-col">
            {/* Simplified Admin Header */}
            <header className="bg-surface/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="size-8 flex items-center justify-center rounded-full bg-artium-gold text-background">
                            <span className="material-symbols-outlined text-xl">carpenter</span>
                        </div>
                        <span className="text-lg font-display font-bold text-white tracking-wide">
                            ARTIUM<span className="text-artium-gold">.</span> <span className="text-gray-500 font-normal ml-2">| Panel</span>
                        </span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 rounded border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors text-sm font-bold uppercase tracking-wider"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Form Section */}
                    <div className="lg:col-span-4 h-fit sticky top-32">
                        <div className="bg-surface/30 border border-white/5 p-8 rounded-lg shadow-xl">
                            <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-artium-gold">edit_square</span>
                                {editingId ? 'Editar Proyecto' : 'Nuevo Proyecto'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Título</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-artium-gold transition-colors text-sm"
                                        placeholder="Ej. Residencia Martínez"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Ubicación</label>
                                    <input
                                        type="text"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-artium-gold transition-colors text-sm"
                                        placeholder="Ej. San Isidro, Buenos Aires"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Categoría</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-artium-gold transition-colors text-sm"
                                    >
                                        <option value="" disabled>Seleccionar Categoría</option>
                                        <option value="Cocina">Cocina</option>
                                        <option value="Living">Living</option>
                                        <option value="Vestidor">Vestidor</option>
                                        <option value="Escritorio">Escritorio</option>
                                        <option value="Dormitorio">Dormitorio</option>
                                        <option value="Quincho">Quincho</option>
                                        <option value="Playroom">Playroom</option>
                                        <option value="Mobiliario">Mobiliario</option>
                                        <option value="Sala de Estar">Sala de Estar</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Imágenes</label>

                                    {/* File Input */}
                                    <div className="flex items-center justify-center w-full mb-4">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <span className="material-symbols-outlined text-3xl text-gray-400 mb-2">cloud_upload</span>
                                                <p className="text-xs text-gray-400">Click para subir imagen</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                        </label>
                                    </div>

                                    {/* URL Input (Optional) */}
                                    <input
                                        type="text"
                                        placeholder="O pegar URL de imagen..."
                                        className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-artium-gold transition-colors text-xs mb-4"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                if (e.target.value) {
                                                    setFormData(prev => ({ ...prev, images: [...prev.images, e.target.value] }));
                                                    e.target.value = '';
                                                }
                                            }
                                        }}
                                    />

                                    {/* Image Previews */}
                                    <div className="grid grid-cols-3 gap-2">
                                        {formData.images.map((img, index) => (
                                            <div key={index} className="relative aspect-square rounded overflow-hidden group">
                                                <img src={img} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                                                >
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-artium-gold hover:bg-white text-black font-bold py-3 rounded uppercase tracking-widest transition-all duration-300 text-xs"
                                    >
                                        {editingId ? 'Actualizar' : 'Agregar'}
                                    </button>
                                    {editingId && (
                                        <button
                                            type="button"
                                            onClick={() => { setEditingId(null); setFormData({ title: '', location: '', category: '', images: [] }); }}
                                            className="px-4 py-3 border border-white/10 hover:bg-white/5 text-gray-400 font-bold rounded uppercase tracking-widest transition-all duration-300 text-xs"
                                        >
                                            Cancelar
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* List Section */}
                    <div className="lg:col-span-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-display font-bold text-white">Proyectos Activos</h2>
                            <span className="text-sm text-gray-500 font-mono bg-white/5 px-2 py-1 rounded">{projects.length} Total</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map(project => (
                                <div key={project.id} className="group bg-surface/30 border border-white/5 rounded-lg overflow-hidden hover:border-artium-gold/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.images && project.images.length > 0 ? project.images[0] : '/placeholder.png'}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="text-artium-gold text-[10px] font-bold uppercase tracking-widest mb-1 block">{project.category}</span>
                                            <h3 className="text-white font-bold text-lg leading-tight mb-1">{project.title}</h3>
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">{project.location}</p>
                                        </div>
                                    </div>

                                    <div className="p-4 flex gap-2 border-t border-white/5 bg-background/50">
                                        <button
                                            onClick={() => handleEdit(project)}
                                            className="flex-1 flex items-center justify-center gap-2 py-2 rounded bg-white/5 hover:bg-artium-gold hover:text-black text-gray-300 transition-colors text-xs font-bold uppercase tracking-wider"
                                        >
                                            <span className="material-symbols-outlined text-sm">edit</span> Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="flex-1 flex items-center justify-center gap-2 py-2 rounded bg-white/5 hover:bg-red-500 hover:text-white text-gray-300 transition-colors text-xs font-bold uppercase tracking-wider"
                                        >
                                            <span className="material-symbols-outlined text-sm">delete</span> Borrar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {projects.length === 0 && (
                            <div className="flex flex-col items-center justify-center p-12 border border-dashed border-white/10 rounded-lg text-gray-500">
                                <span className="material-symbols-outlined text-4xl mb-2 opacity-50">folder_off</span>
                                <p>No hay proyectos cargados.</p>
                            </div>
                        )}
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
