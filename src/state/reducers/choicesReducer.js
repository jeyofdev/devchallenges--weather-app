import { SET_CHOICES } from '../actions/actionTypes';

const initialState = ['paris', 'London', 'Barcelona', 'Madrid'];

const choicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOICES:
            return action.payload;
        default:
            return state;
    }
};

export default choicesReducer;
