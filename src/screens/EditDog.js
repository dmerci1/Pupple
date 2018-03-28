import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Container, Content, Header, Button, Left } from 'native-base';
import DogForm from '../components/DogForm';
import { dogInfo, dogSave } from '../actions';

class EditDog extends Component {
  componentWillMount() {
    _.each(this.props.dog, (value, prop) => {
      this.props.dogInfo({ prop, value });
    });
  }
  onButtonPress() {
    const { name, breed, gender, age, bio } = this.props;
    console.log(dogInfo);
    this.props.dogSave({ name, breed, gender, age, bio, uid: this.props.dog.uid });
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
            <Text>Save</Text>
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

export default connect(mapStateToProps, { dogInfo, dogSave })(EditDog);
