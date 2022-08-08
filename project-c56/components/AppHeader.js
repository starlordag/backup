import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style = {styles.textContainer}>
       <Text style={styles.text}> DJ Booth App App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor:'white'
  },
  text:{
    color:'black',
    padding:20,
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center'
  }
})

export default AppHeader