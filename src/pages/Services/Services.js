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
  }, []);

  return (
    <main className={styles.servicesPage}>

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
          </div>
        </div>
      </section>

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

          </div>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <h2>Let’s Build Something Powerful</h2>
        <p>
          Partner with Kognivex to create scalable, secure, and high-performing
          digital solutions.
        </p>

        <button className={styles.ctaBtn}>Start Your Project</button>
      </section>

    </main>
  );
}

export default Services;