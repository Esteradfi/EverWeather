import axios from "axios";

const API_KEY = 'd1596e92c4fc1dd17cfe88e7a376c9c8';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/',
});

export const forecastAPI = {
    //Получение координат по названию нас. пункта
    getCoordinates(cityName) {
        return instance.get(`geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
            .then(response => {
                return response.data[0];
            });
    },
    //Получение текущей погоды в нас. пункте по координатам
    getCurrentWeather(lat, lon) {
        return instance.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=ru`)
            .then(response => {
                return response.data;
            });
    },
    //Получние прогноза погоды в выбранном нас. пункте на 5 дней с интервалом три часа
    getFutureWeather(lat, lon) {
        return instance.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=ru`)
            .then(response => {
                return response.data.list;
            });
    }
}

let data = {
    "grant_type" : "client_credentials",
    "client_id" : "EteBxekTjObZQ7uYZ16utaKTXHHChE3S",
    "client_secret" : "DJiuBhzqxyQTxRK3xKGbjgWDIMJ9OSAS",
}

axios.post('https://api.edu.cdek.ru/v2/oauth/token', data, {headers: {withCredentials: true ,"Access-Control-Allow-Origin": "*", "Content-type": "application/json",
        "Accept": "application/json"}}).then(res => console.log(res));
