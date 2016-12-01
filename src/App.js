import React, { Component } from 'react';
import { BackAndroid } from 'react-native';
import * as firebase from 'firebase';
import { Components } from 'exponent';
import ExNavigator from '@exponent/react-native-navigator';
import Router from './routes';

const firebaseConfig = {
  apiKey: 'AIzaSyDL1zn2-p4rVnvshaX8cbQ0BfyF2x-daYQ',
  authDomain: 'nectr-525ca.firebaseapp.com',
  databaseURL: 'https://nectr-525ca.firebaseio.com',
  storageBucket: 'nectr-525ca.appspot.com',
  messagingSenderId: '877832805633',
};

firebase.initializeApp(firebaseConfig);
const rootRef = firebase.database().ref();
const ideasRef = rootRef.child('ideas');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      data: [],
    };
  }

  componentWillMount() {
    ideasRef.on('value', (snapshot) => {
      const data = Object.keys(snapshot.val()).map(key => {
        const idea = snapshot.val()[key];
        return {
          idea,
          key,
        };
      }).reverse();
      this.setState({ data, isReady: true });
    }, () => {});
  }

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
    ideasRef.off('value');
    BackAndroid.exitApp();
  }

  render() {
    if (!this.state.isReady) {
      return <Components.AppLoading />;
    }

    return (
      <ExNavigator
        initialRoute={ Router.getHomeRoute(ideasRef, this.state.data) }
        style={{ flex: 1 }}
        showNavigationBar={ false }
        ref={ (nav) => { this.navigator = nav; } }
      />
    );
  }
}
