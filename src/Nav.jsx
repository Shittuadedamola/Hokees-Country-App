import React from 'react'
import "./Nav.css"
import data from './rest-countries-api-with-color-theme-switcher-master/data.json'
// import magnifying-glass-solid.svg from "./images"
import { useState } from 'react'

const Nav = ({country, setCountry, darkMode, toggleDarkMode}) => {
    const [search, setSearch] = useState("")
    console.log(country)

    const searchCountries =(event)=>{
        setSearch(event.target.value)
        console.log(event.target.value)

        const searchCountries = data.filter((eachData)=>{
          const { name } = eachData   // i destructured here
          return name.toLowerCase().includes(search.toLowerCase())
        })
        console.log(searchCountries)
        setCountry(searchCountries)
      }

    let filterRegion =(event)=>{
        const selectedValue = event.target.value
        console.log({selectedValue})
        let allFilter = data.filter((eachCountry)=>{
            return eachCountry.region === selectedValue
        })
        console.log(allFilter)
        setCountry(allFilter)
        // data.map((allFilter)=()=>{
            
        // })
        // setData(allFilter)
    }

    // const [darkMode, setDarkMode] = useState(false)
    // const toggleDarkMode = ()=>{
    //     setDarkMode(!darkMode)
    // }
    const appStyles = {
        backgroundColor: darkMode?
        "rgb(15, 15, 15)":"antiquewhite",
        color: darkMode?
        "white":"black",
        display:"flex",
        justifyContent:"space-around",
        paddingLeft:"30px",
        paddingRight:"30px",
        // width:"100%"
    }
  return (
    <div>
        <nav style={appStyles}>
            <div>
                <img src='magnifying-glass-solid.svg' alt=''/>
            <input onChange={(event)=>{searchCountries(event)}} placeholder='Search for a country...' />
            </div>
            <select id='mySelect' onChange={(event)=>filterRegion(event)}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Antarctic Ocean">Antarctic Ocean</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Polar">Polar</option>
            </select>
            <div style={{display:"flex", alignItems:"center"}}>
                <div style={{border:"1px solid black", width:"20px", height:"20px", backgroundColor: darkMode?"white":"black",}} onClick={toggleDarkMode}><img alt=''/></div>
                <div>{darkMode? "Light mode":"Dark mode"}</div>
            </div>
        </nav>
    </div>
  )
}

export default Nav