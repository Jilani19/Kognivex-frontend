import React, { useContext, useState } from 'react';
import { BlogContext } from '../../context/BlogContext';
import BlogCard from '../../components/Blog/BlogCard';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import CategoryFilter from './CategoryFilter';

function BlogList() {
  const { blogs } = useContext(BlogContext);
  const [category, setCategory] = useState("All");

  const filteredBlogs =
    category === "All"
      ? (blogs || [])
      : (blogs || []).filter((b) => (b.category || 'General') === category);

  return (
    <div style={{ padding: '2rem', display: 'grid', gap: '2rem' }}>

      <header>
        <h1>Blog</h1>
        <p>Insights on engineering, product, and scalable systems.</p>
      </header>

      <CategoryFilter setCategory={setCategory} />

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '2rem' }}>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id || blog.id || blog.slug} blog={blog} />
          ))}
        </div>

        <BlogSidebar />
      </div>

    </div>
  );
}

export default BlogList;