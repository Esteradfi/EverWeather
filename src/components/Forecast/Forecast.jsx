import CurrentWeather from "./CurrentWeather/CurrentWeather";
import FutureWeather from "./FutureWeather/FutureWeather";
import Logo from "../common/Logo/Logo";

const Forecast = (props) => {
    return (
        <div>
            <Logo/>
            <CurrentWeather />
            <FutureWeather />
        </div>
    );
}

export default Forecast;