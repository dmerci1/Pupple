import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Container, Content, Card, Button, Item, Input, Label, List, ListItem } from 'native-base';

class DogListItem extends Component {
  render() {
    const { name } = this.props.dog.item;

    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('swipe')} >

          <List>
            <ListItem onPress={() => this.props.navigation.navigate('swipe')}>
                  <Text>Hello</Text>
            </ListItem>
          </List>

      </TouchableHighlight>
    );
  }
}

export default DogListItem;
