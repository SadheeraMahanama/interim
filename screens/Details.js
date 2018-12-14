import React, { Component } from 'react';

import{
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Marks from './Marks.js'
import Fees from './Fees.js'
import Schedule from './Schedule'
import Attendance from './Attendance'
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
    First:{
        screen: Schedule
    },
    Second:{
        screen: Fees
    },
    Third:{
        screen: Marks
    },
    Forth:{
        screen: Attendance
    }


})

export default Tab;
 