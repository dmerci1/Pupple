import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, View, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Container, Content, Header, Button, Left } from 'native-base';
import DogForm from '../components/DogForm';
import { dogUpdate, dogSave } from '../actions';
import { NavigationActions } from 'react-navigation';

class EditDog extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Edit Employee'
  });

  constructor(props) {
      super(props);

      this.state = {
          showModal: false
      };

      this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
      const { navigation, dogUpdate } = this.props;
      _.each(navigation.state.params.dog, (value, prop) => {
          dogUpdate({ prop, value });
      });
  }

  onEditSubmit() {
      const { name, breed, gender, age, bio, uid, navigation } = this.props;
      this.props
          .dogSave({ name, breed, gender, age, bio, uid });
  }
  render() {
      return (
          <ScrollView>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={styles.container}>
                      <DogForm />
                      <View style={styles.formControl}>
                          <Button
                              accessibilityLabel="Update employee data"
                              disabled={this.props.processing}
                              loading={this.props.processing}
                              onPress={this.onEditSubmit}

                          >
                          <Text>Update</Text>
                          </Button>
                          <Button
                          block
                          onPress={() => this.props.navigation.navigate('doglist')}
                          >
                            <Text>Back to Dog List</Text>
                          </Button>
                      </View>

                  </View>
              </TouchableWithoutFeedback>

          </ScrollView>
      );
  }
}

const mapStateToProps = (state) => {
  const { name, breed, gender, age, bio } = state.dogForm;

  return { name, breed, gender, age, bio };
};

export default connect(mapStateToProps, { dogUpdate, dogSave })(EditDog);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20
    },
    formControl: {
        marginBottom: 15
    },
    dialaogText: {
        color: '#565555',
        fontSize: 18,

    }
});
