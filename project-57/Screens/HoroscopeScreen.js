import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <Text>HoroscopeScreen</Text>
      </View>
    )
  }
}
