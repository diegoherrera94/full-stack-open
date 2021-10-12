import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  const handleFilter = (value) => {
    setFilter(value);
  }

  const countriesToShow = filter !== '' 
    ? countries.filter(country => country.name.common.toUpperCase().indexOf(filter.toUpperCase()) > -1)
    : [];

  return (
    <>
      <div>
        find countries <input value={filter} onChange={(e) => handleFilter(e.target.value)} />
      </div>
      <Countries countries={countriesToShow} handleClick={handleFilter} />
    </>
  );
}

export default App;
