

import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native'; 

 
import bgImage from '../images/bg.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
  
  const{width:WIDTH}= Dimensions.get('window')

   
  class  Login extends Component {
       
      constructor(props){
          super(props);
          this.state={
               email :'',
               //validated: false ,
               password:'',
               showPass : true,
               press : false,
  
          }
      };

      showPass = () => {
          if(this.state.press == false){
             this.setState({ showPass : false, press : true})
          }else{
            this.setState({ showPass : true, press : false})
          }

      }
       
      login = () => {
        fetch('https://polar-meadow-28819.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })

            .then((response) => response.json())
            .then((res) => {
               /* const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true){
            alert( valid);
        }
        else{
            alert();
        }*/

                if (res.state === true) {
                    alert('Successfully Loged in');
                    AsyncStorage.setItem('token', res.JWT_Token);
                    this.props.navigation.navigate('Profile');
                } else {
                    alert('no responce from backend')
                }
            })
            .done();
    }
 
    /*constructor(props){
        super(props);
        this.state = {
                    email :'',
                    validated: false ,
                     }
      };
    
    go = () => {
               const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
               if (reg.test(this.state.email) === true){
                   alert( valid);
               }
               else{
                   alert();
               }
     }
      render(){
           return(
             <View style={{alignSelf:'center',marginTop:100}}>
                  <TextInput autoCapitalize="none" autoCorrect={false} style={{height:20,width:200,backgroundColor:'blue'}} value={this.setState.email}/>
    
                  <Button onPress={this.go.bind(this)}>
                     <Text> GO </Text>
                  </Button>
              </View>
    
           );
        }
    }*/




  render() {
    return (
        

        
                
               <ImageBackground style={styles.container} source={bgImage}>
               
               <View style={styles.loginContainer}> 
 
                    <Text style={styles.logoText}>ClzMate</Text>
                    
                </View>
                <View style={styles.threeContainer}>
                    <View style={styles.inputContainer}>

                  <Icon name= {'ios-mail'}
                    size = {28}
                    
                    color=  {'rgba(0,0,0,0.8)'}
                    style={styles.inputIcon}
                  /> 
                <TextInput    autoCapitalize="none" autoCorrect={false}   
                    value={this.setState.email}
    
                    placeholder='Email'
                   // placeholderTextColor= {'rgba(255,255,255,0.9)'}
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(email) => this.setState({email})}/>
                   
                </View>

                <View style={styles.inputContainer}> 
                <Icon name= {'ios-unlock'}
                    size = {28}
                    color=  {'rgba(0,0,0,0.8)'}
                    style={styles.inputIcon}
                  /> 
                <TextInput 
                    placeholder='Password'
                    //placeholderTextColor='#292929'
                    secureTextEntry={this.state.showPass} 
                    //secureTextEntry={true}
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(password) => this.setState({password})}/>
                   
            <TouchableOpacity style={styles.btnEye} 
             onPress={this.showPass.bind(this)}>
             <Icon 
            name= {this.state.press == false ? 'ios-eye' : 'ios-eye-off'}
            size = {26}
            color=  {'rgba(0,0,0,0.8)'}
             />
            </TouchableOpacity>
        </View>
                <TouchableOpacity onPress ={this.login.bind(this)}
                style={styles.button}> 
                <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
                
                <Text style= {styles.pwtxt}>Forgot password?</Text>
                </View>
                 
                 
         
                 </ImageBackground>
                
      
    );
  }
}

const styles = StyleSheet.create({
   wrapper:{
       flex:1 
   },
   container:{
       flex:1,
       width:null,
       height:null,
       justifyContent:'center',
       alignItems:'stretch'
   },
   header:{
        
        
       fontSize: 38,
       color:'black',
       fontWeight:'bold'

   },
    logoText:{
    fontSize: 60,
    color:'black',
    fontWeight:'bold',
    marginBottom :  50,
    //opacity:0.5

},
   loginContainer:{
       alignItems:'center',
       paddingLeft:20,
       paddingRight:20

   },
   textInput:{
        
       paddingLeft:65,
       backgroundColor:'rgba(0,0,0,0.35)',
       //color:'rgba(255,255,255,0.7)',
       marginHorizontal : 25,
       marginBottom: 10,
       borderRadius : 35,
       width:  WIDTH - 55,
       height : 55,
       fontSize:20,
       color : 'white'
       
   },
   button:{
    paddingLeft:65,
    marginTop: 20,
    backgroundColor:'rgba(0,0,0,0.8)',
    //color:'rgba(255,255,255,0.7)',
    marginHorizontal : 25,
    marginBottom: '3%',
    borderRadius : 35,
    width:  WIDTH - 55,
    height : 55,
    //justifyContent : 'center'
     
     
     },
   btntext:{
       
       color:'#fff',
       fontSize:26,
       //textAlign : 'center',
        marginTop: 10,
        marginLeft : 60,
   },
   logo:{
       width:100,
       height:100,
   },
   inputIcon:{
       position: 'absolute',
       top: 15,
       left: 50
   },
   inputContainer:{
       marginTop: 0.5
       },
       pwtxt:{
           color : '#007bff',
           fontSize : 18,
           marginLeft :  200,
       },
       threeContainer:{
          marginBottom : 50 
       },
       btnEye:{
        position: 'absolute',
        top: 15,
        right : 50
       }
    

});
export default Login;