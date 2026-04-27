import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import { blogData } from '../../constants/blogData';
import styles from './BlogDetails.module.css';
import { updateSeo } from '../../utils/seoHelper';
import { FaArrowLeft, FaCalendarAlt, FaTag } from 'react-icons/fa';

function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/${slug}`);
        if (res.data) {
          setBlog(res.data);
          updateSeo({
            title: `${res.data.title} | Kognivex Blog`,
            description: res.data.content.substring(0, 160),
          });
        }
      } catch (err) {
        // Fallback to local data if API fails
        const localBlog = blogData.find(b => b.slug === slug);
        if (localBlog) {
          setBlog(localBlog);
          updateSeo({
            title: `${localBlog.title} | Kognivex Blog`,
            description: localBlog.content.substring(0, 160),
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.detailsPage}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <h2>Loading insights...</h2>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={styles.detailsPage}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <h2>Article not found.</h2>
          <Link to="/blog" className="btn-primary" style={{ marginTop: '20px' }}>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.detailsPage}>
      <div className={styles.container}>
        <Link to="/blog" className={styles.backLink}>
          <FaArrowLeft /> Back to Blog
        </Link>

        <img
          src={blog.image || 'https://via.placeholder.com/1200x600'}
          alt={blog.title}
          className={styles.heroImage}
        />

        <div className={styles.contentWrapper}>
          <div className={styles.meta}>
            <span><FaCalendarAlt /> {new Date(blog.createdAt).toLocaleDateString()}</span>
            <span><FaTag /> {blog.category}</span>
          </div>

          <h1 className={styles.title}>{blog.title}</h1>
          
          <div className={styles.content}>
            {blog.content.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className={styles.footer}>
            <h3>Think we can help your business?</h3>
            <p>Our engineering team specializes in scaling enterprise digital products.</p>
            <Link to="/contact" className="btn-primary">Work With Us</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogDetails;