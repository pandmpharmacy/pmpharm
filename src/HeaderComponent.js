import React from 'react'
import './HeaderComponent.css';

function HeaderComponent() {
  const navigationItems = [
    {
      label: 'Nav 1',
      dropdown: ['Option 1.1', 'Option 1.2']
    },
    {
      label: 'Nav 2',
      dropdown: ['Option 2.1', 'Option 2.2']
    },
    // Add more navigation items as needed
  ];
  return (
    <header className="header-container">
    <img src="path_to_logo_image.jpg" alt="logo" className="logo" />
    <nav className="nav-section">
      {navigationItems.map((navItem, index) => (
        <div
          className="nav-item"
          onMouseEnter={() => setActiveDropdown(index)}
          onMouseLeave={() => setActiveDropdown(-1)}
          key={index}
        >
          {navItem.label}
          {activeDropdown === index && (
            <div className="dropdown">
              {navItem.dropdown.map((option, optIndex) => (
                <div className="dropdown-item" key={optIndex}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  </header>
  )
}

export default HeaderComponent