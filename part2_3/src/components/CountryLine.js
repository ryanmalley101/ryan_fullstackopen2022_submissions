
function Country (country) {

    const getCountryLanguages = (country) => {
        const languages = Object.values(country.languages)
        if (Array.isArray(languages)) {
            console.log(languages)
            return languages.map(l => <li key={l}>{l}</li>)
        }
        else {
            const language = languages[0]
            return <li key={language}>{language}</li>
        }
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <p><b>languages:</b></p>
            <ul>
                {getCountryLanguages(country)}
            </ul>
            <img src={country.flags.png} />
        </div>
    )
}

export default Country