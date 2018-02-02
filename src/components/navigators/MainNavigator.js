import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import MatchScreen from '../../screens/MatchScreen';
import SettingsScreen from '../../screens/RegisterScreen';
import SwipeScreen from '../../screens/SwipeScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const MenuNavigator = DrawerNavigator({
  Home: { screen: SwipeScreen },
  profile: { screen: ProfileScreen },
  settings: { screen: SettingsScreen },
  match: { screen: MatchScreen },
});

const HomeNavigator = StackNavigator({

  menu: { screen: MenuNavigator }

}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main'
});

export default HomeNavigator;
