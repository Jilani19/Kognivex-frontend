import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
<<<<<<< HEAD
import styles from './BlogDetails.module.css';
import { FaArrowLeft, FaCalendarAlt, FaTag, FaUserCircle } from 'react-icons/fa';
import SEO from '../SEO/SEO';

function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
=======
import { blogData } from '../../constants/blogData';
import styles from './BlogDetails.module.css';
import { updateSeo } from '../../utils/seoHelper';
import { FaArrowLeft, FaCalendarAlt, FaTag, FaUserCircle } from 'react-icons/fa';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de

  useEffect(() => {
    const fetchBlog = async () => {
      try {
<<<<<<< HEAD
        const res = await api.get(`/blogs/${slug}`);
        if (res.data && res.data.success) {
          const blogData = res.data.data;
          setBlog(blogData);
        }
      } catch (err) {
        console.error('Failed to fetch blog details:', err);
      } finally {
=======
        const res = await api.get(`/blogs/${id}`);
        if (res.data) {
          setBlog(res.data);
          updateSeo({
            title: `${res.data.title} | Kognivex Blog`,
            description: res.data.content.substring(0, 160),
          });
        }
      } catch (err) {
        // Fallback to local data if API fails, matching by ID instead of slug
        const localBlog = blogData.find(b => b.id === parseInt(id));
        if (localBlog) {
          setBlog(localBlog);
          updateSeo({
            title: `${localBlog.title} | Kognivex Blog`,
            description: localBlog.content.substring(0, 160),
          });
        }
      } finally {
        // Add slight artificial delay to make loading state visible
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
<<<<<<< HEAD
  }, [slug]);
=======
  }, [id]);
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de

  if (loading) {
    return (
      <div className={styles.detailsPage}>
<<<<<<< HEAD
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: 'var(--text-heading)', fontSize: '1.5rem' }}>Gathering technical details...</h2>
=======
        <div className={styles.container} style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2>Loading insights...</h2>
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={styles.detailsPage}>
<<<<<<< HEAD
        <div className={styles.container} style={{ textAlign: 'center', paddingTop: '150px' }}>
          <h2 style={{ color: 'var(--text-heading)' }}>Article not found.</h2>
          <Link to="/blog" className="ctaButton" style={{ marginTop: '30px', display: 'inline-block' }}>
=======
        <div className={styles.container} style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2>Article not found.</h2>
          <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
            The blog post you are looking for has been removed or the URL is incorrect.
          </p>
          <Link to="/blog" className="ctaButton" style={{ marginTop: '30px' }}>
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  const imageUrl = blog.featured_image 
    ? (blog.featured_image.startsWith('http') ? blog.featured_image : `http://localhost:5000${blog.featured_image}`)
    : (blog.featured_image_url || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80');

  const date = blog.publish_date || blog.created_at;

  const renderContent = (text) => {
    if (!text) return null;
    return text.split('\n').map((para, i) => (
      para.trim() ? <p key={i}>{para}</p> : <br key={i} />
    ));
  };

  return (
    <main className={styles.detailsPage}>
      <SEO 
        title={blog.title}
        description={blog.short_description || (blog.article_content ? blog.article_content.substring(0, 160) : '')}
        image={imageUrl}
        type="article"
      />
      <div className={styles.progressBar} style={{ width: scrollProgress }}></div>

      <div className={styles.container}>
        <nav className={styles.headerNav}>
          <Link to="/blog" className={styles.backLink}>
            <FaArrowLeft /> Back to Blog
          </Link>
        </nav>

        <div className={styles.imageContainer}>
          <img
            src={imageUrl}
            alt={blog.title}
            className={styles.heroImage}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'; }}
          />
        </div>

        <div className={styles.titleArea}>
          <h1 className={styles.title}>
            {blog.title}
          </h1>
          <div className={styles.meta}>
            <span><FaUserCircle /> {blog.author || "Kognivex Engineering Team"}</span>
            <span><FaCalendarAlt /> {date ? new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "October 24, 2024"}</span>
            <span><FaTag /> {blog.category}</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.excerpt}>
            {blog.short_description}
          </div>
          
          <div className={styles.articleBody}>
            {renderContent(blog.article_content)}
          </div>

          {blog.key_challenges && (
            <>
              <h2>Key Challenges</h2>
              <div className={styles.challenges}>
                {renderContent(blog.key_challenges)}
              </div>
            </>
          )}

          {blog.implementation_framework && (
            <>
              <h2>Strategic Implementation Framework</h2>
              <div className={styles.framework}>
                {renderContent(blog.implementation_framework)}
              </div>
            </>
          )}

          {blog.future_outlook && (
            <>
              <h2>Looking Ahead</h2>
              <div className={styles.outlook}>
                {renderContent(blog.future_outlook)}
              </div>
            </>
          )}
        </div>

        <footer className={styles.footer}>
          <h3>Ready to build for the future?</h3>
          <p>Our engineering team specializes in scaling enterprise digital products with precision and absolute reliability.</p>
          <Link to="/contact" className="ctaButton">Start A Conversation</Link>
        </footer>
=======
  return (
    <main className={styles.detailsPage}>
      <div className={styles.container}>
        <Link to="/blog" className={styles.backLink}>
          <FaArrowLeft /> Back to Blog
        </Link>

        <img
          src={blog.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'}
          alt={blog.title}
          className={styles.heroImage}
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'; }}
        />

        <div className={styles.contentWrapper}>
          <div className={styles.meta}>
            <span><FaUserCircle /> {blog.author || "Kognivex Engineering Team"}</span>
            <span><FaCalendarAlt /> {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ""}</span>
            <span><FaTag /> {blog.category}</span>
          </div>

          <h1 className={styles.title}>{blog.title}</h1>
          
          <div className={styles.content} style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155' }}>
            {/* Hardcoded rich content since mock data only has a short snippet */}
            <p style={{ fontSize: '1.25rem', fontWeight: '500', color: '#0F172A', marginBottom: '30px' }}>
              {blog.excerpt || "In today's rapidly evolving digital landscape, organizations must continuously adapt their technological infrastructure to remain competitive. This article explores the foundational shifts in architecture and strategy that are defining the next era of enterprise software."}
            </p>
            
            <h2>The Changing Paradigm of System Architecture</h2>
            <p>
              Over the past decade, we have witnessed a massive migration from monolithic applications to microservices, and now, toward highly distributed serverless architectures. This transition is not merely a trend—it is a fundamental requirement for businesses that demand zero-downtime deployments, infinite horizontal scalability, and granular cost control. By decoupling the presentation layer from the business logic, engineering teams can iterate faster and deploy with significantly less risk.
            </p>
            <p>
              However, this shift brings new complexities. Managing state across distributed nodes, ensuring eventual consistency in databases, and securing API gateways require a highly specialized skill set. Organizations that rush into these architectures without proper planning often find themselves drowning in operational overhead.
            </p>

            <h2>Key Challenges in Modern Development</h2>
            <ul>
              <li style={{ marginBottom: '10px' }}><strong>Data Consistency:</strong> Maintaining ACID properties across micro-databases is notoriously difficult.</li>
              <li style={{ marginBottom: '10px' }}><strong>Security & Compliance:</strong> With a larger attack surface, zero-trust network policies are no longer optional.</li>
              <li style={{ marginBottom: '10px' }}><strong>Observability:</strong> Tracing requests through dozens of isolated services requires advanced telemetry and logging solutions.</li>
            </ul>

            <h2>Strategic Implementation Framework</h2>
            <p>
              To successfully navigate these waters, CTOs and technical leaders must adopt a phased approach. The first step involves an exhaustive audit of the existing monolithic structure to identify logical boundaries for domain-driven design. Once these boundaries are established, teams can begin strangling the monolith by gradually replacing legacy components with modern, isolated services.
            </p>
            <p>
              Automation plays a critical role here. Continuous Integration and Continuous Deployment (CI/CD) pipelines must be bulletproof. Infrastructure as Code (IaC) tools like Terraform or AWS CloudFormation ensure that environments are reproducible, eliminating the "it works on my machine" syndrome. 
            </p>

            <h2>Looking Ahead</h2>
            <p>
              As we look toward 2026 and beyond, the integration of Artificial Intelligence directly into the software development lifecycle will further accelerate this evolution. AI-assisted coding, automated security patching, and predictive autoscaling will become the baseline expectations for any competitive engineering team. The question is no longer whether your organization will adopt these technologies, but how quickly and effectively you can integrate them into your core business strategy.
            </p>
          </div>

          <div className={styles.footer} style={{ marginTop: '60px', padding: '40px', background: '#F8FAFC', borderRadius: '12px', textAlign: 'center' }}>
            <h3>Think we can help your business?</h3>
            <p style={{ marginBottom: '20px' }}>Our engineering team specializes in scaling enterprise digital products.</p>
            <Link to="/contact" className="ctaButton">Work With Us</Link>
          </div>
        </div>
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
      </div>
    </main>
  );
}

export default BlogDetails;