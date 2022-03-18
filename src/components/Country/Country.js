import React from 'react';
import './Country.css'
// import 'bootstrap'

const Country = (props) => {
    // console.log(props.country);
    const {name, population, capital, area, flags}=props.country;
    return (
        <div className='bg-info'>
            <h2>Country Name:- {name.common}</h2>
            <img src={flags.png} alt="Country Flags" />
            <h4>Population:- {population}</h4>
            <h4>Capital Name:- {capital}</h4>
            <h4>Total Area:- {area}</h4>
        </div>
    );
};

export default Country;