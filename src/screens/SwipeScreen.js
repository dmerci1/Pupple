import React, { Component } from 'react';
import { Text,  View, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Drawer } from 'native-base';
import NavigationService from '../components/NavigationService';

class SwipeScreen extends Component {
  componentWillMount() {
    this.props.navigation.navigate('DrawerClose');
  }
  render() {
    return (
        <Container>
          <Header style={{ height: 80 }}>
            <Left>
              <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
              >
                <Icon name='menu' />
              </Button>
            </Left>
            <Right>
            <Button
            rounded
            onPress={() => this.props.navigation.navigate('matches')}
            >
              <Text>Matches</Text>
            </Button>
            </Right>
            <Text>Pupple</Text>
          </Header>
          <Content>
            <Text>Swipe Screen</Text>
            <Button
            block
            onPress={() => this.props.navigation.navigate('newdog')}
            >
            <Text>Add Dog</Text>
            </Button>
          </Content>
        </Container>
    );
  }
}

export default SwipeScreen;
