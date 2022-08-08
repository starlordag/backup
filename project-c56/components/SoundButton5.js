import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

class SoundButton5 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0494f928d00937950fb8e30d84a7b9d4' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={ styles.button
        }
        onPress={this.playSound}>
        <Text
          style={ styles.buttonText
          }>
          SoundButton 5
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    marginBottom: 0,
    marginLeft: 70,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 60,
    backgroundColor: 'orange',
    borderRadius: 100
  },
  buttonText:{
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default SoundButton5;