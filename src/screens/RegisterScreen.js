import React, { Component } from 'react';
import { Text, Linking } from 'react-native';
import firebase from 'firebase';
import { Button } from 'react-native-elements';
import { Card, CardSection, Input, Spinner } from '../components/reusables';

class RegisterScreen extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password, password2 } = this.state;

    this.setState({ error: '', loading: true });

    if ( email === "" && password === "") {
      this.setState({ error: 'Missing e-mail and password ', loading: false })
    } else if ( email !== "" && password === "") {
      this.setState({ error: 'must enter password ', loading: false })
    }
      else if ( email === "" && password !== "") {
      this.setState({ error: 'must enter e-mail', loading: false })
    } else if ( password !== password2) {
      this.setState({ error: 'passwords dont match', loading: false })
    }
      else {
       firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      }
    }
      onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
      }
      onLoginSuccess() {
        this.setState({
          email: '',
          password: '',
          loading: false,
          error: ''
        })
        this.props.navigation.navigate('tutorial');
      }
      renderButton() {
        if (this.state.loading) {
          return <Spinner size="small" />
        }
          return (
            <Button
            onPress={this.onButtonPress.bind(this)}
            large
            title="Register"
            buttonStyle={styles.buttonStyle} />
          );
      }
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
            placeholder="enter new password"
            label="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid={'transparent'}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="re-enter new password"
            label="re-enter password"
            value={this.state.password2}
            onChangeText={password2 => this.setState({ password2 })}
            underlineColorAndroid={'transparent'}
          />
        </CardSection>

        <Text style={styles.errorText}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <CardSection>
          <Button
          onPress={() => this.props.navigation.navigate('auth')}
          large
          title="Back to Sign In"
          buttonStyle={styles.buttonStyle} />
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
    },
    errorText: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  };


export default RegisterScreen;
