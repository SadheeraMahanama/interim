 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import { Dialog } from 'react-native-simple-dialogs'; 
class About extends Component {
    
  static navigationOptions = {
    drawerIcon:(
         <Image
        style={{height:24,width:24}}
        source={require('../images/about.png')}
        />
      )
    }

  render() {
    return (
       <Container>
           <Header>
               <Left>
                   <Icon name="ios-menu"
                         onPress={() =>
                         this.props.navigation.navigate('DrawerOpen')}
                   />

               </Left>
           </Header>
           <Content>
               <Text>About</Text>
           </Content>
       </Container>
    );
  }
}

export default About;