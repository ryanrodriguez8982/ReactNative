
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { render } from 'react-dom';

class Home extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return(
      <View><Text>Home Component</Text></View>
    );
  }
  
}

export default Home;