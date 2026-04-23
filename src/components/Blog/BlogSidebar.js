import React, { useState } from 'react';
import styles from './BlogPage.module.css';

function BlogSidebar({ setSearch, setCategory }) {
  const [active, setActive] = useState('');

  const categories = ["All", "Design", "Product", "Operations", "Strategy"];

  const handleCategory = (cat) => {
    setActive(cat);
    setCategory(cat === "All" ? "" : cat);
  };

  return (
    <div className={styles.sidebar}>

      <div className={styles.widget}>
        <h4>Categories</h4>
        <ul>
          {categories.map(cat => (
            <li
              key={cat}
              onClick={() => handleCategory(cat)}
              className={active === cat ? styles.active : ''}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.widget}>
        <h4>Search</h4>
        <input
          type="text"
          placeholder="Search blogs..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    </div>
  );
}

export default BlogSidebar;