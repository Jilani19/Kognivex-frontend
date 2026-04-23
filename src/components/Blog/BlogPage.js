import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';
import styles from './BlogPage.module.css';
import api from '../../services/api';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get('/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchBlogs();
  }, []);

  const filtered = blogs.filter(blog =>
    blog.title?.toLowerCase().includes(search.toLowerCase()) &&
    (category ? blog.category === category : true)
  );

  return (
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
  );
}

export default BlogPage;