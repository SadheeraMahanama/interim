   
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
// } from 'react-native';

// import { StackNavigator} from 'react-navigation';
 
 
// import Splash2 from './screens/Splash2';
// import Login from './screens/Login';
// import Profile from './screens/Profile';
// import Schedule from './screens/Schedule';
// import Fees from './screens/Fees';
// import Marks from './screens/Marks';
// import Attendance from './screens/Attendance';
// import ForgotPassword from './screens/ForgotPassword';
 
 
 

 
 
// const Application =  StackNavigator(
//   {
//   Splash2 : {screen:Splash2},
//   Login : {screen:Login},
//   Profile : {screen:Profile},
//   Schedule : {screen:Schedule},
//   Fees : {screen:Fees},
//   Marks : {screen:Marks},
//   Attendance: {screen:Attendance},
//   ForgotPassword : {screen:ForgotPassword},
   
//   },
   
// );
 
 
//  class App extends Component {
//   render() {
//     return (

//       <View style = {styles.container}>
//             <Application/>
     
//        </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container:{
//       flex:1,
//       backgroundColor : '#000'
//     }
// });
// export default App;

 //drawer  

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageErrorEventData,Image} from 'react-native';
import { DrawerNavigator,DrawerItems } from 'react-navigation'
import { Container,Content,Header,Body,Icon } from 'native-base';

import Chat from './Components/Chat'
import Logout from './Components/Logout'
import Exit from './Components/Exit'
import Settings from './Components/Settings'
import Help from './Components/Help'
import Share from './Components/Share'
import About from './Components/About'
import Rate from './Components/Rate'

class App extends Component {
  render() {
    return (
       <MyDrawer/>
    );
  }
}

const CustomerDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.header}>
      <Body>
        <Image
        style={styles.DrawerImage}
        source={require('./images/clz.jpg')}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const MyDrawer =  DrawerNavigator({
  Chat: {
    screen: Chat
  },
  Logout: {
    screen: Logout
  },
  Exit: {
    screen: Exit
  },
  Settings:{
    screen: Settings
  },
  Help:{
    screen: Help
  },
  Share:{
    screen: Share
  },
  About:{
    screen: About
  },
  Rate:{
    screen: Rate
  },

},{
  initialRouteName:'Chat',
  contentComponent:CustomerDrawerContentComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle'
}
)



const styles = StyleSheet.create({
  DrawerImage: {
     height:150,
     width:150,
     borderRadius:75,

  },
  header:{
    height:200,
    backgroundColor:'#fff',
    //marginLeft:25,
  }
  
});

export default App;

   