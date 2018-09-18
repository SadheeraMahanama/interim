import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage,TextInput,Button,Text } from 'react-native';
import { Icon } from 'react-native-elements';


class Login2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    login = () => {
        fetch('http://polar-meadow-28819.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })

            .then((response) => response.json())
            .then((res) => {

                if (res.state === true) {
                    alert('Successfully Loged in')
                    AsyncStorage.setItem('token', res.JWT_Token);
                    this.props.navigation.navigate('Profile');
                } else {
                    alert('no responce from backend')
                }
            })
            .done();
    }

    render() {
        return (
            <View style={styles.container}>
           
 
                <TextInput   label='Username' style={styles.input} 
                    onChangeText={(email) => this.setState({ email })}/>
                <TextInput   label='Password' style={styles.input} secureTextEntry={true} 
                    onChangeText={(password) => this.setState({ password })}/>
                
                
                <Button title='Press Me' style={styles.btn} onPress={this.login}>
                    Login
                </Button>
                
            </View>
         

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1976d2'
        
    },
    input: {
        paddingHorizontal: 30,
        marginHorizontal: 20,
        borderWidth: 2,
        backgroundColor: '#ffffff'
    },
    btn: {
        marginTop: 10,
        backgroundColor: '#2e7d32',
        width: 200,
    },
    txt: {
        marginTop: 20,
        alignItems: 'flex-end',
        color: 'white',
        fontWeight: 'bold'
    },
    btnText:{
        backgroundColor:'#1976d2'
    }
});



export default Login2;
