import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 5,
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width - 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  actionRow: {
    paddingVertical: 15,
    marginLeft: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  author: {
    fontSize: 16,
    // color: 'black',
    flexWrap: 'wrap',
  },
  timeCreated: {
    fontSize: 12,
  },
  content: {
    marginLeft: 15,
    fontSize: 24,
    color: 'black',
    flexWrap: 'wrap',
  },
  textContainer: {
    width: Dimensions.get('window').width - 115,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 4,
  },
});

export default class Idea extends Component {
  render() {
    return (
      <View style={styles.container} elevation={6}>
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: this.props.profileImageUrl }}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <View style={styles.meta}>
              <Text style={styles.author}>
                {this.props.author}
              </Text>
              <Text style={styles.timeCreated}>
                {this.props.timeCreated}
              </Text>
            </View>
            <Text style={styles.content}>
              {this.props.content}
            </Text>
          </View>
        </View>
        <View style={styles.actionRow}>
          <TouchableOpacity>
            <Image
              style={{
                height: 28,
                width: 28,
              }}
              source={require('nectr/src/images/reply_icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                padding: 5,
                height: 342 / 14.25,
                width: 324 / 14.25,
              }}
              source={require('nectr/src/images/nectr_icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                height: 24,
                width: 24,
              }}
              source={require('nectr/src/images/favorite_icon_border.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
