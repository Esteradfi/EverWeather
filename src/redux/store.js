import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import futureWeatherReducer from "./future-weather-reducer";
import currentWeatherReducer from "./current-weather-reducer";
import cityNameReducer from "./city-name-reducer";

let reducers = combineReducers({
    futureWeather: futureWeatherReducer,
    currentWeather: currentWeatherReducer,
    cityName: cityNameReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;