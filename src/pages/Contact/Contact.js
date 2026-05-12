import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { assertEmailJsConfig } from '../../constants/emailjs';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';
import SEO from '../../components/SEO/SEO';
=======
import { updateSeo } from '../../utils/seoHelper';
import emailjs from '@emailjs/browser';
import { assertEmailJsConfig } from '../../constants/emailjs';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de

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
<<<<<<< HEAD
    window.scrollTo(0, 0);
=======
    updateSeo({
      title: 'Contact | Kognivex Support',
      description: 'Get in touch with Kognivex for your next software project. Our engineering team is ready to discuss your requirements.',
    });
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
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
<<<<<<< HEAD
      setStatus('❌ Configuration Error');
=======
      setStatus(err.message);
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
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
<<<<<<< HEAD
      setStatus('❌ Failed to send message.');
=======
      setStatus('❌ Failed to send message. Try again.');
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className={styles.contactPage}>
<<<<<<< HEAD
      <SEO 
        title="Contact"
        description="Get in touch with Kognivex for your next software project. Our engineering team is ready to discuss your requirements."
        keywords="contact tech company, software development inquiry, project consultation, IT support"
      />
      <section className={styles.hero}>
        <div className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Our <span className={styles.highlight}>Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to scale your technical infrastructure? Let's discuss your next breakthrough project.
          </motion.p>
=======
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.header}>
          <h1>Get in Touch</h1>
          <p>
            Have a complex engineering challenge? Let's discuss how we can 
            help you build a scalable digital solution.
          </p>
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.grid}>
<<<<<<< HEAD
          {/* LEFT: INFO */}
          <motion.div 
            className={styles.infoSide}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>
              Whether you have a specific requirement or just want to explore possibilities, 
              our leads are here to help.
            </p>

            <div className={styles.contactCards}>
              {[
                { icon: <FaEnvelope />, text: "info.kognivex@gmail.com", label: "Email" },
                { icon: <FaPhoneAlt />, text: "+91 93817 97198", label: "Call" },
                { icon: <FaMapMarkerAlt />, text: "Hyderabad, India", label: "Location" },
                { icon: <FaGlobeAmericas />, text: "Global Service", label: "Availability" }
              ].map((item, index) => (
                <div key={index} className={styles.tactileCard}>
                  <div className={styles.iconBox}>{item.icon}</div>
                  <div className={styles.cardText}>
                    <small>{item.label}</small>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.securityNote}>
              <FaShieldAlt style={{color: 'var(--primary-highlight)'}} />
              <span>Secure, encrypted communication guaranteed.</span>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div 
            className={styles.formSide}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2>Send Message</h2>
              
              <div className={styles.inputGrid}>
                <div className={styles.inputWrapper}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading ? 'Sending...' : 'Send Message'} 
                <FaPaperPlane />
              </button>

              {status && (
                <div 
                  className={styles.statusMessage}
                  style={{
                    background: status.includes('✅') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: status.includes('✅') ? '#10B981' : '#EF4444',
                    border: `1px solid ${status.includes('✅') ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
                  }}
                >
                  {status}
                </div>
              )}
            </form>
          </motion.div>
=======
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
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        </div>
      </div>
    </main>
  );
}

export default Contact;