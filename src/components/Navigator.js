import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import SignInForm from '../screens/SignInForm';
import SignUpForm from '../screens/SignUpForm';
import SwipeScreen from '../screens/SwipeScreen';
import Profile from '../screens/Profile';
import DogList from '../screens/DogList';
import DogListItem from '../screens/DogListItem';
import AddDog from '../screens/AddDog';
import Settings from '../screens/Settings';
import Matches from '../screens/Matches';
import SideBar from './SideBar';

const AuthNav = TabNavigator({
signIn: { screen: SignInForm },
signUp: { screen: SignUpForm },
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

const MenuNav = DrawerNavigator({
  swipe: { screen: SwipeScreen },
  profile: { screen: Profile },
  doglist: { screen: DogList },
  newdog: { screen: AddDog },
  doglistitem: { screen: DogListItem },
  settings: { screen: Settings },
}, {
  contentComponent: props => <SideBar {...props} />
}, {

});
const StackNav = StackNavigator({
  matches: { screen: Matches },

}, {
  headerMode: 'none'
}
);
const MainNav = TabNavigator({
auth: { screen: AuthNav },
menu: { screen: MenuNav },
stack: { screen: StackNav }
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

export default MainNav;
