import {useDispatch, useSelector} from "react-redux";
import {setSearchName, updateCityName} from "../../redux/weather-reducer";
import styles from "./Header.module.css";

const Header = (props) => {
    const dispatch = useDispatch();

    let newCityName = useSelector(state => state.weather.newCityName);

    let clickNewCityName = () => {
        dispatch(setSearchName());

    }
    let onNewCityNameChange = (e) => {
        let cityName = e.target.value;
        dispatch(updateCityName(cityName));
    };

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