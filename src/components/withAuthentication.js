import React from 'react';
import { connect } from 'react-redux';

import firebase from 'react-native-firebase';
import { sessionActions } from "../actions";

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        componentDidMount() {
            const { onSetAuthUser } = this.props;

            firebase.auth().onAuthStateChanged(authUser => {
                authUser
                    ? onSetAuthUser(authUser)
                    : onSetAuthUser(null);
            });
        }

        render() {
            return (
                <Component />
            );
        }
    }

    const mapDispatchToProps = {
        onSetAuthUser: sessionActions.setAuthUser,
    };

    return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
