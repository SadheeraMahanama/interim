 

import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Card, ListItem, Button,Icon,Header } from 'react-native-elements'

 
 
export default class ForgotPassword extends Component  {
 render() {
    return (
        <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.form}>
            <Text style={styles.forgotpwrd}>Forgot Password</Text>
            <Text style={styles.forgotPswrdSubheading}>Enter your email</Text>
            <TextInput 
                    placeholder='Email'
                    //placeholderTextColor='#292929'
                    //secureTextEntry={this.state.showPass} 
                    secureTextEntry={true}
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    //onChangeText={(password) => this.setState({password})}
                    />
                   
            </View>
        </KeyboardAvoidingView>
     
       
    );
  }
} 
const styles= StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1,
        backgroundColor: '#26A69A',
    },
    forgotpwrd:{
        fontSize : 20,
        color: '#fff',
        fontWeight:'300',
    },
    form:{
        marginTop : 90,
        paddingLeft:20,
        paddingRight : 20,
        flex:1,
    },
    forgotPswrdSubheading:{
        color:'#fff',
        fontWeight : '600',
        fontSize : 15,
        marginTop : 10,
        marginBottom : 60,
    }, 

});
 