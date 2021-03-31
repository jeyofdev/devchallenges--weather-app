import axios from 'axios';
import {
    SET_DAYS_WEEK,
    SET_DAY_TODAY,
    SET_IS_CELSIUS,
    SET_LOCATION_CITY,
    SET_LOCATION_INFOS,
    SET_SEARCH_CITY,
} from './actionTypes';
import convertCelciusToFahrenheit from '../../helpers/calculHelpers';

export const corsApiUrl = 'https://cors-anywhere-venky.herokuapp.com/';

export const setSearchCityAction = (city) => {
    return (dispatch) =>
        dispatch({
            type: SET_SEARCH_CITY,
            payload: city,
        });
};

export const setSearchCityByGeolocationAction = (latitude, longitude) => {
    return (dispatch) =>
        dispatch({
            type: SET_SEARCH_CITY,
            payload: { latitude, longitude },
        });
};

export const setLocationCityAction = (searchCity) => {
    const url =
        typeof searchCity === 'string'
            ? `https://www.metaweather.com/api/location/search/?query=${searchCity}`
            : `https://www.metaweather.com/api/location/search/?lattlong=${searchCity.latitude},${searchCity.longitude}`;

    return (dispatch) =>
        axios
            .get(`${corsApiUrl}${url}`)
            .then((response) => response.data[0])
            .then((data) =>
                dispatch({
                    type: SET_LOCATION_CITY,
                    payload: data,
                })
            );
};

export const setLocationInfosAction = (locationCity, isCelsius) => {
    const url = `${corsApiUrl}https://www.metaweather.com/api/location/${locationCity.woeid}/`;

    return (dispatch) =>
        axios
            .get(url)
            .then((response) => response.data)
            .then((data) => {
                const days = data.consolidated_weather.map((day) => ({
                    air_pressure: day.air_pressure,
                    date: day.applicable_date,

                    humidity: day.humidity,
                    id: day.id,
                    temperature: {
                        max: isCelsius
                            ? day.max_temp
                            : convertCelciusToFahrenheit(day.max_temp),
                        min: isCelsius
                            ? day.min_temp
                            : convertCelciusToFahrenheit(day.min_temp),
                        temp: isCelsius
                            ? day.the_temp
                            : convertCelciusToFahrenheit(day.the_temp),
                    },
                    visibility: day.visibility.toFixed(1),
                    weather_state: {
                        abbr: day.weather_state_abbr,
                        name: day.weather_state_name,
                    },
                    wind: {
                        direction: day.wind_direction,
                        speed: Math.round(day.wind_speed),
                    },
                }));

                const formatDatas = {
                    days,
                    timezone: data.timezone,
                };

                dispatch({
                    type: SET_LOCATION_INFOS,
                    payload: formatDatas,
                });
            });
};

export const setDayTodayAction = (locationInfos) => {
    const todayInfos = locationInfos.days.filter((day, index) => index === 0);

    return (dispatch) =>
        dispatch({
            type: SET_DAY_TODAY,
            payload: todayInfos[0],
        });
};

export const setDayWeekAction = (locationInfos) => {
    const weekInfos = locationInfos.days.filter((day, index) => index !== 0);

    return (dispatch) =>
        dispatch({
            type: SET_DAYS_WEEK,
            payload: weekInfos,
        });
};

export const setIsCelsiusAction = () => {
    return (dispatch) =>
        dispatch({
            type: SET_IS_CELSIUS,
        });
};
