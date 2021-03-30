import { SET_CHOICES } from './actionTypes';

const setChoicesAction = (choices, newChoice) => {
    return (dispatch) =>
        dispatch({
            type: SET_CHOICES,
            payload:
                choices.length < 5
                    ? [...choices, newChoice]
                    : [...choices.splice(1), newChoice],
        });
};

export default setChoicesAction;
