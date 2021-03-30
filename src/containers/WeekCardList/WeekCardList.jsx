import React from 'react';
import { useSelector } from 'react-redux';
import WeekCard from '../../components/Week/WeekCard/WeekCard';
import './WeekCardList.css';

const WeekCardList = () => {
    const { week } = useSelector((state) => state.weather.days);

    return (
        <>
            {week && (
                <div className="weather_week">
                    {week.map((day, index) => (
                        <WeekCard key={day.id} index={index} day={day} />
                    ))}
                </div>
            )}
        </>
    );
};

export default WeekCardList;
