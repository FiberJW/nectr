import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ToolbarAndroid,
  StyleSheet,
  StatusBar,
  DrawerLayoutAndroid,
} from 'react-native';

import colors from '../config/colors.js';
import DrawerNavView from './DrawerNavView';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: colors.primaryBlue,
    height: 56,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default class HomeScene extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false,
    };
  }
  onMenuClick = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
    this.state.drawerOpen ? this._drawer.closeDrawer() : this._drawer.openDrawer();
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
          title={this.props.title}
          elevation={5}
          titleColor="#ffffff"
          onIconClicked={this.onMenuClick}
          style={styles.toolbar}
          // actions={[{title: '', show: 'always'}]}
          onActionSelected={this.onActionSelected} />
        <DrawerLayoutAndroid
          ref={(c) => this._drawer = c}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => <DrawerNavView sceneId={this.props.sceneId} drawerContent={[{title: 'Feed', sceneId: 'feed'}, {title: 'Search', sceneId: 'search'}, {title: 'Your Ideas', sceneId: 'your_ideas'}]} />}
        >
          {this.props.children}
        </DrawerLayoutAndroid>
      </View>
    )
  }
}