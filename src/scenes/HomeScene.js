import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ToolbarAndroid,
  StyleSheet,
} from 'react-native';

import colors from '../config/colors.js';

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
          backgroundColor: '#ffffff',
        }}
      >
        <ToolbarAndroid
          navIcon={require('nectr/src/images/menu_icon.png')}
          title="Feed"
          titleColor="#ffffff"
          style={styles.toolbar}
          // actions={[{title: '', show: 'always'}]}
          onActionSelected={this.onActionSelected} />
      </View>
    )
  }
}
