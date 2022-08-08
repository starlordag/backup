import React,{Component} from 'react';
import {Text, Button, View, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';
import SoundButton from './components/SoundButton'
import SoundButton2 from './components/SoundButton2'
import SoundButton3 from './components/SoundButton3'
import SoundButton4 from './components/SoundButton4'
import SoundButton5 from './components/SoundButton5'
import AppHeader from './components/AppHeader'


export default class App extends Component{
  render(){
    return(
      <View style={{marginTop:200}}>
      <AppHeader/>
      <SoundButton/>
      <SoundButton2/>
      <SoundButton3/>
      <SoundButton4/>
      <SoundButton5/>
      </View>
    )
  }
}