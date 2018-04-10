import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Drawer } from 'native-base';
import { fetchAllDogs } from '../actions';
import DogCard from './DogCard';

class SwipeScreen extends Component {
  constructor(props) {
  super(props);
//  this.renderRow = this.renderRow.bind(this);
}
  componentWillMount() {
    this.props.fetchAllDogs();
    this.props.navigation.navigate('DrawerClose');
  }

  componentWillReceiveProps(nextProps) {

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
            <FlatList
              data={this.props.dogs}
              renderItem={
                ({ item }) => (
                  <DogCard
                    dog={item}
                    //navigation={this.props.navigation}
                    //onRowPress={(dog) => this.showDog(dog)}
                  />
                )
              }
              keyExtractor={(item, index) => item.uid}
            />
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

export default connect(mapStateToProps, { fetchAllDogs })(SwipeScreen);
