import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryBlue,
    padding: 18,

    // flex: 1,
    borderRadius: 70,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default class IdeaButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={0.90}
        style={{
          height: 90,
          width: 90,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 10,
          right: 0,
        }}
      >
        <View style={styles.button} elevation={8}>
          <Image
            style={{
              height: 24,
              width: 24,
            }}
            source={this.props.icon}
          />
        </View>
      </TouchableOpacity>
    )
  }
}
