import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSeo } from '../../utils/seoHelper';
import styles from './Services.module.css';
import { 
<<<<<<< HEAD
  FaCode, FaMobileAlt, FaCloud, 
  FaSearch, FaClipboardList, FaLaptopCode, FaCheckDouble, FaExternalLinkAlt,
  FaGraduationCap, FaHospitalUser, FaShoppingCart, FaLightbulb, FaCity,
  FaUsers, FaAws, FaPlug, FaStore, FaTools, FaBuilding, FaArrowRight, FaWordpress
=======
  FaCode, FaMobileAlt, FaCloud, FaCogs, FaRocket, 
  FaSearch, FaClipboardList, FaLaptopCode, FaCheckDouble, FaExternalLinkAlt,
  FaGraduationCap, FaHospitalUser, FaShoppingCart, FaLightbulb, FaCity,
  FaUsers, FaAws, FaPlug, FaStore, FaTools, FaBuilding
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
} from 'react-icons/fa';

function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    updateSeo({
<<<<<<< HEAD
      title: 'Our Services | Kognivex Engineering',
      description: 'Explore our range of software development services from web and mobile apps to SaaS and enterprise solutions.',
    });
  }, []);

  const coreServices = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Custom web applications built with modern frameworks optimized for performance and SEO.",
      path: "/services/web-development",
      tech: ["React", "Next.js", "Node.js"],
      id: "MODULE-01"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      desc: "High-performance Android and iOS apps designed for exceptional user experiences.",
      path: "/services/mobile-apps",
      tech: ["React Native", "Flutter", "Swift"],
      id: "MODULE-02"
    },
    {
      icon: <FaAws />,
      title: "Cloud Solutions",
      desc: "Scalable, secure architectures built on AWS, Azure, and Google Cloud.",
      path: "/services/cloud-devops",
      tech: ["AWS", "Terraform", "Docker"],
      id: "MODULE-03"
    },
    {
      icon: <FaUsers />,
      title: "CRM Solutions",
      desc: "Custom CRM systems to streamline sales, marketing, and support.",
      path: "/services/crm-solutions",
      tech: ["Salesforce", "Custom", "Python"],
      id: "MODULE-04"
    },
    {
      icon: <FaBuilding />,
      title: "School Systems",
      desc: "Comprehensive platforms for educational institutions to manage students and staff.",
      path: "/services/school-systems",
      tech: ["PHP", "Laravel", "MySQL"],
      id: "MODULE-05"
    },
    {
      icon: <FaLaptopCode />,
      title: "UI/UX Design",
      desc: "Intuitive, user-centric interfaces tailored to engage your audience.",
      path: "/services/ui-ux",
      tech: ["Figma", "Adobe XD", "Prototyping"],
      id: "MODULE-06"
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      desc: "Robust REST and GraphQL APIs for seamless communication.",
      path: "/services/api-integration",
      tech: ["GraphQL", "REST", "Microservices"],
      id: "MODULE-07"
    },
    {
      icon: <FaStore />,
      title: "E-commerce Dev",
      desc: "Scalable online stores with secure payment gateways and optimized flows.",
      path: "/services/ecommerce-dev",
      tech: ["Shopify", "Magento", "Woo"],
      id: "MODULE-08"
    },
    {
      icon: <FaCloud />,
      title: "SaaS Product Dev",
      desc: "Multi-tenant SaaS architectures designed for global delivery.",
      path: "/services/saas-product-dev",
      tech: ["Multi-tenant", "K8s", "Azure"],
      id: "MODULE-09"
    },
    {
      icon: <FaTools />,
      title: "Maintenance",
      desc: "24/7 monitoring, updates, and technical support to ensure system uptime.",
      path: "/services/maintenance",
      tech: ["Monitoring", "Support", "Security"],
      id: "MODULE-10"
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Dev",
      desc: "Custom WordPress themes and plugins engineered for speed and SEO.",
      path: "/services/wordpress-dev",
      tech: ["PHP", "Elementor", "Custom"],
      id: "MODULE-11"
    }
  ];

=======
      title: 'Our Services | Kognivex - Custom Software Engineering',
      description: 'Explore our range of software development services from web and mobile apps to SaaS and enterprise solutions.',
    });
    window.scrollTo(0, 0);
  }, []);

>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
  return (
    <main className={styles.servicesPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
<<<<<<< HEAD
            <h1>Scalable Engineering <span className={styles.highlight}>Solutions</span></h1>
=======
            <h1>Scalable Engineering <span>Solutions</span></h1>
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
            <p>
              We provide end-to-end software development services designed to help 
              businesses scale efficiently in the digital era.
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* NEON GLASS DECK */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.centerTitle}>
            <div className={styles.sectionBadge}>Technical Nexus</div>
            <h2>Engineering <span className={styles.highlight}>Excellence</span></h2>
          </div>
          <div className={styles.neonGrid}>
            {coreServices.map((service, index) => (
              <div 
                className={styles.neonCard} 
                key={index} 
                onClick={() => navigate(service.path)}
              >
                <div className={styles.neonBg}></div>
                
                <div className={styles.neonGlass}>
                  <div className={styles.neonMain}>
                    <div className={styles.neonIconSide}>
                      {service.icon}
                    </div>
                    <div className={styles.neonContentSide}>
                      <div className={styles.neonTopRow}>
                        <h3>{service.title}</h3>
                        <span className={styles.neonId}>{service.id}</span>
                      </div>
                      <p>{service.desc}</p>
                      <div className={styles.neonTechList}>
                        {service.tech.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                      </div>
                    </div>
                  </div>

                  <button className={styles.neonFullAction} onClick={() => navigate(service.path)}>
                    Explore Service Architecture <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
=======
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
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* THE PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.centerTitle}>
            <div className={styles.sectionBadge}>Our Workflow</div>
            <h2>How We <span className={styles.highlight}>Engineer Success</span></h2>
          </div>
          <div className={styles.processFlexGrid}>
            {[
              { id: '01', title: "Analysis", desc: "Deep-dive into business goals and technical needs.", icon: <FaSearch /> },
              { id: '02', title: "Planning", desc: "Architecting the roadmap and tech stack selection.", icon: <FaClipboardList /> },
              { id: '03', title: "Dev", desc: "Agile engineering with continuous iteration.", icon: <FaLaptopCode /> },
              { id: '04', title: "Testing", desc: "Rigorous QA for performance and security.", icon: <FaCheckDouble /> },
              { id: '05', title: "Launch", desc: "Seamless transition to production and scaling.", icon: <FaExternalLinkAlt /> },
            ].map((step, idx) => (
              <div className={styles.processStep} key={idx}>
                <div className={styles.stepId}>{step.id}</div>
                <div className={styles.stepIconWrapper}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
=======
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
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* INDUSTRIES SECTION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.centerTitle}>
            <div className={styles.sectionBadge}>Markets</div>
            <h2>Industries We <span className={styles.highlight}>Transform</span></h2>
          </div>
          <div className={styles.industryFlexGrid}>
            {[
              { icon: <FaGraduationCap />, name: "Education" },
              { icon: <FaHospitalUser />, name: "Healthcare" },
              { icon: <FaShoppingCart />, name: "E-commerce" },
              { icon: <FaLightbulb />, name: "Startups" },
              { icon: <FaCity />, name: "Enterprises" },
            ].map((industry, idx) => (
              <div className={styles.industryMiniCard} key={idx}>
                <div className={styles.miniIcon}>{industry.icon}</div>
                <h3>{industry.name}</h3>
              </div>
            ))}
=======
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
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA SECTION - SYNCED WITH ABOUT/HOME */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBannerWrapper}>
          <div className={styles.ctaBanner}>
            <div className={styles.ctaContent}>
              <h2>Ready to Build Your <span className={styles.highlight}>Technical Vision?</span></h2>
              <p>Our engineers are standing by to transform your vision into a scalable reality.</p>
            </div>
            <div className={styles.ctaActions}>
              <button onClick={() => navigate('/contact')} className={styles.ctaButtonPrimary}>
                Work With Us
              </button>
            </div>
          </div>
=======
      {/* CTA */}
      <section className={styles.preFooter}>
        <div className={styles.container}>
          <h2>Ready to Build Something Great?</h2>
          <p>Contact us for a free technical consultation and get your project roadmap today.</p>
          <button onClick={() => navigate('/contact')} className="ctaButton">Get a Free Quote</button>
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        </div>
      </section>
    </main>
  );
}

export default Services;