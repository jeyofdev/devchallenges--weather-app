import React from 'react';
import { useDispatch } from 'react-redux';
import setModalIsShowAction from '../../state/actions/modalAction';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <nav className="navbar">
            <button
                type="button"
                className="btn btn_search"
                onClick={() => dispatch(setModalIsShowAction())}
            >
                Search for places
            </button>
        </nav>
    );
};

export default Header;
