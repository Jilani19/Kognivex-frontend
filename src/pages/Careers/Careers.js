import React, { useEffect } from 'react';
import { updateSeo } from '../../utils/seoHelper';

function Careers() {
  useEffect(() => {
    updateSeo({
      title: 'Careers - Kognivex',
      description: 'Explore career opportunities at Kognivex.',
    });
  }, []);

  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: '#f8fafc',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          padding: '40px',
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        }}
      >
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>
          🚀 Careers
        </h1>

        <h2 style={{ color: '#2563eb', marginBottom: '20px' }}>
          Coming Soon
        </h2>

        <p style={{ color: '#64748b', lineHeight: '1.6' }}>
          We are building a strong team to create scalable and impactful digital
          solutions. Career opportunities at Kognivex will be available soon.
        </p>

        <p style={{ marginTop: '20px', color: '#94a3b8' }}>
          Stay tuned for openings in engineering, design, and product roles.
        </p>
      </div>
    </section>
  );
}

export default Careers;