import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Router from '../routes';
import helpers from '../lib/helpers';

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

export default class DrawerItem extends Component {
  onPress = () => {
    this.props.toggleDrawer();
    setTimeout(() => {
      this.props.navigator.replace(helpers.getRouteById(this.props.sceneId)());
    }, 150);
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.drawerItem, this.props.parentSceneId === this.props.sceneId ? styles.active : null]}
        onPress={this.onPress}
      >
        <Text style={[styles.drawerText]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
