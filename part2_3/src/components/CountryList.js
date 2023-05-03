import {useEffect, useState} from "react";
import CountryDetail from "./CountryDetail";

const CountryList = ({countryList}) => {
    const [visibleCountry, setVisibleCountry] = useState(null)

    const handleShowButtonClick = (country) => {
        setVisibleCountry(country)
    };

    useEffect(() => {
        if (countryList && countryList.length === 1) {
            setVisibleCountry(countryList[0])
        } else {
            setVisibleCountry(null)
        }
    }, [countryList])

    if (countryList === null) {
        console.log("Too many matches from the CountryList components")
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
    else if (countryList.length === 1) {
        console.log(`Display ${countryList.length} countries ${countryList}`)
        const country = countryList[0];
        console.log('Creating one country')
        console.log(country)
        return <CountryDetail country={country} visible={true}/>
    }
    else if (countryList.length <= 10) {
        console.log(`Display ${countryList.length} countries ${countryList}`)
        const countries = countryList.map((country) => (
            <div key={country.name.common}>
                <ul >
                    <li>{country.name.common}</li>
                    <button onClick={() => handleShowButtonClick(country)}>show</button>
                </ul>
                <br></br>
                {visibleCountry && visibleCountry.name.common === country.name.common ? <CountryDetail country={country} visible={true}/> : null}
            </div>
        ));
        return <div>{countries}</div>
    }
};

export default CountryList;
