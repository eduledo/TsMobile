import {events} from '../constants';
import {FULFILLED} from 'redux-promise-middleware';

const INITIAL_STATE = {
    current: null,
};

const applySetCurrentUser = (state, action) => ({
    ...state,
    curren: action.payload
});

function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case `${events.USERS}${events._GET}_${FULFILLED}` : {
            return applySetCurrentUser(state, action);
        }
        default :
            return state;
    }
}

export default userReducer;
