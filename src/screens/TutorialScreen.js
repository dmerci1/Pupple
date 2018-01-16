import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';


//Slides that introduce the user to the app
const SLIDE_DATA = [
  { text: 'Intro 1', color: 'red' },
  { text: 'Intro 2', color: 'red' },
  { text: 'Intro 3', color: 'red' },
  { text: 'Login Screen', color: 'red' }
];
class TutorialScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('Swipe');
  }
  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <View style={styles.background}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}
const styles = {
  background: {
    flex: 1,
    backgroundColor: 'red'
  }

};
export default TutorialScreen;
