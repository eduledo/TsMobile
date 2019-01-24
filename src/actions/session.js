import { events } from "../constants";

export function setAuthUser(authUser) {
    return dispatch => {
        dispatch({
            type: events.AUTH_USER_SET,
            payload: authUser
        });
    }
}