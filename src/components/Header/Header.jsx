import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSearchName, updateCityName} from "../../redux/weather-reducer";
import styles from "./Header.module.css";

const Header = (props) => {
    const dispatch = useDispatch();

    let newCityName = useSelector(state => state.weather.newCityName);

    //Создаём ref для удаления фокуса с поиска после нажатия enter
    let searchInput = React.createRef();

    //Устанавка нового населённого пункта
    let clickNewCityName = () => {
        if (newCityName !== "") dispatch(setSearchName());
    }

    //Изменение значения input
    let onNewCityNameChange = (e) => {
        let cityName = e.target.value;
        dispatch(updateCityName(cityName));
    };

    //Установка нового населённого пункта по нажатию на Enter
    let onKeyDownCityName = (e) => {
        if (e.keyCode === 13) {
            clickNewCityName();
            searchInput.current.blur();
        }
    }

    return (
        <header>
            <div>
                <input type="text"
                       placeholder="Введите название города"
                       ref={searchInput}
                       onKeyDown={onKeyDownCityName}
                       value={newCityName}
                       onChange={onNewCityNameChange}/>
                <button className={styles.searchButton} type="button" onClick={clickNewCityName}>Найти</button>
            </div>
        </header>
    );
}

export default Header;