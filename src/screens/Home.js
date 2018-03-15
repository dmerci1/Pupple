import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeNav from '../components/navigators/HomeNav';

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeNav />
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

export default Home;
