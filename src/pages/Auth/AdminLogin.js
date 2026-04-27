import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

function AdminLogin() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (values, { setSubmitting }) => {
    setError('');
    try {
      await login(values.email, values.password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '480px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px' }}>
      <h1>Admin Login</h1>
      <Formik
        initialValues={{
          email: 'admin@kognivex.com',
          password: 'admin123'
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }} />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '0.75rem',
                background: isSubmitting ? '#ccc' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

export default AdminLogin;
