//import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#00264d";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabled","success");
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} /> 
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter" mode={mode}/>} />
        <Route exact path="/About" element={<About  mode={mode}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
