import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	TouchableHighlight,
	Image,
	ToolbarAndroid,
	StatusBar,
	StyleSheet,
} from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: colors.primaryBlue,
    height: 56,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default class IdeaScene extends Component {
  render() {
  	const routes = [
      {title: 'Feed', sceneId: 'home'},
      {title: 'Search', sceneId: 'search'},
      {title: 'About', sceneId: 'about'},
    ];
    return (
    <View
	  	style={{
	  	  flex:1,
        //  marginTop: 22,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#F5F5F5',
        //flexDirection: "row"
      }}
    >
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
      <ToolbarAndroid
        navIcon={require('nectr/src/images/arrow_back_icon_white.png')}
          title={this.props.title}
          elevation={6}
          titleColor="#ffffff"
          onIconClicked={() => this.props.navigator.pop()}
          style={styles.toolbar}
        />
        <View
        	style={{
        		flex:2,
        }}
        >
        <Image
      	    style={{width:100, height:100}}
      		source={{uri: this.props.idea.profileImageUrl}}
      	/>
      	</View>
      	<View
      		style={{
      			flex:3,
      	}}
      	>
      	<Text style={{fontWeight: 'bold'}}>
      		{this.props.idea.author}
      	</Text>
      	</View>
    </View>
    );
  }
}
