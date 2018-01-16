import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import LoginScreen from './LoginScreen';
import ReviewScreen from './ReviewScreen';
import { Spinner } from '../components/reusables';
import { TabNavigator, StackNavigator } from 'react-navigation';
import firebase from 'firebase';

class SwipeScreen extends Component {

  render() {

    return (
      <View>
        <Text>Swipe Screen</Text>
          <Button onPress={() => firebase.auth().signOut()} title="Log Out" />

      </View>
    );
  }
}



export default SwipeScreen;
