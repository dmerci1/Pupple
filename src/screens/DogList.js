import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, TouchableHighlight } from 'react-native';
import { Container, Content, Header, Button, Left, Body, List, ListItem } from 'native-base';
import { fetchDogs } from '../actions';
import DogListItem from './DogListItem';

class DogList extends Component {
  componentWillMount() {
    this.createDataSource();
  }

createDataSource() {
    this.props.fetchDogs();
}
  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
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
            <FlatList
              data={this.props.dogs}
              renderItem={
                ({ item }) => <ListItem onPress={() => this.props.navigation.navigate('editdog', {
                  itemId: item.uid,
        })}>
                  <Text>{ item.name }</Text>
                  </ListItem>
                }
              keyExtractor={dog => dog.uid}
            />
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

const mapStateToProps = state => {
  const dogs = _.map(state.dogs, (val, uid) => {
    return { ...val, uid };
  });

  return { dogs };
};

export default connect(mapStateToProps, { fetchDogs })(DogList);
