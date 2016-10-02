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
  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
    this.state.drawerOpen ? this._drawer.closeDrawer() : this._drawer.openDrawer();
  }
  render() {
    const routes = [
      {title: 'Feed', sceneId: 'home'},
      {title: 'Search', sceneId: 'search'},
    ];

    return (
      <View
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: '#F5F5F5',
        }}
      >
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
        <ToolbarAndroid
          navIcon={require('nectr/src/images/menu_icon.png')}
          title={this.props.title}
          elevation={6}
          titleColor="#ffffff"
          onIconClicked={this.toggleDrawer}
          style={styles.toolbar}
          // actions={[{title: '', show: 'always'}]}
          onActionSelected={this.onActionSelected} />
        <DrawerLayoutAndroid
          ref={(c) => this._drawer = c}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() =>
            <DrawerNavView
              navigator={this.props.navigator}
              sceneId={this.props.sceneId}
              toggleDrawer={this.toggleDrawer}
              drawerContent={routes}
            />
          }
        >
          {this.props.children}
        </DrawerLayoutAndroid>
      </View>
    )
  }
}
