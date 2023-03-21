import axios from "axios";

const API_KEY = 'd1596e92c4fc1dd17cfe88e7a376c9c8';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/',
});

export const forecastAPI = {
    getCoordinates(cityName) {
        return instance.get(`geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
            .then(response => {
                console.log(response.data[0]);
                return response.data[0];
            });
    },
    getCurrentWeather(lat, lon) {
        return instance.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=ru`)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },
    getFutureWeather(lat, lon) {
        return instance.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=ru`)
            .then(response => {
                console.log(response.data.list);
                return response.data.list;
            });
    }
}