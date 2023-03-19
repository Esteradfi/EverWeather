import {useEffect} from "react";
import {forecastAPI} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {setNewCityName, updateCityName} from "../../redux/city-name-reducer";

const Header = (props) => {
    const city = useSelector(state => state.cityName.name);
    const dispatch = useDispatch();

    let newCityName = useSelector(state => state.cityName.newCityName);

    let clickNewCityName = () => {
        dispatch(setNewCityName());
    }
    let onNewCityNameChange = (e) => {
        let cityName = e.target.value;
        dispatch(updateCityName(cityName));
    };

    //Это просто тестовые запросы, просто чтобы посмотреть ответы. Не забудь их потом удалить, будущий я

    //Должен отметить, что надо будет сделать поиск погоды не через ограниченный список городов, как я
    //изначально хотел, а через input, так как OWA хорошо находит города
/*    useEffect(() => {
        forecastAPI.getCoordinates('москва');
    })

    useEffect(() => {
        forecastAPI.getCurrentWeather(60, 30);
    })

    useEffect(() => {
        forecastAPI.getFutureWeather(60, 30);
    })*/

    return (
        <div>
            <div>
                <input type="text"
                       placeholder="Введите название города"
                       value={newCityName}
                       onChange={onNewCityNameChange}/>
                <button type="button" onClick={clickNewCityName}>Найти</button>
            </div>
            <h2>{city}</h2>
        </div>
    );
}

export default Header;