<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSeo } from '../../utils/seoHelper';
import styles from './Services.module.css';
import { 
  FaCode, FaMobileAlt, FaCloud, FaCogs, FaRocket, 
  FaSearch, FaClipboardList, FaLaptopCode, FaCheckDouble, FaExternalLinkAlt,
  FaGraduationCap, FaHospitalUser, FaShoppingCart, FaLightbulb, FaCity
} from 'react-icons/fa';

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    updateSeo({
      title: 'Our Services | Kognivex - Custom Software Engineering',
      description: 'Explore our range of software development services from web and mobile apps to SaaS and enterprise solutions.',
    });
    window.scrollTo(0, 0);
=======
import React, { useEffect } from "react";
import { updateSeo } from "../../utils/seoHelper";
import styles from "./Services.module.css";

import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaDatabase,
  FaServer,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaProjectDiagram
} from "react-icons/fa";

function Services() {
  useEffect(() => {
    updateSeo({
      title: "Services - Kognivex",
      description:
        "Kognivex provides scalable web, mobile, SaaS, and enterprise software solutions for modern businesses.",
    });
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
  }, []);

  return (
    <main className={styles.servicesPage}>
<<<<<<< HEAD
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Scalable Engineering <span>Solutions</span></h1>
            <p>
              We provide end-to-end software development services designed to help 
              businesses scale efficiently in the digital era.
            </p>
=======

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Engineering Digital <span>Excellence</span>
          </h1>

          <p>
            We deliver high-performance, scalable, and secure software systems
            tailored for modern businesses.
          </p>

          <p className={styles.heroSub}>
            From early-stage startups to enterprise platforms, we build solutions
            that evolve with your growth.
          </p>

          <div className={styles.heroBadges}>
            <span>Scalable</span>
            <span>Secure</span>
            <span>High Performance</span>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
              <h3>Mobile Apps</h3>
              <p>High-performance Android and iOS mobile applications designed for exceptional user experiences.</p>
            </div>
            <div className={styles.card}>
              <FaCloud />
              <h3>SaaS Platforms</h3>
              <p>Scalable, multi-tenant SaaS architectures designed to support global delivery and rapid growth.</p>
            </div>
            <div className={styles.card}>
              <FaCogs />
              <h3>Enterprise Systems</h3>
              <p>Automation of complex business workflows and enterprise-grade software integrations.</p>
            </div>
=======
      {/* GAP */}
      <div className={styles.heroGap}></div>

      {/* ================= INTRO ================= */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <h2>What We Do</h2>
          <p className={styles.introText}>
            At Kognivex, we specialize in building digital products that are not
            only functional but also scalable, maintainable, and aligned with
            real-world business needs. Our approach combines modern technology,
            clean architecture, and strategic thinking.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Core Services</h2>

          <div className={styles.grid}>

            <div className={styles.card}>
              <FaCode />
              <h3>Web Development</h3>
              <p>Modern, scalable web applications and dashboards.</p>
            </div>

            <div className={styles.card}>
              <FaMobileAlt />
              <h3>Mobile Apps</h3>
              <p>High-performance Android & iOS applications.</p>
            </div>

            <div className={styles.card}>
              <FaCloud />
              <h3>SaaS Platforms</h3>
              <p>Cloud-native systems built for growth.</p>
            </div>

            <div className={styles.card}>
              <FaCogs />
              <h3>Enterprise Systems</h3>
              <p>Automation and business workflow solutions.</p>
            </div>

            <div className={styles.card}>
              <FaRocket />
              <h3>MVP Development</h3>
              <p>Launch quickly with scalable architecture.</p>
            </div>

            <div className={styles.card}>
              <FaShieldAlt />
              <h3>Security & Optimization</h3>
              <p>Ensure performance, safety, and reliability.</p>
            </div>

            <div className={styles.card}>
              <FaDatabase />
              <h3>Database Engineering</h3>
              <p>Efficient and scalable data systems.</p>
            </div>

            <div className={styles.card}>
              <FaServer />
              <h3>Backend Development</h3>
              <p>Robust APIs and microservices architecture.</p>
            </div>

            <div className={styles.card}>
              <FaChartLine />
              <h3>Performance Scaling</h3>
              <p>Handle high traffic and system growth.</p>
            </div>

>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* ================= DIFFERENTIATORS ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Our Strengths</h2>

          <div className={styles.features}>
            <div>
              <FaLightbulb />
              <h4>Strategic Thinking</h4>
              <p>We align technology with business outcomes.</p>
            </div>

            <div>
              <FaProjectDiagram />
              <h4>Clean Architecture</h4>
              <p>Maintainable and scalable system design.</p>
            </div>

            <div>
              <FaUsers />
              <h4>User-Centric</h4>
              <p>Focused on real user experience.</p>
            </div>

            <div>
              <FaRocket />
              <h4>Speed & Delivery</h4>
              <p>Fast execution without compromising quality.</p>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* ================= INDUSTRIES ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.centerHeading}>Industries We Serve</h2>

          <div className={styles.tags}>
            <span>FinTech</span>
            <span>Healthcare</span>
            <span>E-commerce</span>
            <span>EdTech</span>
            <span>Logistics</span>
            <span>SaaS Startups</span>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Our Process</h2>

          <div className={styles.process}>
            <div>
              <h4>Discovery</h4>
              <p>Understand requirements deeply.</p>
            </div>

            <div>
              <h4>Design</h4>
              <p>Create scalable architecture.</p>
            </div>

            <div>
              <h4>Development</h4>
              <p>Build optimized systems.</p>
            </div>

            <div>
              <h4>Scaling</h4>
              <p>Ensure long-term growth.</p>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Build Something Great?</h2>
          <p>Contact us for a free technical consultation and get your project roadmap today.</p>
          <button onClick={() => navigate('/contact')} className="btn-primary">Get a Free Quote</button>
        </div>
      </section>
=======
      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <h2>Let’s Build Something Powerful</h2>
        <p>
          Partner with Kognivex to create scalable, secure, and high-performing
          digital solutions.
        </p>

        <button className={styles.ctaBtn}>Start Your Project</button>
      </section>

>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
    </main>
  );
}

export default Services;