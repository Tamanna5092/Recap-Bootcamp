import React from "react";
import { use } from "react";
import Country from "../Country/Country";
import '../Countries/Countries.css'

export default function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>All Country</h1>
      <h3>Country length: {countries.length}</h3>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
}
