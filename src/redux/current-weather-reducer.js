import {forecastAPI} from "../api/api";

const UPDATE_CITY_NAME = "UPDATE_CITY_NAME";
const SET_NEW_CITY_NAME = "ACCEPT_NEW_CITY_NAME";
const SET_SEARCH_NAME = "SET_SEARCH_NAME";
const SET_COORDINATES = "SET_COORDINATES";
const SET_CURRENT_INFO = "SET_CURRENT_INFO";
const NOT_FOUND_NAME = "NOT_FOUND_NAME";

let initialState = {
    name: "Санкт-Петербург",
    searchName: "Санкт-Петербург",
    newCityName: "",
    isEmpty: true,
    currentWeather : {}
};

const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CITY_NAME:
            console.log(state);
            return {
                ...state,
                newCityName: action.newName,
            }
        case SET_SEARCH_NAME:
            let newSearchName = state.newCityName;
            return {
                ...state,
                isEmpty: true,
                searchName: newSearchName,
                newCityName: "",
            }
        case NOT_FOUND_NAME:
            return {
                ...state,
                isEmpty: false,
            }
        case SET_NEW_CITY_NAME:
            let newName = state.newCityName;
            return {
                ...state,
                name: newName,
                newCityName: "",
            }
        case SET_COORDINATES:
            return {
                ...state,
                currentWeather: {
                    ...state.currentWeather,
                    lat: action.lat,
                    lon: action.lon,
                }
            }
        case SET_CURRENT_INFO:
            return {
                ...state,
                isEmpty: false,
                currentWeather: action.info,
            }
        default:
            return state;
    }
}

export const updateCityName = (cityName) => ({type: UPDATE_CITY_NAME, newName: cityName});

export const setSearchName = () => ({type: SET_SEARCH_NAME});

export const setNewCityName = () => ({type: SET_NEW_CITY_NAME});

export const notFoundName = () => ({type: NOT_FOUND_NAME});

export const setCoordinates = (lat, lon) => ({type: SET_COORDINATES, lat, lon});

export const setCurrentInfo = (info) => ({type: SET_CURRENT_INFO, info});

export const getCurrentWeatherByCoordinates = (lat, lon) => {
    return (dispatch) => {
        forecastAPI.getCurrentWeather(lat, lon).then(data => {
            dispatch(setCurrentInfo(data));
        })
    }
}

export const getCoordnitatesByName = (cityName) => {
    return (dispatch) => {
        forecastAPI.getCoordinates(cityName).then(data => {
            if (data === undefined) {
                dispatch(updateCityName("Oops..."));
                dispatch(setNewCityName());
                dispatch(notFoundName());
            } else {
                dispatch(setCoordinates(data.lat, data.lon));
                dispatch(updateCityName(data.local_names.ru));
                dispatch(setNewCityName());
                dispatch(getCurrentWeatherByCoordinates(data.lat, data.lon));
            }
        });
    }
}

export default currentWeatherReducer;