import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdGpsFixed } from 'react-icons/md';
import setModalIsShowAction from '../../../state/actions/modalAction';
import { setSearchCityByGeolocationAction } from '../../../state/actions/weatherAction';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();

    /* eslint-disable */
    const [geolocationIsAvailable, setGeolocationIsAvailable] = useState(false);
    /* eslint-disable */
    const [coordinates, setCoordinates] = useState({
        latitude: '',
        longitude: '',
        error: false,
    });

    const handleGeolocation = () => {
        const { latitude, longitude } = coordinates;
        dispatch(setSearchCityByGeolocationAction(latitude, longitude));
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            setGeolocationIsAvailable(true);

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoordinates({
                        ...coordinates,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                () => {
                    setCoordinates({
                        ...coordinates,
                        error: true,
                    });
                }
            );
        } else {
            setGeolocationIsAvailable(false);
        }
    }, []);

    return (
        <nav className="navbar">
            <button
                type="button"
                className="btn btn_search"
                onClick={() => dispatch(setModalIsShowAction())}
            >
                Search for places
            </button>

            <button
                type="button"
                className="btn btn_gps"
                onClick={handleGeolocation}
            >
                <MdGpsFixed className="icon" />
            </button>
        </nav>
    );
};

export default Header;
