import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle} >
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    flexDirection: 'row',
    padding: 5,
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
