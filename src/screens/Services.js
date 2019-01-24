import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import { Button } from "react-native-elements";
import { compose } from "redux";
import { connect } from "react-redux";
import { LandingPage, ProfilePage } from "../screens";
import { withNavigation } from "react-navigation";

class Services extends Component {
    validateUserProfile(userProfile) {
        return userProfile &&
            userProfile.familyName &&
            userProfile.displayName &&
            userProfile.statedGender &&
            userProfile.perceivedGender &&
            userProfile.birthDay;
    }
    render() {
        const { authUser, userProfile } = this.props;
        console.log(this.pros);
        if (!authUser || authUser.isAnonymous) {
            return <LandingPage />
        }

        // if (!this.validateUserProfile(userProfile)) {
        //     return <ProfilePage />
        // }

        return (
            <ScrollView>
                <Text>Services</Text>
                <Button title={"Profile"} onPress={() => {
                    this.props.navigation.navigate('Profile');
                }} />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    userProfile: state.userState.current,
});

const mapDispatchToProps = {

};

export default compose(
    withNavigation,
    connect(mapStateToProps, mapDispatchToProps)
    )(Services);