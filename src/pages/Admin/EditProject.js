import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import projectService from '../../services/projectService';

function EditProject() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [status, setStatus] = useState('draft');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await projectService.fetchProjectBySlug(slug);
        setProject(data);
        setTitle(data.title);
        setDescription(data.description);
        setTechnologies((data.technologies || []).join(', '));
        setLiveUrl(data.liveUrl || '');
        setGithubUrl(data.githubUrl || '');
        setStatus(data.status);
      } catch {
        setProject(null);
      }
    };
    loadProject();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await projectService.updateProject(project._id, {
        title,
        description,
        technologies: technologies.split(',').map((item) => item.trim()).filter(Boolean),
        liveUrl,
        githubUrl,
        status,
        images
      });
      navigate('/admin/manage-projects');
    } catch {
      // ignore
    }
  };

  if (!project) {
    return <p>Loading project…</p>;
  }

  return (
    <div style={{ maxWidth: '720px', padding: '1rem', background: '#fff', borderRadius: '12px' }}>
      <h1>Edit Project</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Description
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={5} />
        </label>
        <label>
          Technologies
          <input value={technologies} onChange={(e) => setTechnologies(e.target.value)} />
        </label>
        <label>
          Live URL
          <input value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} />
        </label>
        <label>
          GitHub URL
          <input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
        </label>
        <label>
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        <label>
          Images
          <input type="file" multiple onChange={(e) => setImages(Array.from(e.target.files))} />
        </label>
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default EditProject;
