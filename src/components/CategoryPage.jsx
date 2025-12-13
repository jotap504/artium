import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const CategoryPage = () => {
    const { categoryId } = useParams();

    // Map of slugs to titles (simplified for now)
    const formatTitle = (slug) => {
        if (!slug) return 'Colección';
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="app-container">
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                        {formatTitle(categoryId)}
                    </h1>
                    <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem', color: '#666' }}>
                        Explorá nuestra exclusiva selección de diseños.
                    </p>

                    <div className="grid-layout">
                        {/* Placeholder items */}
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="grid-item" style={{ background: '#f5f5f5', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                <span style={{ color: '#999' }}>Imagen de {formatTitle(categoryId)} {item}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link to="/" className="btn-primary" style={{ background: 'black', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '4px' }}>
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default CategoryPage;
