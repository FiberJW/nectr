import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import Row from '../components/Row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  seperator: {
    
  },
});

class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'kevin likes small peepee'],),
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}
        renderSeperator={(sectionId, rowId) => <View key={rowId} style={styles.seperator} />}
      />
    );
  }
}

export default ListViewDemo;