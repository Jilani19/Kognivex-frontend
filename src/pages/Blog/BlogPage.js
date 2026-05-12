import React, { useEffect, useState } from 'react';
import { updateSeo } from '../../utils/seoHelper';
import styles from './BlogPage.module.css';
import { blogData } from '../../constants/blogData';
import BlogCard from '../../components/Blog/BlogCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

function BlogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  const categories = ["All", "Technology", "Business", "Startups", "Marketing", "IT Trends"];

  useEffect(() => {
    updateSeo({
      title: 'Our Blog | Kognivex - Insights on Technology & Business',
      description: 'Stay updated with the latest trends in software engineering, startup growth, and digital marketing.',
    });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let blogs = blogData.filter(b => 
      b.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || b.category === category)
    );
    setFilteredBlogs(blogs);
  }, [search, category]);

  // Grouping logic for layout sections
  const recentBlogs = filteredBlogs.slice(0, 3);
  const otherBlogs = filteredBlogs.slice(3);

  return (
    <main className={styles.blogPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Insights & Trends</span>
            <h1>Engineering <span>Success</span> Through Knowledge</h1>
            <p>Exploring the intersection of elite engineering, scalable architecture, and strategic business growth.</p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterBar}>
            <div className={styles.searchBox}>
              <FaSearch className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className={styles.categoryChips}>
              <FaFilter className={styles.filterIcon} />
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`${styles.chip} ${category === cat ? styles.activeChip : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {filteredBlogs.length === 0 ? (
            <div className={styles.noResults}>
              <h3>No articles found</h3>
              <p>Try adjusting your search or category filters.</p>
              <button onClick={() => {setSearch(''); setCategory('All');}} className="btn-primary">Clear Filters</button>
            </div>
          ) : (
            <>
              {/* RECENT / FEATURED (3 per row) */}
              {category === 'All' && search === '' && (
                <div className={styles.sectionGroup}>
                  <h2 className={styles.sectionTitle}>Recent Updates</h2>
                  <div className={styles.blogGrid}>
                    {recentBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
                  </div>
                </div>
              )}

              {/* ALL POSTS (3 per row) */}
              <div className={styles.sectionGroup}>
                <h2 className={styles.sectionTitle}>
                  {category === 'All' && search === '' ? 'More Articles' : `${category} Articles`}
                </h2>
                <div className={styles.blogGrid}>
                  {(category === 'All' && search === '' ? otherBlogs : filteredBlogs).map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* FOOTER CTA */}
      <section className={styles.footerCta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Stay Ahead of the Curve</h2>
            <p>Join 2,000+ engineers and business leaders who receive our weekly technical digest.</p>
            <div className={styles.subscribeBox}>
              <input type="email" placeholder="Enter your email" />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
