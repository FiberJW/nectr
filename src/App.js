import React, { Component } from 'react';

import ExNavigator from '@exponent/react-native-navigator';
import Router from './routes';

export default class App extends Component {
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
