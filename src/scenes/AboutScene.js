import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
import DrawerNavLayout from '../components/DrawerNavLayout';

export default class AboutScene extends Component {
  render() {
    return (
      <DrawerNavLayout title="About" sceneId="about" navigator={this.props.navigator}>
      <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
      </DrawerNavLayout>
    );
  }
}
