import React from 'react'
import '../Country/Country.css'

export default function Country({country}) {
  console.log(country.area)
  return (
    <div className='country'>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Country Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area} {country.area.area > 300000?  "Big Country" : "Small Country"}</p>
    </div>
  )
}