import React, { useEffect, useState } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import emailjs from '@emailjs/browser';
import { assertEmailJsConfig } from '../../constants/emailjs';

function GetQuote() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    timeline: '',
    projectType: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateSeo({
      title: 'Get a Quote - Kognivex',
      description: 'Request a custom quote for your project from Kognivex.',
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    let config;
    try {
      config = assertEmailJsConfig();
    } catch (err) {
      console.error('EmailJS config error:', err);
      setStatus(err.message);
      setLoading(false);
      return;
    }

    emailjs.send(
      config.serviceId,
      config.templateId,
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: `
Company: ${form.company}
Project Requirement: ${form.projectType}
Timeline: ${form.timeline}

Project Details:
${form.message}
        `
      },
      config.publicKey
    )
    .then(() => {
      setStatus('✅ Quote request sent successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        timeline: '',
        projectType: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('EmailJS send failed:', error);
      setStatus('❌ Failed to send. Try again.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section style={{ background: '#f8fafc', minHeight: '100vh', padding: '2rem' }}>

      <div style={{
        maxWidth: '1100px',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }}>

        {/* LEFT PANEL */}
        <div style={{
          background: '#0f172a',
          color: '#fff',
          padding: '40px',
          borderRadius: '16px'
        }}>
          <h1 style={{ fontSize: '32px' }}>Get a Quote</h1>

          <p style={{ marginTop: '10px', color: '#cbd5f5' }}>
            Share your idea and we’ll provide a clear plan and technical solution.
          </p>

          <div style={{ marginTop: '30px', lineHeight: '1.8' }}>
            <p>✔ Custom Web Applications</p>
            <p>✔ SaaS Platforms</p>
            <p>✔ Mobile Applications</p>
            <p>✔ Enterprise Systems</p>
          </div>

          <div style={{ marginTop: '40px', color: '#94a3b8' }}>
            <p>Email: info.kognivex@gmail.com</p>
            <p>Phone: +91 93817 97198</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '16px',
            display: 'grid',
            gap: '15px',
            border: '1px solid #e5e7eb'
          }}
        >

          <h2>Project Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Business Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            value={form.company}
            onChange={handleChange}
            style={inputStyle}
          />

          {/* 🔥 NEW TEXT FIELD */}
          <input
            type="text"
            name="projectType"
            placeholder="Project Requirement (e.g., Web App, SaaS, Mobile App)"
            value={form.projectType}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Project Timeline</option>
            <option>1-2 Weeks</option>
            <option>1 Month</option>
            <option>2-3 Months</option>
            <option>Flexible</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your project in detail..."
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            style={inputStyle}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '14px',
              background: loading ? '#94a3b8' : '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            {loading ? 'Submitting...' : 'Request Quote'}
          </button>

          {status && (
            <p style={{ textAlign: 'center' }}>{status}</p>
          )}

        </form>

      </div>

    </section>
  );
}

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  outline: 'none',
  fontSize: '14px'
};

export default GetQuote;