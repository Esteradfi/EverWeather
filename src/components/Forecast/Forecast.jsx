import CurrentWeather from "./CurrentWeather/CurrentWeather";
import FutureWeather from "./FutureWeather/FutureWeather";

const Forecast = (props) => {
    return (
        <div>
            <CurrentWeather />
            <FutureWeather />
        </div>
    );
}

export default Forecast;