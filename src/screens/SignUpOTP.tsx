import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { containerStyles } from "../styles/containerStyles";
import { textStyles } from "../styles/textStyles";

export const SignUpOTP: React.FC = () => {
  const [OTP, setOTP] = useState(new Array(6).fill(""));
  const textInputRefs = useRef<Array<TextInput | null>>([]);

  const handleOTPChange = (text: string, index: number) => {
    const newOTP = [...OTP];
    newOTP[index] = text;
    setOTP(newOTP);

    // Auto-focus to next TextInput after a digit is entered
    if (text && index < 5) {
      textInputRefs.current[index + 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
  };

  return (
    <View style={containerStyles.usableScreenCentered}>
      <Text style={textStyles.headingText}>6 digit-code</Text>
      <Text style={textStyles.displayText}>
        Enter the code we send to (504) 968-4139
      </Text>
      <View style={containerStyles.spacer} />
      <View style={containerStyles.OTPContainer}>
        {OTP.map((digit, index) => (
          <TextInput
            key={index}
            style={textStyles.OTPInput}
            value={digit}
            onChangeText={(text) => handleOTPChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
            ref={(ref) => (textInputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <Text style={textStyles.displayText}>Code will expire in 4:57s</Text>
      <View style={containerStyles.spacer} />
      <TouchableOpacity onPress={handleResendOTP}>
        <Text style={textStyles.urlText}>Resend</Text>
      </TouchableOpacity>
    </View>
  );
};
