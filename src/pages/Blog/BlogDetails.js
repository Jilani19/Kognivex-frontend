import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogService from '../../services/blogService';
import formatDate from '../../utils/formatDate';

function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await blogService.fetchBlogBySlug(slug);
        setBlog(data);
        setError('');
      } catch (e) {
        setError(e.message || 'Blog not found');
      }
    };

    loadBlog();
  }, [slug]);

  if (error) {
    return <p style={{ padding: '2rem' }}>{error}</p>;
  }

  if (!blog) {
    return <p style={{ padding: '2rem' }}>Loading...</p>;
  }

  return (
    <article style={{ maxWidth: '900px', margin: 'auto', padding: '2rem' }}>

      <img
        src={blog.image || blog.featuredImage}
        alt={blog.title}
        style={{ width: '100%', borderRadius: '12px' }}
      />

      <h1 style={{ marginTop: '20px' }}>{blog.title}</h1>

      <p style={{ color: '#64748b' }}>
        {formatDate(blog.createdAt)} • {blog.category || 'General'}
      </p>

      <p style={{ marginTop: '10px' }}>{blog.excerpt}</p>

      <div style={{ marginTop: '20px', lineHeight: '1.7' }}>
        {blog.content}
      </div>

    </article>
  );
}

export default BlogDetails;