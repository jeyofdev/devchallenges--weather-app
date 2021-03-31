import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { MdPlace } from 'react-icons/md';
import generateImage from '../../helpers/imageHelpers';
import CloudBackground from '../../assets/img/Cloud-background.png';
import Header from '../../components/Aside/Header/Header';
import './Aside.css';

const Aside = () => {
    const { location, days, isCelsius } = useSelector((state) => state.weather);
    const { isShow } = useSelector((state) => state.modal);

    return (
        <div className="today_weather">
            <div className="container">
                {!isShow && days.today && (
                    <>
                        <Header />
                        <div className="today_img">
                            <div>
                                <img
                                    className="today_bg_cloud"
                                    src={CloudBackground}
                                    alt=""
                                />
                                <img
                                    className="today_weather_img"
                                    src={generateImage(
                                        days.today.weather_state.abbr
                                    )}
                                    alt="weather today"
                                />
                            </div>
                        </div>

                        <div className="today_content">
                            <p className="content_temperature">
                                {Math.round(days.today.temperature.temp)}
                                <span>°{isCelsius ? 'C' : 'F'}</span>
                            </p>
                            <p className="content_type">
                                {days.today.weather_state.name}
                            </p>
                            <p className="content_day">
                                Today<span>.</span>
                                {moment().format('ddd, DD MMM')}
                            </p>
                            <p className="content_localisation">
                                <MdPlace className="icon" />
                                <span>{location.city.title}</span>
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Aside;
