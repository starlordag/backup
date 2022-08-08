import React, {Component} from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HoroscopeScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <Text>HoroscopeScreen</Text>
      </View>
    )
  }
}
