import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import modalReducer from './modalReducer';

const rootReducers = combineReducers({
    weather: weatherReducer,
    modal: modalReducer,
});

export default rootReducers;
