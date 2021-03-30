import React, { useState } from 'react';
import { MdClear, MdKeyboardArrowRight } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import setModalIsShowAction from '../../../state/actions/modalAction';
import setChoicesAction from '../../../state/actions/choicesAction';
import { setSearchCityAction } from '../../../state/actions/weatherAction';
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

        if (newChoice.length > 3) {
            dispatch(setChoicesAction(choices, newChoice));
            setFormError('');
        } else {
            setFormError('You must enter at least 4 characters');
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
