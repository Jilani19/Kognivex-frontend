import React, { useEffect, useState } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import emailjs from '@emailjs/browser';
import { assertEmailJsConfig } from '../../constants/emailjs';
<<<<<<< HEAD
import styles from './GetQuote.module.css';
import { FaCheckCircle, FaRocket } from 'react-icons/fa';
=======
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569

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
<<<<<<< HEAD
      title: 'Get a Quote | Kognivex Enterprise',
      description: 'Request a technical proposal and quote for your next digital product. Our engineering leads will review your requirements.',
=======
      title: 'Get a Quote - Kognivex',
      description: 'Request a custom quote for your project from Kognivex.',
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======

>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
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
<<<<<<< HEAD
        name: '', email: '', phone: '', company: '', timeline: '', projectType: '', message: ''
=======
        name: '',
        email: '',
        phone: '',
        company: '',
        timeline: '',
        projectType: '',
        message: ''
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
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
<<<<<<< HEAD
    <main className={styles.quotePage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Technical Proposal</h1>
          <p>
            Tell us about your technical vision, and our engineering leads will 
            provide a detailed project roadmap and resource estimation.
          </p>
        </div>
      </section>

      <div className={styles.container}>
        {/* LEFT PANEL */}
        <div className={styles.leftPanel}>
          <h2>Why Partner With Us?</h2>
          <p>
            We don't just provide quotes; we provide strategic technical insight 
            to ensure your investment delivers maximum business value.
          </p>

          <div className={styles.features}>
            <p><FaCheckCircle /> Custom SaaS Architecture</p>
            <p><FaCheckCircle /> Scalable Cloud Infrastructure</p>
            <p><FaCheckCircle /> Performance-First Engineering</p>
            <p><FaCheckCircle /> Enterprise-Grade Security</p>
          </div>

          <div className={styles.contactInfo}>
=======
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
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
            <p>Email: info.kognivex@gmail.com</p>
            <p>Phone: +91 93817 97198</p>
          </div>
        </div>

        {/* FORM */}
<<<<<<< HEAD
        <form onSubmit={handleSubmit} className={styles.form}>
=======
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

>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          <h2>Project Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
<<<<<<< HEAD
            className={styles.input}
=======
            style={inputStyle}
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          />

          <input
            type="email"
            name="email"
            placeholder="Business Email"
            value={form.email}
            onChange={handleChange}
            required
<<<<<<< HEAD
            className={styles.input}
=======
            style={inputStyle}
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
<<<<<<< HEAD
            className={styles.input}
=======
            style={inputStyle}
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          />

          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            value={form.company}
            onChange={handleChange}
<<<<<<< HEAD
            className={styles.input}
          />

          <input
            type="text"
            name="projectType"
            placeholder="Project Requirement (e.g., Web App, SaaS)"
            value={form.projectType}
            onChange={handleChange}
            required
            className={styles.input}
=======
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
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          />

          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            required
<<<<<<< HEAD
            className={styles.input}
          >
            <option value="">Project Timeline</option>
            <option>1-2 Weeks (MVP)</option>
            <option>1-3 Months</option>
            <option>3-6 Months (Enterprise)</option>
            <option>Ongoing Partnership</option>
=======
            style={inputStyle}
          >
            <option value="">Project Timeline</option>
            <option>1-2 Weeks</option>
            <option>1 Month</option>
            <option>2-3 Months</option>
            <option>Flexible</option>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          </select>

          <textarea
            name="message"
<<<<<<< HEAD
            placeholder="Describe your technical requirements and objectives in detail..."
            value={form.message}
            onChange={handleChange}
            required
            className={`${styles.input} ${styles.textarea}`}
=======
            placeholder="Describe your project in detail..."
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            style={inputStyle}
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          />

          <button
            type="submit"
            disabled={loading}
<<<<<<< HEAD
            className={styles.submitBtn}
          >
            {loading ? 'Submitting...' : 'Request Quote'} <FaRocket style={{marginLeft: '8px'}} />
          </button>

          {status && (
            <p className={styles.statusMessage}>{status}</p>
          )}
        </form>
      </div>
    </main>
  );
}

=======
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

>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
export default GetQuote;