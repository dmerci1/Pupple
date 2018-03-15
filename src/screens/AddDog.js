import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dogInfo, dogAdd } from '../actions';
import { Text } from 'react-native';
import { Container, Content, Body, Header, Form, Item, ListItem, CheckBox, Label, Input, Button, Left, Picker } from 'native-base';

class AddDog extends Component {
  onButtonPress() {
    const { name, breed, gender, age, bio } = this.props;

    this.props.dogAdd({ name, breed, gender, age, bio });
    this.props.navigation.navigate('doglist');
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
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
                <Input
                value={this.props.name}
                onChangeText={value => this.props.dogInfo({ prop: 'name', value })}
                />
              </Item>
              <Text>Breed</Text>
               <Picker
                mode="dropdown"
                selectedValue={this.props.breed}
                onValueChange={value => this.props.dogInfo({ prop: 'breed', value })}
                >
                  <Item label="Labrador" value="Labrador" />
                  <Item label="Poodle" value="Poodle" />
                  <Item label="Doxin" value="Doxin" />
                  <Item label="Beagle" value="Beagle" />
                </Picker>
                  <Text>Gender</Text>
                   <Picker
                    mode="dropdown"
                    selectedValue={this.props.gender}
                    onValueChange={value => this.props.dogInfo({ prop: 'gender', value })}
                    >
                      <Item label="Male" value="Male" />
                      <Item label="Female" value="Female" />
                    </Picker>
                 <Item stackedLabel>
                    <Label>Age</Label>
                      <Input
                      value={this.props.age}
                      onChangeText={value => this.props.dogInfo({ prop: 'age', value })}
                      />
                    </Item>
                    <Item stackedLabel>
                      <Label>Bio</Label>
                        <Input
                        value={this.props.bio}
                        onChangeText={value => this.props.dogInfo({ prop: 'bio', value })}
                        />
                      </Item>
                      <Button
                      block info
                      onPress={this.onButtonPress.bind(this)}
                      >
                        <Text>Add Dog</Text>
                      </Button>
                </Form>
              </Content>
            </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, breed, gender, age, bio } = state.dogForm;

  return { name, breed, gender, age, bio };
};

export default connect(mapStateToProps, { dogInfo, dogAdd })(AddDog);
