   
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import { StackNavigator} from 'react-navigation';
 
import Splash2 from './screens/Splash2';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Schedule from './screens/Schedule';
import Fees from './screens/Fees';
import Marks from './screens/Marks';
import Attendance from './screens/Attendance';
//import  StackHome from './screens/Profile';
 
 

 
 
const Application =  StackNavigator(
  {
   // Splash2 : {screen:Splash2},
    //Login : {screen:Login},
    Profile : {screen:Profile},
   // Schedule : {screen:Schedule},
   // Fees : {screen:Fees},
    //Marks : {screen:Marks},
    //Attendance: {screen:Attendance}
     
  },
  // {  
  //   mode : 'modal',
  //   headerMode : 'none'

  // }
);
 
 
 class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <Application/> 
        
       </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor : '#000'
    }
});
export default App;