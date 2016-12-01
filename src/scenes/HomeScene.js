import React, { Component, PropTypes } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Ionicons } from '@exponent/vector-icons';
import Feed from '../components/Feed';
import ActionButton from 'react-native-action-button';
import Prompt from 'react-native-prompt';
import moment from 'moment';

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});


export default class HomeScene extends Component {
  static propTypes = {
    firebaseIdeasRef: PropTypes.object,
    initialData: PropTypes.array,
    navigator: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      promptVisible: false,
      data: null,
      namePromptVisible: true,
      name: null,
    };
  }

  componentWillMount() {
    this.props.firebaseIdeasRef.on('value', (snapshot) => {
      const data = Object.keys(snapshot.val()).map(key => {
        const idea = snapshot.val()[key];
        return {
          idea,
          key,
        };
      }).reverse();
      this.setState({ data });
    }, () => {});
  }

  componentWillUnmount() {
    this.props.firebaseIdeasRef.off('value');
  }

  togglePrompt = () => {
    this.setState({ promptVisible: !this.state.promptVisible });
  }

  submitPost = (value) => {
    const newChildRef = this.props.firebaseIdeasRef.push();
    newChildRef.set({
      author: this.state.name || 'Anonymous',
      content: value.trim(),
      createdAt: moment.utc().toJSON(),
      liked: false,
      profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
    });
    this.setState({ promptVisible: false });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight || 20,
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#298CEC" />
        <Feed
          firebaseIdeasRef={ this.props.firebaseIdeasRef }
          data={ this.state.data || this.props.initialData }
          navigator={ this.props.navigator }
        />
        <Prompt
          title="Say something"
          placeholder="Start typing"
          // defaultValue="Hello"
          visible={ this.state.promptVisible }
          onCancel={ () => this.setState({
            promptVisible: false,
          }) }
          onSubmit={ (value) => {
            this.submitPost(value);
          } }
        />
        <Prompt
          title="Create a username"
          placeholder="Enter username here"
          visible={ this.state.namePromptVisible }
          onCancel={ () => this.setState({
            namePromptVisible: false,
          }) }
          onSubmit={ (value) => {
            this.setState({ name: value.trim(), namePromptVisible: false });
          } }
        />
        <ActionButton
          offsetX={ 16 }
          offsetY={ 8 }

          buttonColor="#39CA74"
          btnOutRange="#FF3B30"
        >
          <ActionButton.Item buttonColor="#304FFE" title="New Post" onPress={ this.togglePrompt }>
            <Ionicons name="md-create" style={ styles.actionButtonIcon } />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
