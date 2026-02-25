import React, { useState } from "react";
import { use } from "react";
import Country from "../Country/Country";
import "../Countries/Countries.css";

export default function Countries({ countriesPromise }) {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("handle Visited Countries", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);
  return (
    <div>
      <h1>All Country</h1>
      <h3>Country length: {countries.length}</h3>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ul>
        {visitedCountries.map((visited) => (
          <li key={visited.cca3.cca3}>{visited.name.common}</li>
        ))}
      </ul>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
}
