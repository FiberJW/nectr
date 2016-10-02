import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import Router from '../routes/';
import colors from '../config/colors.js';

export default class SplashScene extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigator.push(Router.getHomeRoute(this.props.firebaseIdeasRef));
    }, 1000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.primaryBlue,
        }}
      >
        <StatusBar backgroundColor="transparent" translucent />
        <Image
          source={require('nectr/src/images/nectr_text.png')}
          style={{
            // height: 50,
            // width: 200,
          }}
        />
      </View>
    )
  }
}
