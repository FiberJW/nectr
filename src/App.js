import React, { Component } from 'react';
import { BackAndroid } from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';
import Router from './routes';

export default class App extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 2) {
        this.navigator.pop();
        return true;
      }
      BackAndroid.exitApp();
      return false;
    });
  }

  componentWillUnmount() {
    BackAndroid.exitApp();
  }

  render() {
    return (
      <ExNavigator
        initialRoute={Router.getSplashRoute()}
        style={{ flex: 1 }}
        showNavigationBar={false}
        ref={(nav) => { this.navigator = nav; }}
        style={{ flex: 1 }}
      />
    );
  }
}
