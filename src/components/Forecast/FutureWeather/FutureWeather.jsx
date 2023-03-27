import {useSelector} from "react-redux";
import ForecastElement from "./ForecastElement/ForecastElement";
import styles from "./FutureWeather.module.css";

const FutureWeather = (props) => {

    const forecast = useSelector(state => state.weather.forecastWeather);
    const isEmpty = useSelector(state => state.weather.isEmpty);
    const city = useSelector(state => state.weather.name);

    //Вывод прогноза погоды с интервалом три часа
    let forecastElements = forecast.map(el => <ForecastElement key={el.dt} forecast={el}/>);

    return (
        <>
            {isEmpty || city === "Oops..." || city === undefined ? <div></div> : <div className={styles.futureWeather}>
                <h2 className={styles.forecastTitle}>Прогноз погоды на 5 дней</h2>
                <div>
                    {forecastElements}
                </div>
            </div>}

        </>
    );
}

export default FutureWeather;