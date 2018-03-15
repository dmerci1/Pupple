import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import SwipeScreen from '../../screens/SwipeScreen';
import Profile from '../../screens/Profile';
import DogList from '../../screens/DogList';
import AddDog from '../../screens/AddDog';
import Settings from '../../screens/Settings';
import Matches from '../../screens/Matches';
import SideBar from '../SideBar';

const HomeNav = DrawerNavigator({
  swipe: { screen: SwipeScreen },
  profile: { screen: Profile },
  doglist: { screen: DogList },
  settings: { screen: Settings },
  match: {
    screen: StackNavigator({
      matches: { screen: Matches },
      newdog: { screen: AddDog }
    }, {
      headerMode: 'none'
    }
  )
  }
}, {
  contentComponent: props => <SideBar {...props} />
}, {

}
);

export default HomeNav;
