import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import Idea from '../components/Idea';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  seperator: {

  },
});

export default class Feed extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
        {
          author: 'Juwan Wheatley',
          content: 'I have an Idea for an app for app ideas',
        },
      ]),
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Idea {...data} />}
        // renderSeperator={(sectionId, rowId) => <View key={rowId} style={styles.seperator} />}
      />
    );
  }
}
