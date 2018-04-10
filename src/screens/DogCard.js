import React, { Component } from 'react';
import { Text } from 'react-native';
import { List, ListItem, Card, CardItem } from 'native-base';

class DogCard extends Component {
  constructor(props) {
    super(props);

    //this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
//    const { dog, navigation } = this.props;
  //  navigation.navigate('editdog', { dog });
  }

  render() {
    const { dog } = this.props;

    return (
      <Card>
        <CardItem>
          <Text> { dog.name } </Text>
        </CardItem>
        <CardItem>
          <Text> { dog.breed } </Text>
        </CardItem>
        <CardItem>
          <Text> { dog.gender } </Text>
        </CardItem>
        <CardItem>
          <Text> { dog.age } </Text>
        </CardItem>
      </Card>
    );
  }
}

export default DogCard;
