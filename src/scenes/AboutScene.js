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
      <DrawerNavLayout firebaseIdeasRef={this.props.firebaseIdeasRef} title="About" sceneId="about" navigator={this.props.navigator}>
      <View>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15}}>
            <Text style={{fontSize: 24, fontWeight: '400', color: 'black', paddingVertical: 20}}>The Developers{"\n"}</Text>
            <Text style={{fontSize: 16, flexWrap: 'wrap', textAlign: 'center'}}>
            <Text style={{fontStyle: 'italic', flexWrap: 'wrap', textAlign: 'center'}}>Nectr</Text> was
             created by a high school student and three undergraduate students from
              the University of Maryland, College Park. {"\n"}{"\n"}</Text>
            <Text style={{fontSize: 24, fontWeight: '400', color: 'black', paddingVertical: 20}}>What is Nectr?{"\n"}</Text>
            <Text style={{fontSize: 16, flexWrap: 'wrap', textAlign: 'center'}}>It is a mobile message
            board app that allows anonymous posting. Nectr created for users to post
            hackathon and project ideas for other users of the app.</Text>
          </View>
         </View>
      </DrawerNavLayout>
    );
  }
}
