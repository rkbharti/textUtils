import  './App.js'
// import AboutUs from './customComponents/AboutUs.js';
import Navbar from './customComponents/Navbar.js'
import Textform from './customComponents/Textform.js'

function App() {
  return (
    <>
    <Navbar  title= "Textutils" 
            aboutus="About Us" />
    <div className='container my-3'>
      { <Textform heading =" Enter the text to analyze" />}
      {/* <AboutUs/> */}
    </div>
  
    
    </>

  );
}

export default App;