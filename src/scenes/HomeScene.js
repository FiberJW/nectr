import React, { Component } from 'react';

import DrawerNavLayout from '../components/DrawerNavLayout';
import Feed from '../components/Feed';
import IdeaButton from '../components/IdeaButton';

import Router from '../routes';

export default class HomeScene extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }
  onIdeaButtonPress = () => {
    this.props.navigator.push(Router.getCreateIdeaRoute(this.props.firebaseIdeasRef));
  }
  componentWillMount() {
    const self = this;
    this.props.firebaseIdeasRef.on("value", function(snapshot) {
      console.log(snapshot.val());
      const data = Object.keys(snapshot.val()).map(key => {
        const idea = snapshot.val()[key];
        return {
          idea,
          key,
        };
      }).reverse();
      self.setState({ data });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
  render() {
    return (
      <DrawerNavLayout firebaseIdeasRef={this.props.firebaseIdeasRef} navigator={this.props.navigator} title="Home" sceneId="home">
        <Feed firebaseIdeasRef={this.props.firebaseIdeasRef} data={this.state.data} navigator={this.props.navigator} />
        <IdeaButton
          onPress={this.onIdeaButtonPress}
          icon={require('nectr/src/images/add_icon_white.png')}
        />
      </DrawerNavLayout>
    );
  }
}
