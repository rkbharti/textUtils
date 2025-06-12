import { useState } from 'react';
import  './App.js'
// import AboutUs from './customComponents/AboutUs.js';
import Navbar from './customComponents/Navbar.js'
import Textform from './customComponents/Textform.js'
import Alert from './customComponents/Alert.js'

function App() {

   const[mode , setMode]= useState('light');{/*Initialize mode state with 'light' as default value*/}
        // mode = current value, setMode = function to update it
    const[alert , setAlert] = useState('null');

       //set the setalert as method and use alert as an object
        const showAlert = (message ,type) =>
          setAlert({
               msg :message,
               type :type 
          })
          setTimeout(() => {
            setAlert("null");
          }, 3000);
        
   const toggleMode = ()=>{
       if (mode === 'light' ) {
           setMode ('dark');
           document.body.style.backgroundColor='#042743'; // Dark blue background
           document.body.style.color = 'white'; // Light text for dark mode
           showAlert("Dark Mode is Enabled" ,"Success")
       }
       else {
        setMode('light');
        document.body.style.backgroundColor='white';  // Light background
        document.body.style.color = 'black';  // Dark text for light mode
         showAlert("Light Mode is Enabled" ,"Success")
       }
   }
  return (
    // React Fragment (<>...</>) allows grouping without extra DOM nodes
    <>
    {/* <Navbar  title= "Textutils" 
            aboutus="About Us" /> */}
    <Navbar  title= "Textutils" 
             mode = {mode} 
             toggleMode= {toggleMode}
             
             aboutus="About Us" />

              <Alert alert ={alert}/>
     <div className={`container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>  {/*Uses Template Literals for string manipulation */}
            { <Textform  showAlert= {showAlert}heading =" Enter the text to analyze" 
                    mode = {mode}
            />}
              {/* <AboutUs/> */}
    </div>
  
    
    </>

  );
}

export default App;