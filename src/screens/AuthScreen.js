import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import SwipeScreen from './SwipeScreen';
import { Spinner } from '../components/reusables';
import { TabNavigator, StackNavigator } from 'react-navigation';
import firebase from 'firebase';

class AuthScreen extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbD2m16aSiIvPcbZ3nRpib3lei2MqOIEU',
      authDomain: 'pupple-4e40e.firebaseapp.com',
      databaseURL: 'https://pupple-4e40e.firebaseio.com',
      projectId: 'pupple-4e40e',
      storageBucket: 'pupple-4e40e.appspot.com',
      messagingSenderId: '1007949599264'
    });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });

    } else {
      this.setState({ loggedIn: false });

    }
  });
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return   <SwipeScreen />;
    case false:
        return <View>
         <LoginScreen />
         <Button
   title="Sign Up"
   onPress={() => { this.props.navigation.navigate('register'); }}
   />
         </View>;
    default:
        return <Spinner size="large" />;

}
}
  render() {
        return (
        <View>
        { this.renderContent() }

             </View>
           );
         }
        }




export default AuthScreen;
