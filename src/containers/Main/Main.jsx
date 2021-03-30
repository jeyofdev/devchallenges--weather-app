import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Main/Header/Header';
import Highlights from '../../components/Main/Highlights/Highlights';
import WeekCardList from '../WeekCardList/WeekCardList';

const Main = () => {
    const { days } = useSelector((state) => state.weather);

    return (
        <div className="descriptif_weather">
            <div className="container">
                <Header />
                <WeekCardList />
                {days.today !== null && <Highlights />}
            </div>
        </div>
    );
};

export default Main;
