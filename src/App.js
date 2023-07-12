
// import { useState } from 'react';
// import { Alert } from 'bootstrap';
import './App.css';
// import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'
// import {BrowserRouter as Router , Route , Link ,Routes } from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light');  //for dark mode

  const [greenMode , setGreenMode] = useState('light')

  const [alert , setAlert] = useState(null);

const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1600);
    }




const toggleMode = () =>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = "#2e2656"
    showAlert("Dark mode has been enabled ","success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = "white"
    showAlert("Dark mode has been disabled ","success")
  }
}


const toggleModeGreen=()=>{
  if(greenMode==='light'){
        setGreenMode('dark Green');
        document.body.style.backgroundColor = 'darkGreen';
        showAlert ("Dark green mode has been enabled","success");
  }else{
        setGreenMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert ("Light mode has been enabled","success");
  }
}





  return (
    <>
    
{/* <Router> */}
<Navbar title= "TextUtils" about= "AboutTextUtils" mode={mode} toggleMode={toggleMode} greenMode={greenMode} toggleModeGreen={toggleModeGreen} />


<Alert alert={alert}/>

  
    {/* <Routes> */}
          {/* <Route path="/about" element={< About />}> */}
            {/* <About /> */}
          
          
          {/* </Route> */}
          {/* <Route path="/" element= {<TextForm showAlert={showAlert} heading = "Enter Your Text Here" mode={mode} />}> */}
            
          {/* </Route> */}
        {/* </Routes> */}

       < TextForm showAlert={showAlert} heading = "Enter Your Text Here" mode={mode} />
      
{/* </Router> */}

              
            {/* <About/> */}


    </>
    
  );
}

export default App;
