import React from 'react'
// import data from './rest-countries-api-with-color-theme-switcher-master/data.json'
import "./Main.css"
import { useState } from 'react'
import Details from './Details'

const Main = ({country, setCountry, darkMode, toggleDarkMode}) => {
  const [details, setDetails] = useState(true)

  const toggleDetails=()=>{
    setDetails(!Details)
  }

  const countriesInfoStyles={
    width: "80%",
    backgroundColor: darkMode? "black":"antiquewhite",
    color: darkMode? "white": "black",
    marginTop: "40px",
    paddingBottom: "10px",
    border: darkMode? "1px solid white":""
  }

  const mainDivStyle={
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
    paddingLeft: "45px",
    backgroundColor: darkMode? "black":""
  }
  
    
  return (
    <div style={{background: "gainsboro"}}>
      <div id='mainDiv' style={mainDivStyle}>
    {/* {console.log(country)} */}

    {
      details?
    country.map((country)=>{
        return <div id='countriesInfo' style={countriesInfoStyles}>
            <img src={country.flag} style={{width:"100%", height:"50%"}} alt=''/>
            <h2>{country.name}</h2>
            <span>Population: {country.population}</span> <br/>
            <span style={{paddingBottom: "0px"}}>Region: {country.region}</span> <br/>
            <span>Capital: {country.capital}</span> <br/>
            <button style={{marginTop:"15px"}} onClick={toggleDetails}>Details</button>
            </div>
    }):<Details country={country} setCountry={setCountry}/>
    }
      </div>
    </div>
  )
}

export default Main