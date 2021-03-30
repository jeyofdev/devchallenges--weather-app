import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setDayTodayAction,
    setLocationCityAction,
    setLocationInfosAction,
} from '../../state/actions/weatherAction';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const { searchCity, location, days } = useSelector(
        (state) => state.weather
    );

    useEffect(() => {
        if (location.city === null) {
            dispatch(setLocationCityAction(searchCity));
        } else if (location.infos === null) {
            dispatch(setLocationInfosAction(location.city));
        }

        if (location.infos !== null && days.today === null) {
            dispatch(setDayTodayAction(location.infos));
        }
    }, [location]);
    return <div className="App">App</div>;
};

export default App;
