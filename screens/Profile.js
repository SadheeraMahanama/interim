import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Card, ListItem, Button,Icon,Avatar } from 'react-native-elements'
//import Icon from 'react-native-vector-icons/Ionicons';
  


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tokenValue: '',
        }
    }

    componentDidMount() {
        this.getToken().done();
    }

    getToken = async () => {
        try {
            this.tokenValue = await AsyncStorage.getItem('token')
        } catch (error) {
            alert('Unknown error, token not retrive');
        }
    }

    logout = () => {
        fetch('https://mighty-taiga-45064.herokuapp.com/logout', {
            method: 'GET',
            headers: {
                'Authorization': this.tokenValue,
                'Content-type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.state === true) {
                    alert('Suucssfully Logout')
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Login' })],
                    });
                    this.props.navigation.dispatch(resetAction);
                } else {
                    alert(res.msg)
                }
            })
            .done();
    }


    render() {
        return (
        <View style={styles.container}>

            <View style={styles.top}>
                <View style={styles.profileImage}>
                 <Image source={require('../images/user.png')} style={styles.img}/>
                </View>
                 <View style={styles.txt}>
                 <Text style = {styles.topText}>Name:</Text>
                 <Text style = {styles.topText}>Index:</Text>
                 </View>
                  
            </View>

                 
            <View style={styles.bottom}>

                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}>
                        <Card  image={require('../images/schedule.png')} style={styles.icon}>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#616161'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Schedule'  />
                        </Card> 
                    </View>
                </View>

                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}>
                        <Card  image={require('../images/fees.png')} style={styles.Icon}>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#616161'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Class Fees' />
                        </Card> 
                    </View>
                </View>

                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}>
                        <Card  image={require('../images/marks.png')} style={styles.icon} >
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#616161'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Marks' />
                        </Card> 
                    </View>
                </View>

                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}>
                        <Card  image={require('../images/attendence.png')} style={styles.icon}>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#616161'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Attendance' />
                        </Card> 
                    </View>
                </View>

                    
                    

            </View>
  
  
  
        </View>


             
         

      


            
                
                
           
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
     },
     top:{
        height: '25%',
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#FFF176',
     },
     profileImage:{
         flexDirection : 'row', 
         width: 100,
         height:100,
         alignItems: 'center',
        justifyContent : 'center',
        // alignItems : 'flex-start',
         //justifyContent : 'flex-start',
         borderRadius:100,
         borderWidth:4,
         borderColor: '#fff',
         backgroundColor:'#eee',
         //marginBottom : '5%',
         //marginRight: '50%',
          
     },
     
     bottom:{
         height: '75%',
         backgroundColor:'#B3E5FC',
         flexDirection : 'row',
         flexWrap: 'wrap',
         padding:5,
     },
     bottomItem:{
         width:'50%',
         height:'50%',
         padding : 5,
     },
     bottomItemInner:{
         flex:1,
         backgroundColor : '#fff',
          
     },
    topText:{
         
        fontSize: 24,
        color : 'black',
        fontWeight : 'bold',
     },
     icon:{
         height: 10,
         width : 10,

     },
     txt:{
        //marginBottom : '55%',
       // marginLeft : 200,
     },
     img:{
         height:60,
         width: 60,
         //borderRadius:75,
     }
     
});

export default Profile;