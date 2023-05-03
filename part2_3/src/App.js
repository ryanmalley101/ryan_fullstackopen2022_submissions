import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import countries from "./services/countries";
import CountryList from "./components/CountryList";


function App() {
    const [filterValue, setFilterValue] = useState('')
    const [countryList, setCountryList] = useState(<p>'Too many matches, specify another filter'</p>)
    const [visibleCountry, setVisibleCountry] = useState('Country-Hidden');


  const handleFilterChange = (event) => {
    console.log(`Country Filter Changed ${event.target.value}`)
    setFilterValue(event.target.value)
      const allCountries = countries.getAll()
          .then(results => {
              const selectedCountries = results.filter(country => country.name.common.includes(event.target.value))
              console.log(selectedCountries)
              if (selectedCountries.length <= 10) {
                  console.log("less than 10 countries found in filter")
                  setCountryList(<CountryList countryList={selectedCountries} setVisibleCountry={setVisibleCountry}/>)
                  console.log(countryList)
              }
              else {
                  console.log(`More than 10 countries found in filter`)
                  setCountryList(<CountryList countryList={null}/>)
                  console.log(countryList)
              }
          })
  }

  return (
    <div>
        <p>find countries <input input={filterValue} onChange={handleFilterChange}/></p>
        <div>{countryList}</div>
    </div>
  );
}

export default App;
