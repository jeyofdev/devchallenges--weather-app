import React from 'react';
import { useSelector } from 'react-redux';
import { MdNearMe } from 'react-icons/md';
import ProgressBar from '../../Ui/ProgressBar/ProgressBar';
import './Highlights.css';

const Highlights = () => {
    const { days } = useSelector((state) => state.weather);

    return (
        <div className="weather_today_hightlights">
            <h2>Today’s Hightlights</h2>
            <div className="infos">
                <div className="info_item">
                    <h4>Wind status</h4>
                    <p className="data">
                        {days.today.wind.speed}
                        <span>mph</span>
                    </p>
                    <div className="option">
                        <MdNearMe className="icon" />
                        WSW
                    </div>
                </div>

                <div className="info_item">
                    <h4>Humidity</h4>
                    <p className="data">
                        {days.today.humidity}
                        <span>%</span>
                    </p>
                    <div className="option">
                        <ProgressBar completed={80} />
                    </div>
                </div>

                <div className="info_item">
                    <h4>Visibility</h4>
                    <p className="data">
                        {days.today.visibility}
                        <span>miles</span>
                    </p>
                </div>

                <div className="info_item">
                    <h4>Air Pressure</h4>
                    <p className="data">
                        {days.today.air_pressure}
                        <span>mb</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
