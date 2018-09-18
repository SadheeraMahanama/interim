import React, { Component } from 'react'
import {
    Platform,
    
  StyleSheet,
  Text,
  View,
  Button,
ImageBackground,
  Modal,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
 

 

  class Splash extends Component {
    static navigationOptions = {
        header : null 
    }
   
   componentWillMount(){
       setInterval(() => {
           this.props.navigation.navigate('Login');
       },
       1000
    )
   }
  render() {
    return (
     <ImageBackground style={styles.container} source={require('../images/login.jpeg')}> 
        
      <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
      </View> 

      </ImageBackground>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf:'stretch',
    width:  null,
    justifyContent:'center',
    alignItems:'center',
  },
  
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  }
   
  
})  ;
export default Splash;