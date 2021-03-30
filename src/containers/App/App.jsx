import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Aside/Modal/Modal';
import {
    setDayTodayAction,
    setDayWeekAction,
    setLocationCityAction,
    setLocationInfosAction,
} from '../../state/actions/weatherAction';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const { searchCity, location, isCelsius } = useSelector(
        (state) => state.weather
    );

    useEffect(() => {
        dispatch(setLocationCityAction(searchCity));
    }, [searchCity]);

    useEffect(() => {
        if (location.city === null) {
            dispatch(setLocationCityAction(searchCity));
        } else {
            dispatch(setLocationInfosAction(location.city, isCelsius));
        }
    }, [location.city]);

    useEffect(() => {
        if (location.infos !== null) {
            dispatch(setDayTodayAction(location.infos));
            dispatch(setDayWeekAction(location.infos));
        }
    }, [location.infos]);

    return (
        <div className="App">
            <Aside />
            <Main />
            <Modal />
        </div>
    );
};

export default App;
