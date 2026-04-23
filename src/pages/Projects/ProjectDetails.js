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
        const data = await projectService.fetchProjectBySlug(slug);
        setProject(data);
      } catch (err) {
        setError('Unable to load project.');
      }
    };
    loadProject();
  }, [slug]);

  if (error) {
    return (
      <section style={{ padding: '2rem' }}>
        <h1>{error}</h1>
      </section>
    );
  }

  if (!project) {
    return (
      <section style={{ padding: '2rem' }}>
        <p>Loading project…</p>
      </section>
    );
  }

  return (
    <article style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {project.images.map((image) => (
          <img key={image} src={image} alt={project.title} style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }} />
        ))}
      </div>
    </article>
  );
}

export default ProjectDetails;
