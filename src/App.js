// import logo from './logo.svg';
import React ,{useState} from 'react';

// import './Apps.css';
        
import Textarea from "./components/textarea.js";
import Navbar from "./components/navbar.js";
import About from './components/about';
import Alert from './components/Alert';
// This is a React Router v6 app
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

  
const name="meenu";
function App() {
  const [mode,setmode]=useState("dark");
  const [alert,setalert]=useState(null);
  const showalert=(type,msg)=>{
    setalert({
      type:type,
      msg:msg
    })
    document.title=msg;
    setTimeout(()=>{
      setalert(null);
      document.title="textutils"
    },2000)
  }
  const togglerfun=()=>{
    if(mode=="light"){
      setmode("dark");
      document.body.style.color="black";
      document.body.style.backgroundColor="white";
      showalert("warning","light mode enabled")

      // setTimeout(()=>{
      //   setalert(null);
      // },2000)
   }
    else{

      setmode("light");
      document.body.style.color="white";
      document.body.style.backgroundColor="#2d3872";
     showalert("success","dark mode enabled")
    //  setTimeout(()=>{
    //   setalert(null);
    // },2000)
    }
  }
  
  
  
  return (
   
    // <BrowserRouter>
      <div>
    <Navbar about="hey"  mode={mode} toggler={togglerfun}/>
    <Alert alert={alert}/>
    {/* <Routes> */}
    {/* <Route exact path="/" element={ */}
    <Textarea alert={alert} showalert={showalert}/>
    {/* }/> */}
  
   {/* <Route exact path="/about" element={  */}
   <About />
   {/* }/> */}
  
          
    {/* </Routes> */}
   
 
 </div>
  //  </BrowserRouter>
  );
}

export default App;
