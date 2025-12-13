import React from 'react';
import './Section.css';

const Section = ({ title, description, children, className = '' }) => {
    return (
        <section className={`section ${className}`}>
            <div className="section-container">
                {(title || description) && (
                    <div className="section-header">
                        {title && <h2 className="section-title">{title}</h2>}
                        {description && <p className="section-description">{description}</p>}
                    </div>
                )}
                <div className="section-content">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
