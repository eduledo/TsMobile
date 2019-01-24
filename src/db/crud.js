import firebase from 'react-native-firebase';

let db = firebase.firestore();
firebase.firestore().enablePersistence()
    .then(() => {
        db = firebase.firestore();
    });

const create = (col) => (payload) =>
    db.collection(col).add(payload);

const save = (col) => (id, payload) =>
    db.collection(col).doc(id).set(payload);

const get = (col) => (id) =>
    new Promise(((resolve, reject) => {
        db.collection(col).doc(id).onSnapshot((snapshot) => {
            if (snapshot) {
                resolve(snapshot.data());
            }
            else {
                reject();
            }
        });
    }));

const getAll = (col) => (callback) => {
    db.collection(col).onSnapshot((snapshot) => {
        if (snapshot && snapshot.docs) {
            callback(snapshot.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }

            }));
        }
    });
};

export const init = (col) => {
    return {
        create: create(col),
        save: save(col),
        get: get(col),
        getAll: getAll(col),
        collectionPromise: db.collection(col),
        db,
    };
};
