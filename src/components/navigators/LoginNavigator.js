import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import HomeScreen from '../../screens/HomeScreen';

const LoginNavigator = TabNavigator({
//tab name key which contains the screen key with the navigation directory in an object
login: { screen: LoginScreen },
register: { screen: RegisterScreen },
}, {
  navigationOptions: {
    tabBarVisible: false
  },
  tabBarPosition: 'bottom',
  lazy: true,
  swipeEnabled: false,
  animationEnabled: false,
}
);
const HomeNavigator = TabNavigator({
//tab name key which contains the screen key with the navigation directory in an object
home: { screen: HomeScreen },
}, {
  navigationOptions: {
    tabBarVisible: false
  },
  tabBarPosition: 'bottom',
  lazy: true,
  swipeEnabled: false,
  animationEnabled: false,
}
);

const MainNavigator = StackNavigator({
  user: { screen: LoginNavigator },
  home: { screen: HomeNavigator }

}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
});

export default MainNavigator;
