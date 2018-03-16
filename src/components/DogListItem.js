import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, Button, Item, Input, Label, List, ListItem } from 'native-base';

class DogListItem extends Component {
  render() {
    const { name } = this.props.dog.item;

    return (
      <List>
        <ListItem>
              <Text>{name}</Text>
        </ListItem>
      </List>
    );
  }
}

export default DogListItem;
