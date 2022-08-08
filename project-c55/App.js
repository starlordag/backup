import * as React from 'react';
import {Text, Button, View} from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component{
  playSound=async()=>{
    Audio.setIsEnabledAsync(true)
    await Audio.Sound.createAsync(
      {uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }

  render(){
    return(
      <Button title = "Sound 1" color = "purple" onPress={this.playSound}/>
    );
  }
}

class SoundButton2 extends React.Component{
  playSound=async()=>{
    Audio.setIsEnabledAsync(true)
    await Audio.Sound.createAsync(
      {uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8dd964f12dfbc715b1fc221da53ee65a'},
      {shouldPlay: true}
    );
  }

  render(){
    return(
      <Button title = "Sound 2" color = "green" onPress={this.playSound}/>
    );
  }
}

class SoundButton3 extends React.Component{
  playSound=async()=>{
    Audio.setIsEnabledAsync(true)
    await Audio.Sound.createAsync(
      {uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4cb3279dc09ffedadfbd68c5b36046b3'},
      {shouldPlay: true}
    );
  }

  render(){
    return(
      <Button title = "Sound 3" color = "blue" onPress={this.playSound}/>
    );
  }
}

class SoundButton4 extends React.Component{
  playSound=async()=>{
    Audio.setIsEnabledAsync(true)
    await Audio.Sound.createAsync(
      {uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/58118d86565ddf267b8da4c74f77715f'},
      {shouldPlay: true}
    );
  }

  render(){
    return(
      <Button title = "Sound 4" color = "red" onPress={this.playSound}/>
    );
  }
}

class SoundButton5 extends React.Component{
  playSound=async()=>{
    Audio.setIsEnabledAsync(true)
    await Audio.Sound.createAsync(
      {uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0494f928d00937950fb8e30d84a7b9d4'},
      {shouldPlay: true}
    );
  }

  render(){
    return(
      <Button title = "Sound 5" color = "orange" onPress={this.playSound}/>
    );
  }
}

class Stop extends React.Component{
  stopSound=async()=>{
    Audio.setIsEnabledAsync(false)
  }

  render(){
    return(
      <Button title = "stop the music" color = "violet" onPress={this.stopSound}/>
    );
  }
}

export default class App extends React.Component{
  render(){
    return(
      <View style={{marginTop:200}}>
        <SoundButton/>
        <SoundButton2/>
        <SoundButton3/>
        <SoundButton4/>
        <SoundButton5/>
        <Stop/>
      </View>
    )
  }
}