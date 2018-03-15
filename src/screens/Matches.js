import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Button, Left } from 'native-base';

class Matches extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Header style={{ height: 80 }}>
            <Left>
              <Button
              block
              onPress={() => this.props.navigation.navigate('swipe')}
              >
                <Text>Swipe Screen</Text>
              </Button>
            </Left>
          </Header>
          <Text>Matches Screen</Text>
        </Content>
      </Container>
    );
  }
}

export default Matches;
