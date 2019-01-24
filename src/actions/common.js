import { events } from '../constants';

export const fetchAll = (db, type) => () => {
    return dispatch => {
        db.getAll((docs) => {
            dispatch({
                type: `${type}${events._LIST}`,
                payload: docs
            });
        });
    }
}

export const fetch = (db, type) => (id) => {
    return dispatch => {
        dispatch({
            type: `${type}${events._GET}`,
            payload: db.get(id)
        })
    }
}

export const create = (db, type) => (payload) => {
    return dispatch => {
        dispatch({
            type: `${type}${events._CREATE}`,
            payload: db.create(payload)
        })
    }
}
export const save = (db, type) => (id, payload) => {
    return dispatch => {
        dispatch({
            type: `${type}${events._UPDATE}`,
            payload: db.save(id, payload)
        })
    }
}

export const init = (db, type) => {
    return {
        fetchAll: fetchAll(db, type),
        save: save(db, type),
        fetch: fetch(db, type),
        db,
    };
};

export default init;