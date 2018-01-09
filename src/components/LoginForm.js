import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Card, CardSection, Input } from '../reusables';

class LoginForm extends Component {
  state = { email: '', password: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid={'transparent'}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid={'transparent'}
          />
        </CardSection>
        
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
      flex: 1,
      width: 200,
      alignSelf: 'stretch',
    }
  };


export default LoginForm;
