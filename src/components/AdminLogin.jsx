import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Using the main luxury header
// Footer is not typically needed on login pages, or meaningful minimal version

const AdminLogin = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded auth for demo purposes
        if (username === 'admin' && password === '1234') {
            // onLogin(); // Ideally update global auth state context here
            navigate('/admin/dashboard');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="bg-background min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-artium-gold/5 -skew-x-12 transform translate-x-1/4 pointer-events-none" />

            {/* Simplified Header for Login */}
            <div className="p-6 sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="size-10 flex items-center justify-center rounded-full bg-artium-gold text-background">
                        <span className="material-symbols-outlined text-2xl">carpenter</span>
                    </div>
                    <span className="text-xl font-display font-bold text-white tracking-wide">
                        ARTIUM<span className="text-artium-gold">.</span>
                    </span>
                </div>
            </div>

            <main className="flex-1 flex items-center justify-center p-6 relative z-10">
                <div className="w-full max-w-[400px] bg-surface/50 backdrop-blur-md border border-white/10 p-8 rounded-lg shadow-2xl animate-fade-in-up">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-display text-white mb-2">Bienvenido</h1>
                        <p className="text-gray-400 text-sm">Ingresa al panel de administración</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Usuario</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-artium-gold transition-colors"
                                placeholder="admin"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Contraseña</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-artium-gold transition-colors"
                                placeholder="••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-artium-gold hover:bg-white text-black font-bold py-3 rounded uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Ingresar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AdminLogin;
