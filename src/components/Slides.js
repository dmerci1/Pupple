import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import SwipeScreen from '../screens/SwipeScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Slides extends Component {
  lastSlide(index) {
    if (index === this.props.data.length -1) {
      return (
        <SwipeScreen />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View key={slide.text}
        style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.lastSlide(index)}
        </View>
      );
    });
  }
  render() {
    return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    </View>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,

    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT

  },
  textStyle: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
    borderRadius: 10
  }
};
export default Slides;
