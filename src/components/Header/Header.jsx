import {useDispatch, useSelector} from "react-redux";
import {setSearchName, updateCityName} from "../../redux/weather-reducer";
import styles from "./Header.module.css";

const Header = (props) => {
    const dispatch = useDispatch();

    let newCityName = useSelector(state => state.weather.newCityName);

    //Устанавка нового населённого пункта
    let clickNewCityName = () => {
        dispatch(setSearchName());
    }

    //Изменение значения input
    let onNewCityNameChange = (e) => {
        let cityName = e.target.value;
        dispatch(updateCityName(cityName));
    };

    //Установка нового населённого пункта по нажатию на Enter
    let onKeyDownCityName = (e) => {
        if (e.keyCode === 13 && newCityName !== "") {
            clickNewCityName();
        }
    }

    return (
        <header>
            <div>
                <input type="text"
                       placeholder="Введите название города"
                       onKeyDown={onKeyDownCityName}
                       value={newCityName}
                       onChange={onNewCityNameChange}/>
                <button className={styles.searchButton} type="button" onClick={clickNewCityName}>Найти</button>
            </div>
        </header>
    );
}

export default Header;