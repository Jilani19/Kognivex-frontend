<<<<<<< HEAD
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
                  <img src={project.image} alt={project.title} />
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
          <button onClick={() => navigate('/contact')} className="btn-primary">Start Your Project</button>
        </div>
      </section>
    </main>
  );
}

export default Projects;
=======
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectService from '../../services/projectService';

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await projectService.fetchProjectBySlug(slug); // ✅ FIXED
        setProject(data);
      } catch (err) {
        setError('Project not available yet.');
      }
    };
    loadProject();
  }, [slug]);

  if (error) {
    return (
      <section style={{ padding: '3rem', textAlign: 'center' }}>
        <h1>🚧 {error}</h1>
        <p style={{ marginTop: '10px', color: '#64748b' }}>
          This project will be published soon.
        </p>
      </section>
    );
  }

  if (!project) {
    return (
      <section style={{ padding: '3rem', textAlign: 'center' }}>
        <p>Loading project…</p>
      </section>
    );
  }

  return (
    <article
      style={{
        padding: '2rem',
        background: '#fff',
        borderRadius: '12px',
        maxWidth: '900px',
        margin: 'auto'
      }}
    >
      <h1>{project.title}</h1>

      <p style={{ marginTop: '10px', color: '#64748b' }}>
        {project.description}
      </p>

      <p style={{ marginTop: '20px' }}>
        <strong>Technologies:</strong>{' '}
        {project.technologies?.join(', ') || 'Not specified'}
      </p>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '20px' }}>
        {project.images?.map((img) => (
          <img
            key={img}
            src={img}
            alt={project.title}
            style={{
              width: '100%',
              borderRadius: '10px'
            }}
          />
        ))}
      </div>
    </article>
  );
}

export default ProjectDetails;
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
