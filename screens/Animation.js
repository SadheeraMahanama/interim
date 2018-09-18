import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Modal,
    ActivityIndicator,
    Animated,
    Dimensions,
     
} from 'react-native'
 
import  logo from '../images/clz.jpg';
const  h = Dimensions.get('window').height;
const height = h*2;

  class Splash2 extends Component {

    constructor(props) {
        super(props);
    }

    load = () => {
        this.props.navigation.navigate('Login');
    }

    circle = new Animated.Value(0);
    logo = new Animated.Value(0); 
    title = new Animated.Value(0);



    componentDidMount(){
      Animated.sequence([
       Animated.timing(this.circle,{
        toValue:1,
        duration:2000
       }),
       Animated.timing(this.logo,{
        toValue:1,
        duration:500
       }),
       Animated.timing(this.title,{
        toValue:1,
        duration:1000
       })
      ]).start(); 
}
     
  render() {
  const translateY = this.circle.interpolate({
    inputRange:[0,1],
    outputRange:[-height ,0]

  });
  const tranY = this.logo.interpolate({
    inputRange:[0,1],
    outputRange:[-h ,0]

  });
  const  opacity = this.title.interpolate({
    inputRange:[0,1],
    outputRange:[0 ,1]

  });
        
    return (
      <View style={styles.con}>
         <Animated.Image source={logo} style={[styles.icon,  {transform:[{translateY :tranY }] }]}/>
         <Animated.View style={[styles.circle, {transform:[{translateY }] }]}/>
         <Animated.Text style= {{marginTop:10,color:'white',fontSize:30,opacity}}>Welcome to ClzMate!</Animated.Text>
    </View>   
    );
  }  
}  


const styles = StyleSheet.create({
  con : {
    flex:1,
    backgroundColor:'white', 
    justifyContent:'center',
    alignItems:'center',
  },
   
   icon:{
      width: 100,
      height: 100,
      borderRadius : 75,
    },
  circle:{
      width:height,
       height,
      position : 'absolute',
      borderRadius:  h,
      backgroundColor: '#6A1B9A',
      zIndex: -1   
  }
   
  
})  ;
export default Splash2;

