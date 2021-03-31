import React, { useState } from 'react';
import axios from 'axios';
import { MdClear, MdKeyboardArrowRight } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import setModalIsShowAction from '../../../state/actions/modalAction';
import setChoicesAction from '../../../state/actions/choicesAction';
import {
    corsApiUrl,
    setSearchCityAction,
} from '../../../state/actions/weatherAction';
import './Modal.css';

const Modal = () => {
    const dispatch = useDispatch();
    const { isShow } = useSelector((state) => state.modal);
    const { choices } = useSelector((state) => state);

    const [newChoice, setNewChoice] = useState('');
    const [formError, setFormError] = useState();

    const handleClose = () => {
        dispatch(setModalIsShowAction());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        /**
         * check that the new choice :
         * - contains the required number of characters,
         * - That it is not already available
         * - That it contains data in the API
         *
         */
        if (newChoice.length > 2) {
            const url = `https://www.metaweather.com/api/location/search/?query=${newChoice}`;

            axios
                .get(`${corsApiUrl}${url}`)
                .then((response) => response.data)
                .then((datas) => {
                    if (datas.length > 0) {
                        const compare = choices.filter(
                            (choice) => choice === datas[0].title
                        );

                        if (compare.length === 0) {
                            dispatch(setChoicesAction(choices, datas[0].title));
                            setFormError('');
                        } else {
                            setFormError(
                                'The city you entered is already available below'
                            );
                        }
                    } else {
                        setFormError(
                            'The city you have entered does not contain any weather data.'
                        );
                    }
                });
        } else {
            setFormError('You must enter at least 3 characters');
        }

        setNewChoice('');
    };

    const handleUpdateWeatherDatas = (city) => {
        handleClose();
        dispatch(setSearchCityAction(city));
    };

    return (
        <div className={`modal ${!isShow ? 'hide' : ''}`}>
            <div className="close">
                <button type="button">
                    <MdClear className="icon" onClick={handleClose} />
                </button>
            </div>

            <form className="form_search" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="newChoice"
                        placeholder="search location"
                        name="newChoice"
                        value={newChoice}
                        onChange={(e) => setNewChoice(e.target.value)}
                    />
                </div>
                <div className="form-button">
                    <button type="submit" className="btn btn_form_search">
                        Search
                    </button>
                </div>
            </form>
            {formError && <p className="error_message">{formError}</p>}

            <div className="choices_list">
                {choices.map((choice) => (
                    <button
                        key={choice}
                        type="button"
                        onClick={() => handleUpdateWeatherDatas(choice)}
                    >
                        {choice}
                        <MdKeyboardArrowRight className="icon" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Modal;
