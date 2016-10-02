import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 4,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width - 40,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default class Idea extends Component {
  render() {
    return (
      <View style={styles.container} elevation={1}>
        <Text style={styles.text}>
          {this.props.author}
        </Text>
        <Text style={styles.text}>
          {this.props.content}
        </Text>
      </View>
    )
  }
}
