import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const BudgetForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        furnitureType: 'Cocina',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="app-container">
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Solicitar Presupuesto</h1>

                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '3rem', background: '#f0fff4', borderRadius: '12px', border: '1px solid #c6f6d5' }}>
                            <h2 style={{ color: '#2f855a', marginBottom: '1rem' }}>¡Gracias por tu consulta!</h2>
                            <p>Hemos recibido tus datos. Nos pondremos en contacto con vos a la brevedad.</p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="btn-primary"
                                style={{ marginTop: '2rem', background: 'black', color: 'white', borderColor: 'black' }}
                            >
                                Enviar otra consulta
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nombre y Apellido</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Tipo de Mueble</label>
                                <select
                                    name="furnitureType"
                                    value={formData.furnitureType}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                >
                                    <option value="Cocina">Cocina</option>
                                    <option value="Placard / Vestidor">Placard / Vestidor</option>
                                    <option value="Mueble de TV">Mueble de TV / Rack</option>
                                    <option value="Baño">Baño</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Mensaje (Opcional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', background: 'black', color: 'white', borderColor: 'black' }}>
                                Enviar Solicitud
                            </button>
                        </form>
                    )}
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default BudgetForm;
