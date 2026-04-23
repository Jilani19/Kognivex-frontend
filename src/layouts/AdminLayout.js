import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styles from './AdminLayout.module.css';

function AdminLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/manage-blogs', label: 'Manage Blogs', icon: '📝' },
    { path: '/admin/create-blog', label: 'Create Blog', icon: '✏️' },
    { path: '/admin/manage-projects', label: 'Manage Projects', icon: '🚀' },
    { path: '/admin/create-project', label: 'Create Project', icon: '➕' },
    { path: '/admin/upload-media', label: 'Media Upload', icon: '🖼️' }
  ];

  const getPageTitle = () => {
    const currentItem = menuItems.find(item => item.path === location.pathname);
    return currentItem ? currentItem.label : 'Admin Dashboard';
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.profileDropdown}`)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarCollapsed ? styles.sidebarCollapsed : ''}`}>
        <div className={styles.logo}>
          Kognivex Admin
        </div>
        <nav className={styles.menu}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.menuItem} ${location.pathname === item.path ? styles.active : ''}`}
            >
              <span style={{ marginRight: '0.75rem' }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Toggle Button */}
      <button
        className={styles.toggleBtn}
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        aria-label="Toggle sidebar"
      >
        {sidebarCollapsed ? '☰' : '✕'}
      </button>

      {/* Main Content */}
      <div className={`${styles.mainContent} ${sidebarCollapsed ? styles.mainContentCollapsed : ''}`}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <h1 className={styles.pageTitle}>{getPageTitle()}</h1>
          <div className={styles.topbarRight}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchBar}
            />
            <div className={styles.profileDropdown}>
              <button
                className={styles.profileBtn}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>👤</span>
                <span>{user?.name || 'Admin'}</span>
                <span>{dropdownOpen ? '▲' : '▼'}</span>
              </button>
              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <button
                    type="button"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                    style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    Profile
                  </button>
                  <button
                    type="button"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                    style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    Settings
                  </button>
                  <button
                    className={styles.dropdownItem}
                    onClick={handleLogout}
                    style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
