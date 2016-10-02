import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
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

const Row = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {props.author}
    </Text>
    <Text style={styles.text}>
      {props.content}
    </Text>
  </View>
);

export default Row;
