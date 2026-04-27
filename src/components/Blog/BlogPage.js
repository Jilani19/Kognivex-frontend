import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';
import styles from './BlogPage.module.css';
import api from '../../services/api';
<<<<<<< HEAD
import { blogData } from '../../constants/blogData';
import { updateSeo } from '../../utils/seoHelper';

function BlogPage() {
  const [blogs, setBlogs] = useState(blogData); // Default to local high-quality data
=======

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const fetchBlogs = async () => {
      try {
        const res = await api.get('/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error(err.message);
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
      }
    };

    fetchBlogs();
  }, []);

  const filtered = blogs.filter(blog =>
    blog.title?.toLowerCase().includes(search.toLowerCase()) &&
    (category ? blog.category === category : true)
  );

  return (
<<<<<<< HEAD
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
        <div className={styles.blogGrid}>
          {filtered.length > 0 ? (
            filtered.map(blog => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          ) : (
            <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px' }}>
              <h3>No articles found for your search.</h3>
            </div>
          )}
        </div>

        <BlogSidebar 
          setSearch={setSearch}
          setCategory={setCategory}
        />
      </div>
    </main>
=======
    <div className={styles.container}>

      <div className={styles.blogGrid}>
        {filtered.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <BlogSidebar 
        setSearch={setSearch}
        setCategory={setCategory}
      />

    </div>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
  );
}

export default BlogPage;