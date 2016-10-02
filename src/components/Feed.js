import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import Idea from '../components/Idea';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have cuirnvoivnwoivnewov ejocenfowe oviewnv eowenan Idea for an app for app ideas for an app for app ideas for an app for app ideas for an app for app ideas for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
        },
        {
          author: 'Juwan Wheatley',
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have an Idea for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
        },
        {
          author: 'Juwan Wheatley',
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have an Idea for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
        },
        {
          author: 'Juwan Wheatley',
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have an Idea for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
        },
        {
          author: 'Juwan Wheatley',
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have an Idea for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
        },
        {
          author: 'Juwan Wheatley',
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have an Idea for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
        },
        {
          author: 'Juwan Wheatley',
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have an Idea for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
        },
        {
          author: 'Juwan Wheatley',
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have an Idea for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
        },
        {
          author: 'Juwan Wheatley',
          timeCreated: `${Math.round(Math.random() * 10)}m`,
          content: 'I have an Idea for an app for app ideas',
          profileImageUrl: `https://unsplash.it/200?random=${Math.random()}`,
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
      />
    );
  }
}
