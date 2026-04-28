import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSeo } from '../../utils/seoHelper';
import styles from './About.module.css';
import { FaUsers, FaLightbulb, FaShieldAlt, FaRocket } from 'react-icons/fa';

import lalithaImg from "../../assets/images/lalitha.png";
import vinayImg from "../../assets/images/vinay.png";

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    updateSeo({
      title: 'About Us | Kognivex Engineering',
      description: 'Discover the story behind Kognivex. We are a team of elite engineers dedicated to building high-performance digital products for global enterprises.',
    });
  }, []);

  return (
    <main className={styles.aboutPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Engineering <span>Excellence</span></h1>
          <p>
            At Kognivex, we don't just build software. We engineer high-performance 
            digital assets that scale with your business ambition.
          </p>
        </div>
      </section>

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
          </p>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2>Meet the Minds Behind Us</h2>
          <p className={styles.teamTagline}>Committed to excellence, driven by expertise.</p>
          
          <div className={styles.grid}>
            {[
              {
                name: "Lalitha",
                role: "Quality Assurance Specialist",
                description: "Ensures high standards of quality, reliability, and consistency across all deliverables.",
                image: lalithaImg
              },
              {
                name: "Pallavi",
                role: "DevOps Specialist",
                description: "Manages efficient deployment processes and maintains system stability and performance.",
                image: null
              },
              {
                name: "Vinay",
                role: "Full Stack Developer",
                description: "Builds scalable and efficient applications aligned with business needs.",
                image: vinayImg
              },
              {
                name: "Hidayatullah",
                role: "Web Developer",
                description: "Develops responsive and user-friendly web interfaces with clean design.",
                image: null
              }
            ].map(member => (
              <div className={styles.card} key={member.name}>
                <div className={styles.glow}></div>
                
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className={styles.avatar}>
                    {member.name.charAt(0)}
                  </div>
                )}
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.description}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.preFooter}>
        <div className={styles.container}>
          <h2>Let's Build the Future</h2>
          <p>Ready to transform your technical vision into a scalable reality? Our engineers are standing by.</p>
          <button onClick={() => navigate('/contact')} className="ctaButton" style={{ padding: '16px 48px' }}>
            Get in Touch <FaRocket />
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;