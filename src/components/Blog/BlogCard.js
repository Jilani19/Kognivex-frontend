import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';

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
  );
}

export default BlogCard;