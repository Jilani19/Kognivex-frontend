import React, { useEffect } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { updateSeo } from '../../utils/seoHelper';
import styles from './About.module.css';
import { FaUsers, FaLightbulb, FaShieldAlt, FaRocket } from 'react-icons/fa';

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    updateSeo({
      title: 'About Us | Kognivex Engineering',
      description: 'Discover the story behind Kognivex. We are a team of elite engineers dedicated to building high-performance digital products for global enterprises.',
=======
import { updateSeo } from '../../utils/seoHelper';
import styles from './About.module.css';

function About() {
  useEffect(() => {
    updateSeo({
      title: 'About - Kognivex',
      description:
        'Learn about Kognivex, our mission, vision, and how we build scalable digital solutions for modern businesses.',
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
    });
  }, []);

  return (
    <main className={styles.aboutPage}>
<<<<<<< HEAD
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Engineering <span>Excellence</span></h1>
          <p>
            At Kognivex, we don't just build software. We engineer high-performance 
            digital assets that scale with your business ambition.
=======

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            About <span>Kognivex</span>
          </h1>

          <p>
            We build modern, scalable software solutions that help businesses
            operate smarter, grow faster, and stay ahead in a competitive digital world.
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* OUR STORY */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Our Philosophy</h2>
          <p>
            Founded on the principles of elite craftsmanship and strategic innovation, 
            Kognivex was born to bridge the gap between complex engineering and 
            world-class user experience.
          </p>
          <p>
            We believe that every line of code should serve a business purpose. 
            Our team works at the intersection of robust architecture and 
            seamless design to deliver products that aren't just functional—they're transformative.
=======
      {/* INTRO */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Who We Are</h2>

          <p>
            Kognivex is a technology-focused IT company dedicated to designing
            and developing high-performance digital systems. We work with startups,
            founders, and growing businesses to transform ideas into real-world
            applications that deliver measurable results.
          </p>

          <p>
            Our approach is built around clean architecture, scalable systems,
            and long-term reliability. We don’t just build products — we build
            solutions that evolve with your business.
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* CORE VALUES */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>The Kognivex Standard</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h4><FaLightbulb color="var(--primary-highlight)" /> Innovation First</h4>
              <p>We leverage the latest technological advancements to give our partners a competitive edge in the digital landscape.</p>
            </div>
            <div className={styles.valueCard}>
              <h4><FaShieldAlt color="var(--primary-highlight)" /> Integrity & Security</h4>
              <p>Security is not an afterthought; it's the foundation of everything we build. We prioritize data protection at every level.</p>
            </div>
            <div className={styles.valueCard}>
              <h4><FaUsers color="var(--primary-highlight)" /> Partnership Driven</h4>
              <p>We don't have clients; we have partners. Your success is our primary metric, and we scale alongside your growth.</p>
=======
      {/* MISSION & VISION */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerGrid}>

          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>
              To empower businesses with scalable, secure, and efficient digital
              solutions that solve real problems and drive long-term success.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>
              To become a trusted technology partner for businesses worldwide by
              delivering reliable, high-quality software solutions.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Our Core Values</h2>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h4>Performance First</h4>
              <p>We build fast, optimized systems designed for real usage.</p>
            </div>

            <div className={styles.valueCard}>
              <h4>Scalability</h4>
              <p>Our solutions grow with your business and user base.</p>
            </div>

            <div className={styles.valueCard}>
              <h4>Reliability</h4>
              <p>We ensure stable and secure systems you can depend on.</p>
            </div>

            <div className={styles.valueCard}>
              <h4>Transparency</h4>
              <p>Clear communication and honest collaboration always.</p>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
<<<<<<< HEAD
        <div className={styles.container}>
          <h2>Let's Build the Future</h2>
          <p>Ready to transform your technical vision into a scalable reality? Our engineers are standing by.</p>
          <button onClick={() => navigate('/contact')} className="btn-primary" style={{ padding: '16px 48px' }}>
            Get in Touch <FaRocket />
          </button>
        </div>
      </section>
=======
        <h2>Let’s Build Something Meaningful</h2>
        <p>
          Partner with Kognivex to create scalable digital products that deliver real impact.
        </p>
      </section>

>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
    </main>
  );
}

export default About;