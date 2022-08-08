import React, {Component} from "react";
import {Button, View} from 'react-native';

export default class App extends Component{
  displayAlert(){
    alert("Sound 1 Playing")
  } 
  secondButton(){
    alert("Sound 2 Playing")
  } 
  thirdButton(){
    alert("Sound 3 Playing")
  }
  fourthButton(){
    alert("Sound 4 Playing")
  }
  fifthButton(){
    alert("Sound 5 Playing")
  }

  render(){
    return(
      <View style={{marginTop:200}}>
        <Button title="Sound 1" color="purple" onPress={this.displayAlert}/>
        <Button title="Sound 2" color="green" onPress={this.secondButton}/>
        <Button title="Sound 3" color="blue" onPress={this.thirdButton}/>
        <Button title="Sound 4" color="red" onPress={this.fourthButton}/>
        <Button title="Sound 5" color="orange" onPress={this.fifthButton}/>
      </View>
    );
  }
}