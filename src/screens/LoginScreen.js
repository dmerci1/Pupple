import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Container } from 'native-base';
import { Card, CardSection, Input, Spinner } from '../components/reusables';

class LoginScreen extends Component {
  state = { email: '', password: '', error: '', loading: false, loggedIn: null };

  componentWillMount() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
      this.props.navigation.navigate('home');
    } else {
      this.setState({ loggedIn: false });
      this.props.navigation.navigate('login');
    }
  });
}
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    if (email === '' && password === '') {
      this.setState({ error: 'Missing e-mail and password ', loading: false });
    } else if (email !== '' && password === '') {
      this.setState({ error: 'must enter password ', loading: false });
    }
      else if (email === '' && password !== '') {
      this.setState({ error: 'must enter e-mail', loading: false });
    } else {
    firebase.auth().signInWithEmailAndPassword(email, password)
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
        });
      }
      renderButton() {
        if (this.state.loading) {
          return <Spinner size="small" />;
        }
          return (
        //  <CardSection>
            <Button
            onPress={this.onButtonPress.bind(this)}
            block warning
            >
           <Text>Log In</Text>
           </Button>
        //  </CardSection>
          );
      }

  render() {
      const { navigate } = this.props.navigation;
    return (
      <Container>
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

        <Text style={styles.errorText}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
      <Button
      large danger
      style={styles.buttonStyle}
      onPress={() => { navigate('register'); }}
      ><Text>Sign Up</Text></Button>
    </Container>
    );
  }
}
  const styles = {
    buttonStyle: {
      marginTop: 15,
      width: 200,
      borderRadius: 10,
      alignSelf: 'center',
    },
    errorText: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  };


export default LoginScreen;
