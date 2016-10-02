import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ToolbarAndroid,
  StyleSheet,
  StatusBar,
} from 'react-native';

import colors from '../config/colors';
import Feed   from '../components/Feed';
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: colors.primaryBlue,
    height: 56,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default class HomeScene extends Component {
  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: '#ffffff',
        }}
      >
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
        <ToolbarAndroid
          navIcon={require('nectr/src/images/menu_icon.png')}
          title="Feed"
          titleColor="#ffffff"
          style={styles.toolbar}
          // actions={[{title: '', show: 'always'}]}
          onActionSelected={this.onActionSelected} />
           <Feed />
      </View>
    )
  }
}
