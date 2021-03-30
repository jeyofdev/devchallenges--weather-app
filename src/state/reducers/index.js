import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import modalReducer from './modalReducer';
import choicesReducer from './choicesReducer';

const rootReducers = combineReducers({
    weather: weatherReducer,
    modal: modalReducer,
    choices: choicesReducer,
});

export default rootReducers;
