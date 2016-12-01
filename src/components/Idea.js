import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@exponent/vector-icons';
import moment from 'moment';
import colors from '../config/colors';
// import Router from '../routes';

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
    width: Dimensions.get('window').width - 175,
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
  static propTypes = {
    ideaData: PropTypes.object,
    ideaKey: PropTypes.string,
    firebaseIdeasRef: PropTypes.object,
    navigator: PropTypes.object,
  };

  constructor() {
    super();

    this.state = {
      liked: false,
    };
  }
  componentWillMount = () => {
    this.setState({ liked: this.props.ideaData.liked });
    this.props.firebaseIdeasRef
      .child(this.props.ideaKey)
      .on('value', (snapshot) => {
        this.setState({ liked: snapshot.val().liked });
      }, () => {});
  }

  onHeartPress = () => {
    this.props.firebaseIdeasRef.child(this.props.ideaKey).update({ liked: !this.state.liked });
  }

  render() {
    return (
      <View
        style={ styles.container }
        elevation={ 5 }
        shadowColor="#000000"
        shadowOffset={{ width: 2, height: 2 }}
        shadowOpacity={ 0.25 }
        shadowRadius={ 4 }
      >
        <View style={ styles.contentContainer }>
          <Image
            source={{ uri: this.props.ideaData.profileImageUrl }}
            style={ styles.profileImage }
          />
          <View style={ styles.textContainer }>
            <View style={ styles.meta }>
              <Text style={ styles.author }>
                {this.props.ideaData.author}
              </Text>
              <Text style={ styles.timeCreated }>
                {moment.utc(this.props.ideaData.createdAt).fromNow()}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <Text style={ styles.content }>
                {this.props.ideaData.content.trim()}
              </Text>
              <TouchableOpacity
                onPress={ this.onHeartPress }
              >
                <Ionicons
                  name={ `${Platform.OS === 'ios' ? 'ios' : 'md'}-heart${this.state.liked ? '' : '-outline'}` }
                  size={ 24 }
                  color={ this.state.liked ? colors.primaryBlue : colors.gray }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
