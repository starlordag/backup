import React, {Component} from "react";
import {Button, Text, View, Image} from 'react-native';

export default class App extends Component{
  displayAlert(){
    alert("You made a mistake")
  } 
  secondButton(){
    alert("1")
  } 
  thirdButton(){
    alert("11")
  }
  fourthButton(){
    alert("111")
  }
  render(){
    return(
      <View style={{marginTop:200}}>
        <Button title="Click me" color="purple" onPress={this.fourthButton}/>
        <Button title="Click me" color="green" onPress={this.thirdButton}/>
        <Button title="Click me" color="blue" onPress={this.secondButton}/>
        <Button title="Click me" color="red" onPress={this.displayAlert}/>
        <Text>My Second React component</Text>
      </View>
    );
  }
}