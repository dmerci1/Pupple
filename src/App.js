import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/RegisterScreen';
import SwipeScreen from './screens/SwipeScreen';
import TutorialScreen from './screens/TutorialScreen';
import { Button } from 'react-native-elements';
import { Spinner } from './components/reusables';
class App extends Component {



  render() {
   const MainNavigator = TabNavigator({
   //tab name key which contains the screen key with the navigation directory in an object
   auth: { screen: AuthScreen },
   login: {screen: LoginScreen },
   register: { screen: RegisterScreen },
      main: {
     //contains another set of tabs
     screen: TabNavigator({
       swipe: { screen: SwipeScreen },
       tutorial: { screen: TutorialScreen },
       review: {
         //displays nav buttons in the header by default
         screen: StackNavigator({
           review: { screen: ReviewScreen },
          // swipe: { screen: SwipeScreen }
         })
       }
     }, {
       navigationOptions: {
         tabBarVisible: false
       },
       tabBarPosition: 'bottom',
       lazy: true,
       swipeEnabled: false,
       animationEnabled: false,
     }, {
       tabBarOptions: {
         labelStyle: { fontSize: 15 }
       }
     })
   }
 }, {
     navigationOptions: {
       tabBarVisible: true
     },
     tabBarPosition: 'bottom',
     lazy: true,
     swipeEnabled: false,
     animationEnabled: false,
   }
);
return (
<View style={styles.container}>
  <MainNavigator />

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
export default App;
