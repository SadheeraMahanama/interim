 
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
 
import {  DrawerNavigator,DrawerItems } from 'react-navigation';
//import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import LogoutScreen from './screens/LogoutScreen';
//import ExitScreen from './screens/ExitScreen';
 
import { Container, Header, Body , Content, Icon} from 'native-base';

const CustomerDrawerContentComponent = (props) => (
  <Container>
    <Header style={{height:100,backgroundColor:'#9C27B0'}}>
      <Body>
        <Image source={require('./images/clz.jpg')}
        style={styles.drawerImage}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

 
 
const Application1 =  DrawerNavigator(
  {
     
    Messages : HomeScreen,
    Settings : SettingsScreen,
    Logout : LogoutScreen,
    Exit : ExitScreen

  },
  {
     initialRouteName:'Messages',
     contentComponent : CustomerDrawerContentComponent,
     drawerOpenRoute: 'DrawerOpen',
     drawerCloseRoute: 'DrawerClose',
     drawerToggleRoute : 'DrawerToggle'
  }
);
 
 
  class Drawer extends Component {
  render() {
    return (
      <Application1/> 
       
    );
  }
}

const styles = StyleSheet.create({
   drawerImage:{
     height:100,
     width:100,
     borderRadius:75

   }
});

export default Drawer;