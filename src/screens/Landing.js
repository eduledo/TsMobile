import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

class Landing extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Text>Debe estar registrado para poder ver los listados</Text>
                <Button title={"Registrarse "} onPress={() => {
                    navigation.navigate('Login');
                }} />
            </View>
        );
    }
}

export default withNavigation(Landing);