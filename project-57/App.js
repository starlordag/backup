import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import JokeScreen from './Screens/JokeScreen';
import HoroscopeScreen from './Screens/HoroscopeScreen';
import TopNewsScreen from './Screens/TopNewsScreen';
import WeatherScreen from './Screens/WeatherScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  HoroscopeScreen: HoroscopeScreen,
  TopNewsScreen: TopNewsScreen,
  WeatherScreen: WeatherScreen
})

const AppContainer=createAppContainer(AppNavigator)
