<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Projects.module.css';
import projectService from '../../services/projectService';
import { FaArrowRight, FaTag, FaRocket, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SEO from '../../components/SEO/SEO';

function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Extract unique industries for filters
  const industries = ['All', ...new Set(projects.map(p => (p.category || '').split(' / ')[0]))];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.fetchProjects();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => (p.category || '').startsWith(filter)));
    }
  }, [filter, projects]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(`.${styles.projectCard}`);
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);
  const filterBarRef = React.useRef(null);

  const scrollFilters = (direction) => {
    if (filterBarRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      filterBarRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className={styles.projectsPage}>
      <SEO 
        title="Our Portfolio"
        description="Explore our portfolio of successful projects across various industries including EdTech, E-commerce, and SaaS. Engineering success stories."
        keywords="web development portfolio, SaaS projects, Kognivex case studies, custom software solutions"
      />
      {/* HERO - SYNCED WITH SERVICES */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Engineering Success <span className={styles.highlight}>Stories</span>
          </h1>
          <p>
            Explore our collection of high-performance digital solutions, 
            crafted with precision and engineered for global scale.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterContainer}>
            <div className={styles.scrollArrow} onClick={() => scrollFilters('left')}><FaChevronLeft /></div>
            <div className={styles.filterBar} ref={filterBarRef}>
              {industries.map((industry) => (
                <button
                  key={industry}
                  className={`${styles.filterBtn} ${filter === industry ? styles.active : ''}`}
                  onClick={() => setFilter(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
            <div className={styles.scrollArrow} onClick={() => scrollFilters('right')}><FaChevronRight /></div>
=======
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
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* PROJECT GRID */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loading}>Loading portfolio...</div>
          ) : (
            <div className={styles.grid3}>
              {filteredProjects.map((project) => (
                <div 
                  key={project._id} 
                  className={styles.projectCard}
                  onClick={() => openProject(project)}
                >
                  <div className={styles.neonBg}></div>
                  <div className={styles.neonGlass}>
                    <div className={styles.imageWrapper}>
                      <img 
                        src={project.thumbnailImage || "/images/default.jpg"} 
                        alt={project.title} 
                        className={styles.projectImage}
                        onError={(e) => { e.target.src = '/images/default.jpg' }}
                      />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.cardHeader}>
                        <h3>{project.title}</h3>
                      </div>
                      <p className={styles.description}>{project.shortDescription}</p>
                      
                      <div className={styles.featuresPreview}>
                        {(project.tags || []).slice(0, 3).map((tag, i) => (
                          <span key={i} className={styles.featureTag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <button className={styles.viewBtn}>
                      {project.exploreButtonText || 'Explore Case Study'} <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MODAL OVERLAY */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeProject}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeProject}>&times;</button>
            
            <div className={styles.modalBody}>
              {/* LEFT: IMAGE PANE */}
              <div className={styles.modalImagePane}>
                <img 
                  src={selectedProject.heroImage || selectedProject.thumbnailImage || "/images/default.jpg"} 
                  alt={selectedProject.title} 
                  onError={(e) => { e.target.src = '/images/default.jpg' }}
                />
                <div className={styles.modalImageOverlay}>
                  <span className={styles.modalBadge}>
                    {(selectedProject.category || '').split(' / ')[0]}
                  </span>
                  <h2>{selectedProject.title}</h2>
                </div>
              </div>

              {/* RIGHT: CONTENT PANE */}
              <div className={styles.modalInfoPane}>
                <div className={styles.modalSection}>
                  <h3>Project Overview</h3>
                  <div className={styles.modalAnalysis}>
                    <p>{selectedProject.projectOverview}</p>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>Strategic Execution</h3>
                  <div className={styles.modalFeatures}>
                    {(selectedProject.strategicExecution || []).map((feat, i) => (
                      <div key={i} className={styles.modalFeature}>
                        <FaCheckCircle className={styles.checkIcon} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>Core Impact</h3>
                  <div className={styles.modalImpactCard}>
                    <FaRocket className={styles.impactIcon} />
                    <p>
                      {selectedProject.coreImpact || `Successfully deployed ${selectedProject.title} for the ${selectedProject.category || 'target'} sector.`}
                    </p>
                  </div>
                </div>

                <div className={styles.modalFooter}>
                  <button onClick={() => navigate('/contact')} className={styles.modalCta}>
                    {selectedProject.ctaText || 'Start A Similar Project'} <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBannerWrapper}>
          <div className={styles.ctaBanner}>
            <div className={styles.ctaContent}>
              <h2>Ready for your <span className={styles.highlight}>Legacy?</span></h2>
              <p>Let's engineer your next success story together.</p>
            </div>
            <button onClick={() => navigate('/contact')} className={styles.ctaButton}>
              Get in Touch
            </button>
          </div>
=======
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
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        </div>
      </section>
    </main>
  );
}

export default Projects;
