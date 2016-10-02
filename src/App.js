import React, { Component } from 'react';
import { BackAndroid } from 'react-native';
import * as firebase from 'firebase';

import ExNavigator from '@exponent/react-native-navigator';
import Router from './routes';

const firebaseConfig = {
  apiKey: 'AIzaSyDL1zn2-p4rVnvshaX8cbQ0BfyF2x-daYQ',
  authDomain: 'nectr-525ca.firebaseapp.com',
  databaseURL: 'https://nectr-525ca.firebaseio.com',
  storageBucket: 'nectr-525ca.appspot.com',
  messagingSenderId: '877832805633',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const rootRef = firebase.database().ref();
const ideasRef = rootRef.child('ideas');

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
        initialRoute={Router.getSplashRoute(ideasRef)}
        style={{ flex: 1 }}
        showNavigationBar={false}
        ref={(nav) => { this.navigator = nav; }}
        style={{ flex: 1 }}
      />
    );
  }
}
