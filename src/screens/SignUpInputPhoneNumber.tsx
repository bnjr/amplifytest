import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal'

import { containerStyles } from '../styles/containerStyles'
import { textStyles } from '../styles/textStyles'
import { buttonStyles } from '../styles/buttonStyles'

export const SignUpInputPhoneNumber = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('US')
  const [country, setCountry] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [formattedValue, setFormattedValue] = useState('')

  const onSelect = (country: any) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  const handleSignUp = () => {
    // Handle the sign-up process with phoneNumber and country data
  }

  const navigateToLogin = () => {
    // Navigation logic to go to the login screen
  }
  return (
    <View style={containerStyles.usableScreenCentered}>
      <Text style={textStyles.headingText}>Enter your phone number</Text>
      <Text style={textStyles.descriptionText}>
        We might save and send a verification code to this phone number.
      </Text>
      <View style={containerStyles.row}>
        <View style={containerStyles.borderBox}>
          <CountryPicker
            {...{
              countryCode,
              onSelect,
            }}
            visible={false} // You can control the visibility of the picker with a state
          />
          {/* Display selected country code */}
          <TouchableOpacity
            onPress={() => {
              /* Open Country Picker */
            }}
          >
            <TextInput
              style={textStyles.inputText}
              placeholder={country ? `+${country.callingCode}` : ''}
              disabled
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={textStyles.inputText}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder='(999)-123-4567   '
          keyboardType='phone-pad'
        />
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
        mode='contained'
        //onPress={handleSignUp}
        onPress={() => navigation.navigate('SignUpOTP')}
        style={buttonStyles.button}
      >
        Sign up
      </Button>
    </View>
  )
}
