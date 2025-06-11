import { useState } from 'react';
import  './App.js'
// import AboutUs from './customComponents/AboutUs.js';
import Navbar from './customComponents/Navbar.js'
import Textform from './customComponents/Textform.js'

function App() {

   const[mode , setMode]= useState('light');

   const toggleMode = ()=>{
       if (mode === 'light' ) {
           setMode ('dark')
       }
       else {
        setMode('light')
       }
   }
  return (
    <>
    {/* <Navbar  title= "Textutils" 
            aboutus="About Us" /> */}
    <Navbar  title= "Textutils" mode = {mode} 
             toggleMode= {toggleMode}
            setMode = {setMode}
            aboutus="About Us" />
    <div className='container my-3'>
      { <Textform heading =" Enter the text to analyze" />}
      {/* <AboutUs/> */}
    </div>
  
    
    </>

  );
}

export default App;