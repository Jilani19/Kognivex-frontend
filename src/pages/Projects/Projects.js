import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSeo } from '../../utils/seoHelper';
import styles from './Projects.module.css';
import { projectsData } from '../../constants/projectData';
import { FaArrowRight, FaTag } from 'react-icons/fa';

function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    updateSeo({
      title: 'Our Portfolio | Kognivex - Engineering Success Stories',
      description: 'Explore our portfolio of successful projects across various industries including EdTech, E-commerce, and SaaS.',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.projectsPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Our Portfolio</span>
            <h1>Success Stories Built With <span>Engineering Excellence</span></h1>
            <p>
              We help businesses across various industries build scalable software solutions 
              that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID (3 PER ROW) */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid3}>
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className={styles.projectCard}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src={project.image || "/images/default.jpg"} 
                    alt={project.title} 
                    onError={(e) => { e.target.src = '/images/default.jpg' }}
                  />
                  <div className={styles.categoryTag}>
                    <FaTag /> {project.industry}
                  </div>
                </div>
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.viewBtn}>
                      View Case Study <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Have a Project in Mind?</h2>
          <p>Let's discuss how we can build a scalable solution for your business.</p>
          <button onClick={() => navigate('/contact')} className="ctaButton">Start Your Project</button>
        </div>
      </section>
    </main>
  );
}

export default Projects;
