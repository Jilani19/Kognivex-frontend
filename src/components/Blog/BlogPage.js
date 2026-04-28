import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import styles from './BlogPage.module.css';
import api from '../../services/api';
import { blogData } from '../../constants/blogData';
import { updateSeo } from '../../utils/seoHelper';

function BlogPage() {
  const [blogs, setBlogs] = useState(blogData);
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  const categories = ["All", "Technology", "Education", "Business", "Startup", "AI / SaaS"];

  useEffect(() => {
    updateSeo({
      title: 'Blog | Engineering Insights by Kognivex',
      description: 'Explore our latest thoughts on SaaS architecture, digital transformation, and elite software engineering.',
    });

    const fetchBlogs = async () => {
      try {
        const res = await api.get('/blogs');
        if (res.data && res.data.length > 0) {
          setBlogs(res.data);
        }
      } catch (err) {
        console.warn('API not available, using local blog data.');
      }
    };

    fetchBlogs();
  }, []);

  // Filter logic
  const filtered = blogs.filter(blog =>
    category === 'All' ? true : blog.category === category
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filtered.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filtered.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <main className={styles.blogPage}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container_hero}>
          <h1>Engineering <span>Insights</span></h1>
          <p>
            Strategic technical advice, industry trends, and engineering lessons 
            from our team of specialists.
          </p>
        </div>
      </section>

      <div className={styles.container}>
        {/* CATEGORY FILTERS */}
        <div className={styles.categoryFilters}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(1); // Reset to page 1 on category change
              }}
              className={`${styles.categoryBtn} ${category === cat ? styles.activeCategoryBtn : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className={styles.blogContainer}>
          {currentBlogs.length > 0 ? (
            currentBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          ) : (
            <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px' }}>
              <h3>No articles found for your search.</h3>
            </div>
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className={styles.pageBtn}
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${styles.pageBtn} ${currentPage === page ? styles.activePageBtn : ''}`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className={styles.pageBtn}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default BlogPage;