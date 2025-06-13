import { useState } from 'react';
import './App.css';
import Navbar from './customComponents/Navbar';
import Textform from './customComponents/Textform';
import Alert from './customComponents/Alert';
import AboutUs from './customComponents/AboutUs';
import {
  BrowserRouter as Router,
  Routes, /* Routes are new Syntax  for Switch in react router dom  */
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = (selectedMode) => {
    if (mode === selectedMode) {
      setMode('light');
      // document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      // showAlert("Light Mode Enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    } 
    else {
      setMode(selectedMode);
      if (selectedMode === 'dark') {
        document.body.style.backgroundColor = '#042743';
        document.body.style.color = 'white';
        showAlert("Dark Mode Enabled", "success");
        // document.title = 'TextUtils - Dark Mode';
      } else if (selectedMode === 'red') {
        document.body.style.backgroundColor = '#8B0000';
        document.body.style.color = '#FFD700';
        showAlert("Red Mode Enabled", "success");
        // document.title = 'TextUtils - Red Mode';
      }
    }
  };

  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<AboutUs mode={mode} />} />
            <Route path="/" element={
              <Textform 
                showAlert={showAlert} 
                heading="Try TextUtils - word counter, character counter, LOwerUpperCase" 
                mode={mode}
              />
            } />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;