import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import Profile from './screens/Profile';
import Schedule from './screens/Schedule';

export default StackHome = StackNavigator({
     Profile:{
        screen: Profile,
        navigationOptions: () => ({
            title : 'Profile'
        })
    },
    Schedule:{
        screen: Schedule,
        navigationOptions: () => ({
            title : 'Profile'
        })
    },

},{
    initialRouteName: 'Profile'
});

 
export default class  Stack  extends Component  {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
           
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
