import React, { Component } from 'react';
import {
  Modal,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import {
  LoginPage,
  ServicesPage,
  SettingsPage,
  ProfilePage,
} from './src/screens';
import {
  withAuthentication,
  withAnonimousAuthentication
} from "./src/components";
import store from "./src/store";
import { Provider } from "react-redux";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  Services: { screen: ServicesPage },
  Settings: { screen: SettingsPage },
  Profile: { screen: ProfilePage }
});

const StackNavigator = (createStackNavigator({
  Home: BottomTabNavigator,
  Login: { screen: LoginPage }
}, {
    defaultNavigationOptions: {
      title: 'TFSMobile',
    }
  }));

const AppContainer = withAuthentication(createAppContainer(StackNavigator));

