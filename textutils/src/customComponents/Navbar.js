import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title, aboutus, mode, toggleMode }) {
  // Dynamic text color calculation
  const textColor = mode === 'light' ? 'dark' : 'light';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${textColor}`} href="/">{title}</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${textColor}`} href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${textColor}`} href="/">{aboutus}</a>
            </li>
          </ul>

          <div className="d-flex">
            <div className={`form-check form-switch text-${textColor} mx-2`}>
              <input 
                className="form-check-input" 
                onChange={() => toggleMode('dark')} 
                checked={mode === 'dark'}
                type="checkbox" 
                id="darkModeToggle"
              />
              <label className="form-check-label" htmlFor="darkModeToggle">
                Dark Mode
              </label>
            </div>

            <div className={`form-check form-switch text-${textColor} mx-2`}>
              <input 
                className="form-check-input" 
                onChange={() => toggleMode('red')} 
                checked={mode === 'red'}
                type="checkbox" 
                id="redModeToggle"
              />
              <label className="form-check-label" htmlFor="redModeToggle">
                Red Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,  // Navbar title text
  aboutus: PropTypes.string,  // About link text
  mode: PropTypes.string.isRequired, // Current theme mode (required)
  toggleMode: PropTypes.func.isRequired  // Theme change handler (required)
};

Navbar.defaultProps = { 
  title: 'TextUtils', //default title 
  aboutus: 'About Us' // default about us
};