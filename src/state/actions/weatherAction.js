import axios from 'axios';
import {
    SET_DAYS_WEEK,
    SET_DAY_TODAY,
    SET_LOCATION_CITY,
    SET_LOCATION_INFOS,
    SET_SEARCH_CITY,
} from './actionTypes';

const corsApiUrl = 'https://cors-anywhere-venky.herokuapp.com/';

export const setSearchCityAction = (city) => {
    return (dispatch) =>
        dispatch({
            type: SET_SEARCH_CITY,
            payload: city,
        });
};

export const setLocationCityAction = (searchCity) => {
    const url = `https://www.metaweather.com/api/location/search/?query=${searchCity}`;

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

export const setLocationInfosAction = (locationCity) => {
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
                        max: day.max_temp,
                        min: day.min_temp,
                        temp: day.the_temp,
                    },
                    visibility: day.visibility,
                    weather_state: {
                        abbr: day.weather_state_abbr,
                        name: day.weather_state_name,
                    },
                    wind: {
                        direction: day.wind_direction,
                        speed: day.wind_speed,
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
