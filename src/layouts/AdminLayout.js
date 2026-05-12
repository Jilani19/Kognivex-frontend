import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styles from './AdminLayout.module.css';

function AdminLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
<<<<<<< HEAD
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
=======
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
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
<<<<<<< HEAD
    { path: '/admin/manage-jobs', label: 'Manage Jobs', icon: '💼' },
    { path: '/admin/create-job', label: 'Create Job', icon: '📝' },
=======
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
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

<<<<<<< HEAD
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

=======
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
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

<<<<<<< HEAD
  // Close mobile menu on location change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <div className={styles.layout}>
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarCollapsed ? styles.sidebarCollapsed : ''} ${mobileMenuOpen ? styles.mobileActive : ''}`}>
        <div className={styles.sidebarContent}>
          <div className={styles.logo}>
            Kognivex Admin
            <button className={styles.mobileClose} onClick={closeMobileMenu}>×</button>
          </div>
          <nav className={styles.menu}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.menuItem} ${location.pathname === item.path ? styles.active : ''}`}
                onClick={closeMobileMenu}
              >
                <span style={{ marginRight: '0.75rem' }}>{item.icon}</span>
                {(!sidebarCollapsed || mobileMenuOpen) && item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.sidebarFooter}>
            <div className={styles.userSection}>
              <div className={styles.userAvatar}>
                {user?.name?.charAt(0) || 'A'}
              </div>
              {(!sidebarCollapsed || mobileMenuOpen) && (
                <div className={styles.userInfo}>
                  <div className={styles.userName}>{user?.name || 'Admin User'}</div>
                  <div className={styles.userRole}>Super Admin</div>
                </div>
              )}
            </div>
            
            <div className={styles.sidebarActions}>
              <button
                className={styles.sidebarToggle}
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                {sidebarCollapsed ? '➔' : '⬅'}
              </button>
              
              <button 
                className={styles.logoutBtn} 
                onClick={handleLogout}
                title="Logout"
              >
                {(!sidebarCollapsed || mobileMenuOpen) ? 'Logout' : '⏻'}
              </button>
            </div>
          </div>
        </div>
      </aside>

=======
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

>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
      {/* Main Content */}
      <div className={`${styles.mainContent} ${sidebarCollapsed ? styles.mainContentCollapsed : ''}`}>
        {/* Topbar */}
        <header className={styles.topbar}>
<<<<<<< HEAD
          <div className={styles.topbarLeft}>
            <button className={styles.hamburger} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <h1 className={styles.pageTitle}>{getPageTitle()}</h1>
          </div>
          
          <div className={styles.topbarRight}>
            {/* Optional search or notifications can go here */}
=======
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
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
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
