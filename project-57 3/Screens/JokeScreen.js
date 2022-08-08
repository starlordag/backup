import React, {Component} from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class JokeScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <Text>JokeScreen</Text>
      </View>
    )
  }
}
