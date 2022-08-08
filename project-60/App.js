import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ScreenSummeries from './Screens/ScreenSummeries';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render() {
    return (
        <AppContainer/>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  ScreenSummeries: ScreenSummeries,
})

const AppContainer=createAppContainer(AppNavigator);