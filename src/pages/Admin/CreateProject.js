import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import projectService from '../../services/projectService';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import styles from './CreateProject.module.css';

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(20, 'Description must be at least 20 characters'),
  technologies: Yup.array()
    .min(1, 'At least one technology is required'),
  liveUrl: Yup.string().url('Must be a valid URL').nullable(),
  githubUrl: Yup.string().url('Must be a valid URL').nullable(),
  status: Yup.string()
    .oneOf(['draft', 'published'], 'Invalid status')
    .required('Status is required'),
});

function CreateProject() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [techInput, setTechInput] = useState('');

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      setMessage('');
      setMessageType('');

      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('technologies', JSON.stringify(values.technologies));
      formData.append('status', values.status);

      if (values.liveUrl) formData.append('liveUrl', values.liveUrl);
      if (values.githubUrl) formData.append('githubUrl', values.githubUrl);

      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      await projectService.createProject(formData);
      setMessage('Project created successfully!');
      setMessageType('success');
      setTimeout(() => navigate('/admin/manage-projects'), 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to create project. Please try again.');
      setMessageType('error');
      console.error('Create project error:', error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const handleImageSelect = (file) => {
    setSelectedImage(file);
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const addTechnology = (technologies, setFieldValue) => {
    if (techInput.trim() && !technologies.includes(techInput.trim())) {
      setFieldValue('technologies', [...technologies, techInput.trim()]);
      setTechInput('');
    }
  };

  const removeTechnology = (index, technologies, setFieldValue) => {
    const newTech = technologies.filter((_, i) => i !== index);
    setFieldValue('technologies', newTech);
  };

  return (
    <div className={styles.form}>
      <h1>Create New Project</h1>

      {message && (
        <div className={messageType === 'success' ? styles.success : styles.error}>
          {message}
        </div>
      )}

      <Formik
        initialValues={{
          title: '',
          description: '',
          technologies: [],
          liveUrl: '',
          githubUrl: '',
          status: 'draft',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.label}>Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                className={styles.input}
                placeholder="Enter project title"
              />
              <ErrorMessage name="title" component="span" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.label}>Description</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className={styles.textarea}
                placeholder="Describe your project..."
                rows={5}
              />
              <ErrorMessage name="description" component="span" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Technologies</label>
              {values.technologies.length > 0 && (
                <div className={styles.technologiesList}>
                  {values.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTechnology(index, values.technologies, setFieldValue)}
                        className={styles.removeTech}
                        title="Remove technology"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <div className={styles.addTech}>
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="Add technology..."
                  className={styles.addTechInput}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTechnology(values.technologies, setFieldValue);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => addTechnology(values.technologies, setFieldValue)}
                  className={styles.addTechBtn}
                >
                  Add
                </button>
              </div>
              {values.technologies.length === 0 && (
                <span className={styles.error}>At least one technology is required</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="liveUrl" className={styles.label}>Live URL (optional)</label>
              <Field
                type="url"
                id="liveUrl"
                name="liveUrl"
                className={styles.input}
                placeholder="https://your-project.com"
              />
              <ErrorMessage name="liveUrl" component="span" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="githubUrl" className={styles.label}>GitHub URL (optional)</label>
              <Field
                type="url"
                id="githubUrl"
                name="githubUrl"
                className={styles.input}
                placeholder="https://github.com/username/project"
              />
              <ErrorMessage name="githubUrl" component="span" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="status" className={styles.label}>Status</label>
              <Field as="select" id="status" name="status" className={styles.select}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </Field>
              <ErrorMessage name="status" component="span" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Featured Image</label>
              <ImageUpload onImageSelect={handleImageSelect} />
              {selectedImage && (
                <div className={styles.imagePreview}>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    className={styles.previewImage}
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className={styles.removeBtn}
                    title="Remove image"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            <div className={styles.buttonGroup}>
              <button
                type="submit"
                disabled={isSubmitting || loading}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                {loading ? 'Creating...' : 'Create Project'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/admin/manage-projects')}
                className={`${styles.btn} ${styles.btnSecondary}`}
                disabled={isSubmitting || loading}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateProject;
