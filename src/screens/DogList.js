import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Button, Left, Body } from 'native-base';

class DogList extends Component {
  render() {
    return (
      <Container>
          <Header style={{ height: 80 }}>
            <Left>
              <Button
              block
              onPress={() => this.props.navigation.navigate('swipe')}
              >
                <Text>Swipe Screen</Text>
              </Button>
            </Left>
            <Body>
              <Text>Dogs List</Text>
            </Body>
          </Header>
          <Content>
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

export default DogList;
