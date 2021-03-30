import {
    SET_LOCATION_CITY,
    SET_LOCATION_INFOS,
    SET_SEARCH_CITY,
    SET_DAY_TODAY,
    SET_DAYS_WEEK,
    SET_IS_CELSIUS,
} from '../actions/actionTypes';

const initialState = {
    searchCity: 'bordeaux',
    location: {
        city: null,
        infos: null,
    },
    days: {
        today: null,
        week: null,
    },
    isCelsius: true,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_CITY:
            return { ...state, searchCity: action.payload };
        case SET_LOCATION_CITY:
            return {
                ...state,
                location: { ...state.location, city: action.payload },
            };
        case SET_LOCATION_INFOS:
            return {
                ...state,
                location: { ...state.location, infos: action.payload },
            };
        case SET_DAY_TODAY:
            return {
                ...state,
                days: { ...state.days, today: action.payload },
            };
        case SET_DAYS_WEEK:
            return {
                ...state,
                days: { ...state.days, week: action.payload },
            };
        case SET_IS_CELSIUS:
            return {
                ...state,
                isCelsius: !state.isCelsius,
            };
        default:
            return state;
    }
};

export default weatherReducer;
