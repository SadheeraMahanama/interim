import React, { Component } from 'react'
import {
   Platform,
    
  StyleSheet,
  Text,
  View,
  Button, 
  TextInput,
  Modal,
  ActivityIndicator,
  Dimensions,
} from 'react-native'

 
import { createStackNavigator } from 'react-navigation';
//import Splash from './components/Splash'
//import Main from './components/Main'
 import  StackHome from './screens/Profile';

 
export default class  App extends Component {
  render() {
    return (
     
    
      <StackHome/> 
        
        
    

 
    );
  }
}
