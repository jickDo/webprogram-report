import React, { useState, useEffect } from 'react';
import { Link ,NavLink} from 'react-router-dom'; 
import './HeaderStyles.css';

function HeaderComponent() {
  const [theme, setTheme] = useState('light');

  const navLinks = [
    { path: '/why-spring', label: 'Why Spring' },
    { path: '/learn', label: 'Learn' },
    { path: '/project', label: 'Projects' },
    { path: '/academy', label: 'Academy' },
    { path: '/solution', label: 'Solution' },
    { path: '/community', label: 'Community' },
  ];


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (document.body.className === 'light') {
      document.body.className = 'dark';
    } else {
      document.body.className = 'light';
    }
  }

  return (
    <div className="header">
    <Link to="/" className="logo">
      <img className='logo' src="/DOCS-logo.png" alt="My App Logo" />
    </Link>
    <div className="menu-container">
      <nav className="navigation">
        {navLinks.map((link) => (
          <NavLink key={link.label} to={link.path} activeClassName="active">
            {link.label}
          </NavLink>
        ))}
        <div className="theme-switcher">
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </nav>
    </div>
  </div>
  );
}

export default HeaderComponent;
