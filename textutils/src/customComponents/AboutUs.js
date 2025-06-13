import React from 'react';
import PropTypes from 'prop-types';

export default function AboutUs({ mode }) {
  // Define styles based on current mode
  const getStyles = () => {
    switch(mode) {
      case 'dark':
        return {
          color: 'white',
          backgroundColor: '#042743',
          borderColor: '#495057',
          buttonBg: '#212529',
          buttonText: 'Enable Light Mode'
        };
      case 'red':
        return {
          color: '#FFD700', // Gold text
          backgroundColor: '#8B0000', // Dark red
          borderColor: '#5C0000',
          buttonBg: '#5C0000',
          buttonText: 'Enable Light Mode'
        };
      default: // light mode
        return {
          color: 'black',
          backgroundColor: 'white',
          borderColor: '#dee2e6',
          buttonBg: '#f8f9fa',
          buttonText: 'Enable Dark Mode'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className="container" style={{ 
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>About Us</h1>
      <div className="accordion">
        {/* Accordion Item 1 */}
        <div className="accordion-item" style={{ 
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          borderColor: styles.borderColor
        }}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button" 
              style={{ 
                backgroundColor: styles.buttonBg,
                color: styles.color
              }} 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne"
            >
              <strong>Analyze the text</strong>  
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={{ color: styles.color }}>
              <strong>This is the first item's accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item" style={{ 
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          borderColor: styles.borderColor
        }}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              style={{ 
                backgroundColor: styles.buttonBg,
                color: styles.color
              }} 
              type="button" 
              data-bs-target="#collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ color: styles.color }}>
              Content about free usage...
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item" style={{ 
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          borderColor: styles.borderColor
        }}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              style={{ 
                backgroundColor: styles.buttonBg,
                color: styles.color
              }} 
              type="button" 
              data-bs-target="#collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ color: styles.color }}>
              Content about browser compatibility...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark', 'red']).isRequired
};