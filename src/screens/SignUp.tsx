import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Avatar } from "react-native-paper";
import { containerStyles } from "../styles/containerStyles";
import { textStyles } from "../styles/textStyles";
import { avatarSize } from "../styles/imageStyles";
import { buttonStyles } from "../styles/buttonStyles";
import ReviewScroller from "./ReviewScroller";

export const SignUp = ({ navigation }) => {
  const LeftContent = (props) => (
    <Avatar.Image
      size={avatarSize}
      source={require("../assets/images/dilesh.jpg")}
    />
  );

  // Define your handle sign up functions here
  const handleSignUpWithPhone = () => {
    // Handle sign up with phone
  };

  const handleSignUpWithGoogle = () => {
    // Handle sign up with Google
  };

  const handleSignUpWithFacebook = () => {
    // Handle sign up with Facebook
  };

  const handleSignUpWithApple = () => {
    // Handle sign up with Apple
  };

  return (
    <SafeAreaView style={containerStyles.fullscreen}>
      <View style={containerStyles.usableScreenCentered}>
        <View>
          <ReviewScroller />
        </View>
        <View style={containerStyles.usableScreenCentered}>
          <Text style={textStyles.headingText}>Join us</Text>

          {/* Sign up with phone number */}
          <Button
            icon="phone"
            mode="outlined"
            //onPress={handleSignUpWithPhone}
            onPress={() => navigation.navigate("SignUpInputPhoneNumber")}
            style={buttonStyles.button}
          >
            Sign up with Phone number
          </Button>

          {/* Sign up with Google */}
          <Button
            icon={() => (
              <MaterialCommunityIcons name="google" size={20} color="white" />
            )}
            mode="contained"
            onPress={handleSignUpWithGoogle}
            style={buttonStyles.button}
          >
            Sign up with Google
          </Button>

          {/* Sign up with Facebook */}
          <Button
            icon="facebook"
            mode="contained"
            onPress={handleSignUpWithFacebook}
            style={buttonStyles.button}
          >
            Sign up with Facebook
          </Button>

          {/* Sign up with Apple */}
          <Button
            icon="apple"
            mode="contained"
            onPress={handleSignUpWithApple}
            style={buttonStyles.button}
          >
            Sign up with Apple
          </Button>

          {/* Terms and conditions */}
          <TouchableOpacity
            onPress={() => {
              /* handle terms and conditions press */
            }}
          >
            <Text style={textStyles.fineprint}>
              By signing up or signing in, you agree to our Terms of Use and
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
