import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import router from '../routes';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 5,
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 15,
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
    justifyContent: 'flex-end',
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
  constructor() {
    super();

    this.state = {
      liked: false,
    };
  }
  onHeartPress = () => {
    this.props.firebaseIdeasRef.child(this.props.ideaKey).update({ liked: !this.state.liked });
  }
  componentWillMount = () => {
    const self = this;
    this.props.firebaseIdeasRef.child(this.props.ideaKey).on("value", function(snapshot) {
      self.setState({ liked: snapshot.val().liked });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    this.setState({ liked: this.props.ideaData.liked });
  }
  render() {
    console.log(this.props.ideaData.content);
    return (
        <View style={styles.container} elevation={4}>
          <View style={styles.contentContainer}>
            <Image
              source={{ uri: this.props.ideaData.profileImageUrl }}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <View style={styles.meta}>
                <Text style={styles.author}>
                  {this.props.ideaData.author}
                </Text>
                <Text style={styles.timeCreated}>
                  {moment.utc(this.props.ideaData.createdAt).fromNow()}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.content}>
                  {`${this.props.ideaData.content.substr(0, 80)}${this.props.ideaData.content.length > 80 ? '...' : ''}`}
                </Text>
                <TouchableOpacity
                  onPress={this.onHeartPress}
                >
                  <Image
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    source={this.state.liked ? require('nectr/src/images/favorite_icon_solid.png') : require('nectr/src/images/favorite_icon_border.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    )
  }
}
