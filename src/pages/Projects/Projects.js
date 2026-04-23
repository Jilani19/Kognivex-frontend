import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectService from '../../services/projectService';

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await projectService.fetchProjectBySlug(slug); // ✅ FIXED
        setProject(data);
      } catch (err) {
        setError('Project not available yet.');
      }
    };
    loadProject();
  }, [slug]);

  if (error) {
    return (
      <section style={{ padding: '3rem', textAlign: 'center' }}>
        <h1>🚧 {error}</h1>
        <p style={{ marginTop: '10px', color: '#64748b' }}>
          This project will be published soon.
        </p>
      </section>
    );
  }

  if (!project) {
    return (
      <section style={{ padding: '3rem', textAlign: 'center' }}>
        <p>Loading project…</p>
      </section>
    );
  }

  return (
    <article
      style={{
        padding: '2rem',
        background: '#fff',
        borderRadius: '12px',
        maxWidth: '900px',
        margin: 'auto'
      }}
    >
      <h1>{project.title}</h1>

      <p style={{ marginTop: '10px', color: '#64748b' }}>
        {project.description}
      </p>

      <p style={{ marginTop: '20px' }}>
        <strong>Technologies:</strong>{' '}
        {project.technologies?.join(', ') || 'Not specified'}
      </p>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '20px' }}>
        {project.images?.map((img) => (
          <img
            key={img}
            src={img}
            alt={project.title}
            style={{
              width: '100%',
              borderRadius: '10px'
            }}
          />
        ))}
      </div>
    </article>
  );
}

export default ProjectDetails;