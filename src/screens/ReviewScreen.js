import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import SettingsScreen from './SettingsScreen';
import SwipeScreen from './SwipeScreen';
import TutorialScreen from './TutorialScreen';

class ReviewScreen extends Component {

  render() {



return (
  <View>
<Text>Review</Text>
  </View>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   justifyContent: 'center',
 },
});



export default ReviewScreen;
