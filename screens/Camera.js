 

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

 
 
export default class App extends Component  {
  static navigationOptions={
     title : "Camera"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Open Camera
        </Text>
         
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42A5F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
  