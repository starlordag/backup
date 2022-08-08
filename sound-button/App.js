import * as React from 'react';
import {Text, Button, View} from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component{
  playSound=async()=>{
    await Audio.Sound.createAsync(
      {uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }

  render(){
    return(
      <Button title = "Sound Button 1" color = "red" onPress={this.playSound}/>
    );
  }
}

class SoundButton1 extends React.Component{
  playSound=async()=>{
    await Audio.Sound.createAsync(
      {uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8dd964f12dfbc715b1fc221da53ee65a'},
      {shouldPlay: true}
    );
  }

  render(){
    return(
      <Button title = "Sound Button 2" color = "blue" onPress={this.playSound}/>
    );
  }
}

export default class App extends React.Component{
  render(){
    return(
      <View style={{marginTop:200}}>
        <SoundButton/>
        <SoundButton1/>
      </View>
    )
  }
}