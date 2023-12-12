import React, { useRef, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-paper'
import PhoneNumberInput from 'react-native-phone-number-input'

import { containerStyles } from '../styles/containerStyles'
import { textStyles } from '../styles/textStyles'
import { buttonStyles } from '../styles/buttonStyles'
import { excludeCountries } from '../constants/countries'

export const SignUpInputPhoneNumber3 = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [valid, setValid] = useState(false)
  const phoneInput = useRef(null)

  const handleSignUp = () => {
    // Handle the sign-up process with phoneNumber and country data
  }

  const navigateToLogin = () => {
    // Navigation logic to go to the login screen
  }
  const handleOnChangeFormattedText = (text: string) => {
    setPhoneNumber(text)
    const valid = phoneInput.current?.isValidNumber(text)
    console.log('Valid', valid)
    setValid(phoneInput.current?.isValidNumber(text))
  }

  return (
    <View style={containerStyles.usableScreenCentered}>
      <Text style={textStyles.headingText}>Enter your phone number</Text>
      <Text style={textStyles.descriptionText}>
        We might save and send a verification code to this phone number.
      </Text>
      <View style={containerStyles.column}>
        <PhoneNumberInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="US"
          layout="first"
          onChangeText={text => {
            setPhoneNumber(text)
          }}
          onChangeCountry={country => {
            console.log('On change country', country)
          }}
          onChangeFormattedText={handleOnChangeFormattedText}
          withDarkTheme
          withShadow
          autoFocus
          countryPickerProps={{
            excludeCountries,
            preferredCountries: ['US', 'IN'],
          }}
        />

        {valid ? (
          <Text style={textStyles.displayText}>Number is valid</Text>
        ) : (
          <Text style={textStyles.errorText}>Number is invalid</Text>
        )}
      </View>
      <View style={containerStyles.spacer}></View>
      <TouchableOpacity
        onPress={navigateToLogin}
        style={textStyles.displayText}
      >
        <Text style={textStyles.displayText}>
          Already have an account?{' '}
          <Text style={textStyles.urlText}>Log in</Text>
        </Text>
      </TouchableOpacity>
      <View style={containerStyles.spacer}></View>
      <Button
        mode="contained"
        //onPress={handleSignUp}
        onPress={() => navigation.navigate('SignUpOTP')}
        style={buttonStyles.button}
      >
        Sign up
      </Button>
    </View>
  )
}
