import axios from 'axios'

const restcountryUrl = 'https://restcountries.com/v3.1/all'
const weatherApiKey = process.env.REACT_APP_API_KEY
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${weatherApiKey}`

const getAll = () => {
    const request = axios.get(restcountryUrl)
    return request.then(response => response.data)
}

const getWeather = (country) => {
    const [lat, lng] = country.latlng
    // const lat = latlng[0]
    // const lng = latlng[1]
    console.log(`${weatherApiUrl}&lat=${lat}&lon=${lng}`)
    const request = axios.get(`${weatherApiUrl}&lat=${lat}&lon=${lng}`)
    return request.then(response => response.data)
}

export default {
    getAll,
    getWeather
}