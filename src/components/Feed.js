import React, { Component, PropTypes } from 'react';
import { ListView, StyleSheet } from 'react-native';
import Idea from '../components/Idea';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Feed extends Component {
  static propTypes = {
    data: PropTypes.array,
    firebaseIdeasRef: PropTypes.object,
    navigator: PropTypes.object,
  };

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <ListView
        style={ styles.container }
        contentContainerStyle={{
          alignItems: 'center',
        }}
        enableEmptySections
        dataSource={ ds.cloneWithRows(this.props.data) }
        renderRow={ (data) =>
          <Idea
            firebaseIdeasRef={ this.props.firebaseIdeasRef }
            navigator={ this.props.navigator }
            ideaKey={ data.key }
            ideaData={ data.idea }
          />
        }
      />
    );
  }
}
