import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  // Determine text color based on mode
  const textColor = props.mode === 'dark' ? 'light' : 'dark';
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${textColor}`} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${textColor}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${textColor}`} href="/">{props.aboutus}</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${textColor}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlFor="switchCheckDefault">
                {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutus: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'Set editable Title here Too',
  aboutus: 'About US'
};