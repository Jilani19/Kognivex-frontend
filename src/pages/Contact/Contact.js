import React, { useEffect, useState } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import emailjs from '@emailjs/browser';
import { assertEmailJsConfig } from '../../constants/emailjs';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateSeo({
      title: 'Contact - Kognivex',
      description: 'Contact Kognivex for partnerships and development services.',
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
        message: form.message,
      },
      config.publicKey
    )
    .then(() => {
      setStatus('✅ Message sent successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('EmailJS send failed:', error);
      setStatus('❌ Failed to send message. Try again.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>

      <div style={{ maxWidth: '1100px', margin: 'auto', display: 'grid', gap: '2rem' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center' }}>
          <h1>Contact Us</h1>
          <p style={{ color: '#64748b' }}>
            Let’s discuss your project or idea. We’ll help you build scalable solutions.
          </p>
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

          {/* LEFT INFO */}
          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb'
          }}>
            <h2>Get in Touch</h2>

            <p style={{ marginTop: '10px', color: '#64748b' }}>
              Reach out for web apps, SaaS platforms, or enterprise solutions.
            </p>

            <div style={{ marginTop: '20px', lineHeight: '1.8' }}>
              <p><strong>Email:</strong> info.kognivex@gmail.com</p>
              <p><strong>Phone:</strong> +91 93817 97198</p>
            </div>

            <div style={{ marginTop: '20px', color: '#94a3b8' }}>
              We usually respond within 24 hours.
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
            <h2>Send a Message</h2>

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
              placeholder="Email Address"
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

            <textarea
              name="message"
              placeholder="Your Message"
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
                padding: '12px',
                background: loading ? '#94a3b8' : '#2563eb',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p style={{ textAlign: 'center' }}>{status}</p>
            )}
          </form>

        </div>

      </div>

    </section>
  );
}

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  outline: 'none'
};

export default Contact;