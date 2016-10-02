import React, { Component } from 'react';

import {
  View,
  StatusBar,
  ToolbarAndroid,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: colors.primaryBlue,
    height: 56,
    borderWidth: 1,
  },
});

export default class CreateIdeaScene extends Component {
  constructor() {
    super();

    this.state = {
      ideaContent: '',
      ideaTags: [],
      ideaLocation: '',
    };
  }
  render() {
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
          navIcon={require('nectr/src/images/close_icon_white.png')}
          elevation={6}
          onIconClicked={() => this.props.navigator.pop()}
          style={styles.toolbar}
        />
        <TextInput
          ref={(c) => this._textInput = c}
          autoFocus
          onSubmitEditing={(event) => {
            this._textInput.blur();
          }}
          returnKeyType="done"
          style={{
            height: Dimensions.get('window').width,
            // borderColor: 'gray',
            fontSize: 36,
            // borderWidth: 1,
          }}
          multiline
          maxLength={140}
          onChangeText={(ideaContent) => this.setState({ideaContent})}
          value={this.state.ideaContent}
        />
        {/* Category dropdown overlay */}
      </View>

    )
  }
}
