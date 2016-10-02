import React, { Component } from 'react';

import DrawerNavLayout from '../components/DrawerNavLayout';
import Feed from '../components/Feed';
import IdeaButton from '../components/IdeaButton';

import Router from '../routes';

export default class HomeScene extends Component {
  onIdeaButtonPress = () => {
    this.props.navigator.push(Router.getCreateIdeaRoute());
  }
  render() {
    return (
      <DrawerNavLayout navigator={this.props.navigator} title="Home" sceneId="home">
        <Feed />
        <IdeaButton
          onPress={this.onIdeaButtonPress}
          icon={require('nectr/src/images/add_icon_white.png')}
        />
      </DrawerNavLayout>
    );
  }
}
