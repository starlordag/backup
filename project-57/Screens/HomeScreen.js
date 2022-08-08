import React,{Component} from 'react';
import {Header, Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <View>
      <View style = {styles.buttonContainer}>
      <TouchableOpacity style = {[styles.button, {backgroundColor: 'white'}]}
      onPress ={() => this.props.navigation.navigate('JokeScreen')}>
      <Text style = {styles.buttonText}>Read A Joke</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {[styles.button, {backgroundColor: 'white'}]}
      onPress ={() => this.props.navigation.navigate('HoroscopeScreen')}>
      <Text style = {styles.buttonText}>Horoscope</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {[styles.button, {backgroundColor: 'white'}]}
      onPress ={() => this.props.navigation.navigate('WeatherScreen')}>
      <Text style = {styles.buttonText}>Weather</Text>
      </TouchableOpacity> 
      <TouchableOpacity style = {[styles.button, {backgroundColor: 'white'}]}
      onPress ={() => this.props.navigation.navigate('TopNewsScreen')}>
      <Text style = {styles.buttonText}>Top News</Text>
      </TouchableOpacity>
      <View style = {styles.ratingContainer}>
      <Text style = {{
        textAlign:"center",
        margin:50
        }}>
      Rate Us</Text>
      <TouchableOpacity>
        <Image
          style={{
            width:50,
            height:50,
            marginLeft:40
          }}
          source={require('thumbsup.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{
            width:50,
            height:50,
            marginTop:-35,
            marginLeft: 115
          }}
          source={require('thumbsdown.png')}/>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'green',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 50,
    width: 200,
    height: 50
  },
  buttonText:{
    color: 'black',
    textAlign: 'center',
  },
  buttonContainer:{
    alignSelf:'center',
    marginTop: 50
  }
});