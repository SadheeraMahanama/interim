 
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

 import { Button, Container, Header, Content, Left,Icon } from 'native-base'
  
 
 
 
 class  SettingsScreen extends Component {
     static navigationOptions ={
         drawerIcon:(
             <Image source = {require('../images/settings.png')}
             style={{height:20,width:20}}
             />
         )
     }
  render() {
    return (
        <Container>
            <Header style={{ backgroundColor:'#9C27B0'}}>
                <Left style={{flex:1}}>
                <Icon name = "ios-menu" 
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}/> 
                </Left>
            </Header>  
            <Content contentContainerStyle={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}> 
                <Text>Settings Screen</Text>
            </Content>
        </Container>
        
    );
  }
}

const styles = StyleSheet.create({
   
});

export default  SettingsScreen;

 
 