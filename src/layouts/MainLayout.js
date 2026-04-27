import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/Common/ErrorBoundary';

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <ErrorBoundary>
<<<<<<< HEAD
        <main>
=======
        <main style={{ flex: 1, padding: '2rem' }}>
>>>>>>> b121ab91344270084ca30bf012f1c08b11ca5569
          <Outlet />
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default MainLayout;
