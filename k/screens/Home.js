import React, {Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text>HomeScreen</Text>
            </View>
        )
    }
}