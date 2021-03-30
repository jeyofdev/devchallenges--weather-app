import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setDayTodayAction,
    setDayWeekAction,
    setLocationCityAction,
    setLocationInfosAction,
} from '../../state/actions/weatherAction';
import Today from '../../components/Today/Today';
import './App.css';
import WeekCardList from '../WeekCardList/WeekCardList';

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
            dispatch(setDayWeekAction(location.infos));
        }
    }, [location]);
    return (
        <div className="App">
            <Today />

            <div className="descriptif_weather">
                <div className="container">
                    <WeekCardList />
                </div>
            </div>
        </div>
    );
};

export default App;
