import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setDayTodayAction,
    setDayWeekAction,
    setLocationCityAction,
    setLocationInfosAction,
} from '../../state/actions/weatherAction';
import Today from '../../components/Today/Today';
import Main from '../Main/Main';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const { searchCity, location, isCelsius } = useSelector(
        (state) => state.weather
    );

    useEffect(() => {
        if (location.city === null) {
            dispatch(setLocationCityAction(searchCity));
        } else if (location.infos === null) {
            dispatch(setLocationInfosAction(location.city, isCelsius));
        }

        if (location.infos !== null) {
            dispatch(setDayTodayAction(location.infos));
            dispatch(setDayWeekAction(location.infos));
        }
    }, [location, location.infos]);

    return (
        <div className="App">
            <Today />
            <Main />
        </div>
    );
};

export default App;
