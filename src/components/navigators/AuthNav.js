import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import SignInForm from '../../screens/SignInForm';
import SignUpForm from '../../screens/SignUpForm';
import Home from '../../screens/Home';

const AuthNav = TabNavigator({
//tab name key which contains the screen key with the navigation directory in an object
signIn: { screen: SignInForm },
signUp: { screen: SignUpForm },
home: { screen: Home }
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

export default AuthNav;
