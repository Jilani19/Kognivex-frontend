import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import blogService from '../../services/blogService';

function EditBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('draft');
  const [featuredImage, setFeaturedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await blogService.fetchBlogBySlugAdmin(slug);
        setBlog(data);
        setTitle(data.title);
        setExcerpt(data.excerpt);
        setContent(data.content);
        setStatus(data.status);
      } catch (error) {
        setBlog(null);
      }
    };
    loadBlog();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await blogService.updateBlog(blog._id, { title, excerpt, content, status, featuredImage });
      navigate('/admin/manage-blogs');
    } catch {
      // ignore
    }
  };

  if (!blog) {
    return <p>Loading blog data…</p>;
  }

  return (
    <div style={{ maxWidth: '720px', padding: '1rem', background: '#fff', borderRadius: '12px' }}>
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Excerpt
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
        </label>
        <label>
          Content
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required rows={6} />
        </label>
        <label>
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        <label>
          Featured Image
          <input type="file" onChange={(e) => setFeaturedImage(e.target.files[0])} />
        </label>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlog;
