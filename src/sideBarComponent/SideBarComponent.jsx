import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import sidebar from './sidebar.json'
import './SideBarStyles.css';

function SidebarComponent() {
  const [activeMenu, setActiveMenu] = useState('');

  const handleClick = (name) => {
    setActiveMenu(name === activeMenu ? '' : name);
  };

  return (
    <aside className="sidebar">
      <nav>
        {sidebar.map(({ name, children }) => (
          <div key={name} className="nav-item">
            <div onClick={() => handleClick(name)} className={`nav-link ${activeMenu === name ? 'active-link' : ''}`}>
              {name}
              <span className={`dropdown-icon ${activeMenu === name ? 'active' : ''}`}>
                {activeMenu === name ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>
            {activeMenu === name && (
              <div className="dropdown">
                {children.map(subLink => (
                  <NavLink
                    key={subLink.name}
                    to={subLink.path}
                    className="nav-link"
                    activeClassName="active-link"
                  >
                    {subLink.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}



export default SidebarComponent;
