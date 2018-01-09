import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection } from '../reusables'

class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <CardSection />
        <TextInput
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          underlineColorAndroid={'transparent'}
          style={{ height: 20, paddingVertical: 0, width: 100 }}
        />
        <CardSection />

        <CardSection>
          <Button large title="Log In" buttonStyle={styles.buttonStyle} />
        </CardSection>
      </Card>
    );
  }
}
  const styles = {
    buttonStyle: {
      backgroundColor: '#0288D1',
      marginTop: 15,
      borderRadius: 10,
      flex: 1
    }
  };


export default LoginForm;
