import { events } from "../constants";

const INITIAL_STATE = {
    authUser: null,
};

const applySetAuthUser = (state, action) => ({
    ...state,
    authUser: action.payload
});

function sessionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case events.AUTH_USER_SET: {
            return applySetAuthUser(state, action);
        }
        default:
            return state;
    }
}

export default sessionReducer;
