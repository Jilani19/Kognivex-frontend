import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../../constants/projectData';
import styles from './ProjectDetails.module.css';
import { FaArrowLeft, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { updateSeo } from '../../utils/seoHelper';
=======
import { useParams } from 'react-router-dom';
import projectService from '../../services/projectService';
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find project from local data
    const foundProject = projectsData.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
      updateSeo({
        title: `${foundProject.title} - Case Study | Kognivex`,
        description: foundProject.description.substring(0, 160),
      });
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <section className={styles.detailsPage}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <p>Loading project details...</p>
        </div>
=======
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await projectService.fetchProjectBySlug(slug);
        setProject(data);
      } catch (err) {
        setError('Unable to load project.');
      }
    };
    loadProject();
  }, [slug]);

  if (error) {
    return (
      <section style={{ padding: '2rem' }}>
        <h1>{error}</h1>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
      </section>
    );
  }

  if (!project) {
    return (
<<<<<<< HEAD
      <section className={styles.detailsPage}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <h1>🚧 Project Not Found</h1>
          <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
            The case study you are looking for has been moved or is under maintenance.
          </p>
          <Link to="/projects" className={styles.backBtn}>
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
=======
      <section style={{ padding: '2rem' }}>
        <p>Loading project…</p>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
      </section>
    );
  }

  return (
<<<<<<< HEAD
    <main className={styles.detailsPage}>
      <div className={styles.container}>
        <Link to="/projects" className={styles.backBtn}>
          <FaArrowLeft /> Back to Portfolio
        </Link>

        <header className={styles.header}>
          <div className={styles.industryBadge}>{project.industry}</div>
          <h1>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
        </header>

        <div className={styles.mainImageWrapper}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.heroImage}
          />
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.featuresSection}>
            <h3>Key Features Implemented</h3>
            <ul className={styles.featuresList}>
              {project.features.map((feature, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.impactCard}>
            <FaRocket className={styles.impactIcon} />
            <h3>Business Impact</h3>
            <p>
              Through this strategic digital implementation, we helped the client 
              streamline their operations, increase user engagement, and achieve 
              measurable growth in their respective market.
            </p>
          </div>
        </div>

        <div className={styles.ctaCard}>
          <h2>Ready to achieve similar results?</h2>
          <p>Let's discuss how Kognivex can transform your business with a custom digital solution.</p>
          <Link to="/contact" className={styles.primaryBtn}>Get a Free Quote</Link>
        </div>
      </div>
    </main>
=======
    <article style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {project.images.map((image) => (
          <img key={image} src={image} alt={project.title} style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }} />
        ))}
      </div>
    </article>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
  );
}

export default ProjectDetails;
