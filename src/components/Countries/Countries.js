import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        // .then(data => console.log(data))
    }, [])
    return (
      <div>
        <h2>Total Countries of the World:- {countries.length} </h2>
        <div className="countries-container">
          {countries.map((country) => (
            <Country
              key={country.cca3}
              // name={country.name.common}
              // population={country.population}
              // capital={country.capital}
              // area={country.area}
              country={country}
            ></Country>
          ))}
        </div>
      </div>
    );
};

export default Countries;