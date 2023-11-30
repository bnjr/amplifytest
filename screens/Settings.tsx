import { View, Text, Button } from "react-native";

export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent:"space-evenly" , alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
