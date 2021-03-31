import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../components/Aside/Footer/Footer';
import Header from '../../components/Main/Header/Header';
import Highlights from '../../components/Main/Highlights/Highlights';
import Loading from '../../components/Ui/Loader/Loading';
import WeekCardList from '../WeekCardList/WeekCardList';

const Main = () => {
    const { days } = useSelector((state) => state.weather);

    return (
        <div className="descriptif_weather">
            <div className="container">
                {days.today !== null ? (
                    <>
                        <Header />
                        <WeekCardList />
                        <Highlights />
                        <Footer />
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default Main;
