import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import blogService from '../../services/blogService';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import styles from './CreateBlog.module.css';

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),
  excerpt: Yup.string()
    .required('Excerpt is required')
    .min(10, 'Excerpt must be at least 10 characters')
    .max(300, 'Excerpt must be less than 300 characters'),
  content: Yup.string()
    .required('Content is required')
    .min(50, 'Content must be at least 50 characters'),
  status: Yup.string()
    .oneOf(['draft', 'published'], 'Invalid status')
    .required('Status is required'),
});

function CreateBlog() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      setMessage('');
      setMessageType('');

      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('excerpt', values.excerpt);
      formData.append('content', values.content);
      formData.append('status', values.status);

      if (selectedImage) {
        formData.append('featuredImage', selectedImage);
      }

      await blogService.createBlog(formData);
      setMessage('Blog created successfully!');
      setMessageType('success');
      setTimeout(() => navigate('/admin/manage-blogs'), 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to create blog. Please try again.');
      setMessageType('error');
      console.error('Create blog error:', error);
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

  return (
    <div className={styles.form}>
      <h1>Create New Blog</h1>

      {message && (
        <div className={messageType === 'success' ? styles.success : styles.error}>
          {message}
        </div>
      )}

      <Formik
        initialValues={{
          title: '',
          excerpt: '',
          content: '',
          status: 'draft',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.label}>Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                className={styles.input}
                placeholder="Enter blog title"
              />
              <ErrorMessage name="title" component="span" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="excerpt" className={styles.label}>Excerpt</label>
              <Field
                as="textarea"
                id="excerpt"
                name="excerpt"
                className={styles.textarea}
                placeholder="Brief description of the blog post"
                rows={3}
              />
              <ErrorMessage name="excerpt" component="span" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="content" className={styles.label}>Content</label>
              <Field
                as="textarea"
                id="content"
                name="content"
                className={styles.textarea}
                placeholder="Write your blog content here..."
                rows={10}
              />
              <ErrorMessage name="content" component="span" className={styles.error} />
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
                {loading ? 'Creating...' : 'Create Blog'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/admin/manage-blogs')}
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

export default CreateBlog;
