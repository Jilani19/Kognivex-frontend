import React, { useEffect, useState } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import emailjs from '@emailjs/browser';
import { assertEmailJsConfig } from '../../constants/emailjs';
<<<<<<< HEAD
import styles from './Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
=======
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569

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
<<<<<<< HEAD
      title: 'Contact | Kognivex Support',
      description: 'Get in touch with Kognivex for your next software project. Our engineering team is ready to discuss your requirements.',
=======
      title: 'Contact - Kognivex',
      description: 'Contact Kognivex for partnerships and development services.',
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
        message: form.message,
      },
      config.publicKey
    )
    .then(() => {
      setStatus('✅ Message sent successfully!');
<<<<<<< HEAD
      setForm({ name: '', email: '', phone: '', message: '' });
=======
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
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
<<<<<<< HEAD
    <main className={styles.contactPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.header}>
          <h1>Get in Touch</h1>
          <p>
            Have a complex engineering challenge? Let's discuss how we can 
            help you build a scalable digital solution.
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT INFO */}
          <div className={styles.infoCard}>
            <h2>Engineering Hub</h2>
            <p>
              We're headquartered in Hyderabad's tech corridor, serving ambitious 
              enterprises across the globe with elite software development.
            </p>

            <div className={styles.contactDetails}>
              <p><FaEnvelope /> <span>info.kognivex@gmail.com</span></p>
              <p><FaPhoneAlt /> <span>+91 93817 97198</span></p>
              <p><FaMapMarkerAlt /> <span>Hyderabad, Telangana, India</span></p>
            </div>

            <div className={styles.note}>
              Our engineering leads usually respond to inquiries within 1 business day.
=======
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
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
            </div>
          </div>

          {/* FORM */}
<<<<<<< HEAD
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Send a Message</h2>
            
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Business Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 00000 00000"
                value={form.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Project Details</label>
              <textarea
                name="message"
                placeholder="Briefly describe your technical requirements..."
                value={form.message}
                onChange={handleChange}
                required
                className={`${styles.input} ${styles.textarea}`}
              />
            </div>
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
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569

            <button
              type="submit"
              disabled={loading}
<<<<<<< HEAD
              className={styles.submitBtn}
            >
              {loading ? 'Sending...' : 'Send Message'} <FaPaperPlane style={{marginLeft: '8px'}} />
            </button>

            {status && (
              <p className={styles.statusMessage}>{status}</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

=======
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

>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
export default Contact;