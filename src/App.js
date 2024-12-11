
import './App.css';
import Main from './Main';
import Nav from './Nav';
import {React, useState} from 'react';
import data from './rest-countries-api-with-color-theme-switcher-master/data.json'



function App() {
  const [country, setCountry] = useState(data)

  const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }
  return (
    <div className="App">
      <Nav country={country} setCountry={setCountry} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main country={country} setCountry={setCountry} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;
