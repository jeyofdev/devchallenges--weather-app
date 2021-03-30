import { SET_MODAL_IS_SHOW } from '../actions/actionTypes';

const initialState = {
    isShow: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_IS_SHOW:
            return { ...state, isShow: !state.isShow };

        default:
            return state;
    }
};

export default modalReducer;
