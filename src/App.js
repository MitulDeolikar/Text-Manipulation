import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light')//check if dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)

  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary')

    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#333'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
       <Router>
      <Navbar title="TEXT-utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm heading="Enter text to manipulate" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
