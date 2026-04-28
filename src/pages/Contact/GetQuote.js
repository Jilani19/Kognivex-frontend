import React, { useEffect, useState } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import emailjs from '@emailjs/browser';
import { assertEmailJsConfig } from '../../constants/emailjs';
import styles from './GetQuote.module.css';
import { FaCheckCircle, FaRocket } from 'react-icons/fa';

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
      title: 'Get a Quote | Kognivex Enterprise',
      description: 'Request a technical proposal and quote for your next digital product. Our engineering leads will review your requirements.',
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
        name: '', email: '', phone: '', company: '', timeline: '', projectType: '', message: ''
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
            <p>Email: info.kognivex@gmail.com</p>
            <p>Phone: +91 93817 97198</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Project Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Business Email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            value={form.company}
            onChange={handleChange}
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
          />

          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            required
            className={styles.input}
          >
            <option value="">Project Timeline</option>
            <option>1-2 Weeks (MVP)</option>
            <option>1-3 Months</option>
            <option>3-6 Months (Enterprise)</option>
            <option>Ongoing Partnership</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your technical requirements and objectives in detail..."
            value={form.message}
            onChange={handleChange}
            required
            className={`${styles.input} ${styles.textarea}`}
          />

          <button
            type="submit"
            disabled={loading}
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

export default GetQuote;