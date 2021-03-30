import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { MdPlace } from 'react-icons/md';
import generateImage from '../../helpers/imageHelpers';
import CloudBackground from '../../assets/img/Cloud-background.png';
import Loading from '../../components/Ui/Loader/Loading';
import Header from '../../components/Aside/Header/Header';
import './Aside.css';

const Aside = () => {
    const { location, days } = useSelector((state) => state.weather);

    return (
        <div className="today_weather">
            <div className="container">
                <Header />
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
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default Aside;
