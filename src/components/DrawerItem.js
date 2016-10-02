import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  drawerItem: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60,
    paddingLeft: 15,
  },
  drawerText: {
    fontSize: 20,
  },
  active: {
    backgroundColor: '#EEEEEE',
  },
});

export default (props) => (
  <TouchableOpacity style={[styles.drawerItem, props.parentSceneId === props.sceneId ? styles.active : null]}>
    <Text style={[styles.drawerText]}>{props.title}</Text>
  </TouchableOpacity>
)
