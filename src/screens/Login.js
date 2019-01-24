import React, { Component } from 'react';
import {
    AsyncStorage,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import firebase from 'react-native-firebase';
import { Button } from 'react-native-elements';
import { connect } from "react-redux";
import DeviceInfo from "react-native-device-info";
import { Loader } from "../components";

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Login extends Component {
    state = {
        loading: true,
        phoneNumber: null,
        confirmResult: null,
    };

    async componentDidMount() {
        const confirmResult = await AsyncStorage.getItem('confirmResult');
        const phoneNumber = await AsyncStorage.getItem('phoneNumber');
        this.setState({ confirmResult, phoneNumber, loading: false });
    }

    render() {
        const { authUser, navigation } = this.props;
        const { navigate, goBack } = navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <Loader
                    loading={this.state.loading} />
                <View>
                    <Text style={{ fontSize: 20 }}>Ingrese su número de teléfono para registrarse</Text>
                    <Text style={{ fontSize: 20 }}>Recibirá un mensaje de texto con el código de validación</Text>
                    <TextInput
                        style={{ height: 40, fontSize: 20 }}
                        keyboardType={'phone-pad'}
                        placeholder="Número de teléfono"
                        defaultValue={this.state.phoneNumber}
                        onChangeText={(phoneNumber) => this.setState({ phoneNumber })} />
                </View>
                <Button style={{ backgroundColor: 'red' }} disabled={!this.state.phoneNumber} title="Aceptar" onPress={() => {
                    this.setState({ loading: true });
                    firebase.auth().signInWithPhoneNumber(this.state.phoneNumber)
                        .then(async confirmResult => {
                            await AsyncStorage.setItem('confirmResult', confirmResult);
                            await AsyncStorage.setItem('phoneNumber', this.state.phoneNumber);
                            this.setState({ loading: false });
                            goBack();
                        })
                        .catch(error => {
                            console.log(error);
                            this.setState({ loading: false })
                        });
                }} />
                <Button title="Cancelar" onPress={() => {
                    // Aceptar
                    navigate('Home');
                }} />
                <Button title="Ingresar código" onPress={() => {
                    // Aceptar
                }} />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
});

export default connect(mapStateToProps, null)(Login);