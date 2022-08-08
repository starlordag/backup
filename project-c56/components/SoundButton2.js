import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

class SoundButton2 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8dd964f12dfbc715b1fc221da53ee65a' },
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
          SoundButton 2
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
    backgroundColor: 'green',
    borderRadius: 100
  },
  buttonText:{
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default SoundButton2;