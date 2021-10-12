import { useState, useEffect } from "react";
import axios from 'axios';
import Weather from "./Weather";

const CountryDetail = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState({});
  
    useEffect(() => {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name.common}`)
        .then(response => {
          setWeather(response.data);
        });
    }, [api_key, country.name.common]);
  
    return(
        <>
          <h2>{country.name.common}</h2>
          <div>Capital {country.capital[0]}</div>
          <div>Population {country.population}</div>
          <h3>languages</h3>
          <ul>
          {
            Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)
          }
          </ul>
          <img src={country.flags.png} alt='flag' />
          <Weather weather={weather} />
        </>
    );
}

export default CountryDetail;