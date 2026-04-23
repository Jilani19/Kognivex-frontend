import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRocket,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
  FaUsers
} from "react-icons/fa";

const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <main className={styles.home}>

     {/* HERO */}
<section className={styles.hero}>
  <div className={styles.heroContent}>
    <h1>
      Web Development & SaaS Solutions Company <br />
      <span>Build Scalable Software That Grows Your Business</span>
    </h1>

    <p>
      Kognivex is a leading web development and SaaS solutions company helping startups
      and businesses build scalable, high-performance applications.
    </p>

    <div className={styles.heroBtns}>
      <Link to="/contact" className={styles.primaryBtn}>
        Start Project
      </Link>
      <Link to="/services" className={styles.secondaryBtn}>
        Explore Services
      </Link>
    </div>
  </div>
</section>

{/* 🔥 SEO SECTION (TOP POSITION) */}
<section className={styles.seoSection}>
  <div className={styles.seoWrapper}>

    <div className={styles.seoLeft}>
      <h2>
        Top Web Development Company for Scalable Solutions
      </h2>

      <p>
        Kognivex provides end-to-end software development services including
        web development, SaaS platforms, mobile app development, and enterprise systems.
      </p>

      <p>
        We help startups and businesses build scalable digital products using
        modern technologies, ensuring performance, security, and long-term growth.
      </p>
    </div>

    <div className={styles.seoRight}>
      <div className={styles.highlightCard}>
        <h3>Why Businesses Choose Us</h3>

        <ul>
          <li>✔ Scalable architecture</li>
          <li>✔ High-performance systems</li>
          <li>✔ Secure development</li>
          <li>✔ Modern tech stack</li>
        </ul>
      </div>
    </div>

  </div>
</section>
      {/* SERVICES */}
      <section className={styles.sectionAlt}>
        <h2>Our Core Services</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaCode />
            <h3>Web Development</h3>
            <p>
              Custom web development services using modern technologies like React, Node.js,
              and scalable cloud architecture.
            </p>
          </div>

          <div className={styles.card}>
            <FaMobileAlt />
            <h3>Mobile Apps</h3>
            <p>
              High-performance Android and iOS mobile applications with seamless user experience.
            </p>
          </div>

          <div className={styles.card}>
            <FaCloud />
            <h3>SaaS Platforms</h3>
            <p>
              Scalable SaaS platform development with secure cloud-based infrastructure.
            </p>
          </div>

          <div className={styles.card}>
            <FaCogs />
            <h3>Enterprise Systems</h3>
            <p>
              Enterprise software solutions to automate workflows and business operations.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.section}>
        <h2>Why Choose Us</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaRocket />
            <h3>Performance First</h3>
            <p>
              Fast, optimized, and scalable web applications built for performance.
            </p>
          </div>

          <div className={styles.card}>
            <FaShieldAlt />
            <h3>Secure Systems</h3>
            <p>
              Secure software development with enterprise-level protection.
            </p>
          </div>

          <div className={styles.card}>
            <FaChartLine />
            <h3>Scalable Architecture</h3>
            <p>
              Future-ready architecture designed for scaling businesses.
            </p>
          </div>

          <div className={styles.card}>
            <FaUsers />
            <h3>Client Focused</h3>
            <p>
              Client-focused development tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className={styles.sectionAlt}>
        <h2>How We Work</h2>

        <div className={styles.steps}>
          <div className={styles.step}>
            <h4>Discovery</h4>
            <p>Understanding your business requirements and technical goals.</p>
          </div>

          <div className={styles.step}>
            <h4>Planning</h4>
            <p>Designing scalable architecture and development roadmap.</p>
          </div>

          <div className={styles.step}>
            <h4>Development</h4>
            <p>Building optimized, high-performance software systems.</p>
          </div>

          <div className={styles.step}>
            <h4>Launch</h4>
            <p>Deployment, testing, and continuous support for growth.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className={styles.section}>
        <h2>Client Feedback</h2>

        <Slider {...sliderSettings}>
          <div className={styles.testimonialCard}>
            <p>“Delivered scalable system without performance issues.”</p>
            <h4>Founder</h4>
          </div>

          <div className={styles.testimonialCard}>
            <p>“Clean code and excellent execution.”</p>
            <h4>CEO</h4>
          </div>

          <div className={styles.testimonialCard}>
            <p>“Highly reliable development team.”</p>
            <h4>CTO</h4>
          </div>
        </Slider>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Let’s Build Something Powerful</h2>
        <p>Transform your idea into a scalable digital product.</p>

        <Link to="/contact" className={styles.primaryBtn}>
          Get Started
        </Link>
      </section>

     

    </main>
  );
};

export default Home;