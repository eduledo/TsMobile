import React from 'react';

import firebase from 'react-native-firebase';
import { withAuthentication } from './index';

const withAnonimousAuthentication = (Component) => {
    class WithAnonimousAuthentication extends React.Component {
        componentDidMount() {
            firebase.auth().signInAnonymously().then((value) => {
            });
        }

        render() {
            return (
                <Component />
            );
        }
    }

    return withAuthentication(WithAnonimousAuthentication);
}

export default withAnonimousAuthentication;
