<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSeo } from '../../utils/seoHelper';
import styles from './Home.module.css';
import { 
  FaCode, FaMobileAlt, FaCloud, FaCogs, 
  FaRocket, FaShieldAlt, FaChartLine, FaUsers, 
  FaCheck, FaQuoteLeft 
} from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    text: "Kognivex handled our project with extreme professionalism. The software they built has completely streamlined our daily operations. Truly impressed with their technical depth."
  },
  {
    id: 2,
    name: "Suresh Reddy",
    text: "The team at Kognivex is brilliant. They delivered our mobile app on time and the user feedback has been amazing. Highly recommend them for any custom software needs."
  },
  {
    id: 3,
    name: "Anjali Sharma",
    text: "Working with Kognivex was a great experience. They were able to take our complex requirements and turn them into a simple, easy-to-use platform. Excellent service!"
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    text: "We were looking for a reliable partner for our SaaS product, and Kognivex exceeded our expectations. Their architectural choices have made scaling our business much easier."
  },
  {
    id: 5,
    name: "Priya Das",
    text: "Top-tier engineering and great communication. They kept us updated throughout the development process and delivered a product that we are very proud of."
  }
];

function Home() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    updateSeo({
      title: 'Kognivex | Web Development & SaaS Solutions Company',
      description: 'Build Scalable Software That Grows Your Business. Kognivex is a leading web development and SaaS solutions company helping startups and businesses.',
    });

    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Web Development & SaaS Solutions Company</h1>
            <h2 className={styles.subtitle}>Build Scalable Software That Grows Your Business</h2>
            <p>
              Kognivex is a leading web development and SaaS solutions company helping 
              startups and businesses build scalable, high-performance applications.
            </p>
            <div className={styles.heroBtns}>
              <button onClick={() => navigate('/get-quote')} className="btn-primary">
                Start Project
              </button>
              <button onClick={() => navigate('/services')} className="btn-outline-white">
                Explore Services
              </button>
            </div>
=======
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
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* TOP WEB DEVELOPMENT COMPANY (LEFT + RIGHT) */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.flexLayout}>
            <div className={styles.leftContent}>
              <h2>Top Web Development Company for Scalable Solutions</h2>
              <p>
                Kognivex provides end-to-end software development services including web development, 
                SaaS platforms, mobile app development, and enterprise systems.
              </p>
              <p>
                We help startups and businesses build scalable digital products using modern technologies, 
                ensuring performance, security, and long-term growth.
              </p>
            </div>
            <div className={styles.rightCard}>
              <div className={styles.blueCard}>
                <h3>Why Businesses Choose Us</h3>
                <ul>
                  <li><FaCheck /> Scalable architecture</li>
                  <li><FaCheck /> High-performance systems</li>
                  <li><FaCheck /> Secure development</li>
                  <li><FaCheck /> Modern tech stack</li>
                </ul>
              </div>
            </div>
=======
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
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* OUR CORE SERVICES (4 COLUMNS) */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Core Services</h2>
            <p>We deliver scalable and high-performance solutions tailored for modern businesses.</p>
          </div>
          <div className={styles.grid4}>
            <div className={styles.card}>
              <FaCode className={styles.cardIcon} />
              <h3>Web Development</h3>
              <p>Custom web development services using modern technologies like React, Node.js, and scalable cloud architecture.</p>
            </div>
            <div className={styles.card}>
              <FaMobileAlt className={styles.cardIcon} />
              <h3>Mobile Apps</h3>
              <p>High performance Android and iOS mobile applications with seamless user experience.</p>
            </div>
            <div className={styles.card}>
              <FaCloud className={styles.cardIcon} />
              <h3>SaaS Platforms</h3>
              <p>Scalable SaaS platform development with secure cloud-based infrastructure.</p>
            </div>
            <div className={styles.card}>
              <FaCogs className={styles.cardIcon} />
              <h3>Enterprise Systems</h3>
              <p>Enterprise software solutions to automate workflows and business operations.</p>
            </div>
=======
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
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* TRUSTED BY BUSINESSES (STATS) */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Trusted by Businesses</h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className={styles.statItem}>
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.statItem}>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>10+</h3>
              <p>Technologies Used</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US GRID */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose Us</h2>
          </div>
          <div className={styles.grid4}>
            <div className={styles.card}>
              <FaRocket className={styles.cardIcon} />
              <h3>Performance First</h3>
              <p>Fast, optimized, and scalable web applications built for performance.</p>
            </div>
            <div className={styles.card}>
              <FaShieldAlt className={styles.cardIcon} />
              <h3>Secure Systems</h3>
              <p>Secure software development with enterprise-level protection.</p>
            </div>
            <div className={styles.card}>
              <FaChartLine className={styles.cardIcon} />
              <h3>Scalable Architecture</h3>
              <p>Future-ready architecture designed for scaling businesses.</p>
            </div>
            <div className={styles.card}>
              <FaUsers className={styles.cardIcon} />
              <h3>Client Focused</h3>
              <p>Client-focused development tailored to your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY (TESTIMONIALS SLIDER) */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>What Our Clients Say</h2>
          </div>
          <div className={styles.testimonialSlider}>
            <div 
              className={styles.sliderTrack} 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className={styles.slide}>
                  <div className={styles.testimonialCard}>
                    <FaQuoteLeft className={styles.quoteIcon} />
                    <p className={styles.testimonialText}>{t.text}</p>
                    <div className={styles.testimonialAuthor}>
                      <h4>{t.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.sliderDots}>
              {testimonials.map((_, i) => (
                <span 
                  key={i} 
                  className={`${styles.dot} ${activeSlide === i ? styles.activeDot : ''}`}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Build Your Digital Future?</h2>
          <p>Contact our engineering team today for a free consultation and project roadmap.</p>
          <button onClick={() => navigate('/contact')} className="btn-primary" style={{ padding: '16px 48px', fontSize: '1.1rem' }}>
            Get Started Now
          </button>
        </div>
      </section>
    </main>
  );
}
=======
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
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569

export default Home;