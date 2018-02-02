import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeNavigator from '../components/navigators/MainNavigator';

class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeNavigator />
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

export default HomeScreen;
