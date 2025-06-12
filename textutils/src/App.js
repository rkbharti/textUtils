import { useState } from 'react';
import './App.css';
import Navbar from './customComponents/Navbar.js';
import Textform from './customComponents/Textform.js';
import Alert from './customComponents/Alert.js';
// import Aboutus from './customComponents/Aboutus.js';

function App() {
  // State for theme management
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Unified alert system
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  // Theme toggle functions
  const toggleMode = (selectedMode) => {
    // Reset to light mode if clicking the currently active mode
    if (mode === selectedMode) {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    } 
    // Otherwise set to selected mode
    else {
      setMode(selectedMode);
      if (selectedMode === 'dark') {
        document.body.style.backgroundColor = '#042743';
        document.body.style.color = 'white';
        showAlert("Dark Mode Enabled", "success");
      } else if (selectedMode === 'red') {
        document.body.style.backgroundColor = '#8B0000';
        document.body.style.color = '#FFD700';
        showAlert("Red Mode Enabled", "success");
      }
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutus="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className={`container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <Textform
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;