import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Communications from 'react-native-communications';
import { Container, Content, Header, Button, Left } from 'native-base';
import DogForm from '../components/DogForm';
import { dogUpdate, dogSave } from '../actions';

class EditDog extends Component {
  componentWillMount() {
    const { navigation, dogUpdate } = this.props;
    _.each(navigation.state.params.dog, (value, prop) => {
      this.props.dogUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, breed, gender, age, bio, phone, uid } = this.props;
    console.log(dogUpdate);
    this.props.dogSave({ name, breed, gender, age, bio, phone, uid });
  }

  onTextPress() {
    const { phone, name } = this.props;

    Communications.text(phone, `Hello Schun, you name is ${name}`);
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
              <Text>Back To Dog List</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <DogForm {...this.props} />
          <Button
           block info
           onPress={this.onButtonPress.bind(this)}
          >
            <Text>Update</Text>
          </Button>
          <Button
           block danger
           onPress={this.onTextPress.bind(this)}
          >
            <Text>Text</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, breed, gender, age, phone, bio } = state.dogForm;

  return { name, breed, gender, age, phone, bio };
};

export default connect(mapStateToProps, { dogUpdate, dogSave })(EditDog);
