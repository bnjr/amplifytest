import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import CountryPicker from "react-native-country-picker-modal";

import { containerStyles } from "../styles/containerStyles";
import { textStyles } from "../styles/textStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { parsePhoneNumberFromString, AsYouType } from "libphonenumber-js";

type CountryCode = "US" | "CA" | "GB" | "IN";

export const SignUpInputPhoneNumber2 = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  //const [formattedValue, setFormattedValue] = useState("");
  const [formattedNumber, setFormattedNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(false);
  const phoneInput = useRef(null);

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setPhoneNumber("");
    setFormattedNumber("");
    setIsValidNumber(false);
  };

  const handleSignUp = () => {
    // Handle the sign-up process with phoneNumber and country data
  };

  const navigateToLogin = () => {
    // Navigation logic to go to the login screen
  };

  const handlePhoneNumberChange = (text) => {
    const newNumber = new AsYouType(countryCode).input(text);
    setPhoneNumber(text);
    setFormattedNumber(newNumber);

    // Parse the phone number from string
    const parsedPhoneNumber = parsePhoneNumberFromString(
      newNumber,
      countryCode
    );
    if (parsedPhoneNumber) {
      setIsValidNumber(parsedPhoneNumber.isValid());
    } else {
      setIsValidNumber(false);
    }
  };
  return (
    <View style={containerStyles.usableScreenCentered}>
      <Text style={textStyles.headingText}>Enter your phone number</Text>
      <Text style={textStyles.descriptionText}>
        We might save and send a verification code to this phone number.
      </Text>
      <View style={containerStyles.row}>
        <View style={containerStyles.borderBox}>
          <CountryPicker
            countryCode={countryCode}
            onSelect={onSelect}
            withCallingCode
            withFlag
            withFilter
            countryCodes={["US", "GB", "IN", "CA"]}
            visible={false} // The visibility state should be managed to show the picker
          />
          {/* Display selected country code */}
          <TouchableOpacity
            onPress={() => {
              /* Open Country Picker */
            }}
          >
            <TextInput
              style={textStyles.inputText}
              placeholder={country ? `+${country.callingCode}` : ""}
              disabled
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={[[textStyles.inputText], { width:200} ]}
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
          placeholder="(999) 123-4567"
          keyboardType="phone-pad"
        />
        {!isValidNumber && phoneNumber.length > 0 && (
          <Text style={textStyles.errorText}> Invalid</Text>
        )}
      </View>
      <View style={containerStyles.spacer}></View>
      <TouchableOpacity
        onPress={navigateToLogin}
        style={textStyles.displayText}
      >
        <Text style={textStyles.displayText}>
          Already have an account?{" "}
          <Text style={textStyles.urlText}>Log in</Text>
        </Text>
      </TouchableOpacity>
      <View style={containerStyles.spacer}></View>
      <Button
        mode="contained"
        //onPress={handleSignUp}
        onPress={() => navigation.navigate("SignUpOTP")}
        style={buttonStyles.button}
      >
        Sign up
      </Button>
    </View>
  );
};
