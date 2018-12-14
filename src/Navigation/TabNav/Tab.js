import React, { Component } from 'react';

import{
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Marks from './Screens/screens/Marks.js'
import Attendance from './Screens/screens/Attendance.js'
import Schedule from './Laptop.js'
import Fees from './Laptop.js'
import {createMaterialTopTabNavigator} from 'react-navigation'

class Products extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>Product screen of  drawer nav</Text>
            </View>
  
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems : 'center',
        backgroundColor : '#F5FCFF',
        flex : 1,
        justifyContent : 'center',
    },

    // welcome:{
    //     fontSize : 24,
    //     textAlign : 'center'
    // }
});

const Tab = createMaterialTopTabNavigator({
    Marks:{
        screen: Marks
    },
    Attendance:{
        screen: Attendance
    },
    // Mobile:{
    //     screen: Mobile
    // }

})

export default Tab;
 