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
  Keyboard,
} from 'react-native';

import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.8)',
    position: 'absolute',
    zIndex: 80,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

export default class OverLayMessage extends Component {
  constructor() {
    super();

    this.state = {
      content: 'harambe lives',
    };
  }

  componentWillMount () {
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
  }
  keyboardDidHide() {
    this.props.toggleModal();
  }
  componentWillUnmount () {
    this.keyboardDidHideListener.remove()
  }
    submitPost = () => {
      const newChildRef = this.props.firebaseIdeasRef.push();
      newChildRef.set({
        author: 'Anonymous',
        content: this.state.content.trim(),
        createdAt: moment.utc().toJSON(),
        liked: false,
        profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
      });
     this.props.toggleModal();
   }

  render() {
    return (
      <View
        style={styles.modal}
      >
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
        <TextInput
          ref={(c) => this._textInput = c}
          autoFocus
          onSubmitEditing={(event) => {
            this.submitPost();
          }}
          returnKeyType="done"
          style={{
            height: Dimensions.get('window').width - 60,
            color: 'white',
            fontSize: 36,
          }}
          multiline
          maxLength={140}
          onChangeText={content => this.setState({ content })}
          value={this.state.content}
          autoCorrect={false}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
          onPress={this.submitPost}
        >
          <Image
            style={{
              height: 24,
              width: 28,
            }}
            source={require('nectr/src/images/send_icon_white.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
