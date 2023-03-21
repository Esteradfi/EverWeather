import {useEffect} from "react";
import {getCoordnitatesByName} from "../../../redux/current-weather-reducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./CurrentWeather.module.css";
import NotFound from "../../common/NotFound/NotFound";

const CurrentWeather = (props) => {

    const searchCity = useSelector(state => state.currentWeather.searchName);
    const city = useSelector(state => state.currentWeather.name);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoordnitatesByName(searchCity));
    }, [searchCity, dispatch]);

    const isEmpty = useSelector(state => state.currentWeather.isEmpty);
    const currentWeather = useSelector(state => state.currentWeather.currentWeather);

    return <>
        {isEmpty ? <Preloader/> : <div>
            {city === "Oops..." || city === undefined ? <NotFound/> : <div>
                <h1 className={styles.cityName}>{city}</h1>
                <div className={styles.mainWeather}>
                    {Math.round(currentWeather.main.temp) + "°C"}, {currentWeather.weather[0].description}
                </div>
                <div className={styles.otherWeather}>
                    <div className={styles.otherWeatherItem}>
                        Ощущается как
                        <span className={styles.otherWeatherItemSpan}>
                        {" " + Math.round(currentWeather.main.feels_like) + "°C"}
                    </span>
                    </div>
                    <div className={styles.otherWeatherItem}>
                        Скорость ветра
                        <span className={styles.otherWeatherItemSpan}>
                        {" " + Math.round(currentWeather.wind.speed) + " км/ч"}
                    </span>
                    </div>
                    <div className={styles.otherWeatherItem}>
                        Влажность
                        <span className={styles.otherWeatherItemSpan}>
                        {" " + currentWeather.main.humidity + "%"}
                    </span>
                    </div>
                </div>
            </div>
            }
        </div>}
    </>
}

export default CurrentWeather;