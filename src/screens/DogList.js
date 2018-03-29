import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import { Container, Content, Header, Button, Left, Body } from 'native-base';
import { fetchDogs } from '../actions';
import DogListItem from './DogListItem';

class DogList extends Component {

  constructor(props) {
  super(props);
  this.renderRow = this.renderRow.bind(this);
}
  componentWillMount() {
    this.props.fetchDogs();
  }

  renderRow({ item }) {
    return (
     <DogListItem dog={item} navigation={this.props.navigation} />
   );
}

  render() {
    console.log(this.props);
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
              renderItem={this.renderRow}
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
