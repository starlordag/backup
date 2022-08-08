import React, {Component} from 'react'
import {Text,View,StyleSheet, Alert} from 'react-native'

export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text>Login</Text>
            </View>
        )
    }
    
    handleLogin = (email,password)=>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(()=>{n")
        })
            this.props.navigation.navigate("HomeScree
        .catch(error=>{
            Alert.alert(error.message("wrong >:()"))
        })
    }
}