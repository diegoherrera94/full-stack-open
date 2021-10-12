import Country from "./Country";
import CountryDetail from "./CountryDetail";

const Countries = ({countries, handleClick}) => {
    if(countries.length === 1){
      return <CountryDetail country={countries[0]} />
    }
  
    if(countries.length > 10){
      return "Too many matches, specify another filter";
    }
  
    return(
      countries.map(country => <Country key={country.name.common} name={country.name.common} handleClick={handleClick}></Country>)
    );
}

export default Countries;