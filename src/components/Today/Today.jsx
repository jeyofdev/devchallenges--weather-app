import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { MdPlace } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import generateImage from '../../helpers/imageHelpers';
import CloudBackground from '../../assets/img/Cloud-background.png';
import './Today.css';

const Today = () => {
    const { location, days } = useSelector((state) => state.weather);

    return (
        <div className="today_weather">
            <div className="container">
                {days.today ? (
                    <>
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
                                <span>°C</span>
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
                ) : (
                    <div className="loading">
                        <Loader
                            type="TailSpin"
                            color="var(--color-light)"
                            height={100}
                            width={100}
                            timeout={10000}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Today;
