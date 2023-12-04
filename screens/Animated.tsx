import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from "react-native-paper";

import { buttonStyles } from '../styles/buttonStyles';
import { containerStyles } from '../styles/containerStyles';
import { textStyles } from '../styles/textStyles';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


function AnimatedBox() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View>
      <Animated.View style={[containerStyles.redbox, { width }]} />
      <Button onPress={handlePress} mode="elevated" style={buttonStyles.button}>
        <Text style={textStyles.buttonText}>Animate</Text>
      </Button>
    </View>
  );
}

export default AnimatedBox;