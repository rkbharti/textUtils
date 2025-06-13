import React from 'react';
import PropTypes from 'prop-types';

function Alert({ alert }) {
  // Don't render if no alert exists
  if (!alert) return null;
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  return (
    <div style= {{height:'50px'}}>
     <div 
      className={`alert alert-${alert.type} alert-dismissible fade show`} 
      role="alert"
      aria-live="assertive" // For screen readers
    >
      <strong>{capitalizeFirstLetter(alert.type)}</strong>: {alert.msg}
    </div>
    </div>
  );
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Prop type validation
Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired
  })
};

// Default props
Alert.defaultProps = {
  alert: null
};

export default Alert;