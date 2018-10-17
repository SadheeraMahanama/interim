 

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

 
 
export default class Logout extends Component  {

  static navigationOptions = ({navigation}) => {
    const {params = {} } = navigation.state;
    let headerRight = (
      <Button
       title = "save"
       onPress={params.handleSave ? params.handleSave : () => null}
      />
    );
    if(params.isSaving){
      headerRight = <ActivityIndicator/>
    }
    return{headerRight};
  };
    
 

  componentDidMount(){
    this.props.navigation.setParams({ logout: this._logout});
  }

  _logout(){
    console.log('Logout');
  }

 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Fees
        </Text>
         
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18FFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
    