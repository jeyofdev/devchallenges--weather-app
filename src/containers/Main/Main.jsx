import React from 'react';
import Footer from '../../components/Aside/Footer/Footer';
import Header from '../../components/Main/Header/Header';
import Highlights from '../../components/Main/Highlights/Highlights';
import WeekCardList from '../WeekCardList/WeekCardList';

const Main = () => {
    return (
        <div className="descriptif_weather">
            <div className="container">
                <Header />
                <WeekCardList />
                <Highlights />
                <Footer />
            </div>
        </div>
    );
};

export default Main;
