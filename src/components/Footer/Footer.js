import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>

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

    </footer>
  );
}

export default Footer;