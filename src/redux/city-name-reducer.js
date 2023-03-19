const UPDATE_CITY_NAME = "UPDATE_CITY_NAME";
const SET_NEW_CITY_NAME = "ACCEPT_NEW_CITY_NAME";

let initialState = {
    name: "Saint Petersburg",
    newCityName: "",
};

const cityNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CITY_NAME:
            console.log(state)
            return {
                ...state,
                newCityName: action.newName,
        }
        case SET_NEW_CITY_NAME:
            let newName = state.newCityName;
            console.log(state);
            return {
                ...state,
                name: newName,
                newCityName: "",
            }
        default:
            return state;
    }
}

export const updateCityName = (cityName) => ({type: UPDATE_CITY_NAME, newName: cityName});

export const setNewCityName = () => ({type: SET_NEW_CITY_NAME});

export default cityNameReducer;