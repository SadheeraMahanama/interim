 

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

 
 
export default class App extends Component  {
  static navigationOptions={
     title : "Marks"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Marks
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
    backgroundColor: '#FF1744',
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
  