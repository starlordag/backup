import * as React from 'react';
import * as Speech from 'expo-speech';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name:''
    }
  }

  speak = () =>{
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            backgroundColor = {'lightblue'}
            centerComponent = {{text:'Text To Speech',style:{color:'#fff',fontSize:20}}}/>
            <TouchableOpacity style = {styles.button1,{marginLeft:-20,marginTop:200}}>
          <Text style = {styles.buttonText}>Enter Word Here</Text>
           </TouchableOpacity>
          <TextInput
            style = {styles.inputBox}
            onChangeText = {(name) =>{this.setState({name:name})}}
            value = {this.state.name}/>
          <TouchableOpacity style = {styles.button}
          onPress = {() =>{this.speak()}}>
          <Text style = {styles.buttonText}>Click Here To Hear The Word</Text>
           </TouchableOpacity>
        </SafeAreaProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox:{
    marginTop:10,
    marginLeft:0,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4,
    outline:'none'
  },
  buttonText:{
    marginLeft:20,
    fontSize: 30,
    textAlign: 'center',
    fontWeight:'bold'
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 150,
    backgroundColor:'lightblue'
  },
});
