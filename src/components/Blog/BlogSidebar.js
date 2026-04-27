import React, { useState } from 'react';
import styles from './BlogPage.module.css';
<<<<<<< HEAD
import { FaSearch } from 'react-icons/fa';

function BlogSidebar({ setSearch, setCategory }) {
  const [active, setActive] = useState('All');

  // Updated categories to match the blogData constants exactly
  const categories = ["All", "Technology", "Business", "Startups", "Marketing", "IT Trends"];
=======

function BlogSidebar({ setSearch, setCategory }) {
  const [active, setActive] = useState('');

  const categories = ["All", "Design", "Product", "Operations", "Strategy"];
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569

  const handleCategory = (cat) => {
    setActive(cat);
    setCategory(cat === "All" ? "" : cat);
  };

  return (
<<<<<<< HEAD
    <aside className={styles.sidebar}>
      <div className={styles.widget}>
        <h4>Search Articles</h4>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search titles..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>

      <div className={styles.widget}>
        <h4>Categories</h4>
        <ul className={styles.categoryList}>
=======
    <div className={styles.sidebar}>

      <div className={styles.widget}>
        <h4>Categories</h4>
        <ul>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          {categories.map(cat => (
            <li
              key={cat}
              onClick={() => handleCategory(cat)}
<<<<<<< HEAD
              className={active === cat ? styles.activeCategory : ''}
=======
              className={active === cat ? styles.active : ''}
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

<<<<<<< HEAD
      <div className={styles.ctaWidget}>
        <h4>Need Expert Insight?</h4>
        <p>Book a technical consultation with our engineering leads today.</p>
        <button className="btn-primary" style={{ width: '100%', fontSize: '0.9rem', marginTop: '16px' }}>
          Schedule a Call
        </button>
      </div>
    </aside>
=======
      <div className={styles.widget}>
        <h4>Search</h4>
        <input
          type="text"
          placeholder="Search blogs..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    </div>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
  );
}

export default BlogSidebar;