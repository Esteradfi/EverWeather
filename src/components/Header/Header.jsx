import {useDispatch, useSelector} from "react-redux";
import {setSearchName, updateCityName} from "../../redux/current-weather-reducer";
import {useEffect} from "react";
import {forecastAPI} from "../../api/api";
import styles from "./Header.module.css";

const Header = (props) => {
/*    const city = useSelector(state => state.currentWeather.name);*/
    const dispatch = useDispatch();

    let newCityName = useSelector(state => state.currentWeather.newCityName);

    let clickNewCityName = () => {
        dispatch(setSearchName());

    }
    let onNewCityNameChange = (e) => {
        let cityName = e.target.value;
        dispatch(updateCityName(cityName));
    };

    //Это просто тестовые запросы, просто чтобы посмотреть ответы. Не забудь их потом удалить, будущий я

    //Должен отметить, что надо будет сделать поиск погоды не через ограниченный список городов, как я
    //изначально хотел, а через input, так как OWA хорошо находит города

  /*  useEffect(() => {
        forecastAPI.getFutureWeather(60, 30);
    })*/

    return (
        <header>
            <div>
                <input type="text"
                       placeholder="Введите название города"
                       value={newCityName}
                       onChange={onNewCityNameChange}/>
                <button className={styles.searchButton} type="button" onClick={clickNewCityName}>Найти</button>
            </div>
        </header>
    );
}

export default Header;