 

// import React, { Component } from 'react';
// import {
//   KeyboardAvoidingView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import { Card, ListItem, Button,Icon,Header } from 'react-native-elements'

 
 
// export default class ForgotPassword extends Component  {
//  render() {
//     return (
//         <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
//         <View style={styles.form}>
//             <Text style={styles.forgotpwrd}>Forgot Password</Text>
//             <Text style={styles.forgotPswrdSubheading}>Enter your email</Text>
//             <TextInput 
//                     placeholder='Email'
//                     //placeholderTextColor='#292929'
//                     //secureTextEntry={this.state.showPass} 
//                     secureTextEntry={true}
//                     style={styles.textInput}
//                     underlineColorAndroid={'transparent'}
//                     //onChangeText={(password) => this.setState({password})}
//                     />
                   
//             </View>
//         </KeyboardAvoidingView>
     
       
//     );
//   }
// } 
// const styles= StyleSheet.create({
//     wrapper:{
//         display:'flex',
//         flex:1,
//         backgroundColor: '#26A69A',
//     },
//     forgotpwrd:{
//         fontSize : 20,
//         color: '#fff',
//         fontWeight:'300',
//     },
//     form:{
//         marginTop : 90,
//         paddingLeft:20,
//         paddingRight : 20,
//         flex:1,
//     },
//     forgotPswrdSubheading:{
//         color:'#fff',
//         fontWeight : '600',
//         fontSize : 15,
//         marginTop : 10,
//         marginBottom : 60,
//     }, 

// });

import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert, Image,ScrollView } from 'react-native';
import { Button,Tooltip, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Register extends React.Component {

  constructor(props){
    super(props);    
    this.state = {
        email : '',
      }
      this.send = this.send.bind(this);
  }

   //Customersize Navigation
   static navigationOptions={
    //disable header
    header: null
    }

    goBackHandler= () =>{
      console.log("press Go Back");
      this.props.navigation.navigate('auth');
    }
  
  render() {
    return (
        <View style={styles.container}>
      
            <Text style={styles.ems}>ClzMate</Text>
            <Text style={styles.header}>Forgot Password</Text>
            

            <TextInput
              style = {styles.input} placeholder = 'Enter Your Email'
              onChangeText={(email) => this.setState({email})}
              underlineColorAndorid = 'transparent'
        />

         {/* <TouchableOpacity 
                style={styles.btnSend} 
                onPress={this.send} >                    
                        <Text style={styles.label}>Send</Text>     
            </TouchableOpacity> */}

  <Button onPress={this.send}
  icon={
    <Icon
      name='arrow-right'
      size={15}
      color='white'
    />
  }
  title='Send'
/>
 
            <TouchableOpacity 
                style={styles.btnBack} 
                onPress={this.goBackHandler} >                    
                        <Text style={styles.label}>Back</Text>     
            </TouchableOpacity>
        </View>
      
    );
  }
  dataHandler(data){
    console.log("Data Handler "+data)
  }

  send = () => {
   // console.log("tfjgkh")
    const email = this.state.email;
    //  url =  'https://polar-meadow-28819.herokuapp.com/forgotPassword/:userId';
    url= `https://polar-meadow-28819.herokuapp.com/user/forgotPassword/${email}`;
   // console.log(url)
  //try {
     // fetch('http://192.168.43.148:3000/users/authenticate',{
      fetch(url,{
       method:'GET',
      // headers: {
      //   // 'Accept':'application/json',
      //   // 'Content-Type' : 'application/json',
      // },
      // body:JSON.stringify({
      //   email : this.state.email,
      // })
    })
    .then((response) => console.log(response))
    // .then((response) =>response.json())
    // .then((resJson)=> console.log(resJson.state))

  //   .then((response) => {  
  //       console.log(response);
  //       console.log(response.error);
  //       console.log(response.data);

  //       if(response){
  //          if(response.data){
  //              Alert.alert(response.data)
  //          }
  //          else{
  //           alert(response.error);
  //          }
  //         }      
  //   })
  //   .done();
  // } catch (error) {
  //     alert('No network Connection Found');
  // }
  
//}
}

}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
   
  header:{
    fontSize: 30,
    fontWeight: '500',
    //textAlign:'center'
  },
  input:{
    marginRight: 20,
    marginLeft: 20,
    fontSize:20
  },

  btnSend:{
    backgroundColor: 'red',
    padding: 15,
    width:150,
    borderRadius: 50,
    marginVertical: 20,
    //textAlign:'center',
    alignItems:'center'
  },

  btnBack:{
    backgroundColor: 'green',
    padding: 15,
    width:150,
    borderRadius: 50,
    //textAlign:'center',
    alignItems:'center'
  },

  label:{
    fontWeight:'500',
    color: '#ffffff'
  }
});

 