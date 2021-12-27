import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a3c5344f5d1ff44b3158242479ca6901";
 
export const getData = async (city, country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}