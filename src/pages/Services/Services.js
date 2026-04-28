import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSeo } from '../../utils/seoHelper';
import styles from './Services.module.css';
import { 
  FaCode, FaMobileAlt, FaCloud, FaCogs, FaRocket, 
  FaSearch, FaClipboardList, FaLaptopCode, FaCheckDouble, FaExternalLinkAlt,
  FaGraduationCap, FaHospitalUser, FaShoppingCart, FaLightbulb, FaCity,
  FaUsers, FaAws, FaPlug, FaStore, FaTools, FaBuilding
} from 'react-icons/fa';

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    updateSeo({
      title: 'Our Services | Kognivex - Custom Software Engineering',
      description: 'Explore our range of software development services from web and mobile apps to SaaS and enterprise solutions.',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.servicesPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Scalable Engineering <span>Solutions</span></h1>
            <p>
              We provide end-to-end software development services designed to help 
              businesses scale efficiently in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.centerTitle}>
            <h2>Our Core Services</h2>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <FaCode />
              <h3>Web Development</h3>
              <p>Custom web applications built with modern frameworks like React and Next.js, optimized for performance and SEO.</p>
            </div>
            <div className={styles.card}>
              <FaMobileAlt />
              <h3>Mobile App Development</h3>
              <p>High-performance Android and iOS mobile applications designed for exceptional user experiences.</p>
            </div>
            <div className={styles.card}>
              <FaUsers />
              <h3>CRM Development</h3>
              <p>Custom Customer Relationship Management systems to streamline sales, marketing, and support.</p>
            </div>
            <div className={styles.card}>
              <FaBuilding />
              <h3>School Management Systems</h3>
              <p>Comprehensive platforms for educational institutions to manage students, staff, and curriculum.</p>
            </div>
            <div className={styles.card}>
              <FaLaptopCode />
              <h3>UI/UX Design</h3>
              <p>Intuitive, user-centric interfaces and seamless experiences tailored to engage your audience.</p>
            </div>
            <div className={styles.card}>
              <FaAws />
              <h3>Cloud Solutions (AWS)</h3>
              <p>Scalable, secure, and highly available cloud architectures built on Amazon Web Services.</p>
            </div>
            <div className={styles.card}>
              <FaPlug />
              <h3>API Development & Integration</h3>
              <p>Robust REST and GraphQL APIs for seamless communication between disparate systems.</p>
            </div>
            <div className={styles.card}>
              <FaStore />
              <h3>E-commerce Development</h3>
              <p>Scalable online stores with secure payment gateways and optimized checkout flows.</p>
            </div>
            <div className={styles.card}>
              <FaCloud />
              <h3>SaaS Product Development</h3>
              <p>Scalable, multi-tenant SaaS architectures designed to support global delivery and rapid growth.</p>
            </div>
            <div className={styles.card}>
              <FaTools />
              <h3>Maintenance & Support</h3>
              <p>24/7 monitoring, regular updates, and technical support to ensure system reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.centerTitle}>
            <h2>Our Development Process</h2>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <FaSearch className={styles.stepIcon} />
              <h3>Requirement Analysis</h3>
              <p>We deep-dive into your business goals and technical needs.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <FaClipboardList className={styles.stepIcon} />
              <h3>Planning</h3>
              <p>Architecting the roadmap and choosing the right technology stack.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <FaLaptopCode className={styles.stepIcon} />
              <h3>Development</h3>
              <p>Agile engineering with continuous iteration and feedback.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <FaCheckDouble className={styles.stepIcon} />
              <h3>Testing</h3>
              <p>Rigorous quality assurance for performance, security, and bugs.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>5</div>
              <FaExternalLinkAlt className={styles.stepIcon} />
              <h3>Deployment</h3>
              <p>Seamless transition to production with 24/7 monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.centerTitle}>
            <h2>Industries We Serve</h2>
          </div>
          <div className={styles.industryGrid}>
            <div className={styles.industryCard}>
              <FaGraduationCap />
              <h3>Education</h3>
            </div>
            <div className={styles.industryCard}>
              <FaHospitalUser />
              <h3>Healthcare</h3>
            </div>
            <div className={styles.industryCard}>
              <FaShoppingCart />
              <h3>E-commerce</h3>
            </div>
            <div className={styles.industryCard}>
              <FaLightbulb />
              <h3>Startups</h3>
            </div>
            <div className={styles.industryCard}>
              <FaCity />
              <h3>Enterprises</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.preFooter}>
        <div className={styles.container}>
          <h2>Ready to Build Something Great?</h2>
          <p>Contact us for a free technical consultation and get your project roadmap today.</p>
          <button onClick={() => navigate('/contact')} className="ctaButton">Get a Free Quote</button>
        </div>
      </section>
    </main>
  );
}

export default Services;