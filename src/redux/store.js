import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weather-reducer";

let reducers = combineReducers({
    weather: weatherReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;

