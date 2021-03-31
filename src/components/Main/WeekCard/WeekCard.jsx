import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import generateImage from '../../../helpers/imageHelpers';
import './WeekCard.css';

const WeekCard = ({ day, index }) => {
    const formatDate = () => {
        if (index !== 0) {
            return moment(day.date).format('ddd, DD MMM');
        }

        return 'Tomorrow';
    };

    return (
        <div className="week_day">
            <h2 className="day">{formatDate()}</h2>
            <div
                className={`week_img ${
                    day.weather_state.abbr === 'sn' ||
                    day.weather_state.abbr === 'sl' ||
                    day.weather_state.abbr === 't'
                        ? 'sun'
                        : ''
                }`}
            >
                <img
                    src={generateImage(day.weather_state.abbr)}
                    alt={day.weather_state.name}
                />
            </div>
            <div className="temperature">
                <p className="max">{Math.round(day.temperature.max)}°C</p>
                <p className="min">
                    <span>{Math.round(day.temperature.min)}</span>°C
                </p>
            </div>
        </div>
    );
};

WeekCard.propTypes = {
    day: PropTypes.shape().isRequired,
    index: PropTypes.number.isRequired,
};

export default WeekCard;
