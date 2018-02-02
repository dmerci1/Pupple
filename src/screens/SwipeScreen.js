import React, { Component } from 'react';
import { Text,  View, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon } from 'native-base';
import firebase from 'firebase';

class SwipeScreen extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name='menu' />
            </Button>
         </Left>
        </Header>
        <Content>
            <Text>Swipe Screen</Text>
              <Button
              block danger
              onPress={() => firebase.auth().signOut()}
              >
            <Text>Log Out</Text></Button>

            </Content>
      </Container>
    );
  }
}

export default SwipeScreen;
