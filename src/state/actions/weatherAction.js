import SET_SEARCH_CITY from './actionTypes';

const setSearchCity = (city) => {
    return (dispatch) =>
        dispatch({
            type: SET_SEARCH_CITY,
            payload: city,
        });
};

export default setSearchCity;
