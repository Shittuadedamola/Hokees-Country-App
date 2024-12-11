import React from 'react'
import "./Details.css"

const Details = ({country, setCountry}) => {
  return (
    <div>
      <button onClick={()=>{window.location.reload()}}>Back</button>
        {
            country.map((country)=>{
                return <div id='detailsCountries'>
                    <img src={country.flag} style={{width:"100%", height:"50%"}} alt=''/>
                    <h3>{country.name}</h3>
                    <span>Native name: {country.nativeName}</span> <br/>
                    <span>Population: {country.population}</span> <br/>
                    <span style={{paddingBottom: "0px"}}>Region: {country.region}</span> <br/>
                    <span style={{paddingBottom: "0px"}}>Sub-Region: {country.subregion}</span> <br/>
                    <span>Capital: {country.capital}</span> <br/>
                    {/* <button style={{marginTop:"15px"}} >Details</button> */}
                    </div>
            })
        }
    </div>
  )
}

export default Details