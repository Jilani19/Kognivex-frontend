import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      
      <img
        src={blog.image}
        alt={blog.title}
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '1rem'
        }}
      />

      <h1>{blog.title}</h1>
      <p>{blog.content}</p>

    </div>
  );
}

export default BlogDetails;