import React from 'react';
import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';
import moment from 'moment';


function MomentExamples() {

    const logExamples = () => {
      console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
      // Additional submit logic
    };
  return (
    <View>
      <Button
        onPress={logExamples}
        mode="elevated"
        style={buttonStyles.button}
      >
        <Text style={textStyles.buttonText}>Log Moment</Text>
      </Button>
    </View>
  );
}

export default MomentExamples;