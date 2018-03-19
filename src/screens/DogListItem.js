import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Container, Content, Card, Button, Item, Input, Label, List, ListItem } from 'native-base';
import { withNavigation } from 'react-navigation';

class DogListItem extends Component {
  render() {
    const { name } = this.props.dog.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('newdog')} >

          <List>
            <ListItem onPress={() => this.props.navigation.navigate('swipe')}>
                  <Text>{name}</Text>
            </ListItem>
          </List>

      </TouchableWithoutFeedback>
    );
  }
}

export default DogListItem;
