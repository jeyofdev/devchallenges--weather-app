import { SET_MODAL_IS_SHOW } from './actionTypes';

const setModalIsShowAction = () => {
    return (dispatch) =>
        dispatch({
            type: SET_MODAL_IS_SHOW,
        });
};

export default setModalIsShowAction;
