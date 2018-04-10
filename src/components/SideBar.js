import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import firebase from 'firebase';
import { DrawerNavigator } from 'react-navigation';
import AddDog from '../screens/AddDog';

class SideBar extends Component {

  render() {

    return (
      <Container>
        <Content style={{ backgroundColor: 'white' }}>
        <Button
        full info large
        style={{ marginTop: 200, marginBottom: 15 }}
        onPress={() => this.props.navigation.navigate('shelterprofile')}
        >
        <Text>Profile</Text>
        </Button>
          <Button
          full info large
          style={{ marginBottom: 15 }}
          onPress={() => this.props.navigation.navigate('doglist')}
          >
        <Text>Dogs List</Text>
       </Button>
       <Button
       full info large
       onPress={() => this.props.navigation.navigate('settings')}
       >
     <Text>Settings</Text>
    </Button>
        <Button
        full danger
        style={{ marginTop: 100 }}
        onPress={() => firebase.auth().signOut()}
        >
      <Text>Log Out</Text>
     </Button>
        </Content>
      </Container>

    );
  }
}

export default SideBar;
