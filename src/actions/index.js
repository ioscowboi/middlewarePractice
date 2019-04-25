// for ajax requests:
import axios from 'axios';

const API_KEY = 'f86c6461ea8ee41c61e58fd3da0a128b';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;
export const FETCH_WEATHER = "FETCH_WEATHER";

// action creator
export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // understand how reduxpromise middleware works:
    //      this action creator has a 'request' currently a promise
    //      but, after the request is assigned to payload (reduxpromise middleware looks for a payload property with a type of promise)
    //      the action is paused until the payload response is received
    //      and reduxpromise creates a new payload property with a response instead of a promise:
    //      console.log("Request:", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}