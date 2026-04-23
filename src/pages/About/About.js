import React, { useEffect } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import styles from './About.module.css';

function About() {
  useEffect(() => {
    updateSeo({
      title: 'About - Kognivex',
      description:
        'Learn about Kognivex, our mission, vision, and how we build scalable digital solutions for modern businesses.',
    });
  }, []);

  return (
    <main className={styles.aboutPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            About <span>Kognivex</span>
          </h1>

          <p>
            We build modern, scalable software solutions that help businesses
            operate smarter, grow faster, and stay ahead in a competitive digital world.
          </p>
        </div>
      </section>

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
          </p>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Let’s Build Something Meaningful</h2>
        <p>
          Partner with Kognivex to create scalable digital products that deliver real impact.
        </p>
      </section>

    </main>
  );
}

export default About;