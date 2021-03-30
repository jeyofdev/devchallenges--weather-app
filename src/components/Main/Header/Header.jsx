import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setIsCelsiusAction,
    setLocationInfosAction,
} from '../../../state/actions/weatherAction';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const { location, isCelsius } = useSelector((state) => state.weather);

    const handleClick = () => {
        dispatch(setIsCelsiusAction());
    };

    useEffect(() => {
        if (location.city !== null) {
            dispatch(setLocationInfosAction(location.city, isCelsius));
        }
    }, [isCelsius]);

    return (
        <div className="weather_header">
            <button type="button" onClick={handleClick} disabled={isCelsius}>
                °C
            </button>
            <button type="button" onClick={handleClick} disabled={!isCelsius}>
                °F
            </button>
        </div>
    );
};

export default Header;
