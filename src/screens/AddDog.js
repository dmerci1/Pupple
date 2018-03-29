import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Text } from 'react-native';
import { Container, Content, Body, Header, Form, Item, ListItem, CheckBox, Label, Input, Button, Left, Picker } from 'native-base';
import { DogForm } from '../components/DogForm';
import { dogUpdate, dogCreate } from '../actions';

class AddDog extends Component {

  onButtonPress() {
    const { name, breed, gender, age, bio } = this.props;

    this.props.dogCreate({ name, breed, gender, age, bio });
}
  render() {
    return (
      <Container>
        <Header style={{ height: 80 }}>
          <Left>
            <Button
            block
            onPress={() => this.props.navigation.navigate('doglist')}
            >
              <Text>Back to Dog List</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <DogForm {...this.props} />
                <Button
                block info
                onPress={this.onButtonPress.bind(this)}
                >
                  <Text>Add Dog</Text>
                </Button>
              </Content>
            </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, breed, gender, age, bio } = state.dogForm;

  return { name, breed, gender, age, bio };
};

export default connect(mapStateToProps, { dogUpdate, dogCreate })(AddDog);
