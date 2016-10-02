import React, { Component } from 'react';
import moment from 'moment';

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ToolbarAndroid,
  TextInput,
  Dimensions,
  StyleSheet,
  Picker,
} from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: colors.primaryBlue,
    height: 56,
  },
});

export default class CreateIdeaScene extends Component {
  constructor() {
    super();

    this.state = {
      ideaContent: 'What\'s your BIG IDEA?',
      ideaCategory: 'tech',
    };
  }
  _onActionSelected = (position) => {
    if (position === 0) {
      const newChildRef = this.props.firebaseIdeasRef.push();
      newChildRef.set({
        author: 'User Jones',
        content: this.state.ideaContent,
        category: this.state.ideaCategory,
        createdAt: moment.utc().toJSON(),
        liked: false,
        profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
      });
      this.props.navigator.pop();
    }
  }
  render() {
    return (
      <View
        behavior="padding"
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          justifyContent: 'flex-start',
          backgroundColor: '#F5F5F5',
        }}
      >
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
        <ToolbarAndroid
          title="Post to nectr"
          titleColor="white"
          navIcon={require('nectr/src/images/close_icon_white.png')}
          elevation={6}
          onActionSelected={this._onActionSelected}
          actions={[
            {
              title: 'POST',
              show: 'always',
              icon: require('nectr/src/images/send_icon_white.png'),
            },
          ]}
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
            height: Dimensions.get('window').width - 60,
            // borderColor: 'gray',
            fontSize: 36,
            // borderWidth: 1,
          }}
          multiline
          maxLength={140}
          onChangeText={ideaContent => this.setState({ ideaContent })}
          value={this.state.ideaContent}
          autoCorrect={false}
        />
        <Text>Category:</Text>
        <Picker
          prompt="hi"
          selectedValue={this.state.ideaCategory}
          mode="dropdown"
          onValueChange={(ideaCategory) => this.setState({ ideaCategory })}
        >
          <Picker.Item label="Tech" value="tech" />
          <Picker.Item label="Healthcare" value="healthcare" />
          <Picker.Item label="Community" value="community" />
          <Picker.Item label="Environmental" value="environmental" />
          <Picker.Item label="Social" value="social" />
        </Picker>
      </View>
    )
  }
}
