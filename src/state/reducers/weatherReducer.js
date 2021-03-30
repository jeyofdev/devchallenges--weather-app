import SET_SEARCH_CITY from '../actions/actionTypes';

const initialState = {
    searchCity: 'bordeaux',
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_CITY:
            return { ...state, searchCity: action.payload };

        default:
            return state;
    }
};

export default weatherReducer;
