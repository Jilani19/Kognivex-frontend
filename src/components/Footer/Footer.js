<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
=======
import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
<<<<<<< HEAD
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* BRAND */}
          <div className={styles.info}>
            <h3>Kognivex</h3>
            <p>
              Engineering high-performance digital solutions for ambitious enterprises. 
              We build the future of SaaS, one pixel at a time.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.links}>
            <h4>Platform</h4>
            <ul>
              <li onClick={() => navigate('/services')}>Services</li>
              <li onClick={() => navigate('/projects')}>Portfolio</li>
              <li onClick={() => navigate('/about')}>Engineering</li>
              <li onClick={() => navigate('/careers')}>Careers</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className={styles.links}>
            <h4>Company</h4>
            <ul>
              <li onClick={() => navigate('/about')}>About Us</li>
              <li onClick={() => navigate('/contact')}>Contact</li>
              <li onClick={() => navigate('/privacy-policy')}>Privacy Policy</li>
              <li onClick={() => navigate('/terms-and-conditions')}>Terms & Conditions</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className={styles.contact}>
            <h4>Contact Info</h4>
            <p><FaEnvelope /> info.kognivex@gmail.com</p>
            <p><FaPhoneAlt /> +91 93817 97198</p>
            <p><FaMapMarkerAlt /> Hyderabad, Telangana, India</p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <p>© 2026 Kognivex IT Solutions. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon}><FaLinkedin /></a>
            <a href="#" className={styles.socialIcon}><FaTwitter /></a>
            <a href="#" className={styles.socialIcon}><FaGithub /></a>
          </div>
        </div>
      </div>
=======

      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.brand}>
          <h2>Kognivex</h2>
          <p>
            Building scalable digital products for startups and enterprises.
            We deliver high-performance web, mobile, and cloud solutions.
          </p>
        </div>

        {/* SERVICES (WITH NAVIGATION) */}
        <div className={styles.links}>
          <h3>Services</h3>
          <ul>
            <li onClick={() => navigate("/services/web-development")}>
              Web Development
            </li>
            <li onClick={() => navigate("/services/mobile-apps")}>
              Mobile Apps
            </li>
            <li onClick={() => navigate("/services/ui-ux")}>
              UI/UX Design
            </li>
            <li onClick={() => navigate("/services/cloud-devops")}>
              Cloud & DevOps
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className={styles.links}>
          <h3>Company</h3>
          <ul>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li onClick={() => navigate("/blogs")}>Blog</li>
            <li onClick={() => navigate("/careers")}>Careers</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>Email: info.kognivex@gmail.com</p>
          <p>Phone: +91 93817 97198</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>© Kognivex. All rights reserved.</p>
      </div>

>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
    </footer>
  );
}

export default Footer;