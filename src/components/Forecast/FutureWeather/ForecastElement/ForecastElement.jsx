import styles from "./ForecastElement.module.css";

const ForecastElement = (props) => {
    const forecast = props.forecast;
    const description = forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1);
    function getMonthText(month) {
        switch (month) {
            case 0:
                return "Января";
            case 1:
                return "Февраля";
            case 2:
                return "Марта";
            case 3:
                return "Апреля";
            case 4:
                return "Мая";
            case 5:
                return "Июня";
            case 6:
                return "Июля";
            case 7:
                return "Августа";
            case 8:
                return "Сентября";
            case 9:
                return "Октября";
            case 10:
                return "Ноября";
            case 11:
                return "Декабря";
            default:
                return "";
        }
    }

    let date = new Date(forecast.dt_txt);
    let month = getMonthText(date.getMonth());
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes() + '0';

    return (
        <div>
            <div className={styles.mainWeather}>
                <div className={styles.mainWeatherItem}><span>{hour}:{minutes}</span> <span>{day} {month}</span></div>
                <div className={styles.mainWeatherItem}>{Math.round(forecast.main.temp) + "°C"}</div>
                <div className={styles.mainWeatherItem}>{description}</div>
            </div>
        </div>
    );
}

export default ForecastElement;