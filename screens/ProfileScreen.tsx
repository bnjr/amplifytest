import { View, Text, Button, SafeAreaView } from "react-native";
import { Searchbar, Card, Avatar } from "react-native-paper";
import { containerStyles } from "../styles/containerStyles";
import { textStyles } from "../styles/textStyles";
import { avatarSize } from "../styles/imageStyles";

export const ProfileScreen = ({ navigation }) => {

    const LeftContent = (props) => (
      <Avatar.Image
        size={avatarSize}
        source={require("../assets/images/dilesh.jpg")}
      />
    );

  return (
    <SafeAreaView style={containerStyles.fullscreen}>
      <View style={containerStyles.usablescreen}>
        <Card
          style={containerStyles.infoCard}
          onPress={() => navigation.navigate("Profile")}
        >
          <Card.Title
            title="Dilesh Bansal"
            left={LeftContent}
          />
        </Card>
        <Card
          style={containerStyles.infoCard}
          onPress={() => navigation.navigate("Profile")}
        >
          <Card.Title title="+1 (904) 521 2973" />
        </Card>
        <Card
          style={containerStyles.infoCard}
          onPress={() => navigation.navigate("Profile")}
        >
          <Card.Title title="Available" />
        </Card>
      </View>
    </SafeAreaView>
  );
};
