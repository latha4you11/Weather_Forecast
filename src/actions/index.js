import axios from 'axios';

const API_KEY = '635e9f7bb3f132fec3f741a2248a528a';
//The website to get the weather api for 5 days is https://openweathermap.org/forecast5
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;//replace 'us' with any other country code to change the country.
    const request = axios.get(url);

    console.log('Request', request);

    return {
        type: FETCH_WEATHER,
        payload: request //the redux-promise middleware resolves this promise and sends only the output data required to the reducer as payload.
    };
}