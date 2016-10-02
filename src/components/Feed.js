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
  }
  render() {
    console.log(this.props.data);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <ListView
        style={styles.container}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        enableEmptySections
        dataSource={ds.cloneWithRows(this.props.data)}
        renderRow={(data) => <Idea firebaseIdeasRef={this.props.firebaseIdeasRef} navigator={this.props.navigator} ideaKey={data.key} ideaData={data.idea}/>}
      />
    );
  }
}
