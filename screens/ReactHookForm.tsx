import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { containerStyles } from "../styles/containerStyles";
import { textStyles } from "../styles/textStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { StatusBar } from "expo-status-bar";
import YouTubeApp from "./Youtube";
import MomentExamples from "../components/moment-samples";

function ReactHookForm() {
  const { register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    register("firstname", { required: true, minLength: 4 });
    register("lastname", { required: true, minLength: 4 });
    register("email", { required: true, minLength: 4 });
    register("phone", { required: true, pattern: /^\d{10}$/ }); // Simple phone number validation
  }, [register]);

  const onSubmit = (data) => {
    console.log("submitted data", data);
    // Additional submit logic
  };


  return (
    <View style={containerStyles.usablescreen}>
      <StatusBar />
      <Text style={textStyles.displayText}>First Name</Text>
      <TextInput
        style={textStyles.inputText}
        placeholder="First Name"
        onChangeText={(text) =>
          setValue("firstname", text, { shouldValidate: true })
        }
      />

      <Text style={textStyles.displayText}>Last Name</Text>
      <TextInput
        style={textStyles.inputText}
        placeholder="Last Name"
        onChangeText={(text) =>
          setValue("lastname", text, { shouldValidate: true })
        }
      />

      <Text style={textStyles.displayText}>Phone Number</Text>
      <TextInput
        style={textStyles.inputText}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        onChangeText={(text) =>
          setValue("phone", text, { shouldValidate: true })
        }
      />
      <Text style={textStyles.displayText}>Email</Text>
      <TextInput
        style={textStyles.inputText}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) =>
          setValue("phone", text, { shouldValidate: true })
        }
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        mode="elevated"
        style={buttonStyles.button}
      >
        <Text style={textStyles.buttonText}>Update Profile</Text>
      </Button>
    </View>
  );
}
export default ReactHookForm;
