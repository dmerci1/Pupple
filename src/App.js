import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbD2m16aSiIvPcbZ3nRpib3lei2MqOIEU',
      authDomain: 'pupple-4e40e.firebaseapp.com',
      databaseURL: 'https://pupple-4e40e.firebaseio.com',
      projectId: 'pupple-4e40e',
      storageBucket: 'pupple-4e40e.appspot.com',
      messagingSenderId: '1007949599264'
    });
  }
  render() {
    return (
      <View>
        <LoginForm />
      </View>
    );
  }
}

export default App;
