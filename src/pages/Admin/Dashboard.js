import React, { useEffect, useState } from 'react';
import blogService from '../../services/blogService';
import projectService from '../../services/projectService';
<<<<<<< HEAD
import jobService from '../../services/jobService';
=======
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
import styles from './Dashboard.module.css';

function Dashboard() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalProjects: 0,
<<<<<<< HEAD
    totalJobs: 0,
    draftBlogs: 0,
    publishedBlogs: 0,
    draftProjects: 0,
    publishedProjects: 0,
    openJobs: 0,
    closedJobs: 0
  });
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentJobs, setRecentJobs] = useState([]);
=======
    draftBlogs: 0,
    publishedBlogs: 0,
    draftProjects: 0,
    publishedProjects: 0
  });
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
<<<<<<< HEAD
        const [blogsData, projectsData, jobsData] = await Promise.all([
          blogService.fetchAllBlogs(),
          projectService.fetchProjects(),
          jobService.fetchAllJobs()
=======
        const [blogsData, projectsData] = await Promise.all([
          blogService.fetchBlogs(),
          projectService.fetchProjects()
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        ]);

        // Calculate stats
        const blogs = blogsData || [];
        const projects = projectsData || [];
<<<<<<< HEAD
        const jobs = jobsData || [];
=======
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de

        const draftBlogs = blogs.filter(blog => blog.status === 'draft').length;
        const publishedBlogs = blogs.filter(blog => blog.status === 'published').length;
        const draftProjects = projects.filter(project => project.status === 'draft').length;
        const publishedProjects = projects.filter(project => project.status === 'published').length;
<<<<<<< HEAD
        const openJobs = jobs.filter(job => job.status === 'open').length;
        const closedJobs = jobs.filter(job => job.status === 'closed').length;
=======
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de

        setStats({
          totalBlogs: blogs.length,
          totalProjects: projects.length,
<<<<<<< HEAD
          totalJobs: jobs.length,
          draftBlogs,
          publishedBlogs,
          draftProjects,
          publishedProjects,
          openJobs,
          closedJobs
=======
          draftBlogs,
          publishedBlogs,
          draftProjects,
          publishedProjects
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        });

        // Get recent items (last 5)
        setRecentBlogs(blogs.slice(0, 5));
        setRecentProjects(projects.slice(0, 5));
<<<<<<< HEAD
        setRecentJobs(jobs.slice(0, 5));
=======
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de

      } catch (err) {
        setError('Failed to load dashboard data');
        console.error('Dashboard error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const formatDate = (dateString) => {
<<<<<<< HEAD
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'N/A';
    return date.toLocaleDateString('en-US', {
=======
    return new Date(dateString).toLocaleDateString('en-US', {
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div>Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div>
      {error && <div className={styles.error}>{error}</div>}

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📝</div>
          <div className={styles.statTitle}>Total Blogs</div>
          <div className={styles.statValue}>{stats.totalBlogs}</div>
          <div className={styles.statChange}>
            {stats.publishedBlogs} published, {stats.draftBlogs} drafts
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🚀</div>
          <div className={styles.statTitle}>Total Projects</div>
          <div className={styles.statValue}>{stats.totalProjects}</div>
          <div className={styles.statChange}>
            {stats.publishedProjects} published, {stats.draftProjects} drafts
          </div>
        </div>

        <div className={styles.statCard}>
<<<<<<< HEAD
          <div className={styles.statIcon}>💼</div>
          <div className={styles.statTitle}>Total Jobs</div>
          <div className={styles.statValue}>{stats.totalJobs}</div>
          <div className={styles.statChange}>
            {stats.openJobs} open, {stats.closedJobs} closed
=======
          <div className={styles.statIcon}>📋</div>
          <div className={styles.statTitle}>Draft Content</div>
          <div className={styles.statValue}>{stats.draftBlogs + stats.draftProjects}</div>
          <div className={styles.statChange}>
            {stats.draftBlogs} blogs, {stats.draftProjects} projects
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🌟</div>
          <div className={styles.statTitle}>Published Content</div>
<<<<<<< HEAD
          <div className={styles.statValue}>{stats.publishedBlogs + stats.publishedProjects + stats.openJobs}</div>
          <div className={styles.statChange}>
            {stats.publishedBlogs} blogs, {stats.publishedProjects} projects, {stats.openJobs} jobs
=======
          <div className={styles.statValue}>{stats.publishedBlogs + stats.publishedProjects}</div>
          <div className={styles.statChange}>
            {stats.publishedBlogs} blogs, {stats.publishedProjects} projects
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
          </div>
        </div>
      </div>

      {/* Recent Blogs */}
      <div className={styles.recentSection}>
        <h2 className={styles.sectionTitle}>
          📝 Recent Blogs
        </h2>
        {recentBlogs.length > 0 ? (
<<<<<<< HEAD
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentBlogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog.title}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${blog.status === 'published' ? styles.statusPublished : styles.statusDraft}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td>{formatDate(blog.publish_date || blog.created_at || blog.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
=======
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentBlogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${blog.status === 'published' ? styles.statusPublished : styles.statusDraft}`}>
                      {blog.status}
                    </span>
                  </td>
                  <td>{formatDate(blog.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        ) : (
          <p style={{ color: '#64748b', fontStyle: 'italic' }}>No blogs yet</p>
        )}
      </div>

      {/* Recent Projects */}
      <div className={styles.recentSection}>
        <h2 className={styles.sectionTitle}>
          🚀 Recent Projects
        </h2>
        {recentProjects.length > 0 ? (
<<<<<<< HEAD
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project) => (
                  <tr key={project._id || project.id}>
                    <td>{project.title}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${project.status === 'published' ? styles.statusPublished : styles.statusDraft}`}>
                        {project.status}
                      </span>
                    </td>
                    <td>{formatDate(project.createdAt || project.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
=======
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Technologies</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project) => (
                <tr key={project._id}>
                  <td>{project.title}</td>
                  <td>{project.technologies?.join(', ') || 'N/A'}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${project.status === 'published' ? styles.statusPublished : styles.statusDraft}`}>
                      {project.status}
                    </span>
                  </td>
                  <td>{formatDate(project.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
        ) : (
          <p style={{ color: '#64748b', fontStyle: 'italic' }}>No projects yet</p>
        )}
      </div>
<<<<<<< HEAD

      {/* Recent Jobs */}
      <div className={styles.recentSection}>
        <h2 className={styles.sectionTitle}>
          💼 Recent Jobs
        </h2>
        {recentJobs.length > 0 ? (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentJobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.category}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${job.status === 'open' ? styles.statusPublished : styles.statusDraft}`}>
                        {job.status}
                      </span>
                    </td>
                    <td>{formatDate(job.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: '#64748b', fontStyle: 'italic' }}>No job postings yet</p>
        )}
      </div>
=======
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
    </div>
  );
}

export default Dashboard;
