import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';
<<<<<<< HEAD
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  // Use excerpt if available, otherwise truncate content
  const excerpt = blog.excerpt || (blog.content ? blog.content.substring(0, 100) + '...' : '');

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={blog.image || "https://via.placeholder.com/600x400"} 
          alt={blog.title} 
          loading="lazy"
        />
        <div className={styles.categoryBadge}>{blog.category}</div>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>
            <FaCalendarAlt /> {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ""}
          </span>
        </div>

        <h3>{blog.title}</h3>
        <p>{excerpt}</p>

        <Link to={`/blog/${blog.slug}`} className={styles.cta}>
          Read Article <FaArrowRight />
        </Link>
      </div>
    </article>
=======

function BlogCard({ blog }) {
  return (
    <div className={styles.card}>
      
      {/* ✅ SAFE IMAGE */}
      <img 
        src={blog.image || "https://via.placeholder.com/400x200"} 
        alt={blog.title} 
        className={styles.image} 
      />

      <div className={styles.meta}>
        <span>{blog.category}</span>

        {/* ✅ DATE FORMAT FIX */}
        <span>
          {blog.createdAt 
            ? new Date(blog.createdAt).toLocaleDateString() 
            : ""}
        </span>
      </div>

      <h3>{blog.title}</h3>
      <p>{blog.excerpt}</p>

      {/* ✅ SLUG SAFE */}
      <Link to={`/blog/${blog.slug}`} className={styles.cta}>
        Read More →
      </Link>
    </div>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
  );
}

export default BlogCard;