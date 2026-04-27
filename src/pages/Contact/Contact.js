import React, { useEffect, useState } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import emailjs from '@emailjs/browser';
import { assertEmailJsConfig } from '../../constants/emailjs';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

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
      title: 'Contact | Kognivex Support',
      description: 'Get in touch with Kognivex for your next software project. Our engineering team is ready to discuss your requirements.',
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
      setForm({ name: '', email: '', phone: '', message: '' });
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
            </div>
          </div>

          {/* FORM */}
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

            <button
              type="submit"
              disabled={loading}
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

export default Contact;