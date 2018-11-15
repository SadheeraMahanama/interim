 

import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, ListItem, Button,Icon,Header } from 'react-native-elements'

 
 
export default class ForgotPassword extends Component  {
 render() {
    return (
        <KeyboardAvoidingView style={StyleSheet.wrapper} behavior="padding">
            <Text>Hello Sadhee</Text>
        </KeyboardAvoidingView>
     
       
    );
  }
}
const styles= StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1,
        backgroundColor: '#69F0AE',
    }
})
 