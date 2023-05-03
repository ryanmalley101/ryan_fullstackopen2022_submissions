import { useEffect, useState } from "react";

const CountryDetail = ({ country, visible }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}&q=${country.capital}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setWeather(data);
            })
            .catch((error) => console.log(error));
    }, [country]);

    const getCountryLanguages = (country) => {
        const languages = Object.values(country.languages);
        if (Array.isArray(languages) && languages.length > 1) {
            return <div>{languages.map((l) => <li key={l}>{l}</li>)}</div>;
        } else {
            const language = languages[0];
            return <li key={language}>{language}</li>;
        }
    };

    let className = "";
    if (visible) {
        className = "Country-Visible";
    } else {
        className = "Country-Hidden";
    }
    return (
        <div className={className}>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <p>
                <b>languages:</b>
            </p>
            <ul>{getCountryLanguages(country)}</ul>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            {weather && (
                <>
                    <h1>Weather in ${country.capital}</h1>
                    <p>
                        <b>Temperature:</b> {Math.round(weather.main.temp - 273.15)}°C
                    </p>
                    <p>
                        <b>Wind:</b> {weather.wind.speed} m/s, {weather.wind.deg} degrees
                    </p>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                        alt={weather.weather[0].description}
                    />
                    <p>
                        <b>Description:</b> {weather.weather[0].description}
                    </p>
                </>
            )}
            {!weather && <p>Loading weather information...</p>}
        </div>
    );
};

export default CountryDetail;
